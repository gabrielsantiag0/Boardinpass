import { View, Text } from "react-native";

import { styles } from "./styles";

export function Flitght(props: {label: string, value: string}) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
};