import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Login({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>SIGN IN</Text>
      <TextInput style={styles.inputContainer} placeholder="Email" />
      <TextInput style={styles.inputContainer} placeholder="Password" />
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsFeed')}
        style={styles.btnContainer}>
        <Text style={styles.btnTxt}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 200,
  },
  titleContainer: {
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'orange',
    paddingLeft: 20,
    width: '80%',
  },
  btnContainer: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    color: 'white',
  },
});
