import { View, AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => {
   return (
   <View syle={{ flex:1 }}>
    <Header headerText ={'Albumssss!'}/>
    <AlbumList/>
   </View>
   );
};


AppRegistry.registerComponent('albums', () => App);
