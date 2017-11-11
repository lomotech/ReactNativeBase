import React from 'react' // eslint-disable-line no-unused-vars
import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import styles from './Styles/NavigationStyles'

// screens identified by the router
import Login from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LandingScreen from '../Containers/LandingScreen'
import NavigationDrawer from './NavigationDrawer'

// Transitions
import { Fade, SlideUpFade, SlideDownFade, SlideLeft } from './Transitions'

const MyTransitionSpec = ({
  duration: 1000,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing
})

let TransitionConfiguration = () => {
  return {
        // Define scene interpolation, eq. custom transition
    transitionSpec: MyTransitionSpec,
    screenInterpolator: (sceneProps) => {
      const {layout, position, scene, navigation} = sceneProps
      const {index, route} = scene
      const params = route.params || {}
      const transition = params.transition || 'default'

      return {
        slideUpFade: SlideUpFade(index, position),
        slideDownFade: SlideDownFade(index, position),
        fade: Fade(index, position),
        default: SlideLeft(index, position, layout, navigation)
      }[transition]
    }
  }
}

const PrimaryNav = StackNavigator(
  {
    Login: { screen: Login },
    Landing: { screen: LandingScreen },
    LaunchScreen: { screen: LaunchScreen },
    NavigationDrawer: { screen: NavigationDrawer }
  },
  {
    transitionConfig: TransitionConfiguration,
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default PrimaryNav
