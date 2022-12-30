import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
const AddContacts = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  // useEffect(() => {
  //   getPermission();
  // });
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      if (res == 'granted') {
        let newPerson: any = {
          emailAddresses: [
            {
              label: 'work',
              email: email,
            },
          ],
          phoneNumbers: [
            {
              label: 'mobile',
              number: number,
            },
          ],
          familyName: name,
          givenName: name,
        };
        Contacts.addContact(newPerson);
        navigation.goBack();
      }
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 24, height: 24, tintColor: '#fff'}}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/images/user.png')}
        style={{width: 60, height: 60, marginTop: 50, alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor={'#fff'}
        value={name}
        onChangeText={txt => setName(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#fff',
          paddingLeft: 15,
          alignSelf: 'center',
          marginTop: 50,
          color: '#fff',
        }}
      />
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor={'#fff'}
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#fff',
          paddingLeft: 15,
          alignSelf: 'center',
          marginTop: 20,
          color: '#fff',
        }}
      />
      <TextInput
        placeholder="Enter Mobile"
        placeholderTextColor={'#fff'}
        value={number}
        onChangeText={txt => setNumber(txt)}
        maxLength={10}
        keyboardType="number-pad"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#fff',
          paddingLeft: 15,
          alignSelf: 'center',
          marginTop: 20,
          color: '#fff',
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          height: 50,
          width: '90%',
          marginTop: 50,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          getPermission();
        }}>
        <Text style={{color: '#000'}}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContacts;

const styles = StyleSheet.create({});
