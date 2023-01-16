import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import ArrowLeft from "../icons/ArrowLeft";

const Article = () => {
  const { openedArticle } = useAppSelector((state) => state.article);

  if (openedArticle === null) return <p className="text-center">No item.</p>;

  return (
    <div className="flex w-full flex-col">
      <img
        className="w-full h-[245px] object-cover object-center"
        src={openedArticle.imageUrl}
        alt={openedArticle.title}
      />
      <div className="w-[1290px] h-[1000px] border border-solid border-grey shadow-dp-1 mt-[-100px] z-10 mx-auto bg-white">
        <h2 className="mx-auto text-2xl	text-center text-dark my-9">
          {openedArticle.title}
        </h2>
        <div className="w-[1140px] h-[887px] mx-auto text-black text-lg">
          <p className="font-bold">
            Published at: {new Date(openedArticle.publishedAt).toLocaleString()}
          </p>
          <a className="cursor-poiner italic" href={openedArticle.newsSite}>
            NEWS LINK
          </a>
          <p className="mt-8">{openedArticle.summary}</p>
        </div>
      </div>
      <Link to="/">
        <p className="flex items-center gap-x-2 text-dark font-bold mt-8 mb-10 ml-[150px]">
          <ArrowLeft /> Back to homepage
        </p>
      </Link>
    </div>
  );
};

export default Article;
