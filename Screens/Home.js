import React from 'react';
import {StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
        <Text style={styles.h1}>AugMem</Text>
        <Text style={styles.paragraph}>Click below to either store a memory or retrieve one.</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Store')}>
            <Text style={styles.text}>Store</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Retrieve')}>
          <Text style={styles.text}>Retrieve</Text>
          </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#73d2de',
      marginTop: 12,
    },
    h1: {
      fontSize: 36
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    paragraph: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 36
    },
    buttonSecondary: {
      backgroundColor: '#ff6b6c'
    }
  });