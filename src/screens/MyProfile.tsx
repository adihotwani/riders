import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const MyProfile = ({navigation}: any) => {
  const [pick, setpick] = useState('./../assets/images/man.png');

  const onbackpresss = () => {
    navigation.goBack();
  };

  const onImageLibraryPress = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Cancelled Image Selection');
      } else if (response.errorCode === 'permission') {
        console.log(response.errorMessage);
        Alert.alert('Permission not Granted');
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert('Maximum Size exceeded', 'Please choose Image under 2MB', [
          {text: 'OK'},
        ]);
      } else {
        setpick(response.assets[0].base64);
      }
    });
  };
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.titleFormat}>
          <TouchableOpacity onPress={onbackpresss}>
            <Image
              style={styles.titleImage}
              source={require('./../assets/images/whiteArrowBack.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>My Profile</Text>
        </View>
        <TouchableOpacity onPress={() => onImageLibraryPress()}>
          <Image
            source={{uri: 'data:image/png;base64,' + pick}}
            style={styles.roundavatar}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onImageLibraryPress()}>
          <Image
            source={require('./../assets/images/photo.png')}
            style={styles.roundavatars}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <View style={styles.subcontain}>
          <Text style={styles.header}>Username</Text>
          <Text style={styles.value}>Aditya</Text>
        </View>
        <View style={styles.subcontain}>
          <Text style={styles.header}>Phone</Text>
          <Text style={styles.value}>9876543210</Text>
        </View>
        <View style={styles.subcontain}>
          <Text style={styles.header}>Email</Text>
          <Text style={styles.value}>careofriders@ridermap.com</Text>
        </View>
        <View style={styles.subcontain}>
          <Text style={styles.header}>Gender</Text>
          <Text style={styles.value}>Male</Text>
        </View>
        <View style={styles.subcontains}>
          <Text style={styles.header}>Date of Birth</Text>
          <Text style={styles.value}>12/03/2001</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: '30%',
    backgroundColor: '#192841',
  },
  roundavatar: {
    width: 100,
    height: 100,
    borderRadius: 400 / 2,
    borderWidth: 2,
    borderColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFF',
  },
  roundavatars: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: -30,
    marginLeft: 55,
    backgroundColor: 'red',
  },
  container2: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  subcontain: {borderTopWidth: 0.5},
  subcontains: {borderTopWidth: 0.5, height: '50%', backgroundColor: '#FFF'},
  header: {fontSize: 15, marginLeft: 15, marginTop: 15},
  value: {margin: 10, marginLeft: 15, fontSize: 20, color: '#000'},
  title: {alignSelf: 'center', fontSize: 20, color: '#FFF', marginLeft: 120},
  titleFormat: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 10,
  },
  titleImage: {width: 20, height: 20, marginTop: 2},
});
export default MyProfile;
