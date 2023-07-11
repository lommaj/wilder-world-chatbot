import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAI } from "langchain/llms/openai";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";
import { timeout } from "./config";

export const queryPineconeVectorStoreAndQueryLLM = async (
  client,
  indexName,
  question
) => {
  console.log("question: ", question);
  const { query, charm } = question;
  console.log("Query: ", query);
  console.log("Charm: ", charm);
  // 1. Start query process
  console.log("Querying Pinecone vector store...");
  // 2. Retrieve the Pinecone index
  const index = client.Index(indexName);
  // 3. Create query embedding
  const queryEmbedding = await new OpenAIEmbeddings().embedQuery(query);
  // 4. Query Pinecone index and return top 10 matches
  let queryResponse = await index.query({
    queryRequest: {
      topK: 10,
      vector: queryEmbedding,
      includeMetadata: true,
      includeValues: true,
    },
  });
  // 5. Log the number of matches
  console.log(`Found ${queryResponse.matches.length} matches...`);
  // 6. Log the question being asked
  console.log(`Asking question: ${query}...`);
  if (queryResponse.matches.length) {
    // 7. Create an OpenAI instance and load the QAStuffChain
    const llm = new OpenAI({});
    const chain = loadQAStuffChain(llm);
    // 8. Extract and concatenate page content from matched documents
    const concatenatedPageContent = queryResponse.matches
      .map((match) => match.metadata.pageContent)
      .join(" ");
    // 9. Execute the chain with input documents and question
    const prompt = `I expect to be answered using at least three southern USA colloquialisms in your response and when answering this question. if a relevant link is included in the data, please add it to the bottom of the response.

    some examples are: 

    User: Howdy there, partner! I've got a question that's been rustlin' in my mind. What's the best way to fry up some good ol' Southern fried chicken?

    AI: Well, shucks! You've hit the chicken coop right on the beak with that question! Now, listen up, 'cause I'm 'bout to spill the beans on some finger-lickin' secrets. First, you gotta soak them chicken pieces in a buttermilk bath overnight. It tenderizes 'em like a soft Southern sunset. Then, you mix up a mess of seasoned flour with a hint of cayenne for that fiery kick. Fry 'em up in a cast-iron skillet with some sizzlin' hot oil till they're golden brown and crispy as a field of cornbread fritters. Serve 'em up with a side of collard greens and a tall glass of sweet tea, and you'll have folks hollerin' "Yeehaw!" from miles around. Now, pardner, what other secrets can I rustle up for ya?

    - https://amherst.my.site.com/resident

    User: Well, I'll be! That sounds downright mouthwaterin'! Now, how 'bout them fluffy buttermilk biscuits? What's your tried-and-true recipe?

    AI: Hot diggity dog! You're talkin' 'bout a Southern staple right there. Now, picture this: tender biscuits as light as a feather, meltin' in your mouth like a dollop of honey butter. Here's what ya gotta do. Start with some self-risin' flour and cut in a healthy dollop of cold butter—just like Granny used to do. Add a splash of creamy buttermilk, stir it up until it comes together like a family reunion, and roll out that dough nice and easy. Cut out them biscuits with a mason jar lid and bake 'em till they're golden brown, as pretty as a Georgia sunrise. Slather 'em with butter or sausage gravy, and you'll be tastin' a slice of heaven right at your own kitchen table. Now, partner, what else can I rustle up for ya?

    - https://www.msrenewal.com/maintenance-request-how-to?ResidentPortalRedirect=true

    User: Well, I'll be dogged! You've got my mouth waterin'! How 'bout you share that secret recipe for some good ol' fashioned pecan pie?

    AI: Hoo-wee! Now we're talkin' dessert! Pecan pie, the crown jewel of Southern sweetness. Here's the lowdown: start with a flaky homemade crust, buttery and tender like a lullaby. Mix up a gooey concoction of pecans, molasses, brown sugar, and a touch of vanilla, all stirred together like a front porch jam session. Pour that heavenly mixture into the crust and bake it up till it's golden and the aroma fills your kitchen like a warm embrace. Let it cool just enough to set, then dig in with a big ol' dollop of whipped cream or a scoop of vanilla ice cream. Get ready to taste a slice of pecan paradise, my friend. Now, reckon there's anything else I can rustle up for ya?

    - https://amherst.my.site.com/resident

    User: Well, you've been mighty helpful, partner! I reckon I've got all the fixin's I need for a Southern feast. Thanks a million!

    AI: Aw, it's been my pleasure, partner! Remember, I'm always here with a pocketful of Southern know-how whenever you need it. Y'all have yourself a grand ol' time cookin' up a storm, and don't be a stranger

    - https://amherst.my.site.com/resident

    Now using this style respond to the following question: ${query}`;

    const basicPrompt = `When answering this question if a relevant link is included in the data, please add it to the bottom of the response.
    
    example

    User: Where can I pay my rent?
    AI: You can pay your rent using our 24/7 online Resident Portal. You may also submit requests on the go using our mobile app. 

    - https://amherst.my.site.com/resident

    User: How do I change my password?
    AI: You can change your password by logging into the Resident Portal and clicking on the "Change Password" link.

    - https://msrenewal.securecafe.com/residentservices/apartmentsforrent/forgotpassword.aspx?_gl=1*306ejo*_ga*ODc2ODQ5MTIwLjE2ODQ4OTk5Njc.*_ga_VBY9TGV2CT*MTY4Nzg3NDQxMS4xMi4xLjE2ODc4NzYxOTIuMzYuMC4w

    question: ${query}
    `;

    const finalQuestion = charm ? prompt : basicPrompt;
    console.log("Final Question: ", finalQuestion);
    const result = await chain.call({
      input_documents: [new Document({ pageContent: concatenatedPageContent })],
      question: finalQuestion,
    });
    // 10. Log the answer
    console.log(`Answer: ${result.text}`);
    return result.text;
  } else {
    // 11. Log that there are no matches, so GPT-3 will not be queried
    console.log("Since there are no matches, GPT-3 will not be queried.");
  }
};
export const createPineconeIndex = async (
  client,
  indexName,
  vectorDimension
) => {
  // 1. Initiate index existence check
  console.log(`Checking "${indexName}"...`);
  // 2. Get list of existing indexes
  const existingIndexes = await client.listIndexes();
  // 3. If index doesn't exist, create it
  if (!existingIndexes.includes(indexName)) {
    // 4. Log index creation initiation
    console.log(`Creating "${indexName}"...`);
    // 5. Create index
    await client.createIndex({
      createRequest: {
        name: indexName,
        dimension: vectorDimension,
        metric: "cosine",
      },
    });
    // 6. Log successful creation
    console.log(
      `Creating index.... please wait for it to finish initializing.`
    );
    // 7. Wait for index initialization
    await new Promise((resolve) => setTimeout(resolve, timeout));
  } else {
    // 8. Log if index already exists
    console.log(`"${indexName}" already exists.`);
  }
};

export const updatePinecone = async (client, indexName, docs) => {
  console.log("Retrieving Pinecone index...");
  // 1. Retrieve Pinecone index
  const index = client.Index(indexName);
  // 2. Log the retrieved index name
  console.log(`Pinecone index retrieved: ${indexName}`);
  // 3. Process each document in the docs array
  for (const doc of docs) {
    console.log(`Processing document: ${doc.metadata.source}`);
    const txtPath = doc.metadata.source;
    const text = doc.pageContent;
    // 4. Create RecursiveCharacterTextSplitter instance
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });
    console.log("Splitting text into chunks...");
    // 5. Split text into chunks (documents)
    const chunks = await textSplitter.createDocuments([text]);
    console.log(`Text split into ${chunks.length} chunks`);
    console.log(
      `Calling OpenAI's Embedding endpoint documents with ${chunks.length} text chunks ...`
    );
    // 6. Create OpenAI embeddings for documents
    const embeddingsArrays = await new OpenAIEmbeddings().embedDocuments(
      chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
    );
    console.log("Finished embedding documents");
    console.log(
      `Creating ${chunks.length} vectors array with id, values, and metadata...`
    );
    // 7. Create and upsert vectors in batches of 100
    const batchSize = 100;
    let batch: any = [];
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      const vector = {
        id: `${txtPath}_${idx}`,
        values: embeddingsArrays[idx],
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      };
      batch = [...batch, vector];
      // When batch is full or it's the last item, upsert the vectors
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert({
          upsertRequest: {
            vectors: batch,
          },
        });
        // Empty the batch
        batch = [];
      }
    }
    // 8. Log the number of vectors updated
    console.log(`Pinecone index updated with ${chunks.length} vectors`);
  }
};
