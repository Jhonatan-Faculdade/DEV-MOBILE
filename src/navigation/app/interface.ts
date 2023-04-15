import { NativeStackNavigationProp } from "@react-navigation/native-stack"


import { List } from "../../data/model"
import { CategoryReceitasScreenParams } from "../../screen/ReceitasList"

export type AppStackParamList = {
    List: undefined,
    Details: CategoryReceitasScreenParams,
    Categories: undefined,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
