import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] }; //class level property.

//lifecycle method it will call first.
  componentWillMount() {
    console.log('hitting api');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //setState automatically from component
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(albums =>
      <AlbumDetail key={albums.title} album={albums} />
    );
  }

  render() {
    console.log(this.state);
  return (
    <ScrollView>
      {this.renderAlbums()}
    </ScrollView>
  );
}
}

export default AlbumList;
