import { ChangeEvent, useCallback, useState } from "react";
import { useGetArticlesQuery } from "../store/articles/articles.api";
import ArticleCard from "../components/ArticleCard";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import debounce from "lodash.debounce";
import Search from "../icons/Search";
import { IArticle } from "../models/interfaces";

const ArticlesMain = () => {
  const { isLoading, isError, data } = useGetArticlesQuery(51);
  const [query, setQuery] = useState<string>("");

  let filteredArticles: IArticle[] | undefined = data || undefined;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  if (query !== "") {
    filteredArticles = data
      ?.filter(
        (item) =>
          item.summary.toLowerCase().includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase())
      )
      .sort((x, y) => {
        return x.title.toLowerCase().includes(query.toLowerCase()) ===
          y.summary.toLowerCase().includes(query.toLowerCase())
          ? -1
          : x
          ? 1
          : 0;
      });
  }

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  return (
    <div className="flex flex-col pt-10 h-screen w-screen gap-6 max-w-[1250px] mx-auto">
      <div>
        <p className="flex text-dark font-bold mt-1 mb-2">Filter by keywords</p>
        <div className="flex w-[600px] h-[50px] border border-solid border-grey shadow-dp-1 rounded px-4 items-center mb-10">
          <Search />
          <input
            type="text"
            className="ml-4 text-[#575757] outline-none w-[336px]"
            placeholder="Search"
            onChange={debouncedChangeHandler}
          />
        </div>
        {filteredArticles?.length! > 0 && (
          <p className="text-dark font-bold">
            Results: {filteredArticles?.length}
          </p>
        )}
        <div className="border border-solid border-grey"></div>
      </div>

      {isLoading && <CircularProgress />}
      {isError && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>
      )}

      <div className="flex flex-wrap justify-center h-screen w-screen gap-6 items-center max-w-[1250px] mx-auto mt-4">
        {data?.length! > 0 &&
          filteredArticles?.map((art) => {
            return <ArticleCard art={art} key={art.id} query={query} />;
          })}
      </div>
    </div>
  );
};

export default ArticlesMain;
