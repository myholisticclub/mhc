import React, { Component } from 'react';
import { Container, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import { auth } from "../utils/base"


class Forgot extends Component {
  state = {
    loggedIn: false,
    user: {},
    email: "",
    sent: false,
    warning: ""
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Esss")
        this.setState({
          loggedIn: true,
          user: user
        })
        console.log(user)
      } else {
        console.log("naaaaaa")
      }
    })
    window.scrollTo(0, 0)
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  resetPassword (email) {
      this.setState({warning:"", sent: false})
    if(this.validateEmail(email)){
        this.setState({
            email:"",
            sent: true
          })
      return auth().sendPasswordResetEmail(email)
    } else {
        this.setState({
            warning: "Please enter a valid email id"
        })
    }
    
  }

  render() {

    const { user, loggedIn } = this.state

    return (
      <div>
      <FixedMenu loggedIn={loggedIn} user={user} navStyle='true' />
        <Container style={contStyle}>
          <Header as='h2'>Forgot Password</Header><br/>
          <p>Please enter the email for which you wish to reset your password</p>
          <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control border-input"
              label="Email Id"
              name="email"
              value={this.state.email}
              placeholder="Email id goes here"
              onChange={this.handleEmailChange}
              required
            />
          </div>
        </div>
        <div>
        <p style={{color:'red'}}>{this.state.warning}</p>
        <button className="btn btn-danger" onClick={()=>this.resetPassword(this.state.email)}>Reset Password</button>
        <br/>
        {this.state.sent && <p style={{color:'green'}}>If this is a registered email with us, we have sent an email with password reset instructions to the mentioned id.</p>}
        </div>
          <br/>
          <br/>
          </Container>
          <Footer/>
        </div>
    );
  }
}

const divStyle = {
}

const contStyle = {
  marginTop: '120px',
  marginBottom: '280px'
}

export default Forgot;
