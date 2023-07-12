"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CallingCard } from "@/components/ui/calling-card";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const imageSrc = "/cpk-8bit.png";

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
        body: JSON.stringify({ query }),
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
        <CallingCard />
      </div>
      <form
        className="mb-3 pt-0 w-full items-center flex flex-col"
        onSubmit={sendQuery}
      >
        <div className="mb-3 pt-0 w-full items-center flex flex-col">
          <div className="mx-auto">
            <Image
              src={imageSrc}
              width={200}
              height={200}
              alt="Hi I am Frank"
            />
          </div>

          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Frank a question."
            className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <Button type="submit">Ask Frank</Button>
      </form>
      {loading && <p>Asking Frank ...</p>}
      {result && (
        <div>
          <Linkify>{result}</Linkify>
        </div>
      )}
    </main>
  );
}
