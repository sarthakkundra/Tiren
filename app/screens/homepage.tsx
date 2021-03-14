import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./camera";
import logo from '../assets/logo.png';
const Tab = createBottomTabNavigator();

const HomeLayout = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
       <Text><Image source={logo} style={{ width: 80, height: 70 }}></Image>: 0.01 REN</Text>
      <Text style={{ padding: 10 }}>
       
        <FlatList
        data={[
          {key: 'Take a picture of your messy room.'},
          {key: 'Take a picture of your clean room.'},
          {key: 'Earn REN Token'}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />

      </Text>
      <Text style={{ padding: 10 }}>Great work! You just earned 0.01 REN! Congratulations!</Text>
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
