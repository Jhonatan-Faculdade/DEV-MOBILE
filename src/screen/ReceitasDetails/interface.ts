import { RouteProp } from "@react-navigation/native"
import { Details } from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type DetailsReceitasScreenParams = {
    details: Details,
}

export type DetailsReceitaRouteProp = RouteProp<AppStackParamList, 'Details'>