import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DetailsNewsScreenParams } from "../../screen/details"

export type AppStackParamList = {
    List: undefined,
    Details: DetailsNewsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
