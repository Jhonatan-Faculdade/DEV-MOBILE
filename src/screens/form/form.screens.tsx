import { Button, Text, TextInput, View } from "react-native"
import useForm from "./hooks/useForm"


const FormScreen = () => {
    
    const {setName, setEmail, goToResult } = useForm()

    return(
        <View>
            <Text>Tela inicial!</Text>

            <Text>Name</Text>
            <TextInput onChangeText={setName} />

            <Text>Email</Text>
            <TextInput onChangeText={setEmail}/>

            <Button title="Enviar" onPress={goToResult} />
        </View>
    )
}

export default FormScreen