import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import data from './../Data/notification data.json';

const Notifications = ({navigation}: any) => {
  const ItemDivider = () => {
    return <View style={styles.itemseparator} />;
  };
  const renderItem = ({item, index}) => {
    let image;
    switch (item.image) {
      case 'completed': {
        image = require('./../assets/images/Completed.png');
        break;
      }
      case 'started': {
        image = require('./../assets/images/started.png');
        break;
      }
      case 'scheduled': {
        image = require('./../assets/images/Scheduled.png');
        break;
      }
      case 'alert': {
        image = require('./../assets/images/alert.png');
        break;
      }
      default: {
        image = require('./../assets/images/alert.png');
        break;
      }
    }
    return (
      <View style={styles.container}>
        <Image style={styles.imgcontainer} source={image} />
        <View style={styles.subcontainer}>
          <Text style={styles.itemtext}>{item.title}</Text>
          <Text style={styles.subtext}>{item.Time}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        <Image
          style={styles.backbutton}
          source={require('./../assets/images/whiteArrowBack.png')}
        />
        <Text style={styles.maintext}>Notifications</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {padding: 10, backgroundColor: '#192841', flexDirection: 'row'},
  backbutton: {width: 20, height: 20, marginTop: 10},
  maintext: {
    fontSize: 20,
    marginLeft: 100,
    color: '#FFF',
    marginTop: 5,
    marginBottom: 10,
  },
  container: {flexDirection: 'row', padding: 10, backgroundColor: '#FFFs'},
  imgcontainer: {width: 50, height: 50, margin: 10},
  subcontainer: {padding: 10},
  itemtext: {fontSize: 20, color: '#192841'},
  subtext: {fontSize: 10, textAlign: 'left'},
  itemseparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#607D8B',
  },
});
export default Notifications;
