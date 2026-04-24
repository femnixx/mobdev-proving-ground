import React from "react";
import { View, Text } from "react-native";

export default function Bar() { 
    return (
        <View>
    <View style={{ flex: 1 }}>
        {/* Elements */}
        <View>
            <Text>Image</Text>
            <Text>Posts</Text>
        </View>
        <View>
            <Text>Profile</Text>
            <Text>Profile</Text>
        </View>
    </View>
</View>
    )
}