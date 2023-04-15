import { RouteProp } from "@react-navigation/native"
import { Category } from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type CategoryReceitasScreenParams = {
    category: Category,
}

export type CategoryReceitaRouteProp = RouteProp<AppStackParamList, 'Categories'>