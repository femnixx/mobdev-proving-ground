import React from "react";
import { View, Text } from "react-native";
import Bar from "../components/Bar";

export function Profile() { 
    return (
         <View style={{ flex: 1 }}>
        {/* profile heading page */}
        <View>
            <Text>Circle</Text>
            <Text>Name</Text>
            <Text>Occupation</Text>
            <Text>Tags</Text>
        </View>
        {/* Projects/Posts */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <Text>Num</Text>
                <Text>Posts</Text>
            </View>
        </View>
        <View>
            <Text>About</Text>
            <Text>Mobile Development Proving Grounds</Text>
        </View>
        <View>
            <Text>Skills</Text>
            <View>Etc</View>
        </View>
        <Bar />
    </View>
    )
}