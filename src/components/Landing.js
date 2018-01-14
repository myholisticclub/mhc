import React, { Component } from "react"
import { Link } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"


class Landing extends Component {
  state = {
    loggedIn: false,
    user: {},
    bannerData: {},
    bannerShown: false
  }


  render() {
    const { user, loggedIn, bannerData } = this.state

    const marginLeft = window.innerWidth / 20

    console.log(this.state.bannerShown)

    return (
      <div style={{ position: "relative" }}>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="landing" />
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
        <div className="wrapper">
          <div className="page-header" style={divStyle}>
            <div className="filter" />
            <div className="content-center">
              <div className="motto">
                <h2 style={{ fontFamily: "Varela Round" }}>MY HOLISTIC CLUB</h2>
                <h3 className="description">
                  Taking you places where you feel most alive
                </h3>
                <br />

                {loggedIn ? (
                  <Link
                    as="a"
                    to="/activities"
                    className="btn btn-neutral btn-round"
                  >
                    Check out whats new
                  </Link>
                ) : (
                  <Link
                    as="a"
                    to="/signUp"
                    className="btn btn-neutral btn-round"
                  >
                    Become a member
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="section text-center landing-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h2 className="title">Let's talk adventure</h2>
                  <h5>
                    Come join an elite club where your need for adventure is
                    understood.
                  </h5>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-warning">
                      <i className="fa fa-lightbulb-o" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">New Ideas</h4>
                      <p>
                        Don't do the same old thing every weekend, trust us to
                        spice up your downtime up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="fa fa-motorcycle" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Freedom of Choice</h4>
                      <p>
                        The range of choice is extravagant. Choose whatever type
                        of activity makes you happy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-primary">
                      <i className="fa fa-smile-o" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Delightful Experiences</h4>
                      <p>
                        Let go and let us guide you on a journey to experience
                        awesomeness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-1 section-image" style={testStyle}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                  <h2 className="title">Our Clients Love Us</h2>
                  <h5 className="description">
                    Take a look at what they have to say
                  </h5>
                </div>
              </div>
              <div className="space-top" />
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-testimonial">
                    <div className="card-icon">
                      <i className="fa fa-quote-right" aria-hidden="true" />
                    </div>
                    <div className="card-block">
                      <p className="card-description">
                        "It&#39;s a must try camp this season!! Lush green grass
                        and the freshness of nature is all we want to freshen us
                        up from the mundane life !!"
                      </p>
                      <div className="card-footer">
                        <h4 className="card-title">Shubhangi Pandey</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-testimonial">
                    <div className="card-icon">
                      <i className="fa fa-quote-right" aria-hidden="true" />
                    </div>
                    <div className="card-block">
                      <p className="card-description">
                        "The service provided is excellent. They will ask you
                        your food preferences and other needs and arrange
                        everything accordingly."
                      </p>
                      <div className="card-footer">
                        <h4 className="card-title">Aabha Talwalkar</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-testimonial">
                    <div className="card-icon">
                      <i className="fa fa-quote-right" aria-hidden="true" />
                    </div>
                    <div className="card-block">
                      <p className="card-description">
                        "The activities that were planned were the perfect
                        getaway from our everyday lives and the setting was just
                        perfect. Worth every penny."
                      </p>
                      <div className="card-footer">
                        <h4 className="card-title">Vedant Modi</h4>
                      </div>
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
    "url(https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Flanding1.jpg?alt=media&token=acbef0d0-c353-4fac-8143-f6d18b0d6b2f)"
}

const testStyle = {
  backgroundImage:
    "url(https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Flanding2.jpg?alt=media&token=a99c5dcb-03d5-4b85-8e6b-14fe14b989cc)"
}

//const contStyle = {}

export default Landing
