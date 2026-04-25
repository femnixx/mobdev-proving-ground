import React, { useState, useEffect } from 'react';
import {BackHandler, View, Text, FlatList } from 'react-native';
import Bar from '../components/Bar';

export function List() { 

    interface Post {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }
    const [data, setData] = useState<Post[]>([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(json => setData(json))
    }, []);

    return (
      <View>
        {/* Headers */}
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 1}}>List Screen </Text>
         
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, }}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                />
        </View>
        <Bar />
    </View>
  )
}