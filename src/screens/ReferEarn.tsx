import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const ReferEarn = ({navigation}: any) => {
  const backbutton = () => {
    navigation.goBack();
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.titlecontainer}>
        <TouchableOpacity onPress={backbutton}>
          <Image
            style={styles.backbutton}
            source={require('./../assets/images/blackbackArrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.Titletext}>Earn Free Coin</Text>
      </View>
      <Image
        style={styles.referImage}
        source={require('./../assets/images/referrals.png')}
      />
      <Text style={styles.text1}>Get 1500 Coin</Text>
      <Text style={styles.text2}>For every new user you refer</Text>
      <Text style={styles.greytext}>Share your referral link and earn</Text>
      <Text style={styles.greytext1}>1500</Text>
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <View style={styles.codecontainer}>
          <Image
            style={styles.copycode}
            source={require('./../assets/images/copyicon.png')}
          />
          <Text style={styles.code}>YAF8JMHGCXI7TG</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.container2}>
        <Text style={styles.text1}>Get 1500 Coin</Text>
        <Text style={styles.text2}>For any account you connect</Text>
        <TouchableOpacity style={styles.sharebutton} onPress={() => {}}>
          <Text style={styles.sharebuttontext}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: 10},
  titlecontainer: {flexDirection: 'row'},
  backbutton: {width: 15, height: 15, marginLeft: 10, marginTop: 20},
  Titletext: {
    color: '#192841',
    alignSelf: 'center',
    marginLeft: 100,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  referImage: {width: '90%', alignSelf: 'center', marginTop: 20},
  text1: {
    color: '#192841',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text2: {alignSelf: 'center', marginTop: 5, color: '#000', fontSize: 15},
  greytext: {alignSelf: 'center', fontSize: 15, marginTop: 5},
  greytext1: {alignSelf: 'center', fontSize: 15},
  codecontainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 0.1,
    padding: 10,
    margin: 10,
    elevation: 20,
  },
  copycode: {width: 20, height: 20, marginLeft: 10},
  code: {marginLeft: 90},
  container2: {borderTopWidth: 0.5, margin: 10, marginTop: 20},
  sharebutton: {
    borderWidth: 1,
    backgroundColor: '#192841',
    padding: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  sharebuttontext: {
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 25,
  },
});
export default ReferEarn;
