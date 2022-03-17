import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Circle = ({ width = null, children = null }) => {
    return <View style={[styles.circle, { width: width }]}>{children}</View>;
};

const styles = StyleSheet.create({
    circle: {
        flex: 1,
        flexDirection: 'row',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#e9967a',
    },
});