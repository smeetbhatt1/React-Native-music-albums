// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; //importing header
import AlbumList from './src/components/AlbumList'; //importing header

// Create a component
const App = () => (
  //please expand the content to fill device height helpfull in ScrollView "flex: 1"
  <View style={{ flex: 1 }} >
  <Header headerText={'My First App'} />
  <AlbumList />
  </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
