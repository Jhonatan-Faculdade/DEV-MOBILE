import { Text, View } from "react-native"
import { ContactItemProps } from "./interface"
import Style from "./style"

const ContactItem = ({contact}: ContactItemProps) => {
    return (
        <View style={Style.container}>
            <Text style={Style.title}>{contact.name}</Text>
            <Text>{contact.email}</Text>
        </View>
    )
}
export default ContactItem