import { Category } from "./Category";

export interface List {
    status: string,
    categories: Category[],
}

//esse também é um modelo para poder buscar e listar os dados na api 