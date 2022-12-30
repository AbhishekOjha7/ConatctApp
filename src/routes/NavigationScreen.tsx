import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Contacts from '../screens/Contacts';
import AddContacts from '../screens/AddContacts';
import ConatctDetails from '../screens/ConatctDetails';
const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="AddContacts" component={AddContacts} />
        <Stack.Screen name="ContactDetails" component={ConatctDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
