import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Bar from '../components/Bar';
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function UserProfile() {
    const route = useRoute<RouteProp<RootStackParamList, 'UserProfile'>>(); 
    const { userId } = route.params;
    const [user, setUser] = useState<any>(null);
    const [posts, setPosts] = useState<any[]>([]);

    type navProp = NativeStackNavigationProp<RootStackParamList>; 
    const navigation = useNavigation<navProp>();
    
    useEffect(() => { 
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(json => setUser(json));

        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(json => setPosts(json));
    }, [userId]);

    if (!user) return <Text>Loading Profile...</Text>
    return (
        <View style={{
            flex: 1, backgroundColor: '#f5f5f5'
        }}>
            <ScrollView>
                <View style={{
                    backgroundColor: '#6c47ff',
                    paddingVertical: 40,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: 'rgba(255,255,255,0.3',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 12
                    }}>
                        <Text style={{
                            fontSize: 36,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            { user.name[0] }
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'rgba(255,255,255,0.75)',
                        marginTop: 4
                    }}>
                        {user.email}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'white'
                    }}>
                        {user.company.name}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    paddingVertical: 20
                }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            outlineColor: '#1a1a1a'
                        }}>
                            {posts.length}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#888'
                        }}>
                            Posts
                        </Text>
                    </View>
                     <View style={{alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            outlineColor: '#1a1a1a'
                        }}>
                            {user.phone}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#888'
                        }}>
                            Phone
                        </Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    margin: 16,
                    borderRadius: 12,
                    padding: 16
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        marginBottom: 8
                    }}>
                        Company
                    </Text>
                    <Text style={{ color: '#555' }}>{user.company.name}</Text>
                    <Text style={{ color: '#888'}}>"{user.company.bs}"</Text>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    margin: 16,
                    marginTop: 0,
                    borderRadius: 12,
                    padding: 16
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        marginBottom: 12,
                    }}>
                        Posts
                    </Text>
                    {posts.map(post => (
                        <View key={post.id} style={{
                            paddingVertical: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#eee'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                color: '#1a1a1a'
                            }}>
                                {post.title}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { id: post.id})}>
                                <Text style={{
                                    color: '#6c47ff',
                                    fontSize: 13,
                                    marginTop: 4
                                }}>
                                    Go to post →
                                </Text>
                            </TouchableOpacity>
                    </View>
                    ))}
                    </View>
            </ScrollView>
            <Bar />
        </View>
    )
}