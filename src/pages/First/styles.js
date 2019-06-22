import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: Metrics.baseFont + 4,
    fontWeight: 'bold',
    color: Colors.white
  },
  button: {
    marginTop: Metrics.baseMargin,
    padding: Metrics.basePadding,
    backgroundColor: Colors.white
  },
  buttonTitle: {
    color: Colors.primary
  }
})

export default styles
