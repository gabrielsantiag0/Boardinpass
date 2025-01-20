import { StyleSheet } from "react-native";

import { colors } from "@/Styles/colors";
import { fontFamily } from "@/Styles/fontFamily";

export const styles = StyleSheet.create({

    label: {
        color: colors.gray[400],
        fontSize: 12,
        textTransform: "uppercase",
        fontFamily: fontFamily.regular
    },
    value: {
        color: colors.black,
        fontSize: 16,
        fontFamily: fontFamily.medium,
    },

});