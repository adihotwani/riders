import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  // const [confirm, setConfirm] = useState(null);
  const [textInputName, setTextInputName] = useState('');
  const [textInputNumber, setTextInputNumber] = useState('');
  const onPressSubmit = () => {
    if (!textInputName.trim()) {
      Alert.alert('Please Enter Name');
      return;
    }
    if (textInputName.length < 4) {
      Alert.alert('Please enter valid Name');
      return;
    }
    //Check for the Email TextInput
    if (!textInputNumber.trim()) {
      Alert.alert('Please Enter Number');
      return;
    }
    if (textInputNumber.length !== 14) {
      Alert.alert('Please enter valid number');
      return;
    }
    //, {Name: textInputName, Number: textInputNumber}
    // signInWithPhoneNumber(textInputNumber);
    navigation.navigate('OTP', {
      Name: textInputName,
      Number: textInputNumber,
    });
    console.log('Pressed');
  };
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./../assets/images/whiteArrowBack.png')}
            style={styles.backimage}
          />
        </TouchableOpacity>
        <Text style={styles.titletext2}>Please fill the details</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.titleText}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          textContentType="name"
          onChangeText={value => setTextInputName(value)}
        />
        <Text style={styles.titleText}>Phone No.</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          textContentType="telephoneNumber"
          keyboardType="number-pad"
          onChangeText={value => setTextInputNumber('+91 ' + value)}
        />
        <TouchableOpacity style={styles.opacity} onPress={onPressSubmit}>
          <Text style={styles.opacityText}>Request OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: '15%',
    backgroundColor: '#192841',
    flexDirection: 'row',
  },
  backimage: {width: 20, height: 20, marginLeft: 10, marginTop: 33},
  titleText: {
    fontSize: 20,
    color: '#000',
    marginTop: 25,
    marginLeft: 20,
  },
  titletext2: {
    color: '#FFF',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 70,
  },
  form: {
    margin: 10,
  },
  input: {
    margin: 15,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  opacity: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    margin: 20,
    marginTop: 20,
  },
  opacityText: {fontSize: 20, padding: 10, color: '#fff', alignSelf: 'center'},
});
export default Login;
