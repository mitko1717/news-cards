import { FC, useEffect, useState } from "react";
import highlightWords, { HighlightWords } from "highlight-words";
import { TitleProps } from "../models/interfaces";

const Title: FC<TitleProps> = ({ title, query }) => {
  const [chunksTitle, setChunksTitle] = useState<HighlightWords.Chunk[]>([
    { key: "root", text: "", match: false },
  ]);

  let text = title;
  const matchExactly = false;

  useEffect(() => {
    setChunksTitle(
      highlightWords({
        text,
        query,
        matchExactly,
      })
    );
  }, [query, matchExactly, setChunksTitle]);

  return (
    <h2 className="w-full h-[58px] text-dark text-2xl mb-12 mt-2">
      {chunksTitle.map(({ key, text, match }) => (
        <span key={key} className={`${match ? "bg-[#ffff19]" : ""}`}>
          {text}
        </span>
      ))}
    </h2>
  );
};

export default Title;
