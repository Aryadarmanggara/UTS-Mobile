import React from 'react';
import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import * as firebase from 'firebase';

const showAlertHandler = () => {
  Alert.alert(
    'Pesan',
    'Anda Berhasil Mendaftar !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};



const SignUpScreen = () => {
  const [email,setEmail] = react.useState('');
  const [password,setPassword] = react.useState('');
 

  const onSignUpPressed = () => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{

        }).catch((err) => {
            alert(err);
        })
  }
  return (
    <View style={styles.container}>
      <Image style = {{width: 350, height: 150}} source={require('./Logo2.jpg')} />

      <TextInput placeholder='Email'
      keyboardType='email-address' 
      style = {styles.txtInput}
      value={email}
          onChangeText={(text) => setEmail(text)}/>

      <TextInput placeholder='Username'
      style = {styles.txtInput}/>

      <TextInput placeholder='Phone Number'
      keyboardType='number-pad' 
      style = {styles.txtInput}/>

      <TextInput placeholder='Password' 
      style = {styles.txtInput} 
      secureTextEntry={true}
      value={password}
         onChangeText={(text) => setPassword(text)} />

      <TextInput placeholder='Konfirmasi Password' 
      style = {styles.txtInput} 
      secureTextEntry={true} />

      <TouchableOpacity style={styles.Btn} onPress={onSignUpPressed} >
        <Text style={styles.txtBtn}>Daftar</Text>
      </TouchableOpacity>

      
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtInput: {
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 15
  },

  Btn: {
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: 'grey'
  },

  txtBtn: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900'
  }
});
 
export default SignUpScreen