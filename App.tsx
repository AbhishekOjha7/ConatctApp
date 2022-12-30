import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Contact from 'react-native-contacts';
import NavigationScreen from './src/routes/NavigationScreen';
const App = () => {
  // useEffect(() => {
  //   getPermissions();
  // }, []);
  // const getPermissions = () => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //     title: 'Contacts',
  //     message: 'This app would like to view your contacts.',
  //     buttonPositive: 'Please accept bare mortal',
  //   }).then(res => {
  //     if (res == 'granted') {
  //       Contact.getAll()
  //         .then((contacts: any) => {
  //           // work with contacts
  //           console.log('=========', contacts);
  //           // setContactList(con);
  //         })
  //         .catch((e: any) => {
  //           console.log(e);
  //         });
  //     }
  //   });
  // };
  return <NavigationScreen />;
};

export default App;

const styles = StyleSheet.create({});
