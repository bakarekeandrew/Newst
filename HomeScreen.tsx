import { Text, View , StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'



const Icon = require('./assets/icon.png');

export class SplashPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the home page.</Text>
      </View>
    )
  }
}

export default SplashPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },

    splashImage: {
        width: 100, height: 100,
        resizeMode: 'cover',
    },
    title: {
       fontSize: 25,
       fontWeight: "bold",   
       paddingBottom: 10,
    },
    second:{

    }

})