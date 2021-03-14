import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./camera";

const Tab = createBottomTabNavigator();

const HomeLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10 }}>
        First take a photo of a messy room. Then take another photo when you
        clean the room. If the room is cleaned, we will send over some cryptos
        to you!
      </Text>
      <Text style={{ padding: 10 }}>Take Photo of a clean room</Text>
      <Button
        title="Click Photo"
        onPress={() => navigation.navigate("Camera")}
      ></Button>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeLayout}
          options={{ tabBarVisible: false }}
        ></Tab.Screen>
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ tabBarVisible: false }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
});

export default HomeScreen;
