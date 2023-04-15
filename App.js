//MANUEL RICADO CASTRO MALAVER
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View,Button } from 'react-native';

const crearDialogo = () => Alert.alert(
  'Titulo',
  'Subtitulo o mensaje que podemos agregar a este dialogo...',
  [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: () => console.log('boton presionado'),
    }
  ],
  {
    cancelable: false
  },
)


export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Abrir Dialogo' onPress={crearDialogo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancel: {
    padding: 10,
    width: 40,
    textAlign: 'center',
    backgroundColor: '#0c6291'
  },
});
