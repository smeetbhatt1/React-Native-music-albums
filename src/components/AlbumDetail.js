import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
const { title, artist, thumbnail_image, image, url } = album;
const { thumbnailImage, headerContentStyle, thumbnailContainerStyle,
          headerTextStyle, imageStyle } = styles;

  return (
    <Card>

      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailImage} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text></View>
      </CardItem>

      <CardItem>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardItem>

      <CardItem>
      <Button onPress={() => Linking.openURL(url)} >
        Buy Now
      </Button>
      </CardItem>

    </Card>
  );
};

const styles = {
  //below style is for album name and its artist name.
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailImage: {
    width: 40,
    height: 40
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  headerTextStyle: { fontSize: 16 },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetail;
