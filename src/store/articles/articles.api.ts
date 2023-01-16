import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "./../../models/interfaces";

export const articlesApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spaceflightnewsapi.net/v3/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getArticles: build.query<IArticle[], number>({
      query: (limit: number = 100) => ({
        url: `articles?`,
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: IArticle[]) => response,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
