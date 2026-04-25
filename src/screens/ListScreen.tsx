import React, { useState, useEffect } from 'react';
import {BackHandler, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Bar from '../components/Bar';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export function List() { 
    const navigation = useNavigation<NavProp>();

    interface Post {
        userId: number,
        id: number,
        title: string,
        body: string,
        completed: boolean
    }
    const [data, setData] = useState<Post[]>([]);
    type NavProp = NativeStackNavigationProp<RootStackParamList>;
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts/")
        .then(response => response.json())
        .then(json => setData(json))
    }, []);

     return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Screen</Text>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PostDetail', { id: item.id })}
            style={{ padding: 10, borderBottomWidth: 1 }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Bar />
    </View>
  );
}