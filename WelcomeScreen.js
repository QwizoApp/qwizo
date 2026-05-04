import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <View style={styles.logo}>
        </View>

        <Text style={styles.title}>Qwizo</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>START QWIZO</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Log in.
        </Text>
        </Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },

  content: {
    alignItems: 'center',
    marginTop: 100,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#525252',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    fontSize: 35,
    marginTop: 30,
    color: '#525252',
    fontWeight: '700',
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#707070',
    borderRadius: 30,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 90,
  },

  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  loginText: {
    color: '#000000',
  },

  loginLink: {
    color: '#707070',
    fontWeight: '500',
  },
});
