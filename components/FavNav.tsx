import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const FavNav = ({isOrigin}: {isOrigin: boolean}) => {
    const favourites= [
        {id: "1",
    title: "Home",
description: "PCEA canaan murera parish, Mugutha, Kenya",
icon:'home',
location: {
    lat: -1.1647937,
    lng: 37.0017058,
  },

},
{id: "2",
title: "Work",
description: "Abc Place Nairobi, Waiyaki Way, Nairobi, Kenya",
icon:'briefcase',
location:  {
    lat: -1.2596849,
    lng: 36.777006,}

}
    ]
    const dispatch=useDispatch()
    const navigation=useNavigation()
  return (
    <SafeAreaView className='mt-5'>
  <FlatList data={favourites} keyExtractor={item=>item.id} ItemSeparatorComponent={()=> (<View className='border border-gray-200'>

  </View>)} renderItem={({item})=> (

  <TouchableOpacity className='py-3    my-2 mx-auto rounded-md w-96'   onPress={isOrigin? ()=>{dispatch(setOrigin({location:item.location, description:item.description})); navigation.navigate("MapScreen")}: ()=>{dispatch(setDestination({location:item.location, description:item.description}));   } } >
          
           <View className='flex flex-row justify-between gap-3 items-center px-5 '>
        <Icon
         style={{padding:8, backgroundColor: "grey", borderRadius:30}}
         
           name={item.icon}
           color="white"
           type="simple-line-icon"
           />
          <View>
          <Text className='font-semibold'>{item.title}</Text>
          <Text className=' w-80'>{item.description}</Text>
          </View>
        </View>
     </TouchableOpacity>


  )}/>
    </SafeAreaView>
  )
}

export default FavNav