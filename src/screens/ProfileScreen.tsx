import React from "react";
import { View, Text, ScrollView } from "react-native";
import Bar from "../components/Bar";

export function Profile() {
  return (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#f5f5f5' 
    }}>
      <ScrollView>
        <View style={{ 
            backgroundColor: '#64c7ff', 
            paddingVertical: 40, 
            alignItems: 'center' 
        }}>
          <View style={{ 
            width: 80, 
            height: 80, 
            borderRadius: 40, 
            backgroundColor: 'rgba(255,255,255,0.3)', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 12 
        }}>
            <Text style={{ fontSize: 36 }}>👤</Text>
          </View>

          <Text style={{ 
            fontSize: 22, 
            fontWeight: 'bold', 
            color: 'white' 
            }}>
                Your Name
            </Text>
          <Text style={{ 
            fontSize: 14, 
            color: 'rgba(255,255,255,0.75)', 
            marginTop: 4, 
            textAlign: 'center', 
            paddingHorizontal: 20 
        }}>
            Mobile Developer | Writer | Content Creator
          </Text>

        <View style={{ 
            flexDirection: 'row', 
            gap: 8, 
            marginTop: 12 
        }}>
            {['React Native', 'TypeScript'].map(tag => (
              <View key={tag} style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                borderRadius: 20, 
                paddingHorizontal: 12, 
                paddingVertical: 4 
            }}>
                <Text style={{ 
                    color: 'white', 
                    fontSize: 12 
                }}>
                    {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ 
            flexDirection: 'row', 
            backgroundColor: 'white', 
            justifyContent: 'space-around', 
            paddingVertical: 20, 
            borderBottomWidth: 1, 
            borderBottomColor: '#eee' 
        }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ 
                fontSize: 22, 
                fontWeight: 'bold', 
                color: '#1a1a1a' 
            }}>
                12
            </Text>
            <Text style={{ 
                fontSize: 12, 
                color: '#888', 
                marginTop: 2 
            }}>
                Posts
            </Text>
          </View>
          <View style={{ 
            width: 1, 
            backgroundColor: '#eee' }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ 
                fontSize: 22, 
                fontWeight: 'bold', 
                color: '#1a1a1a' 
            }}>
                4
            </Text>
            <Text style={{ 
                fontSize: 12, 
                color: '#888', 
                marginTop: 2 
            }}>
                Projects
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
            color: '#1a1a1a', 
            marginBottom: 8 
            }}>
                About
            </Text>
          <Text style={{ 
            color: '#555', 
            lineHeight: 22 
            }}>
                Mobile Development Proving Grounds
            </Text>
        </View>

        <View style={{ 
            backgroundColor: 'white', 
            marginHorizontal: 16, 
            borderRadius: 12, 
            padding: 16 
            }}>
          <Text style={{ 
            fontSize: 16, 
            fontWeight: '700', 
            color: '#1a1a1a', 
            marginBottom: 12 
            }}>
                Skills
            </Text>
          <View style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: 8
             }}>
            {['React Native', 'TypeScript', 'JavaScript', 'REST APIs'].map(skill => (
              <View key={skill} style={{ 
                backgroundColor: '#e8f5ff', 
                borderRadius: 20, 
                paddingHorizontal: 14, 
                paddingVertical: 6 
            }}>
                <Text style={{ 
                    color: '#64c7ff', 
                    fontSize: 13, 
                    fontWeight: '600'
                }}>
                    {skill}
                </Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
      <Bar />
    </View>
  );
}