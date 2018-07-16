import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Input } from 'reactstrap';
import { userSignup } from '../actions/auth';

// import { request, AuthenticationService } from '../helpers/index';

import '../styles/login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false,
      first_name: '',
      last_name: '',
      username: '',
      password: '',
    }
  }

  handleSignUp = event => {
    event.preventDefault()
       this.props.userSignup (this.state, this.props.history);
  }

  render(){
    return (
      <div className="login col-md-9 blog-main">
        <Form onSubmit={this.handleSignUp} className="login-form">
          <FormGroup>
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
            </div>

              {/* <FormGroup style={nameStyle}> */}
                <Input
                  type="first_name"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={event => this.setState({first_name: event.target.value})}
                />
                <Input
                  type="last_name"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={event => this.setState({last_name: event.target.value})}
                />
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={event => this.setState({username: event.target.value})}
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event => this.setState({password: event.target.value})}
                />
                {/* {this.props.showSignupError ? (
                  <Alert color="danger">
                    Please complete all fields.
                  </Alert>
                ) : null} */}
            <div className={ !this.state.showErrorMessage ? 'signup-auth-error signup-hide-auth-error' : 'signup-auth-error' }>
              Invalid Username or Password
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({showSignupError: state.showSignupError});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({userSignup}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
