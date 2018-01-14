import React, { Component } from "react"
import { Container, Header } from "semantic-ui-react"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"

class Refund extends Component {
  state = {
    loggedIn: false,
    user: {}
  }

  render() {
    const { user, loggedIn } = this.state

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <Container style={contStyle}>
          <Header as="h2">Refund Policy</Header>
          <br />
          <p>
            CANCELLATION POLICY <br />• In case of Cancellation the amount to be
            reimbursed to the user will entirely depend on the event and the
            event type. Cancellation policy for every event can be seen on the
            event booking page before you proceed to book yourself for the
            event. <br /><br/>REFUND POLICY <br />• The Refund of Orders shall be
            made through same mode used while making payment except in case of
            payments made by cash. If a customer makes a payment in cash then
            refund will be in either in cash or Mcash (points within your My
            Holistic Club profile to be used on the MHC website). This depends
            on the terms stated in the cancellation policy for that event and
            the type of event. This is clearly stated on the event booking page,
            before you proceed for booking. If payment is done using payment
            gateway then it will be refunded back to same mode used.
            <br/><br />• In case of refund due to cancellation/refund of any sort, please allow 5-7 working days for all transactions to clear. You will be notified via your registered email on successful reimbursement as well as in case of any issue faced for the same.
          </p>
          <br />
          <br />
        </Container>
        <Footer />
      </div>
    )
  }
}

const contStyle = {
  marginTop: "120px",
  marginBottom: "280px"
}

export default Refund
