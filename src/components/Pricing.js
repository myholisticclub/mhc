import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
//import { Link } from 'react-router-dom'
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"


class Pricing extends Component {

  state = {
    loggedIn: false,
    user: {}
  }
  render() {

    const { user, loggedIn } = this.state

    return (
      <div>
      <FixedMenu loggedIn={loggedIn} user={user} navStyle='true' />
        <Container  style={contStyle}>
          
          <Header as='h2'>Pricing Policy</Header><br/>
          <p><strong>Price Range</strong></p>
          <p><span>At Olistica Services Private Limited we have customised pricing according to the services rendered by us. The details are provided to you beforehand according to the effort, efficiency and the output of the service. Typically the range of transactions on our website varies from INR Rs 399 to Rs 500000. </span></p>
          <p>&nbsp;</p>
          <p><strong>Schedule of payment</strong></p>
          <p><span>Some of our services can be utilized for fixed durations. In such cases, it is clearly mentioned within the description of these services. The period of usage in these cases vary from 1 month to 1 year. </span></p>
          <p>&nbsp;</p>
          <p><strong>Price Matching</strong></p>
          <p><span>At Olistica Services Private Limited we are committed to offering you the best possible prices. We will be glad to meet our competitor's pricing if you ever find an item that we offer, in the same color and size, available from a similar retailer.</span></p>
          <p>&nbsp;</p>
          <p><span>We are unable to match prices from auction and outlet stores or websites, as well as other retailers' discount promotions, shipping off, rs and gift card offers.</span></p>
          <p>&nbsp;</p>
          <p><strong>Sale Adjustment</strong></p>
          <p><span>If an item you have purchased is reduced in price within two weeks of your order date, we will happily adjust the sale price for you. Please note that we can only make one sale adjustment per item and designer goods originally purchased on sale are excluded.</span></p>
          <p>&nbsp;</p>
          <p><strong>Pricing Errors</strong></p>
          <p><span>We work hard to ensure the accuracy of pricing. Despite our efforts, pricing errors may still occur. If an item's price is higher than the price displayed, we will cancel your order of that item and notify you of the cancellation.</span></p>
          <p>&nbsp;</p>
          <p><strong>Shopping Cart</strong></p>
          <p><span>Items in your Shopping Cart reflect the current price displayed on the item's product details page. Please note: This price may differ from the price displayed when the item was first placed in your Shopping Cart.</span></p>
          <p>&nbsp;</p>
          <p><span>Our merchandise/service is offered for sale by Olistica Services Private Limited for your personal enjoyment and not for resale. Therefore, we reserve the right to refuse to sell to any person whom we believe may be purchasing for resale.</span></p>
          <p>&nbsp;</p>
          <p><span>Our Customer Service Specialists are ready to assist you - simply call 7972084980 12 hours a day.</span></p>
          <br/>
          <br/>
        </Container>
        <Footer/>
        </div>
    );
  }
}

const contStyle = {
  marginTop: '120px'

}



export default Pricing;
