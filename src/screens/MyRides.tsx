import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import data from './../Data/data.json';

const MyRides = ({navigation}: any) => {
  const backpressed = () => {
    navigation.navigate('Home');
  };
  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
          marginLeft: 30,
        }}
      />
    );
  };
  const renderItem = ({item, index}) => {
    const completed = require('./../assets/images/Completed.png');
    const cancelled = require('./../assets/images/Cancelled.png');
    let stamp = item.status ? completed : cancelled;
    let carImg;
    switch (item.vehicle) {
      case 'Mini': {
        carImg = require('./../assets/images/Mini.png');
        break;
      }
      case 'Sedan': {
        carImg = require('./../assets/images/Sedan.png');
        break;
      }
      case 'Auto': {
        carImg = require('./../assets/images/Auto.png');
        break;
      }
      case 'SUV': {
        carImg = require('./../assets/images/SUV.png');
        break;
      }
      default: {
        carImg = require('./../assets/images/Mini.png');
        break;
      }
    }
    return (
      <View style={styles.itemContainer}>
        <View style={styles.container1}>
          <View style={styles.itemtitle}>
            <Image style={styles.imagetitle} source={carImg} />
            <Text style={styles.titletext}>{item.daydatetime}</Text>
          </View>
          <Text style={styles.vehiclecrn}>
            {item.vehicle} . {item.crn}
          </Text>
          <View style={styles.pickup}>
            <Image
              style={styles.green}
              source={require('./../assets/images/green.png')}
            />
            <Text style={styles.pickuptext}>{item.Pickup}</Text>
          </View>
          <View style={styles.pickup}>
            <Image
              style={styles.green}
              source={require('./../assets/images/red.png')}
            />
            <Text style={styles.pickuptext}>{item.drop}</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.titletext}>{item.price}</Text>
          <Image style={styles.cancelledconfirmed} source={stamp} />
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.screentitle}>
        <TouchableOpacity onPress={backpressed}>
          <Image
            style={styles.titleimage}
            source={require('./../assets/images/whiteArrowBack.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headtext}>My Rides</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemDivider}
        style={styles.fl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screentitle: {
    flexDirection: 'row',
    borderWidth: 0.5,
    backgroundColor: '#192841',
    padding: 10,
  },
  titleimage: {width: 20, height: 20, marginTop: 8},
  headtext: {marginLeft: 110, color: '#fff', fontSize: 25},
  container: {},
  fl: {backgroundColor: '#fff'},
  itemContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  container1: {},
  itemtitle: {flexDirection: 'row'},
  imagetitle: {width: 20, height: 20, marginTop: 5},
  titletext: {fontWeight: 'bold', fontSize: 20, color: '#000', marginLeft: 10},
  vehiclecrn: {marginTop: 10, marginLeft: 50, color: '#000', fontSize: 18},
  pickup: {flexDirection: 'row'},
  green: {width: 10, height: 10, marginLeft: 50, marginTop: 5},
  pickuptext: {marginLeft: 10},
  container2: {alignSelf: 'center', marginLeft: 50},
  cancelledconfirmed: {width: 60, height: 60, marginTop: 20},
});
export default MyRides;
