import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"

class SignUp extends Component {
  state = {
   
  //  loading: true
  }

  render() {
    const { loggedIn, user,name,pass } = this.state

    return loggedIn ? (
      <Redirect to="/welcome" />
    ) : (
      <div className="full-screen register">
        <FixedMenu loggedIn user navStyle="signup" />
        <div className="wrapper">
          <div className="page-header" style={divStyle}>
            <div className="filter" />
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-4 col-sm-7 offset-sm-3 col-xs-12">
                  <div className="card card-register">
                    <h3 className="card-title text-center">
                      Sign Up<br />with
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
                    <br />
                    <form
                      className="register-form"
                      
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        label="Email ID"
                        name="email"
                        value={name}
                        onChange
                      />

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        label="Password"
                        name="password"
                        value={pass}
                        onChange
                      />

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        hidden
                      />

                      <button className="btn btn-block btn-round">
                        Register
                      </button>
                    </form>
                    <div className="login">
                      <p>
                        Already have an account?{" "}
                        <Link as="a" to="/signin">
                          Log in
                        </Link>.
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
  backgroundImage: "url(https://source.unsplash.com/VeKqfHaa3e4/1600x900)"
}

const contStyle = {
  textAlign: "center"
}

export default SignUp
