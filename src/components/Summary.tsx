import { FC, useEffect, useState } from "react";
import highlightWords, { HighlightWords } from "highlight-words";
import { SummaryProps } from "../models/interfaces";

const Summary: FC<SummaryProps> = ({ summary, query }) => {
  const [chunksText, setChunksText] = useState<HighlightWords.Chunk[]>([
    { key: "root", text: "", match: false },
  ]);

  let text = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;
  const matchExactly = false;

  useEffect(() => {
    setChunksText(
      highlightWords({
        text,
        query,
        matchExactly,
      })
    );
  }, [query, matchExactly, setChunksText]);

  return (
    <p>
      {chunksText.map(({ key, text, match }) => {
        return (
          <span key={key} className={`${match ? "bg-[#ffff19]" : ""}`}>
            {text}
          </span>
        );
      })}
    </p>
  );
};

export default Summary;
