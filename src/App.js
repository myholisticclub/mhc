import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
 import Corporate from "./components/Corporate"
 import Activities from "./components/Activities"
// import LiveActivities from "./components/LiveActivities"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Welcome from "./components/Welcome"
import Landing from "./components/Landing"
// import Landing2 from "./components/Landing2"
 import AboutUs from "./components/AboutUs"
 import Benefits from "./components/Benefits"
 import Contact from "./components/Contact"
 import Privacy from "./components/Privacy"
 import Terms from "./components/Terms"
 import Refund from "./components/Refund"
 import Pricing from "./components/Pricing"
 import Event from "./components/Event"
// import UserDash from "./components/UserDash"
// import Forgot from "./components/Forgot"
 //import Edit from "./components/Edit"

class App extends Component {
  state = {
    loggedIn: false,
    user: {}
  }


  render() {
    //const Event =({ match }) => (<Event eventId={match.params.eventId} />)

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          
          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/aboutus" component={AboutUs} />
          
                    <Route exact path="/contact" component={Contact} />
          
                    <Route exact path="/privacy" component={Privacy} />
          
                    <Route exact path="/terms" component={Terms} />
          
                    <Route exact path="/refund" component={Refund} />
          
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/benefits" component={Benefits} />
                    <Route exact path="/corporate" component={Corporate} />
          
                    <Route exact path="/activities" component={Activities} />

                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/event" component={Event} />
                    
        </Switch>
      </div>
    )
  }
}

export default App
