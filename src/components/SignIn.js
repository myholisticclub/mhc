import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"

class SignIn extends Component {
  state = {
   
    loggedIn: false
  //  loading: true
  }

  render() {
    const { loggedIn, user,email,pass } = this.state

    return loggedIn ? (
      <Redirect to="/activities" />
    ) : (
      <div className="full-screen register">
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="signup"/>
        <div className="wrapper">
          <div className="page-header" style={divStyle}>
            <div className="filter" />
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-4 col-sm-7 offset-sm-3 col-xs-12">
                  <div className="card card-register">
                    <h3 className="card-title text-center">
                      Welcome<br />Log In
                    </h3>
                    <div className="social">
                      <button
        
                        className="btn btn-just-icon btn-facebook"
                      >
                        <i className="fa fa-facebook" />
                      </button>&nbsp;
                      <button
                       
                        className="btn btn-just-icon btn-google"
                      >
                        <i className="fa fa-google" />
                      </button>
                    </div>

                    <div className="division">
                      <div className="line l" />
                      <span>or</span>
                      <div className="line r" />
                    </div>
                    <p style={{ color: "red" }}></p>
                    <form
                      className="register-form"
                      
                    >
                      <label style={{ color: "grey" }}>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        label="Email ID"
                        name="email"
                        value={email}
                        onChange
                      />
                      <label style={{ color: "grey" }}>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        label="Password"
                        name="password"
                        value={pass}
                        onChange
                      />

                      <button className="btn btn-block btn-round btn-primary">
                        Enter
                      </button>
                    </form>
                    <div className="login">
                    <p>
                    
                    <Link as="a" to="/forgot">
                      Forgot Password?
                    </Link>
                  </p>  
                    <p>
                        Are you new? Join us{" "}
                        <Link as="a" to="/signup">
                          here
                        </Link>!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
       
      </div>
    )
  }
}

const divStyle = {
  backgroundImage: "url(https://source.unsplash.com/JjBQLWs2UPA/1600x900)"
}

const contStyle = {}

export default SignIn
