// esse service 

import { ApiConfig } from "../../config";
import httpReceita from "../../infra/http/HttpReceita";
import { Category, List } from "../model";

export const getCategory = async (): Promise<Category[]> => {
    const response = await httpReceita.get<List>(ApiConfig.GET_TOP_LIST)
    return response.data.categories
}