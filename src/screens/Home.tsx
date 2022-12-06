import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}: any) => {
  const onClickSettings = () => {
    navigation.navigate('Settings');
  };
  const onClickMyProfle = () => {
    navigation.navigate('MyProfile');
  };
  const onClickRefer = () => {
    navigation.navigate('ReferEarn');
  };
  const onclickmyrides = () => {
    navigation.navigate('MyRides');
  };
  const onClickNotifications = () => {
    navigation.navigate('Notifications');
  };
  const onclickbookrides = () => {
    navigation.navigate('BookRide');
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#fff',
            fontSize: 20,
            marginTop: 10,
          }}>
          Menu
        </Text>
        <Image
          style={styles.user}
          source={require('./../assets/images/man.png')}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: '#192841',
          fontSize: 20,
          marginTop: 30,
          backgroundColor: '#fff',
        }}>
        Aditya Hotwani
      </Text>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <TouchableOpacity style={styles.menuItems} onPress={onclickbookrides}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/homepage.png')}
          />
          <Text style={styles.menuText}>Book Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={onClickMyProfle}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/user.png')}
          />
          <Text style={styles.menuText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={onclickmyrides}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/Sedan.png')}
          />
          <Text style={styles.menuText}>My Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={onClickRefer}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/rupee.png')}
          />
          <Text style={styles.menuText}>Refer & Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={onClickNotifications}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/bellring.png')}
          />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClickSettings}>
          <Image
            style={styles.menuImages}
            source={require('./../assets/images/setting.png')}
          />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    backgroundColor: '#192841',
  },
  constainer2: {
    padding: 10,
    flexDirection: 'row',
  },
  user: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 30,
  },
  menuItems: {
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#192841',
    flexDirection: 'row',
    marginTop: 10,
  },
  menuItem: {
    height: '50%',
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#192841',
    flexDirection: 'row',
    marginTop: 10,
  },
  menuImages: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginTop: 3,
  },
  menuText: {fontSize: 20, marginLeft: 10, padding: 10, color: '#192841'},
});
export default Home;
