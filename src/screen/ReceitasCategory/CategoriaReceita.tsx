import { useRoute } from "@react-navigation/native"
import { CategoryReceitaRouteProp } from "./interface"
import { Linking, View } from "react-native"

const CategoriaReceitas = () => {
    const {params: {category}} = useRoute<CategoryReceitaRouteProp>()
    
    const openCategory = () => {
        Linking.openURL(category.idCategory)
    }

    return (
        <View>
            <View>
                {
                    category.strCategoryThumb
                }
            </View>

            
        </View>
    )
}

export default CategoriaReceitas