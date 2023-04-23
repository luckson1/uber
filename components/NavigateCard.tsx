import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import FavNav from "./FavNav";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <Text className="text-center py-5 text-xl">Good Evening, Jack</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            placeholder="Search Nearby Places"
            debounce={400}
            fetchDetails={true}
            minLength={2}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data?.description,
                })
              );
              // dispatch(setDestination(null))
              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{
              key: process.env.GOOGLE_MAPS_KEY,
              language: "en",
            }}
            styles={{
              container: {
                flex: 0,
                backgroundColor: "white",
                paddingTop: 20,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
              textInput: {
                fontSize: 18,
                backgroundColor: "#F6f9fb",
                borderRadius: 4,
              },
            }}
          />
        </View>
        <FavNav isOrigin={false} />
        <View className="flex flex-row justify-evenly py-2 border-t bottom-1 border-gray-200 mt-1">
          <TouchableOpacity className="py-1 px-1 mx-6 rounded-2xl bg-black w-28">
            <View className="flex flex-row gap-3 mx-3 my-1">
              <Icon type="font-awesome" name="car" size={16} color={"white"} />
              <Text className="text-white">Rides</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="py-1 rounded-2xl border-black border botrder-1 w-28 px-2">
            <View className="flex flex-row gap-3 mx-3 my-1">
              <Icon
                type="material"
                name="restaurant"
                size={16}
                color={"black"}
              />
              <Text>Food</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
