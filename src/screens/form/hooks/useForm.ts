import { useNavigation } from "@react-navigation/native"
import { useFormResult } from "./interface"
import { useState } from "react"
import { AppNavigatorProp } from "../../../navigation/app"

const useForm = (): useFormResult => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigation = useNavigation<AppNavigatorProp>()

    const goToResult = () => {
        navigation.navigate("Result", {name, email})
    }
    return {
        setName,
        setEmail,
        goToResult,
    }
}

export default useForm