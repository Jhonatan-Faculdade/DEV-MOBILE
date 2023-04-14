import { AppStackParamList } from "./Interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="List" component={ListNews}/>
            <Stack.Screen name="Details" component={DetailsNews}/>
        </Stack.Navigator>>
    )
}

export default AppNavigator