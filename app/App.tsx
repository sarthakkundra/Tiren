import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import logo from "./assets/logo.png";

import HomeScreen from "./screens/homepage";

const Tab = createBottomTabNavigator();

const LoadingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }}></Image>
      <Text style={styles.logoText}>Welcome to TiRen!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#fff",
    fontSize: 30,
    marginTop: 29.1,
    fontWeight: "300",
    textAlign: "center",
  },

  button: {
    padding: 1,
    color: "seagreen",
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ tabBarVisible: false }}
        ></Tab.Screen>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarVisible: false }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
