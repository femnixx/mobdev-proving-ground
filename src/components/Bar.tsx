import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function Bar() { 

    const route = useRoute();
    const navigation = useNavigation<NavProp>();

    const tabs = [
        { name: 'List' as const, label: 'Posts', icon: '📋'}, // schedule too fast to make own logo 
        { name: 'Profile' as const, label: 'Profile', icon: '👤'}
    ]
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#eee',
        }}>
           {tabs.map(tab => {
            const isActive = route.name === tab.name;
            return (
                <TouchableOpacity key={tab.name} onPress={() => navigation.navigate(tab.name)} style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingVertical: 10
                }}>
                    <Text style={{ fontSize: 22}}>{tab.icon}</Text>
                    <Text style={{
                        fontSize: 11,
                        marginTop: 2,
                        fontWeight: isActive ? '700' : '400',
                        color: isActive ? '#6c47ff' : '#888'
                    }}>
                        {tab.label}
                    </Text>
                    {isActive && (
                        <View style={{
                            width: 4,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: '#6c47ff',
                            marginTop: 3
                        }} />
                    )}
                </TouchableOpacity>
            )
           })}
        </View>
    )
}