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
    interface User { 
        id: number,
        name: string,
        username: string,
        email: string
    }
    const [data, setData] = useState<Post[]>([]);
    const [user, setUser] = useState<User[]>([]);
    type NavProp = NativeStackNavigationProp<RootStackParamList>;
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts/")
        .then(response => response.json())
        .then(json => setData(json));
        
        fetch("http://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(json => setUser(json));
    }, []);

     return (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#f5f5f5'
    }}>
      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#1a1a1a',
        paddingBottom: 8
    }}>
        Posts
    </Text>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
            const author = user?.find(u => u.id === item.userId);
            return (
          <TouchableOpacity
            onPress={() => navigation.navigate('PostDetail', { id: item.id })}
            style={{  
                backgroundColor: 'white',
                borderRadius: 10, 
                padding: 16,
                marginBottom: 10, 
                shadowColor: '#000',
                shadowOpacity: 0.04, 
                shadowRadius: 6,
                elevation: 2
            }}
          >
            <Text style={{
                fontSize: 15,
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: 6,
            }}>
                {item.title}
            </Text>
            <Text style={{
                paddingTop: 12
            }}>
                Made by: {author?.name ?? 'UNknown'}
            </Text>
          </TouchableOpacity>
     )}}
      />
      <Bar />
    </View>
  );
}