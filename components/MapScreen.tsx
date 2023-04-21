import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const ref = useRef<MapView>(null);
  useEffect(() => {
    if (!origin || destination) return;
    //zoom and fit to markers
    ref?.current?.fitToSuppliedMarkers(["origin", "destination"], {edgePadding: {top:50, right:50, bottom:50, left:50}})
  }, [origin, destination]);
  return (
    <MapView
      ref={ref}

      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat ?? 37.78825,
        longitude: origin?.location?.lng ?? -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={process.env.GOOGLE_MAPS_KEY ?? ""}
          strokeWidth={3}
          strokeColor="blue"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
        
      )}
           {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination?.location?.lat,
              longitude: destination?.location?.lng,
            }}
            title="destination"
            description={destination.description}
            identifier="destination"
          />
      )}
    </MapView>
  );
};

export default Map;
