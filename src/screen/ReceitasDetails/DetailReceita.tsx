import { useRoute } from "@react-navigation/native"
import { DetailsReceitaRouteProp } from "./interface"
import { Linking, View } from "react-native"


const DetailReceitas = () => {
    const {params: {details}} = useRoute<DetailsReceitaRouteProp>()
    
    const openCategory = () => {
        Linking.openURL(details.)
    }

    return (
        <View>
            <View>
                {

                }
            </View>

            
        </View>
    )
}

export default DetailReceitas