import React, { Component } from "react"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import moment from "moment"


class Contact extends Component {
  state = {
    loggedIn: false,
    user: {},
    warning: ""
  }

 

  render() {
    const { user, loggedIn } = this.state

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div className="contactus-1 section-image" style={divStyle}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-10 offset-md-1"
                style={{ paddingTop: "40px" }}
              >
                <div className="card card-contact no-transition">
                  <h3 className="card-title text-center">Contact Us</h3>
                  <div className="row">
                    <div className="col-md-5 offset-md-1">
                      <div className="card-block">
                        <div
                          className="info info-horizontal"
                          style={{ marginTop: "0px", paddingTop: "0px" }}
                        >
                          <div className="icon icon-info">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="description"
                            style={{ color: "grey" }}
                          >
                            <h4>Find us at the office</h4>
                            <p>
                              {" "}
                              Villa - 1, Laxmi Vilas<br />
                              Bhosale Nagar, Hadapsar<br />
                              Pune - 411028
                            </p>
                          </div>
                        </div>
                        <div
                          className="info info-horizontal"
                          style={{ marginTop: "0px", paddingTop: "0px" }}
                        >
                          <div className="icon icon-danger">
                            <i className="fa fa-phone" aria-hidden="true" />
                          </div>
                          <div
                            className="description"
                            style={{ color: "grey" }}
                          >
                            <h4>Give us a ring</h4>
                            <p>
                              {" "}
                              Hardic <br />
                              <a href="tel:+917972084980">+91 79 7208 4980</a>
                              <br />
                              Tushar <br />
                              <a href="tel:+918007123409">+91 80 0712 3409</a>
                              <br />
                              Mon - Fri, 9:00-22:00<br />
                              <a href="mailto:contact@myholisticclub.com?Subject=Hi%20there">
                              contact@myholisticclub.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <form id="contact-form">
                        <div className="card-block">
                          <div className="form-group label-floating">
                            <label className="control-label">Full name</label>
                            <input
                              
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>

                          <div className="form-group label-floating">
                            <label className="control-label">
                              Email address
                            </label>
                            <input
                             
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">
                              Your message
                            </label>
                            <textarea
                             
                              name="message"
                              className="form-control"
                              id="message"
                              rows="6"
                              placeholder="Message"
                              maxlength="350"
                            />
                          </div>

                          <div className="row">
                            <div className="col-md-6">{this.state.warning}</div>
                            <div className="col-md-6">
                              <button
                                className="btn btn-primary pull-right"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const divStyle = {
  backgroundImage:
    "url(https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Fcontactus.jpg?alt=media&token=b0e3842c-83cb-480a-8d1b-ab6c7f5197e0)"
}


export default Contact
