import { useRoute, RouteProp } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { RootStackParamList } from "../../App";

export default function PostDetail() {
    const route = useRoute<RouteProp<RootStackParamList, 'PostDetail'>>();
    const { id } = route.params;
    const [post, setPost] = useState<any>(null); 
    const [user, setUser] = useState<any>(null);

    useEffect(() => { 
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => { 
                setPost(post);
                return fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            })
            .then(res => res.json())
            .then(user => setUser(user));
    }, [id]);

    if (!post || !user) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: '#888' }}>Loading...</Text>
        </View>
    )
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5'}}>
            <View style={{
                    flex: 1, 
                    padding: 20, 
                    backgroundColor: 'white', 
                    margin: 16, 
                    borderRadius: 12, 
                    paddingBlock: 20, 
                    shadowColor: '#000', 
                    shadowOpacity: 0.05, 
                    shadowRadius: 8, 
                    elevation: 6
                }}>
                <Text style={{ 
                    fontSize: 18, 
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    marginBottom: 12,
                }}>
                        {post.title}
                    </Text>
                <Text style={{ 
                    fontSize: 15,
                    color: '#444',
                    lineHeight: 22,
                    marginBottom: 20,
                    flexWrap: 'wrap' 
                }}>
                    {post.body}
                </Text>
                <Text>Made by: {user?.name}</Text>
            </View>
        </ScrollView>
    )
}