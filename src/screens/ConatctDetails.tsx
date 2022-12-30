import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Contacts from 'react-native-contacts';
const ConatctDetails = ({navigation}: any) => {
  const route = useRoute<any>();
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      if (res == 'granted') {
        Contacts.deleteContact({recordID: route.params.data.recordID}).then(
          recordId => {
            // contact deleted
            navigation.goBack();
          },
        );
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
      <Text style={{color: '#fff', alignSelf: 'center', marginTop: 20}}>
        {route.params.data.familyName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          marginTop: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            alignSelf: 'center',
            marginTop: 20,
            marginLeft: 20,
          }}>
          {route.params.data.phoneNumbers[0]?.number}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingRight: 15,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/message.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#fff',
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/call.png')}
              style={{width: 20, height: 20, tintColor: '#fff'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '70%',
          height: 50,
          borderRadius: 10,
          marginTop: 100,
          borderWidth: 1,

          borderColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() => {
          getPermission();
        }}>
        <Text style={{color: 'red'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConatctDetails;

const styles = StyleSheet.create({});
