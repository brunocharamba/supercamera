import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import { Platform } from 'react-native'

let tron

if (__DEV__) {
  if (Platform.OS === 'ios') {
    tron = Reactotron.configure()
      .useReactNative()
      .use(reactotronRedux()) // add all built-in react native plugins
      .use(asyncStorage())
      .connect()
  } else {
    tron = Reactotron.configure({ host: '192.168.0.104' })
      .useReactNative()
      .use(reactotronRedux()) // add all built-in react native plugins
      .connect()
  }

  tron.clear()

  console.tron = tron
}

export default tron
