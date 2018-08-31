//import libraries for making a Component
import React from 'react';
import { Text, View, Platform } from 'react-native';

//make a Component
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        paddingTop: 15
      },
      android: {
        elevation: 1
      }
    }),
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

//make the component available for other parts of the app
export { Header };
