import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
const data = [
  {
    id: "1",
    tittle: "Get a Ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_349,h_196/f_auto,q_auto/products/carousel/UberX.png",
    screen: "MapScreen",
  },
  {
    id: "2",
    tittle: "Order Food",
    image:
      "https://tacitcorpv2content.tacitcorporation.com/wp-content/uploads/2019/04/Uber-Eats-4.png",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 bg-gray-200 m-2 w-40 rounded-md"
          onPress={() => navigation.navigate(item.screen, {})}
          disabled={!origin}
        >
          <View
            className={`flex gap-3 flex-col ${!origin ? "opacity-20" : ""}`}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              className="rounded-xl"
            />
            <Text className="mt-2 text-lg font-semi-bold mb-4">
              {item.tittle}
              <Icon
                style={{
                  padding: 8,
                  backgroundColor: "black",
                  borderRadius: 30,
                  marginTop: 16,
                }}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;
