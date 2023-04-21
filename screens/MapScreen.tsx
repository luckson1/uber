import { View, Text } from "react-native";
import React from "react";
import Map from "../components/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
    const Stack=createStackNavigator()
  return (
    <View className="h-screen">
      <View className="h-1/2 ">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
            <Stack.Screen name="NavigateCard" component={NavigateCard} options={{headerShown: false}}/>
            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown: false}}/>

            
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
