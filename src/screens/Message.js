import React from 'react'
import { View, Text, Image } from 'react-native';
import { MESSAGES } from '../api/User';

const Message = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', borderTopWidth: 0.5, borderColor: '#8599a9', padding: 5, paddingVertical: 10, gap: 20 }}>
      <View style={{ gap: 15 }}>
        {(MESSAGES.reverse()).map((item, index) => {
          return (
            <View
              style={{ flexDirection: 'row', paddingHorizontal: 10, gap: 15, alignItems: 'center' }}
              key={index}
            >
              <View style={{ width: 55, height: 55, borderRadius: 55 }}>
                <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%', aspectRatio: 1 / 1, borderRadius: 500 }} />
              </View>
              <View>
                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center', }}>
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  <Text style={{ color: '#45535d', fontSize: 15 }}>@{item.username}</Text>
                  <View style={{ borderRadius: 50, height: 3, width: 3, backgroundColor: '#45535d' }} />
                  <Text style={{ color: '#45535d' }}>{item.time}</Text>
                </View>
                <View>
                  <Text style={{ color: '#45535d' }}>{item.message}</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  );
}

export default Message