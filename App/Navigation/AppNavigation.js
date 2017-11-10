import React from 'react' // eslint-disable-line no-unused-vars
import { StackNavigator } from 'react-navigation'
// import styles from './Styles/NavigationStyles'

// screens identified by the router
import Login from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LandingScreen from '../Containers/LandingScreen'
import NavigationDrawer from './NavigationDrawer'

const PrimaryNav = StackNavigator(
  {
    Login: { screen: Login },
    Landing: { screen: LandingScreen },
    LaunchScreen: { screen: LaunchScreen },
    NavigationDrawer: { screen: NavigationDrawer }
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default PrimaryNav
