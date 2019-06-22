import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Initial extends Component {
  handlePress = () => {
    // go to the next page
    // because we're in a SwitchNavigator, to change routes we have to use 'navigate'
    this.props.navigation.navigate('MainTabNavigation')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Initial Page</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonTitle}>Go to Next Page!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
