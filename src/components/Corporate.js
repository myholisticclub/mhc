import React, { Component } from "react"
import { Link } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"

import moment from "moment"
//import { ModalContainer, ModalDialog } from "react-modal-dialog"

class Corporate extends Component {
  state = {
    loggedIn: false,
    user: {},
    showModal: false
  }
  
 
  render() {
  
    const { user, loggedIn, estBudget } = this.state

    const marginLeft = window.innerWidth / 20

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="landing" />
        <Link to="/">
        
        <img
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Flogo2.png?alt=media&token=0f2b2a61-919d-4fb8-ae16-db6c6dee398f"
          style={{
            width: "100px",
            marginLeft: marginLeft,
            padding: "0px",
            marginTop: "20px",
            position: "absolute",
            zIndex: 10
          }}
        />
        </Link>
        <div className="wrapper">
          <div className="page-header" style={divStyle}>
            <div className="filter" />
            <div className="content-center">
              <div className="motto">
                <h1 className="title">Let us help you have fun</h1>
                <h3 className="description">
                  We create engaging experiences for your team
                </h3>
                <br />
                <button
                  onClick={this.handleOpen}
                  className="btn btn-neutral btn-round"
                >
                  Send us a query
                </button>
              </div>
            </div>
          </div>
          <div className="section text-center landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h2 className="title">Why side with us</h2>
                  <h5>Cause the force is on our side.</h5>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-primary">
                      <i className="fa fa-clock-o" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Save time &amp; money!</h4>
                      <p>
                        We will do all the heavy lifting and we also provide
                        great deals. It's win win.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="fa fa-pencil" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Customise the event</h4>
                      <p>
                        All your team has to worry about is showing up. We will
                        take care of the rest, and even accomodate some of your
                        custom activities if needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="fa fa-shopping-cart" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Happiness Delivered</h4>
                      <p>
                        Ensure yourself and your team that you will be delivered
                        a wonderful experience from start to end.
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
  backgroundImage:
    "url(https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Fcorpbackdrop2.jpg?alt=media&token=95730a25-3ca3-4847-9139-3ed5dfa94bc5)"
}

export default Corporate
