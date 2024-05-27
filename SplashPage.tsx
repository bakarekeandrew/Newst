import { Text, View , StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'



const Icon = require('./assets/icon.png');

export class SplashPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Icon} style={styles.splashImage}></Image>
        <Text style={styles.title}>Newst</Text>
        <Text className="bg-red">Your Reliable News Hub!</Text>
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