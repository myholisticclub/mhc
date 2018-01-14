import React, { Component } from "react"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"


class AboutUs extends Component {
  state = {
    loggedIn: false,
    user: {}
  }


  render() {
    const { user, loggedIn } = this.state

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div className="page-header page-header-small" style={divStyle}>
          <div className="filter filter-default" />
          <div className="content-center">
            <div className="container">
              <h1>
                Hello, <br /> We are My Holistic Club.
              </h1>
              <h3>Let us tell you more about what we do.</h3>
            </div>
          </div>
        </div>

        <div className="about-us">
        <div className="wrapper">
          <div className="main">
            <div className="section">
              <div className="container">
                <h3 className="title-uppercase">We are on a mission</h3>
                <p>
                Small victories eventually lead to large victories! We at MHC
                believe in making a family that inspires you towards a greater
                personal change. Begin to live each day as it&rsquo;s your last. MHC
                is a one of a kind initiative for personal fulfilment in a hectic
                age. We deliver fun, fascination and fanciful adventure into realms
                of personal development, personal effectiveness and individual
                happiness.
                </p>

                <p>
                Everyone has a potential of being an extraordinary adventurer,
                fulfilled artist or&nbsp;may be a sporty deportista. All it takes is
                small steps in the direction of our passion. Our point is simple at
                MHC we believe on learning more, laughing more and doing what you
                truly love to do. So don&rsquo;t be denied your passion. For what
                lies behind you and what lies in front of you matters little when
                compared to what lies within you.
                </p>

                <h3 className="title-uppercase">
                Our Interest fields
                </h3>
                <p>
                <strong>Parties &amp; Nightlife</strong> &ndash; It includes music
                and dance. Customized birthdays, anniversaries, special day and
                corporate parties at venues like Penthouse, Sin Envy Pride, Oak
                Lounge etc.<br />
                <strong>Food &amp; Dining</strong> &ndash; finest experiences in the
                exotic restaurants in the city eg Tvum, Malaka Spice, Darios and
                Gustos<br />
                <strong>Arts &amp; Culture</strong> &ndash; a calling for all the
                creative heads out there to try your hands on distinctive activities
                like to ink, sketch, dance, sing etc.<br />
                <strong>Travel &amp; Leisure </strong>&ndash;&nbsp;a shout out to
                all the travellers and backpackers to join our exceptionally curated
                travelling packages varying from Himalayan trip to Thailand delight.<br />
                <strong>Adventure and wildlife</strong> &ndash; be enchanted with
                our adrenaline stuffed activities to get your heart racing e.g.
                helicopter ride to Goa, jockeying, go-karting, camping etc<br />
                <strong>Sports and fitness </strong>&ndash;&nbsp;to all the people
                who are done watching sports on TV and want to rekindle the
                passion.eg- cricket, yoga, football, Zumba and golf etc.
                </p>
                <p>
                <strong>Artist and live performance&nbsp;</strong>&ndash;&nbsp;From
                stand-up comedy to in house musician we have it all<br />
                <strong>Spirituality </strong>&ndash;Bhakti me Shakti hai- pilgrim
                tour eg- Shirdi<br />
                <strong>Learning and development </strong>&ndash;We help you enhance
                your emotional quotient. Also we provide daredevil workshops like
                Para-gliding course, scuba-diving etc.
              </p>
              <h3 className="title-uppercase">
              Membership Benefits
              </h3>
              <p>
              A wonderful crafted experience in just Rs 399/-. On a life changing
              odyssey to an ultimate adventure we provide you with a yearly
              membership with never ending benefits like:-
            </p>
            <ul>
            <li>
              End to end experience covering all the expenses like travel, food
              etc
            </li>
            <li>Heavy discounts on our various events and activities.</li>
            <li>Vouchers.</li>
            <li>A platform to raise customized queries.</li>
            <li>
              A card applicable at dining places provides amazing discounts.
            </li>
          </ul>
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
  backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/assets%2FaboutUsBackdrop.jpg?alt=media&token=eecf31f2-8ff5-4d7c-bab6-986de7df86fe)"
}


export default AboutUs
