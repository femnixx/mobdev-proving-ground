import React from "react";
import { View, Text } from "react-native";
import Bar from "../components/Bar";

export function Profile() { 
    <View style={{ flex: 1 }}>
        {/* profile heading page */}
        <View>
            <View>Circle</View>
            <View>Name</View>
            <View>Occupation</View>
            <View>Tags</View>
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
}