import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'

import './config/reactotron'
import Store from './store'
import Routes from './routes'

// Amplify.configure(awsmobile)

const App = () => (
  <Provider store={Store}>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#888' }}>
      <Routes />
    </SafeAreaView>
  </Provider>
)

export default App
