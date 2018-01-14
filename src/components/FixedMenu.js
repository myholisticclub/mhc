import React, { Component } from "react"
//import { Container, Menu, Button, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
//import { auth } from "../utils/base"
import PropTypes from "prop-types"

class FixedMenu extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object,
    navStyle: PropTypes.string
  }

  // state = {
  //   loggedIn: false,
  //   user: ''
  // }

 


  render() {
    const { user, loggedIn, navStyle } = this.props
    let navStyleApply

    if (!navStyle || navStyle === "landing" || navStyle === "signup") {
      navStyleApply =
        "navbar navbar-toggleable-md fixed-top navbar-transparent nav-down"
    }  else {
      navStyleApply =
        "navbar navbar-toggleable-md fixed-top bg-info navbar-light"
    }

    let opacity = 1
    if(navStyle==="landing"){
      opacity = 0
    }

    if(navStyle==="signup" && window.innerWidth<580){
      opacity = 0
    }

    return (
      <nav className={navStyleApply}>
        <div className="container">
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler-right navbar-burger"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ref={section => {
                this.navbarLinks = section
              }}
            >
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
            </button>
            <div className="navbar-header">
            <Link
            className="navbar-brand"
            style={{
              fontFamily: "Varela Round",
              padding: "0px",
              margin: "0px"
            }}
            to="/"
          >
          
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Flogo2.png?alt=media&token=0f2b2a61-919d-4fb8-ae16-db6c6dee398f"
              alt="MHC"
              style={{ width: "60px", padding: "0px", margin: "0px", opacity:opacity }}
            />
          
          </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto" >
              <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
                <Link
                  as="a"
                  className="nav-link"
                  data-scroll="true"
                  to="/corporate"
                >
                  Corporate
                </Link>
              </li>
            <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
              <Link
                as="a"
                className="nav-link"
                data-scroll="true"
                to="/live"
              >
                Live Events
              </Link>
            </li>
              <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
                <Link
                  as="a"
                  className="nav-link"
                  data-scroll="true"
                  to="/activities"
                >
                  Activities
                </Link>
              </li>
              <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
              <Link
                as="a"
                className="nav-link"
                data-scroll="true"
                to="/benefits"
              >
                Member Benefits
              </Link>
            </li>
              {!loggedIn && (
                <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
                  <Link
                    as="a"
                    className="btn btn-round btn-primary"
                    data-scroll="true"
                    to="/signin"
                  >
                    Log In
                  </Link>
                </li>
              )}
              {!loggedIn && (
                <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
                  <Link
                    as="a"
                    className="btn btn-round btn-success"
                    data-scroll="true"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              )}
              {loggedIn && (
                <li className="nav-item" onClick={()=>this.navbarLinks.click()}>
                  <Link
                    as="a"
                    className="nav-link"
                    data-scroll="true"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {loggedIn && (
                <li className="nav-item">
                  <button
                    className="btn btn-round btn-outline-default"
                    data-scroll="true"
                    onClick={this.signOut}
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default FixedMenu
