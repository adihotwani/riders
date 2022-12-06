import React from 'react';
import {
  StyleSheet,
  Text,
  SectionList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Settings = () => {
  const sections = [
    {
      id: '0',
      title: 'General',
      data: [
        {
          id: '0',
          text: 'Profile',
          subtext: '+91-9876543210',
          image: './../assets/images/user1.png',
        },
        {
          id: '1',
          text: 'Favorites',
          subtext: 'Manage favourite locations',
          image: './../assets/images/favourite.png',
        },
        {
          id: '2',
          text: 'Preferences',
          subtext: 'Manage Preferences',
          image: './../assets/imagescontrol.png',
        },
        {
          id: '3',
          text: 'App Language',
          subtext: 'English',
          image: './../assets/images/applanguage.png',
        },
      ],
    },
    {
      id: '1',
      title: 'Others',
      data: [
        {
          id: '3',
          text: 'About',
          subtext: '1.9.1',
          image: './../assets/images/about.png',
        },
        {
          id: '4',
          text: 'Subscription',
          subtext: 'Get Early Access to latest features',
          image: './../assets/images/beta.png',
        },
        {id: '5', text: 'Log Out', image: './../assets/images/signout.png'},
      ],
    },
  ];
  return (
    <View>
      <View style={styles.container1}>
        <Image
          source={require('./../assets/images/setting.png')}
          style={styles.containerImage}
        />
        <Text style={{fontSize: 40, marginLeft: 30, color: '#FFF'}}>
          Settings
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>General</Text>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/user1.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>Profile</Text>
            <Text style={styles.rowsub}>+91-9876543210</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/favourite.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>Favourites</Text>
            <Text style={styles.rowsub}>Manage favourite locations</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/control.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>Preferences</Text>
            <Text style={styles.rowsub}>Manage preferences</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/applanguage.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>App Language</Text>
            <Text style={styles.rowsub}>English</Text>
          </View>
        </View>
        <Text style={styles.header}>Others</Text>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/about.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>About</Text>
            <Text style={styles.rowsub}>1.9.1</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/beta.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>Subscriptions</Text>
            <Text style={styles.rowsub}>Buy your plans</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.rowimage}
            source={require('./../assets/images/signout.png')}
          />
          <View style={styles.textstyle}>
            <Text style={styles.options}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: 10, marginTop: 0},
  container1: {backgroundColor: '#192841', width: '100%', height: '25%'},
  containerImage: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  itemStyle: {borderRadius: 10, margin: 10, borderColor: '#FFDA00'},
  item: {margin: 10, fontSize: 15},
  sectionHeader: {fontSize: 20},
  row: {flexDirection: 'row', marginTop: 20, marginLeft: 20},
  header: {fontSize: 18, marginLeft: 10, marginTop: 10},
  options: {fontSize: 15, color: '#192841'},
  textstyle: {marginLeft: 20},
  rowsub: {fontSize: 13},
  rowimage: {width: 40, height: 40},
});
export default Settings;
