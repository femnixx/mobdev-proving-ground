import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function Bar() { 

    const navigation = useNavigation<NavProp>();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1}}>
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('List')}>
                    <Text>Home</Text>
                     <Text>Posts</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}>
                    <Text>Person</Text>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}