import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/LandingScreenStyles'
import { Metrics } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Container, Content, Button, Text as NBText } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'

class LandingScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  isAttempting = false;
  keyboardDidShowListener = {};
  keyboardDidHideListener = {};

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth - 40 }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      this.props.navigation.goBack()
    }
  }

  componentWillMount () {

  }

  componentWillUnmount () {

  }

  keyboardDidShow = e => {

  };

  keyboardDidHide = e => {

  };

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
    this.props.navigation.navigate('LaunchScreen')
  };

  handleChangeUsername = text => {
    this.setState({ username: text })
  };

  handleChangePassword = text => {
    this.setState({ password: text })
  };

  render () {
    // const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <Container style={styles.container}>
        <Grid>
          <Row size={90}>
            <Text>{'Test'}</Text>
          </Row>
          <Row size={10}>
            <Content>
              <Button block light onPress={this.handlePressLogin}>
                <NBText>Login</NBText>
              </Button>
            </Content>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen)
