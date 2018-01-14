import React, { Component } from "react"
import {
  Dimmer,
  Loader
  //   Container,
  //   Menu,
  //   Button,
  //   Header,
  //   Image,
  //   Divider,
  //   Segment,
  //   Item
} from "semantic-ui-react"
import { Route, Redirect } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import { auth, base } from "../utils/base"
// import DatePicker from "react-datepicker"
import moment from "moment"
// import "react-datepicker/dist/react-datepicker.css"
//import Slider from "react-slick"
//import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick-theme.css"

class LiveActivities extends Component {
  state = {
    loggedIn: false,
    user: {},
    redirect: false,
    selectedEvent: "",
    eventsData: [],
    eventTypes: [],
    userInfo: {},
    redirectToWelcome: false,
    setEventType: "",
    setDate: "",
    setDay: "",
    loading: true
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Esss")
        this.setState({
          loggedIn: true,
          user: user
        })
        sessionStorage.user = JSON.stringify(user);
        console.log(user)

        base
          .fetch(`users/${user.uid}`, {
            context: this
          })
          .then(data => {
            this.setState({
              userInfo: data
            })
            sessionStorage.userInfo = JSON.stringify(data);
            console.log(this.state.userInfo.type)
            if (!this.state.userInfo.type) {
              this.setState({ redirectToWelcome: true })
            }
          })
          .catch(error => {
            //handle error
            console.log(error)
          })
      } else {
        console.log("naaaaaa")
      }
    })

    if(sessionStorage.hasOwnProperty("eventsGotAt") && sessionStorage.hasOwnProperty("eventsData")){
      let diff = moment().diff(moment(sessionStorage.eventsGotAt), 'seconds')
      if (diff > 120) {
        this.getEventData()
      } else {
        this.setState({ eventsData: JSON.parse(sessionStorage.eventsData), loading: false})
      }
    } else {
      //console.log("No time stamp yet")
      this.getEventData()
    }

    

    window.scrollTo(0, 0)
  }

  getEventData = () => {
    base
    .fetch("event", {
      context: this,
      asArray: true,
      queries: {
        orderByChild: "status",
        equalTo: "approved",
        limitToLast: 50
      }
    })
    .then(data => {
      //console.log(data);
      this.setState({ eventsData: data, loading: false })
      //console.log(this.state.eventsData[0].carousel_one);
    })
    .catch(error => {
      //handle error
    })
  }

  redirectToEvent = eventKey => {
    this.setState({
      selectedEvent: eventKey,
      redirect: true
    })
  }

  eventTypeChanged = e => {
    this.setState({ setEventType: e.target.value })
  }

  handleDateChange = date => {
    this.setState({
      startDate: date,
      setDate: date.format("D/M/YYYY"),
      setDay: date.format("ddd")
    })
    //console.log(date.format('ddd'))
  }

  resetFilter = () => {
    this.setState({
      startDate: "",
      setDate: "",
      setDay: "",
      setEventType: ""
    })
  }

  shorten = (input) => {
    if(input.length < 228) {
      return input
    } else {
      return input.substring(0, 255) + " ...(more inside)"
    }
  }

  render() {
    const {
      user,
      loggedIn,
      eventsData,
      redirect,
      selectedEvent,
      loading
    } = this.state

    let isEmpty = false

    let setEventType = "Artist & Live performance"

    const shownEventsByType = eventsData.filter(event => {
      if (setEventType === "") {
        return true
      }
      return (event.event_type === setEventType || event.alternate_event_type1 === setEventType || event.alternate_event_type2 === setEventType)
    })

    if (shownEventsByType.length === 0) {
      isEmpty = true
    } else {

      //console.log("before sort",shownEventsByDate)
       
      shownEventsByType.sort(function(a, b){
        let sortId1, sortId2
        a.sortId ? sortId1 = parseInt(a.sortId,10) : sortId1 = 1
        b.sortId ? sortId2 = parseInt(b.sortId,10) : sortId2 = 1
        return sortId2-sortId1
      })
      
      //console.log("after sort",shownEventsByDate)
      
    }

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div style={{ backgroundColor: "#F5F5F5" }} className="wrapper">
          <div className="container">
            <div className="row">
              <div style={contStyle}>
                <div className="col-md-12">
                  <h2>Live Events</h2>
                  <p>Looking forward to doing something just once?! Look no place else:</p>
                </div>
              </div>
            </div>

            <hr />
            <div>
              <div className="row">
                {shownEventsByType.map(event => (
                  <div className="col-md-4 col-sm-6" key={event.key}>
                    <Route
                      render={({ history }) => (
                        <div
                          className="card card-blog"
                          onClick={() => {
                            sessionStorage.event = JSON.stringify(event);
                            history.push("/event/" + event.key)
                          }}
                        >
                          <div className="card-image">
                            <img
                              className="img"
                              alt="Event Pic"
                              src={event.headerURL}
                            />
                          </div>
                          <div className="card-block">
                            <div className="text-center">
                              <label className="label label-warning">
                                {event.event_type}
                              </label>
                            </div>
                            <h5 className="card-title">{event.title}</h5>
                            <div className="card-description">
                              {this.shorten(event.description)}
                            </div>
                            <hr />
                            <div>
                            <p>Prices start at <span style={{fontFamily:"Arial"}}>₹</span> {event.lowestMember}</p>
                            </div>
                            <hr />
                            <div className="card-footer">
                              <div className="stats">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />{" "}
                                {event.slots && `Multiple slots`}
                                {!event.slots &&
                                  `${event.startdate} ${event.time} `}
                                <i
                                  className="fa fa-map-marker"
                                  aria-hidden="true"
                                />{" "}
                                {event.shortLocation}
                              </div>
                              <br />
                              <br />
                              <div className="text-center">
                                <button className="btn btn-danger btn-round">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              {isEmpty && (
                <h3 style={{ marginBottom: "240px" }}>No events to show at the moment!</h3>
              )}
            </div>
          </div>
          <Footer />
          <Dimmer active={loading}>
            <Loader>
              Making mojitos...<br />
            </Loader>
          </Dimmer>
        </div>
        {redirect && <Redirect to={"/event/" + selectedEvent} />}
      </div>
    )
  }
}

//{this.state.redirectToWelcome && <Redirect to={"/welcome"} />}

const contStyle = {
  marginTop: "80px"
}

export default LiveActivities
