import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { Colors } from '../../styles'

// navigation
import FirstStack from '../FirstStack'
import SecondStack from '../SecondStack'

const MainTabNavigation = createMaterialTopTabNavigator(
  {
    First: {
      screen: FirstStack,
      navigationOptions: {
        title: 'First Stack'
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="home" size={20} color={tintColor} />
        // )
      }
    },
    Second: {
      screen: SecondStack,
      navigationOptions: {
        title: 'Second Stack'
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: false,
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.primaryLight,
      style: {
        backgroundColor: Colors.white,
        shadowColor: Colors.primary
      },
      tabStyle: {
        borderTopColor: Colors.primary,
        borderTopWidth: 0
      },
      labelStyle: {
        fontSize: 10,
        margin: 5
      },
      indicatorStyle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2
      }
    }
  }
)

export default MainTabNavigation
