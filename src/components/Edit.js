import React, { Component } from "react"
import {
  Container,
  Menu,
  Button,
  Header,
  Form,
  Select
} from "semantic-ui-react"
import { Link, Redirect } from "react-router-dom"
import { auth, base } from "../utils/base"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"

class Edit extends Component {
  state = {
    loggedIn: false,
    user: {},
    name: "",
    email: "",
    mobileNo: "",
    whatsappNo: "",
    profession: "",
    addLine1: "",
    addLine2: "",
    city: "",
    state: "",
    zipcode: "",
    referralCode: "",
    startDate: ""
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Esss")
        console.log("User Details", user.uid)

        this.setState({
          loggedIn: true,
          user: user
        })
        //console.log(user)

        base
          .fetch(`users/${user.uid}`, {
            context: this
          })
          .then(data => {
            this.setState({
              name: data.name,
              email: data.email,
              mobileNo: data.mobileNo,
              whatsappNo: data.whatsappNo,
              profession: data.profession,
              addLine1: data.addLine1,
              addLine2: data.addLine2,
              city: data.city,
              state: data.state,
              zipcode: data.zipcode,
              startDate: moment(data.dob,"DD/MM/YYYY")
            })
          })
          .catch(err => {
            console.log("Error!:" + err)
          })
      } else {
        console.log("naaaaaa")
        this.setState({ redirectToMain: true })
      }
    })
  }

  cancel = (e) => {
    e.preventDefault()
    console.log("Cancel is Clicked")
    window.location.assign("/dashboard")
  }

  validateNumber = input => {
    //var n = Math.floor(Number(input))
    //return String(n) === input && n >= 0
    if(input === ""){
      return true
    }
    let pattern = /^\d+(\.\d{1,2})?$/
    return pattern.test(input)
  }

  validateName = input => {
    if(input === ""){
      return true
    }
    let pattern = /^[a-zA-Z ]+$/
    return pattern.test(input)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleNameChange = event => {
    if(this.validateName(event.target.value)){
    this.setState({ name: event.target.value })
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleMobNoChange = event => {
    if(this.validateNumber(event.target.value)){
      this.setState({ mobileNo: event.target.value })
    }
  }

  handleWhatsappNoChange = event => {
    if(this.validateNumber(event.target.value)){
    this.setState({ whatsappNo: event.target.value })
    }
  }

  handleProfessionChange = event => {
    this.setState({ profession: event.target.value })
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    })
  }

  handleAddLine1Change = event => {
    this.setState({ addLine1: event.target.value })
  }

  handleAddLine2Change = event => {
    this.setState({ addLine2: event.target.value })
  }

  handleCityChange = event => {
    this.setState({ city: event.target.value })
  }

  handleStateChange = event => {
    this.setState({ state: event.target.value })
  }

  handleZipcodeChange = event => {
    if(this.validateNumber(event.target.value)){
    this.setState({ zipcode: event.target.value })
    }
  }

  handleRCChange = event => {
    this.setState({ referralCode: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submit clicked")
    base
      .update(`users/${this.state.user.uid}`, {
        data: {
          name: this.state.name,
          email: this.state.email,
          mobileNo: this.state.mobileNo,
          whatsappNo: this.state.whatsappNo,
          profession: this.state.profession,
          dob: this.state.startDate.format("DD/MM/YYYY"),
          addLine1: this.state.addLine1,
          addLine2: this.state.addLine2,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode
        }
      })
      .then(data => {
        console.log("update success")
        this.setState({ redirectToProfile: true })
      })
  }

  render() {
    const {
      name,
      email,
      mobileNo,
      whatsappNo,
      profession,
      addLine1,
      addLine2,
      city,
      state,
      zipcode,
      referralCode,
      loggedIn,
      user
    } = this.state

    // const options = [
    //   { key: "m", text: "Male", value: "Male" },
    //   { key: "f", text: "Female", value: "Female" }
    // ]

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div className="wrapper">
          <div className="profile-content section">
            <div className="container">
              <div className="row">
                <Container text style={contStyle}>
                  <Header as="h2">Edit Profile</Header>
                  <br />
                </Container>
                <div className="col-md-6 offset-md-3">
                  <form className="settings-form" onSubmit={this.handleSubmit}>
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
                            type="tel"
                            className="form-control border-input"
                            label="Mobile Number"
                            name="mobileNo"
                            value={mobileNo}
                            placeholder="Your real mobile number"
                            onChange={this.handleMobNoChange}
                            maxLength="10"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Whatsapp Number</label>
                          <input
                            type="tel"
                            className="form-control border-input"
                            label="Whatsapp Number"
                            name="whatsappNo"
                            value={whatsappNo}
                            placeholder="Incase it is different"
                            onChange={this.handleWhatsappNoChange}
                            maxLength="10"
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
                            placeholder="Landmarks"
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

                      <div className="col-md-6 col-sm-6"></div>

                      <div className="col-sm-3" style={{margin:"10px"}}>
                      <button
                        className="btn btn-wd btn-warning btn-round"
                        onClick={this.cancel}
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="col-sm-3" style={{margin:"10px"}}>
                        <button
                          type="submit"
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
        {this.state.welcomeComplete && <Redirect to={"/activities"} />}
        {this.state.redirectToProfile && <Redirect to={"/dashboard"} />}
      </div>
    )
  }
}

const contStyle = {}

export default Edit
