import { createSwitchNavigator } from 'react-navigation'

// navigation
import MainTabNavigation from '../MainTabNavigation'

// pages
import Initial from '../../pages/Initial'

const SwitchNavigation = createSwitchNavigator(
  {
    Initial: Initial,
    MainTabNavigation: MainTabNavigation
  },
  {
    initialRouteName: 'Initial'
  }
)

export default SwitchNavigation
