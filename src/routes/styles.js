import { Colors } from '../styles'

const stackHeaderStyles = {
  headerTitle: 'BOILERPLATE',
  headerTintColor: Colors.primary,
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  },
  headerTitleStyle: {
    color: Colors.primary,
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center'
  }
}

export default stackHeaderStyles
