"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [query, setQuery] = useState("");
  const [charm, setCharm] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const imageSrc = charm ? "/southern.png" : "/cpk-8bit.png";

  const handleCheckboxChange = (event) => {
    setCharm(event.target.checked);
  };

  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch("/api/setup", {
        method: "POST",
      });
      const json = await result.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }

  const Linkify = ({ children }) => {
    const isUrl = (word) => {
      const urlPattern =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
      return word.match(urlPattern);
    };

    const addMarkup = (word) => {
      return isUrl(word)
        ? `<a target="_blank" class="underline text-amber-100 hover:text-amber-300" href="${word}">${word.slice(
            0,
            20
          )}...</a>`
        : word;
    };

    const words = children.split(" ");
    const formatedWords = words.map((w, i) => addMarkup(w));
    const html = formatedWords.join(" ");
    return <p dangerouslySetInnerHTML={{ __html: html }} />;
  };

  async function sendQuery(event) {
    event.preventDefault();

    if (!query) return;
    setResult("");
    setLoading(true);
    try {
      const result = await fetch("/api/read", {
        method: "POST",
        body: JSON.stringify({ query, charm }),
      });
      const json = await result.json();
      setResult(json.data);
      setLoading(false);
    } catch (err) {
      console.log("err:", err);
      setLoading(false);
    }
  }
  return (
    <main className="flex flex-col items-center justify-between py-24 w-4/6 mx-auto max-w-md">
      <div className="fixed top-0 left-0 z-30 w-full">
        <button
          className="bg-white text-black rounded m-4 p-2 -z-40"
          onClick={() => setIsShowAbout(!isShowAbout)}
        >
          About
        </button>

        {isShowAbout && (
          <div className="p-2 w-full bg-slate-400 h-96">
            <p>Cathy is a chatbot that is trained on our MSR website data.</p>
            <p>
              Because all of our content is in Strapi CMS - we are able to query
              that data and transform it to basic markdown.
            </p>
            <p>
              Then we use that markdown to Create OpenAI embeddings and store it
              in a pinecone index.
            </p>
            <p>
              When you ask Cathy a question, we create an OpenAI ChatGPT query
              embedding of your question.
            </p>
            <p>Then we query pinecone for the top 10 matches.</p>
            <p>
              Then we use OpenAI ChatGPT to generate a response from the matched
              documents.
            </p>
            <br />
            <br />
            <br />
            {/* <button
              onClick={createIndexAndEmbeddings}
              className="bg-white text-black rounded m-4 p-2"
            >
              Create index and embeddings
            </button> */}
          </div>
        )}
      </div>
      <form
        className="mb-3 pt-0 w-full items-center flex flex-col"
        onSubmit={sendQuery}
      >
        <div className="mb-3 pt-0 w-full items-center flex flex-col">
          <div className="mx-auto">
            <img src={imageSrc} width={200} height={200} alt="Hi I am Cathy" />
          </div>

          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Cathy a question."
            className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />

          <label htmlFor="charmCheckbox" className="mt-2">
            <input
              id="charmCheckbox"
              type="checkbox"
              checked={charm}
              onChange={(event) => {
                {
                  handleCheckboxChange(event);
                }
              }}
            />
            <i>BOOST SOUTHERN CHARM</i>
          </label>
        </div>
        <button
          className="px-7 py-1 rounded-2xl bg-white text-black mt-2 mb-2"
          type="submit"
        >
          Ask Cathy
        </button>
      </form>
      {loading && <p>Asking Cathy ...</p>}
      {result && (
        <div>
          <Linkify>{result}</Linkify>
        </div>
      )}
    </main>
  );
}
