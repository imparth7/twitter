import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Iconify } from 'react-native-iconify'
import { Posts, USER } from '../api/User'

const UserPosts = () => {
  return (
    <ScrollView style={{ backgroundColor: '#FFF' }} overScrollMode='never'>
      <View style={{ gap: 15, paddingBottom: 60 }}>
        {(Posts.reverse()).map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', padding: 13, gap: 10, borderBottomWidth: 1, borderColor: '#ededed' }}>
              <View style={{ flex: 0.15 }}>
                <Image source={{ uri: USER.image }}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </View>
              <View style={{ flex: 0.85, gap: 10 }}>
                <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center', }}>
                  <Text style={{ fontWeight: '700', fontSize: 17 }}>{USER.name}</Text>
                  <Text style={{ color: '#45535d', fontSize: 15 }}>@{USER.username}</Text>
                  <View style={{ borderRadius: 50, height: 3, width: 3, backgroundColor: '#45535d' }} />
                  <Text style={{ color: '#45535d' }}>{item.date} {item.year.slice(-2)}</Text>
                </View>
                <View style={{ gap: 7 }}>
                  <Text style={{ fontSize: 15.5 }}>{item.detail}</Text>
                  <View style={{ width: '100%', height: 'auto', flexDirection: 'row', borderRadius: 10, gap: 10, overflow: 'hidden' }}>
                    {item.image.length == 1 ?
                      <Image source={{ uri: item.image[0].img }} style={{ width: '100%', height: 'auto', aspectRatio: item.image[0].aspectRatio }} />
                      :
                      <View style={{ width: '100%', height: 'auto', borderRadius: 10, gap: 2, overflow: 'hidden', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                        {(item.image).map((img, ind) => {
                          return (
                            <View key={ind} style={{ width: '49.5%', height: 'auto', }}>
                              <Image source={{ uri: img }} style={{ width: '100%', height: 'auto', aspectRatio: 3 / 2 }} />
                            </View>
                          )
                        })}
                      </View>
                    }
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Iconify icon='iconamoon:comment-light' size={22} color={'#8599a9'} />
                    <Text style={{ color: '#8599a9', fontSize: 16 }}>{item.comments == null ? null : item.comments.length}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Iconify icon='system-uicons:retweet' size={22} color={'#8599a9'} />
                    <Text style={{ color: '#8599a9', fontSize: 16 }}>{item.retweet}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Iconify icon='ph:heart' size={22} color={'#8599a9'} />
                    <Text style={{ color: '#8599a9', fontSize: 16 }}>{item.like}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Iconify icon='uil:analytics' size={22} color={'#8599a9'} />
                    <Text style={{ color: '#8599a9', fontSize: 16 }}>{item.view}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Iconify icon='iconamoon:bookmark-light' size={22} color={'#8599a9'} />
                    <Iconify icon='ri:share-line' size={22} color={'#8599a9'} />
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default UserPosts