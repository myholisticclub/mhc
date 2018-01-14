import React, { Component } from "react"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import { Link, Redirect } from "react-router-dom"
import { Dimmer, Loader } from "semantic-ui-react"
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"
import Carousel from "nuka-carousel"
import createReactClass from 'create-react-class'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'
//import DmsCoordinates from "dms-conversion"
import convertDMS from "./latlong"

class Event extends Component {

  state = {
    eventId: this.props.match.params.eventId,
    loggedIn: false,
    user: {},
    userInfo: {},
    eventData:  {
      allow_couple_booking
      :
      "yes"
      , allow_grup_booking
      :
      "yes",
      allow_single_booking
      :
      "yes"
      , alternate_event_type1
      :
      "Learning & Development",
      carousel_one
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507826505661?alt=media&token=276c8f1d-f48c-418a-9f20-56aeead5b248"
      , carousel_three
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507826526028?alt=media&token=3270c372-efc7-489a-b618-3c5c1deeb7bd"
      , carousel_two
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507826531242?alt=media&token=cb200269-6d20-4202-8fa2-1bc2f1f62f8c"
      , closingdatetime
      :
      "31/3/2018 11:00 PM"
      , datetime
      :
      "31/3/2018 11:00 PM"
      , day
      :
      "sun"
      , description
      :
      "If scuba diving is a thing of your bucket list, here's a chance to strike it off the list. This scuba diving experience in Pune is ideal for adventurers, kids, groups or non-swimmers!"
      , duration
      :
      "3 Hrs"
      , enddate
      :
      ""
      , event_type
      :
      "Sports & Fitness"
      , fees_couple_per_member
      :
      "1250"
      , fees_group_per_member
      :
      "1250"
      , fees_single_per_member
      :
      "1300"
      , fess_couple_per_nonmember
      :
      "1500"
      , fess_group_per_nonmember
      :
      "1500"
      , fess_single_per_nonmember
      :
      "1500"
      , gps
      :
      "yes"
      , gpsloc
      :
      "18.559596,73.89870999999994"
      , headerURL
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/sweet_gifs%2F1507826478878?alt=media&token=663d33d8-fd27-4338-aced-1ed040b8668f"
      , key
      :
      "-Kw-cBzzmCERfKfdJpqq"
      , location
      :
      "Divisional Sports Complex Swimming Pool, Shastri Rd, Shastrinagar, Yerawada, Pune, Maharashtra 411006"
      , long_decs
      :
      `<p>&nbsp;<strong>Scuba Diving in Pune: You&rsquo;re Adventures in the Liquid World:</strong></p><ul>
      <li>Been looking eagerly for new and exciting things to do in Pune? Ever thought of breathing underwater? Well, you needn &rsquo; t look any further &ndash; Start your Adventure and explore the Bliss of SCUBA DIVING in PUNE itself with Pune&rsquo;s own PADI Dive centre at the Sub Divisional Sports Complex, Yerwada! It is sure to be the most exhilarating adventure activity in Pune.</li>
      <li>While not an actual scuba certification, our experience will teach you how to use scuba equipment in shallow water and get a quick and easy introduction to what it takes to explore the underwater world.</li>
      </ul>
      <p><strong>Swimming requirements / Do I need to know swimming to try Scuba Diving?</strong>&nbsp;: We say this LOUDLY! you do NOT need to be a swimmer to try SCUBA in Pune. The Try Dive is for everyone from 8 years going to 80! Swimmer or not, everyone can SCUBA!</p>
      <p><strong>Product Description: SCUBA in Pune:</strong></p>
      <ul>
      <li>Discover SCUBA Diving: Take your first breath Underwater with Absolute Scuba</li>
      <li>It&rsquo;s now possible to live your adventure-dream with SCUBA Diving! Sign up for the Try Dive experience any day of the week or as a weekend activity and get acquainted with the heart-pumping, jaw-dropping adventure of SCUBA in Pune.The Blue awaits anyone looking for things to do in Pune &ndash; be it adventurers, kids, groups or non-swimmers!</li>
      <li>Get a hand-held orientation into the beautiful underwater world via SCUBA. Our fun &amp;amp; interactive dives will include knowing SCUBA gear better, getting underwater Pictures taken and go on tandem cruises with the Instructor in the Pool to its deepest part. Experience weightlessness like the Astronauts and explore this&nbsp;globally popular sport.</li>
      <li>Register for the MOST popular way GLOBALLY to start with your SCUBA Adventure! Take back home a special Souvenir Certificate - your First SCUBA participation Certificate!</li>
      </ul>
      <p><strong>Age:</strong></p>
      <p>PADI offers SCUBA Diving experiences and certification courses for children as young as 8 years of age. Certain physiological effects of SCUBA Diving on a child&rsquo;s developing body may pose risks therefore PADI India and Absolute SCUBA restrict kids below the age of 8 to undertake SCUBA diving activity. Similarly, there does not exist an upper age limit for diving, the only criteria are physical health, ability and enthusiasm, of course.</p>
      <p><strong>What to expect: Details about the SCUBA experience:</strong></p>
      <ul>
      <li>As part of the 3 hour Discover SCUBA session, watch yourself transform from an excited novice into someone well-versed with the sport of SCUBA diving. Alongside, learn our lingo too; SCUBA is short for Self Contained Underwater Breathing&nbsp;Apparatus, that&rsquo;s one to start with. As you arrive for your SCUBA diving session, you will be briefed by your PADI&nbsp;Instructor about the history of SCUBA, the do&rsquo;s &amp;amp; don&rsquo;t&rsquo; s and taught a whole new non-verbal language to help you communicate underwater. This informative land- based session will be over before you know it, and you&rsquo;ll find yourself much better prepared to enjoy the SCUBA session! Your PADI Instructor will provide you with&nbsp;world-class SCUBA equipment customized to your fit. And not just any gear &ndash; the best SCUBA gear in India!</li>
      <li>Once you&rsquo;re in the water, you&rsquo;ll be taught to breathe in the confines of the shallows, until you feel comfortable to move to the deep end. When you&rsquo;ve reached your comfort zone, you will be accompanied by your instructor for a&nbsp;ONE on ONE underwater cruise, and can do all sorts of cool stuff underwater. You get to experience Neutral Buoyancy &ndash; the Holy Grail of the SCUBA Diver &ndash; which is the awesome feeling of being Weightless Underwater!&nbsp;Buoyancy control will allow you to try your hand at backflips, somersaults and other snazzy underwater tricks, and we will take great pictures of you making unforgettable.</li>
      <li>This session is only the start of a lifelong adventure you could embark upon with the magical sport of SCUBA diving. Absolute SCUBA Pune assures you that the experience and skills taken from this session will enhance your comfort when you decide to sign up for the PADI Open Water Certification Course in Pune.</li>
      <li>Before you leave the venue, take the opportunity to grab a cup of Coffee with us and interact with our PADI Professional Dive Instructors. Collect your Discover SCUBA Diving certificate, underwater pictures and videos, and get to know more about the PADI courses starting right here in Pune. We have a feeling you will love&nbsp;your session and would love it if you left us a small note in our Guest Book to help us improve where necessary. Your feedback is valuable to us to make SCUBA Diving in Pune a popular weekend activity.</li>
      </ul>
      <p><strong>Inclusions:</strong></p>
      <ul>
      <li>Introduction to SCUBA diving and equipment familiarization</li>
      <li>Professional SCUBAPro Diving equipment which includes the T-One Diving Jacket &amp;amp;MK2/R295 Breathing Regulators 4 mm full body thermal insulation wetsuits</li>
      <li>Regular or prescription masks &amp;amp; Snorkels</li>
      <li>SCUBA Diving Fins from Cressi,Italy, SCUBAPRO, USA &amp;amp; Beuchat, France</li>
      <li>Weights and weight belt</li>
      <li>Government approved 12 litre LUXFER - USA air tanks filled with 2400 litres of<br /> Compressed Air each.</li>
      <li>Underwater photographs and videos</li>
      <li>Participation Certificate from Absolute SCUBA</li>
      <li>Unlimited Tea, Coffee and Water</li>
      <li>Pool hire charges</li>
      <li>All taxes</li>
      </ul>
      <p><strong>Things to carry :</strong></p>
      <ul>
      <li>Swimming Costume</li>
      <li>Dry Towel</li>
      <li>Pen drive/ memory card to take pictures back</li>
      <li>Swimming cap for ladies</li>
      <li>Small snack - for after dive munchies</li>
      <li>A spirit of Adventure!</li>
      </ul>`
      , lowestMember
      :
      1250
      , lowestNonMember
      :
      1500
      , maxno_of_couple_allowed
      :
      "25"
      , maxno_of_people_group
      :
      "50"
      , maxno_of_single_booking
      :
      "50"
      , maxseats
      :
      "50"
      , minno_of_people_group
      :
      "5"
      , on_spot_payment
      :
      "no"
      , overbooking
      :
      "no"
      , policy
      :
      `<p>&nbsp;We will try our best to assist with rescheduling your Dive should you need to and apply NO rescheduling charges.</p>
      <p><strong>However, in case of a cancellation, please note the following terms will apply: </strong></p>
      <ul>
      <li>4 weeks prior to event : 75% of paid amount will be refunded</li>
      <li>2 weeks prior to event : 50% of paid amount will be refunded</li>
      <li>1 week prior to event : 25% of paid amount will be refunded</li>
      </ul>
      <p>&rdquo;No refund applicable on cancellation within one week of the event&rdquo;</p>`
      , policy_name
      :
      "abcd"
      , seats
      :
      "50"
      , shortLocation
      :
      "Yerawada"
      , slots
      :
      { days: Array(6), time: Array(3) }
      , sortId
      :
      "87"
      , startdate
      :
      ""
      , status
      :
      "approved"
      , time
      :
      "9:00 AM"
      , timeSlotType
      :
      "multiple"
      , title
      :
      "Scuba Diving in Pune"
      , transportation
      :
      "no"
      , type
      :
      "abcd"
      , waitlist
      :
      "no"
    },
    modalOpen: false,
    startDate: "",
    noAttendees: 3,
    loading: true,
    userPresent: false,
    isBookedOnce: false,
    pageSet: false,
    finalTotal: 0,
    attendees: [],
    readMore: false,
    transportReq: true
  }



  render() {
      
    const {
      eventData
    }=this.state

    const headingColor = "#0D47A1"
    let maplang
    let maplong

    let finalTotal = 500
    
    let testArray = []
    //let isMemberArray = []

    for (var index = 0; index < this.state.noAttendees; index++) {
      testArray.push(index)
      //this.isMemberArray.push(index)
    }

    return (
      <div>
        
          <FixedMenu loggedIn user navStyle="true" />
          <div
           style={{
              backgroundColor: "#FAFAFA",
              paddingTop: "80px",
              paddingBottom: "40px"
            }}
            className="wrapper"
          >
          
            <div className="container">
         
            <div>
                <h2>{eventData.title}</h2>
                <br />
                <p>
                  {eventData.description}
                  <br />
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  {eventData.location}
                  <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                  {eventData.startdate} {eventData.time}{" "}
                </p>
            
              </div>
              <hr />
         
              <div>
                <div className="col-md-8 offset-md-2">
                
                  <CarouselEvent eventData={eventData} />
                
                </div>
              </div>
              <div>
                <h4 style={{ color: headingColor, fontWeight: "400" }}>
                  Event Details:
              </h4>
                <br />
                
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: eventData.long_decs }}></div>
                      {this.state.lotsToRead && <a onClick={this.showLessClick} style={{ color: "blue", textDecoration: "underline" }}>SHOW LESS</a>}
                    </div>
               
              
              </div>

              <hr />

              {eventData.policy && (
                <div>
                  <h4 style={{ color: headingColor, fontWeight: "400" }}>
                    Cancellation Policy:
                </h4>
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: eventData.policy }} />
                  <br />
                  <hr />
                </div>
              )}

              {eventData.gps && eventData.gpsloc && maplang && maplong && (
                <div>
                  <h4 style={{ color: headingColor, fontWeight: "400" }}>
                    Location:
                </h4>
                  <br />
                  <MyMapComponent
                    maplang={maplang}
                    maplong={maplong}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGvoP2uP4_M_z7z2ZlXYxiZTLfKKKYmYA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                  <br />
                  <hr />
                </div>
              )}

              {eventData.timeSlotType === "multiple" && (
                <div>
                  <h4 style={{ color: headingColor, fontWeight: "400" }}>
                    Pick your slot:
                </h4>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label>Date:</label>

                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleDateChange}
                          dateFormat="DD/MM/YYYY"
                          peekNextMonth
                          dropdownMode="select"
                          minDate={moment()}
                          maxDate={moment(eventData.closingdatetime, "D/M/YYYY h:mm a")}
                          filterDate={this.isInRange}
                          onFocus={e => e.target.blur()}
                        />
                      </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label>Time:</label>
                        <br />

                        <select
                          style={{ width: "200px" }}
                          defaultValue=""
                          onChange={this.handleTimeSlotChange}
                        >
                          {eventData.slots.time.map(time => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <p>
                  Rates begin at INR {eventData.lowest_member} per person for members and at{" "}
                  INR {eventData.lowest_nonmember} per person for non-members (prices are inclusive of all taxes)
              </p>
                <p style={{ color: "red" }}>{this.state.multipleWarning}</p>
               
                  <button
                    className="btn btn-success"
                    onClick={this.proceed1}
                    hidden={this.state.proceed1}
                  >
                    Proceed to Booking
                </button>
                

              
                  <Link to="/dashboard">
                    <button
                      className="btn btn-round btn-info pull-right"
                      hidden
                      onClick
                    >
                      Become a member
                  </button>
                  </Link>
               
                    <Link to="/signup">
                      <button
                        className="btn btn-round btn-info pull-right"
                        hidden
                      >
                        Become a member
                  </button>
                    </Link>
                 
                <br />
                
            </div>
              
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>Type of attendee(s):</label>
                      <select
                        style={{ width: "200px", padding: "4px" }}
                        defaultValue=""
                        
                      >
                        <option value="">Select below</option>

                        {this.state.eventData.allow_single_booking === "yes" && (
                          <option value="single">Individual</option>
                        )}

                        {this.state.eventData.allow_couple_booking === "yes" && (
                          <option value="couple">Couple</option>
                        )}

                        {this.state.eventData.allow_grup_booking === "yes" && (
                          <option value="group">Group</option>
                        )}
                      </select>
                    </div>
                  </div>
                  
                    <div className="col-md-3 col-sm-6">
                      <div className="form-group">
                        <label>No. of attendees:</label>
                        <br />
                        <button
                          className="btn btn-round btn-warning"
                         
                        >
                          <i className="fa fa-plus" aria-hidden="true" />
                        </button>
                        <input
                          value={this.state.noAttendees}
                         
                          style={{ width: "50px" }}
                          hidden
                        />
                        <span style={{ padding: "10px" }}>
                          {this.state.noAttendees}
                        </span>
                        <button
                          className="btn btn-round btn-warning"
                        >
                          <i className="fa fa-minus" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                 
                </div>
              
              <div>
              
                
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <div className="form-group">
                          <label>Name</label>
                          <br />
                          <input
                           
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <br />
                          <input
                            
                            type="email"
                            
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="form-group">
                          <label>Mobile No</label>
                          <br />
                          <input
                           
                            type="tel"
                            maxLength="10"
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                       
                      </div>
                  </div>
              
                  <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>Name</label>
                      <br />
                      <input
                       
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <br />
                      <input
                        
                        type="email"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>Mobile No</label>
                      <br />
                      <input
                       
                        type="tel"
                        maxLength="10"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                   
                  </div>
              </div>
          

              <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <label>Name</label>
                  <br />
                  <input
                   
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <label>Email</label>
                  <br />
                  <input
                    
                    type="email"
                    
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <label>Mobile No</label>
                  <br />
                  <input
                   
                    type="tel"
                    maxLength="10"
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
               
              </div>
          </div>
      
              
              
                 
               
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                      Provide transportation to the venue (we will contact you and arrange for transportation if you check this box, this is not included in the cost)
                    <span className="form-check-sign"></span>
                    </label>
                  </div>
             
              </div>

              
                <div>
                  <p>{this.state.validationWarning}</p>
                  <div className="row">
                    <button
                     
                      className="btn btn-info"
                    >
                      Book Now for ₹{finalTotal}
                    </button>
                  </div>
                  <div className="row">
                    <br />
                   
                    <p>
                      To avail of the special member pricing, please enter valid registered member email ids.
                </p>
                  </div>
                </div>
              

              
            </div>
          
          </div>
          <Footer />
         
          ))}  
      </div>
    )
  }
}


const CarouselEvent = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {

    //console.log("Carousel 2:"+this.props.eventData.carousel_two)

    if(this.props.eventData.carousel_three){
    return (
      <Carousel autoplay wrapAround>
      <img src={this.props.eventData.headerURL} alt="header"/>
      <img src={this.props.eventData.carousel_one} alt="carousel_one"/>
        <img src={this.props.eventData.carousel_two} alt="carousel_two"/>
        <img src={this.props.eventData.carousel_three} alt="carousel_three"/>
      </Carousel>
    )
    } else if(this.props.eventData.carousel_two){
      return (
        <Carousel autoplay wrapAround>
        <img src={this.props.eventData.headerURL} alt="header"/>
        <img src={this.props.eventData.carousel_one} alt="carousel_one"/>
          <img src={this.props.eventData.carousel_two} alt="carousel_two"/>
        </Carousel>
      )
    } else {
      return (
        <Carousel autoplay wrapAround>
        <img src={this.props.eventData.headerURL} alt="header"/>
        <img src={this.props.eventData.carousel_one} alt="carousel_one"/>
        </Carousel>
      )
    }

  }
});

// let goToMap = () => {
//   window.location.assign("https://www.google.co.in/maps/place/"+)
// }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={13}
  defaultCenter={{ lat: parseFloat(props.maplang), lng: parseFloat(props.maplong) }}
>
  {props.isMarkerShown && (
    
    <Marker position={{ lat: parseFloat(props.maplang), lng: parseFloat(props.maplong) }} onClick={()=> window.open("https://www.google.co.in/maps/place/"+convertDMS(parseFloat(props.maplang),parseFloat(props.maplong)))}/>
    
  )}
</GoogleMap>
))

export default Event
