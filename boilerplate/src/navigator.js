import { createStackNavigator, createAppContainer } from 'react-navigation'

// import screens

import exampleScreen from './screens/Example'

const defaultNavigationOptions = { header: null }

const AppNavigator = createStackNavigator(
  { Example: { screen: exampleScreen } },
  {
    initialRouteName: 'Example',
    navigationOptions: defaultNavigationOptions,
  },
)

export default createAppContainer(AppNavigator)
