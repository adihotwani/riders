// import React, {useState, useEffect, useRef} from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
// import {firebaseConfig} from './config';
// import firebase from 'firebase/compat/app';
// import {FirebaseAuthTypes} from '@react-native-firebase/auth';

// const OTP = ({route, navigation}) => {
//   const [phoneNo, setphoneNo]: any = useState('');
//   const [code, setCode]: any = useState('');
//   const [verificationId, setVerificationId]: any = useState();
//   const recaptchaVerifier = useRef(null);
//   const {Name, Number} = route.params;

//   const sendOTP = () => {
//     const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     phoneProvider
//       .verifyPhoneNumber(Number, recaptchaVerifier.current)
//       .then(setConfirm);
//   };

//   useEffect(async () => {
//     try {
//       const phoneProvider = new firebase.auth.PhoneAuthProvider();
//       const verification = await phoneProvider.verifyPhoneNumber(
//         Number,
//         recaptchaVerifier.current,
//       );
//       setVerificationId(verification);
//     } catch (err) {
//       Alert.alert({text: `Error: ${err.message}`});
//     }
//   }, []);

//   // setConfirm(confirmation);
//   // Handle the button press
//   // function onAuthStateChanged(user: any) {
//   //   console.log(user, 'user');
//   // }

//   // useEffect(() => {
//   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   //   return subscriber; // unsubscribe on unmount
//   // }, []);
//   // const signInWithPhoneNumber = async (phoneNumber: any) => {
//   //   try {
//   //     const confirmation = await firebase
//   //       .auth()
//   //       .signInWithPhoneNumber(phoneNumber);
//   //     console.log(confirmation);
//   //     setConfirm(confirmation);
//   //   } catch (e) {
//   //     Alert.alert(JSON.stringify(e));
//   //   }
//   // };

//   // useEffect(() => {
//   //   signInWithPhoneNumber(Number);
//   // }, []);

//   // const confirmCode = async () => {
//   //   try {
//   //     const response = await confirm.confirm(code);
//   //     if (response) {
//   //       navigation.navigate('Home');
//   //     }
//   //   } catch (e) {
//   //     Alert.alert(JSON.stringify(e));
//   //   }
//   // };
//   return (
//     <View style={{padding: 20}}>
//       <Image
//         source={require('./../assets/images/wink.png')}
//         style={styles.imageTitle}
//       />
//       <Text style={styles.title}>Hi {Name}</Text>
//       <TextInput
//         style={styles.inputotp}
//         placeholder="Enter code here"
//         // value={code}
//         onChangeText={() => {
//           setCode(code);
//         }}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           confirmCode;
//         }}>
//         <Text style={styles.buttonText}>Verify Code</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   title: {fontSize: 40, color: '#000', alignSelf: 'center', margin: 30},
//   imageTitle: {
//     width: 100,
//     height: 100,
//     margin: 20,
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   inputotp: {
//     width: '100%',
//     fontSize: 20,
//     textAlign: 'center',
//     borderRadius: 20,
//     borderWidth: 1,
//     color: '#000',
//     alignSelf: 'center',
//   },
//   button: {
//     backgroundColor: '#000',
//     margin: 30,
//     fontSize: 20,
//     padding: 10,
//     borderRadius: 20,
//   },
//   buttonText: {color: '#FFF', alignSelf: 'center'},
// });
// export default OTP;

// import * as React from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import {
//   FirebaseRecaptchaVerifierModal,
//   FirebaseRecaptchaBanner,
// } from 'expo-firebase-recaptcha';
// import firebase from 'firebase/compat/app';
// import {firebaseConfig} from './config';
// // Initialize Firebase JS SDK
// // https://firebase.google.com/docs/web/setup
// /*try {
// firebase.initializeApp({
// ...
// });
// } catch (err) {
// // ignore app already initialized error in snack
// }*/
// export default function Auth({navigation}: any) {
//   const recaptchaVerifier: any = React.useRef(null);
//   const [phoneNumber, setPhoneNumber]: any = React.useState();
//   const [verificationId, setVerificationId]: any = React.useState();
//   const [verificationCode, setVerificationCode]: any = React.useState();
//   const [message, showMessage]: any = React.useState(
//     !firebaseConfig || Platform.OS === 'web'
//       ? {
//           text: 'To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.',
//         }
//       : undefined,
//   );
//   const attemptInvisibleVerification = false;
//   return (
//     <View style={{padding: 20, marginTop: 50}}>
//       <FirebaseRecaptchaVerifierModal
//         ref={recaptchaVerifier}
//         firebaseConfig={firebaseConfig}
//         attemptInvisibleVerification={attemptInvisibleVerification}
//       />
//       <Text style={{marginTop: 20}}>Enter phone number</Text>
//       <TextInput
//         style={{marginVertical: 10, fontSize: 17}}
//         placeholder="+1 999 999 9999"
//         autoFocus
//         keyboardType="phone-pad"
//         textContentType="telephoneNumber"
//         onChangeText={phoneNumbe => setPhoneNumber(phoneNumbe)}
//       />
//       <Button
//         title="Send Verification Code"
//         disabled={!phoneNumber}
//         onPress={async () => {
//           // The FirebaseRecaptchaVerifierModal ref implements the
//           // FirebaseAuthApplicationVerifier interface and can be
//           // passed directly to `verifyPhoneNumber`.
//           try {
//             const phoneProvider = new firebase.auth.PhoneAuthProvider();
//             const verification = await phoneProvider.verifyPhoneNumber(
//               phoneNumber,
//               recaptchaVerifier.current,
//             );
//             setVerificationId(verification);
//             showMessage({
//               text: 'Verification code has been sent to your phone.',
//             });
//             setTimeout(
//               () =>
//                 showMessage({
//                   text: undefined,
//                 }),
//               5000,
//             );
//           } catch (err: any) {
//             showMessage({text: `Error: ${err.message}`, color: 'red'});
//           }
//         }}
//       />
//       <Text style={{marginTop: 20}}>Enter Verification code</Text>
//       <TextInput
//         style={{marginVertical: 10, fontSize: 17}}
//         editable={!!verificationId}
//         placeholder="123456"
//         onChangeText={setVerificationCode}
//       />
//       <Button
//         title="Confirm Verification Code"
//         disabled={!verificationId}
//         onPress={async () => {
//           try {
//             const credential = firebase.auth.PhoneAuthProvider.credential(
//               verificationId,
//               verificationCode,
//             );
//             await firebase.auth().signInWithCredential(credential);
//             showMessage({text: 'Phone authentication successful 👍'});
//             setTimeout(() => {
//               showMessage({
//                 text: undefined,
//               });
//               navigation.navigate('Register'), 3000;;
//             });
//           } catch (err: any) {
//             showMessage({text: `Error: ${err.message}`, color: 'red'});
//           }
//         }}
//       />
//       <View style={styles.messageStyle}>
//         {message ? (
//           <TouchableOpacity
//             style={[
//               StyleSheet.absoluteFill,
//               {backgroundColor: '0xffffffee', justifyContent: 'center'},
//             ]}
//             onPress={() => showMessage(undefined)}>
//             <Text
//               style={{
//                 color: message.color || 'green',
//                 fontSize: 17,
//                 textAlign: 'center',
//                 margin: 20,
//               }}>
//               {message.text}
//             </Text>
//           </TouchableOpacity>
//         ) : undefined}
//       </View>
//       {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   messageStyle: {
//     marginTop: 30,
//     paddingTop: 30,
//   },
// });

// import React, {useState} from 'react';
// import {Button, TextInput} from 'react-native';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

// function OTP() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber: any) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+919876543210')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }
// export default OTP;

// import React, {useState, useEffect, useRef} from 'react';
// import {
//   TextInput,
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
// import {firebaseConfig} from './config';
// import firebase from 'firebase/compat/app';
// import {FirebaseAuthTypes} from '@react-native-firebase/auth';

// const OTP = ({route, navigation}: any) => {
//   //const [phone, setphone] = useState('');
//   const [code, setcode] = useState('');
//   const [verificationId, setverificationId] = useState<any | null>(null);
//   // const recaptchaVerifier = useRef(null);
//   const {Name, Number} = route.params;

//   const sendVerification = (phonenumber: string) => {
//     // Alert.alert(phonenumber);
//     // const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     // phoneProvider
//     //   .verifyPhoneNumber('+917725018800', recaptchaVerifier.current)
//     //   .then(setverificationId);
//     // //setphone('');
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phonenumber)
//       .then(confirm => {
//         setverificationId(confirm);
//       });
//   };

//   useEffect(() => {
//     sendVerification(Number);
//   }, []);
//   const verifyOTP = () => {
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       verificationId,
//       code,
//     );
//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then(() => {
//         setcode('');
//       })
//       .catch(error => {
//         Alert.alert(error);
//       });
//     navigation.navigate('Home', {
//       name: Name,
//     });
//   };
//   return (
//     <View style={{padding: 20}}>
//       <FirebaseRecaptchaVerifierModal
//         ref={recaptchaVerifier}
//         firebaseConfig={firebaseConfig}
//       />
//       <Image
//         source={require('./../assets/images/wink.png')}
//         style={styles.imageTitle}
//       />
//       <Text style={styles.title}>Hi {Name}</Text>
//       <TextInput
//         style={styles.inputotp}
//         placeholder="Enter code here"
//         // value={code}
//         onChangeText={() => {
//           setcode(code);
//         }}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           verifyOTP;
//         }}>
//         <Text style={styles.buttonText}>Verify Code</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   title: {fontSize: 40, color: '#000', alignSelf: 'center', margin: 30},
//   imageTitle: {
//     width: 100,
//     height: 100,
//     margin: 20,
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   inputotp: {
//     width: '100%',
//     fontSize: 20,
//     textAlign: 'center',
//     borderRadius: 20,
//     borderWidth: 1,
//     color: '#000',
//     alignSelf: 'center',
//   },
//   button: {
//     backgroundColor: '#000',
//     margin: 30,
//     fontSize: 20,
//     padding: 10,
//     borderRadius: 20,
//   },
//   buttonText: {color: '#FFF', alignSelf: 'center'},
// });
// export default OTP;

import React, {useState, useEffect} from 'react';
import {
  Button,
  TextInput,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const OTP = ({route, navigation}) => {
  // If null, no SMS has been sent
  const {Name, Number} = route.params;
  const num: string = Number.toString();
  JSON.stringify(num);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const [code, setCode] = useState('');
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  useEffect(() => {
    console.log(typeof num);
    signInWithPhoneNumber(num);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // Handle the button press
  let response;
  const confirmCode = async () => {
    try {
      response = await confirm?.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Image
        source={require('./../assets/images/wink.png')}
        style={styles.imageTitle}
      />
      <Text style={styles.title}>Hi {Name}</Text>
      <TextInput
        style={styles.inputotp}
        placeholder="Enter code here"
        // value={code}
        keyboardType={'number-pad'}
        maxLength={6}
        onChangeText={() => {
          setCode(code);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          confirmCode;
          // var credential = auth.PhoneAuthProvider.credential(
          //   confirm.verificationId,
          //   code,
          // );
          // auth().signInWithCredential(credential);
          // console.log(auth().signInWithCredential(credential));
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {fontSize: 40, color: '#000', alignSelf: 'center', margin: 30},
  imageTitle: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  inputotp: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 20,
    borderWidth: 1,
    color: '#000',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#000',
    margin: 30,
    fontSize: 20,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {color: '#FFF', alignSelf: 'center'},
});
export default OTP;
