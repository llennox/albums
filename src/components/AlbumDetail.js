import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
    const {thumbnail_image, title, artist, image, url} = album;
    const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
    } = styles
    return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
        style={thumbnailStyle}
        source={{uri: thumbnail_image}}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
         Buy Now
        </Button>
      </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    thumbnailStyle: {
      height: 50,
      width:50
    },
    imageStyle: {
      height:400,
      width: null,
      flex:1
    },
    thumbnailContainerStyle: {
     justifyContent: 'center',
     alignItems:'center',
     marginLeft:10,
     marginRight:10
    },
    headerTextStyle: {
      fontSize: 18,
      color: '#0000ff',
    }
};

export default AlbumDetail;