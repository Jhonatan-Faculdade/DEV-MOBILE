import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { SecondScreenRouteProp } from "./interface"

const SecondScreen = () => {
    const {params} = useRoute<SecondScreenRouteProp>()

    return(
        <View>
            <Text>This is the second screen!</Text>
            <Text>{params.message}</Text>
        </View>
    )
}

export default SecondScreen