import { ApiConfig } from "../../config/api";
import { httpClient } from "../../infra/http";
import { Article, HeadLine } from "../model";

export const getHeadlines = async (): Promise<Article[]> => {
    const response = await httpClient.get<HeadLine>(ApiConfig.GET_TOP_HEADLINES)
    return response.data.articles
}
