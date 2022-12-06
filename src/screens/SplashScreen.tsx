import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const SplashScreen = ({navigation}) => {
  const onclickbutton = () => {
    console.log('clicked');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>Taxi Maps</Text>
      <Image
        style={styles.image}
        source={require('./../assets/images/image.png')}
      />
      <TouchableOpacity style={styles.button} onPress={onclickbutton}>
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    margin: 30,
    marginTop: 100,
  },
  bg: {
    backgroundColor: '#192841',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  title: {color: '#FFF', fontSize: 40, alignSelf: 'center', marginTop: 30},
  image: {
    width: '100%',
    height: undefined,
    alignSelf: 'center',
    margin: 20,
    marginTop: 20,
    padding: 20,
    flex: 1,
  },
  buttonText: {color: '#000', padding: 10, alignSelf: 'center', fontSize: 30},
});

export default SplashScreen;
