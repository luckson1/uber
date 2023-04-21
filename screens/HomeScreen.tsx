import { View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import FavNav from "../components/FavNav";

export default function HomeScreen() {
  const dispatch=useDispatch()

  return (
    <SafeAreaView className="bg-white h-screen ">
   <View className="p-5 flex">
   <Image source={{uri: 'https://logos-world.net/imageup/Uber/Uber-Logo-PNG5.png'}} style={{
      width:100,
      height:100,
      resizeMode:"contain"
     }}/>
     <GooglePlacesAutocomplete
    nearbyPlacesAPI="GooglePlacesSearch"
    placeholder="Where to"
    minLength={2}

    debounce={400}

    fetchDetails={true}

      onPress={(data, details=null) => {
        // 'details' is provided when fetchDetails = true
        dispatch(setOrigin({location: details?.geometry?.location,
        description: data?.description}))
        dispatch(setDestination(null))
    
      }}
      enablePoweredByContainer={false}
      query={{
        key: process.env.GOOGLE_MAPS_KEY,
        language: 'en',
      }}
      styles={{container: {
        flex:0,
        backgroundColor: "white",
        paddingTop: 20,
      },
      textInputContainer : {
        paddingHorizontal: 20,
        paddingBottom: 0
      },
    textInput: {
      fontSize: 18,
      backgroundColor: "#F6f9fb",
      borderRadius:4,
    }}}
    />
     <NavOptions />
     <FavNav isOrigin={true}/>
   </View>
    </SafeAreaView>
  );
}

