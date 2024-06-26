import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetialsScreen from "./src/screens/DetialsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import TabNavigator from "./src/navigators/TabNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >

        <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation:"slide_from_bottom"}}
        >
        </Stack.Screen>

        <Stack.Screen
        name="Details"
        component={DetialsScreen}
        options={{animation:"slide_from_bottom"}}
        >
        </Stack.Screen>

        <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation:"slide_from_bottom"}}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;