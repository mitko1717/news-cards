import { FC } from "react";
import { useActions } from "../hooks/actions";
import DateIcon from "../icons/Date";
import ArrowRight from "../icons/ArrowRight";
import { IArticle } from "../models/interfaces";
import { Link } from "react-router-dom";
import Summary from "./Summary";
import Title from "./Title";
import { getDate } from "../hooks/getDate";

export type ArticleCardProps = {
  art: IArticle;
  query: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ art, query }) => {
  const { setArticle } = useActions();
  const { title, summary } = art;

  const openArticle = (article: IArticle) => {
    setArticle(article);
  };

  let publishedAt = getDate(art.publishedAt)

  return (
    <div className="flex flex-col w-[400px] h-[530px] rounded border-solid border border-gray-300 shadow-dp-1">
      <img className="w-full h-[217px]" src={art.imageUrl} alt={title} />
      <div className="flex flex-col p-6 h-[313px]">
        <div className="text-sm text-dark opacity-60 gap-x-2 flex">
          <DateIcon />
          <span>{publishedAt}</span>
        </div>
        <Title title={title} query={query} />
        <Summary summary={summary} query={query} />
        <Link to="/article">
          <p
            className="flex items-center gap-x-2 text-dark font-bold mt-3 cursor-pointer"
            onClick={() => openArticle(art)}
          >
            Read more <ArrowRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
