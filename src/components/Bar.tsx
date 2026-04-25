import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { List } from "../screens/ListScreen";
import { Profile } from "../screens/ProfileScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Bar() { 

    export type RootStackParamList = { 
        List: undefined;
        Profile: undefined;
    }
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1}}>
            <View style={{ alignItems: 'center'}}>
                      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('List')}></TouchableOpacity>
                <Text>Home</Text>
                <Text>Posts</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
                      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}></TouchableOpacity>
                <Text>Person</Text>
                <Text>Profile</Text>
            </View>
        </View>
    )
}