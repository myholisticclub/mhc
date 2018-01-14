import React, { Component } from "react"
import { Container, Header, Loader, Dimmer } from "semantic-ui-react"
import { Redirect } from "react-router-dom"
import FixedMenu from "./FixedMenu"
//import Footer from "./Footer"
import DatePicker from "react-datepicker"
import moment from "moment"
//import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"

class Welcome extends Component {
  state = {
    loggedIn: false,
    user: {},
    name: "",
    email: "",
    mobileNo: "",
    whatsappNo: "",
    profession: "",
    dob: "",
    addLine1: "",
    addLine2: "",
    city: "",
    state: "",
    gender: "",
    zipcode: "",
    referralCode: "",
    startDate: "",
    loading: false
  }

  

  render() {
    const {
      name,
      email,
      mobileNo,
      whatsappNo,
      profession,
      dob,
      addLine1,
      addLine2,
      city,
      state,
      gender,
      zipcode,
      referralCode,
      loggedIn,
      user
    } = this.state

    const options = [
      { key: "m", text: "Male", value: "Male" },
      { key: "f", text: "Female", value: "Female" }
    ]

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div className="wrapper">
          <div className="profile-content section">
            <div className="container">
              <div className="row">
                <Container text style={contStyle}>
                  <Header as="h2">Welcome onboard!</Header>
                  <br />
                  <p>Help us out with a few extra details</p>
                </Container>
                <div className="col-md-6 offset-md-3">
                  <form className="settings-form">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Full name"
                            name="name"
                            value={name}
                            placeholder="Type your full name"
                            onChange={this.handleNameChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control border-input"
                            label="Email Id"
                            name="email"
                            value={email}
                            placeholder="An email id you use"
                            onChange={this.handleEmailChange}
                            required
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Mobile Number"
                            name="mobileNo"
                            value={mobileNo}
                            placeholder="Your real mobile number"
                            onChange={this.handleMobNoChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Whatsapp Number</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Whatsapp Number"
                            name="whatsappNo"
                            value={whatsappNo}
                            placeholder="Incase it is different"
                            onChange={this.handleWhatsappNoChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Profession</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Profession"
                            value={profession}
                            name="profession"
                            placeholder="The type of work you do"
                            onChange={this.handleProfessionChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Date of Birth</label>

                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                            dateFormat="DD/MM/YYYY"
                            maxDate={moment()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onFocus={e => e.target.blur()}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Address Line 1</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Address Line 1"
                            value={addLine1}
                            name="addLine1"
                            placeholder="Incase we need to send you stuff"
                            onChange={this.handleAddLine1Change}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Address Line 2</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Address Line 2"
                            value={addLine2}
                            name="addLine2"
                            placeholder="Landmarks?"
                            onChange={this.handleAddLine2Change}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="City"
                            value={city}
                            name="city"
                            placeholder="City"
                            onChange={this.handleCityChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="State"
                            value={state}
                            name="state"
                            placeholder="State"
                            onChange={this.handleStateChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <div>
                            <input
                              type="radio"
                              name="radio1"
                              id="radio1"
                              value="Male"
                              onClick={this.handleGenderChange}
                            />
                            <label htmlFor="radio1">&nbsp;Male</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="radio1"
                              id="radio2"
                              value="Female"
                              onClick={this.handleGenderChange}
                            />
                            <label htmlFor="radio2">&nbsp;Female</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Zipcode</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Zipcode"
                            value={zipcode}
                            name="zipcode"
                            placeholder="Zipcode"
                            onChange={this.handleZipcodeChange}
                            required
                            maxLength="6"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6" hidden>
                        <div className="form-group">
                          <label>Referral Code</label>
                          <input
                            type="text"
                            className="form-control border-input"
                            label="Referral Code"
                            value={referralCode}
                            name="referralCode"
                            placeholder="If you have one"
                            onChange={this.handleRCChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group" />
                        <p style={{color: 'red'}}>{this.state.warning}</p>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={this.handleSubmit}
                          className="btn btn-wd btn-info btn-round"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.redirectToMain && <Redirect to={"/"} />}
        {this.state.welcomeComplete && (
          <Redirect to={"/" + this.state.welcomeComplete} />
        )}
      </div>
    )
  }
}

const contStyle = {}

export default Welcome
