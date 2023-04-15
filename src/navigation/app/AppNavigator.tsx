import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsNews } from "../../screen/details";
import { ListNews } from "../../screen/list";
import { AppStackParamList } from "./interface";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Category">
            <Stack.Screen name="Category" component={List} />
            <Stack.Screen name="Details" component={DetailsRevenue} />
        </Stack.Navigator>
    )
}

export default AppNavigator