// esse service 

import { ApiConfig } from "../../config";
import httpReceita from "../../infra/http/HttpReceita";
import { List } from "../model";

export const getCategory = async (): Promise<List[]> => {
    const response = await httpReceita.get<List>(ApiConfig.GET_LIST_CATEGORY)
    return response.data.categories
}