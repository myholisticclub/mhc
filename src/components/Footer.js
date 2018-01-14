import React, { Component } from "react"
import { Link } from "react-router-dom"

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-black footer-big">
        <div className="container">
          <div className="row">
            <div className="col-md-2 text-center col-sm-3 col-xs-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2Flogo.png?alt=media&token=aa0e1b18-ad59-4748-8e83-3932c9496a7c"
                alt="logo"
                style={{
                  width: "60px",
                  padding: "0px",
                  margin: "0px"
                }}
              />
              <h4
                style={{
                  fontFamily: "Varela Round",
                  paddingTop: "0px",
                  marginTop: "0px"
                }}
              >
                MHC
              </h4>
              <div className="social-area">
                <a
                  className="btn btn-just-icon btn-round btn-facebook"
                  href="https://www.facebook.com/myholisticclub/"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>&nbsp;
                <a
                  className="btn btn-just-icon btn-round btn-instagram"
                  href="https://www.instagram.com/myholisticclub/"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>&nbsp;
              </div>
            </div>
            <div className="col-md-9 offset-md-1 col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link as="a" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link as="a" to="/aboutus">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link as="a" to="/privacy">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link as="a" to="/terms">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link as="a" to="/refund">
                          Refund Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <Link as="a" to="/pricing">
                          Pricing Policy
                        </Link>
                      </li>
                      <li>
                      <Link as="a" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="links">
                    <ul className="stacked-links">
                      <li>
                        <h4>
                          500+ <small>served</small>
                        </h4>
                      </li>
                      <li>
                        <h4>
                          <small>&amp; growing quickly!</small>
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  &copy; 2017 Inevitable Solutions, made with love
                </div>
                <div className="links pull-right">
                  <ul>
                    <li>
                      <Link as="a" to="/aboutus">
                        Company&nbsp;
                      </Link>
                    </li>
                    |
                    <li>
                      <Link as="a" to="/terms">
                        &nbsp;Terms&nbsp;
                      </Link>
                    </li>
                    |
                    <li>
                      <Link as="a" to="/privacy">
                        &nbsp;Privacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
