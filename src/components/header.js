// Import libraryfor making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
}; 

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
    height: 60, //pixel value
    paddingTop: 15,
    shadowColor: '#000000',

    //output will be no shadow on left right, but only visible in bottom.
    shadowOffset: { width: 0, height: 3 },

    shadowOpacity: 0.2, //0.1-0.9, 0.2 default
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the App
export default Header;
