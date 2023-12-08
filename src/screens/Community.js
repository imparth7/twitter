import React from 'react'
import { View, Text, Image } from 'react-native';
import { COMMUNITIES } from '../api/User';

const Community = ({ navigation }) => {

  const TRANFORMX = -7;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', borderTopWidth: 0.5, borderColor: '#8599a9', padding: 5, paddingVertical: 10, gap: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Discover new Communities</Text>
      <View style={{ gap: 15, paddingHorizontal: 10 }}>
        {COMMUNITIES.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', gap: 15 }}>
              <View style={{ width: 100, height: 100 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: '100%', height: '100%', aspectRatio: 1 / 1, borderRadius: 15 }}
                />
              </View>
              <View style={{ justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
                  <Text style={{ fontSize: 16, color: '#45535d' }}>{item.totalMembers.toLocaleString('en-US')} Members</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  {(item.members).map((img, index) => {
                    return (
                      <View key={index} style={{ width: 35, height: 35, borderWidth: 2, borderColor: '#FFF', borderRadius: 35, transform: [{ translateX: index * TRANFORMX }], zIndex: -index, overflow: 'hidden', backgroundColor: '#EFEFEF' }}>
                        <Image source={{ uri: img }} style={{ width: '100%', height: '100%', aspectRatio: 1 / 1 }} />
                      </View>
                    )
                  })}
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  );
}

export default Community