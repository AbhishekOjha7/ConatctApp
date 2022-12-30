import {
  FlatList,
  Image,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contact from 'react-native-contacts';
import Communications from 'react-native-communications';
import {useIsFocused} from '@react-navigation/native';
const Contacts = ({navigation}: any) => {
  const [contactList, setContactList] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    getPermissions();
  }, [isFocused]);
  const getPermissions = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(res => {
      if (res == 'granted') {
        Contact.getAll()
          .then((con: any) => {
            // work with contacts
            console.log('=========', con);
            setContactList(con);
          })
          .catch((e: any) => {
            console.log(e);
          });
      }
    });
  };
  const _renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.renderStyle}
        onPress={() => {
          navigation.navigate('ContactDetails', {data: item});
        }}>
        <View>
          <View style={styles.renderitems}>
            <Image
              source={require('../assets/images/user.png')}
              style={styles.userimg}
            />
            <View style={{padding: 10}}>
              <Text style={{color: 'white'}}>{item.familyName}</Text>
              <Text style={{color: 'white', marginTop: 4}}>
                {item.phoneNumbers[0]?.number}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.phnView}>
          <TouchableOpacity
            onPress={() => {
              const url = Communications.text(item.phoneNumbers[0].number);
            }}>
            <Image
              source={require('../assets/images/message.png')}
              style={styles.messageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${item.phoneNumbers[0].number}`);
            }}>
            <Image
              source={require('../assets/images/call.png')}
              style={styles.callIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={contactList} renderItem={_renderItem} />
      <TouchableOpacity
        style={styles.plusIcon}
        onPress={() => {
          navigation.navigate('AddContacts');
        }}>
        <Image
          source={require('../assets/images/plus.png')}
          style={styles.plsImg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  renderStyle: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderitems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userimg: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  phnView: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  messageIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginRight: 20,
  },
  callIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  plusIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 30,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plsImg: {
    width: 24,
    height: 24,
  },
});
