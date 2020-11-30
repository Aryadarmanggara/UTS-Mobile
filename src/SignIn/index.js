import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
 

 

const SignInScreen = ({onSignIn, navigation}) => {
  return (
    <View style={styles.container}>
      <Image style = {{width: 350, height: 150}} source={require('./Logo2.jpg')} />

      <TextInput placeholder='Email'
      keyboardType='email-address' 
      style = {styles.txtInput}/>

      <TextInput placeholder='Password' 
      style = {styles.txtInput} 
      secureTextEntry={true} />


      <TouchableOpacity style={styles.Btn} onPress={onSignIn}>
        <Text style={styles.txtBtn}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.txtBtn}>Daftar</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 5}}>Anda lupa dengan Password anda?</Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Password Forget')}>Ganti Password Anda</Text>
      </View>
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
 
export default SignInScreen;

