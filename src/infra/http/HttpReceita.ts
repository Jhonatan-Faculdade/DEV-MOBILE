import axios from "axios";
import { ApiConfig } from "../../config";

const httpReceita = axios.create({
    baseURL: ApiConfig.RECEITA_API_BASE_URL,  //o httpReceita esta chamando pela base url definida no "APIconfig.ts"
})

/*httpReceita.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${ApiConfig.}`
})*/

export default httpReceita