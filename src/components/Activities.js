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
//import { auth, base } from "../utils/base"
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"
//import Slider from "react-slick"
//import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick-theme.css"

class Activities extends Component {
  state = {
    loggedIn: false,
    user: {},
    redirect: false,
    selectedEvent: "",
    eventsData: [
      {
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
      </ul>
      <p>The <a href="http://geekprank.com/win10-update/" rel="nofollow noopener">Windows update prank</a> can easily trick someone when opened in full screen. It looks and acts like a real install page.</p>`
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
    }, {
      allow_couple_booking
      :
      "yes"
    ,allow_grup_booking
      :
      "yes"
    ,allow_single_booking
      :
      "yes"
    ,carousel_one
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507966380581?alt=media&token=944ecea6-516f-46a4-9677-7438a3b61cb8"
    ,carousel_three
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507966662184?alt=media&token=e8e03ec5-8a71-4275-8bc9-cfd6f3caa6ac"
    ,carousel_two
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1507966571669?alt=media&token=d8a15a96-8309-411c-8f47-7193c320a37f"
    ,closingdatetime
      :
      "31/3/2018 11:00 PM"
    ,datetime
      :
      "31/3/2018 11:00 PM"
    ,day
      :
      "fri"
    ,description
      :
      "If horse riding is your passion and you are always looking for new experiences complimenting your passion, then this is a great opportunity for you. "
    ,duration
      :
      "22 Days, 45 Mins Everday"
    ,enddate
      :
      ""
    ,event_type
      :
      "Adventure & Wildlife"
    ,fees_couple_per_member
      :
      "6100"
    ,fees_group_per_member
      :
      "6100"
    ,fees_single_per_member
      :
      "6200"
    ,fess_couple_per_nonmember
      :
      "6500"
    ,fess_group_per_nonmember
      :
      "6500"
    ,fess_single_per_nonmember
      :
      "6500"
    ,gpsloc
      :
      "18.5204303,73.85674369999992"
    ,headerURL
      :
      "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/sweet_gifs%2F1509733898105?alt=media&token=2d6742fa-72e6-4994-832e-f5ab59876aba"
   , key
      :
      "-Kw-y38D8SmD47WGBTph"
    ,location
      :
      "Shivshrushti, Opp. Abhinav English Medium School, Near Ashok Leyland Company, Mumbai Banglore Highway, Ambegaon Budruk, Pune - 46"
    ,long_decs
      :
      `<p>At Horse Riding Academy we teach Basic as well as advance horse riding skills, we start from walk till games like Show Jumping, Dressage, Hacks and more. For joining any course, minimum age should be 6 years and there is no maximum age limit. You can join on any day of the week. You can choose any of the one batches, each batch is of 45mins for 22days. Rider should be in Full trouser, T-shirt and Shoes, Helmet will be provided. Weekend courses are also available for Students and working professionals</p>
      <p>.<strong>Dress Code</strong> <strong>:</strong> Full Pant and Shoes Compulsory, Helmet will be provided in the academy.</p >
      <p><strong>Course Details ;</strong></p>
      <ul>
        <li>Introduction and Familiarization to the horse.</li>
        <li>Walking the horse.</li>
        <li>Mounting and dismounting the horse.</li>
        <li>Guidance on balancing and posture.</li>
        <li>Directing and controlling the horse.</li>
        </ul>`
    ,lowestMember
    :
      6100
    ,lowestNonMember
    :
      6500
    ,maxno_of_couple_allowed
    :
      "25"
    ,maxno_of_people_group
    :
      "50"
    ,maxno_of_single_booking
    :
      "50"
    ,maxseats
    :
      "1"
    ,minno_of_people_group
    :
      "4"
    ,on_spot_payment
    :
      "no"
    ,overbooking
    :
      "no"
    ,policy
    :
      `<ul>
      <li>You may be part of a group.</li>
      <li>No cancellation before 48 hours.</li>
      <li>Anything that is not specified is chargeable.</li>
      <li>Wear comfortable clothes.</li>
      </ul > `
    ,policy_name
    :
      "abcd"
    ,seats
    :
      "1"
    ,shortLocation
    :
      "Pune"
    ,slots
    :
      { days: Array(5), time: Array(8) }
    ,sortId
    :
      "61"
    ,startdate
    :
      ""
    ,status
    :
      "approved"
    ,time
    :
      "7:00 AM"
    ,timeSlotType
    :
      "multiple"
    ,title
    :
      "Horse riding course"
    ,transportation
    :
      "no"
    ,type
    :
      "abcd"
    ,waitlist
    :
    "no"
      }, {
    
        allow_couple_booking
        :
        "yes"
        , allow_grup_booking
        :
        "yes"
        , allow_single_booking
        :
        "yes"
        , alternate_event_type1
        :
        "Sports & Fitness"
        , carousel_one
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2Fimage(55).jpg?alt=media&token=c86c907f-d746-4675-9ab9-461d34d8fc92"
        , carousel_three
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2Fimage(24).jpg?alt=media&token=31760b08-3694-49e8-b4c5-0b0809992e59"
        , carousel_two
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2Fimage(56).jpg?alt=media&token=81ecddfd-9da2-47a4-9486-f02a7460f759"
        , closingdatetime
        :
        "31/3/2018 11:00 PM"
        , datetime
        :
        "31/3/2018 11:00 PM"
        , day
        :
        "fri"
        , description
        :
        "We assure you, you won't go home disappointed. The team at the site ensures that you get the excitement of paragliding without having to learn it yourself. "
        , duration
        :
        "6"
        , enddate
        :
        ""
        , event_type
        :
        "Adventure & Wildlife"
        , fees_couple_per_member
        :
        "2300"
        , fees_group_per_member
        :
        "2200"
        , fees_single_per_member
        :
        "2300"
        , fess_couple_per_nonmember
        :
        "2500"
        , fess_group_per_nonmember
        :
        "2400"
        , fess_single_per_nonmember
        :
        "2500"
        , gpsloc
        :
        "18.7807977,73.56617719999997"
        , headerURL
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/sweet_gifs%2Fimage(54).jpg?alt=media&token=663ff87b-0fdb-41cc-9d63-88974730464f"
        , key
        :
        "-Kw0Bmeb6Ljvf1DTbd5s"
        , location
        :
        "Uksan, kamshet"
        , long_decs
        :
        `<p>11:00 AM - Arrive at our base camp in Kamshet, which is around 60KM or 90 Mins away from Pune and we start you off with a refreshing welcome tea.</p>
      <p>11:30 AM - Swimming/Playing session in a beautiful lake, beside our base camp.</p>
      <p>1:00 PM - Lunch time!! We serve home cooked delicious veg food.</p>
      <p>2:00 PM - We rest for a while before we leave for the flying site, which is around 4km from our base camp.</p>
      <p>3:00 PM - We head to the flying site, depending on the flying conditions some days we close our session by 5 PM and some days by 6 PM.</p>
      <p>We can also click pictures/videos for you using our GoPros, it will surely be more professional and we give you approx 25-50 pics and few short videos. If you bring your own memory card we will charge you only 500/- for photos and videos.</p>
      <p>**Included - Welcome Tea, Changing/Wash Rooms, Lunch &amp; Paragliding Joyride</p>
      <p>** Excluded - Transportation</p>`
        , lowestMember
        :
        2200
        , lowestNonMember
        :
        2400
        , maxno_of_couple_allowed
        :
        "25"
     
        , policy
        :
        `<ul>
      <li>Prices may vary on special holidays (Long weekends, festivals, government holidays etc.). Please re-confirm the pricing at the time of booking with our customer service team</li>
      <li>An experience might be cancelled or re-scheduled due to bad weather conditions. In such cases, the experience would be rescheduled as per mutual consent between you.</li>
      <li>Most of the experiences once booked cannot be cancelled or re-scheduled. Any modification in your experience booking will be at the host&rsquo;s discretion to accept or reject the booking. The information about cancellations or modification on bookings have to be informed at least 48 hours in advanc</li>
      </ul>`
     
        , seats
        :
        "50"
        , shortLocation
        :
        "kamshet"
        , slots
        :
        { days: Array(5), time: Array(1) }
        , sortId
        :
        "81"
        , startdate
        :
        ""
        , status
        :
        "approved"
        , time
        :
        "11:00 AM"
        , title
        :
        "Paragliding In Kamshet (Weekdays)"
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
      {
        allow_couple_booking
        :
        "yes"
        , alternate_event_type1
        :
        "Travel & Leisure"
        , carousel_one
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1508327098720?alt=media&token=42f99cb8-bfa7-4cfe-bc0d-020d027fdcbc"
        , carousel_three
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1508327421056?alt=media&token=5af29879-743b-4a10-9c22-4ed28d9b7366"
        , carousel_two
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/carousel%2F1508327305794?alt=media&token=8bafaec4-adca-44dc-9ce3-cb0dc8df0355"
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
        `<p>Ashtavinayaka literally means "eight Ganeshas" in Sanskrit. Ganesh is the Hindu deity of unity, prosperity & learning and removes obstacles."</p>`
    ,duration
        :
        "2 Days & 1 Night "
        , enddate
        :
        ""
        , event_type
        :
        "Spirituality"
        , fees_couple_per_member
        :
        "3800"
        , fees_group_per_member
        :
        "3800"
        , fees_single_per_member
        :
        "4000"
        , fess_couple_per_nonmember
        :
        "4500"
        , headerURL
        :
        "https://firebasestorage.googleapis.com/v0/b/mhcv2-77c5d.appspot.com/o/sweet_gifs%2F1509452051490?alt=media&token=3a8300df-5940-4ca3-97ac-a4b0965bcddd"
        , key
        :
        "-KwjMBKI6vVrwroQnN0Q"
        , location
        :
        "Pune"
        , long_decs
        :
        `<p><strong>Day 1:</strong></p>
    <p>Pune - Morgaon - Siddhatek - Theur &ndash; Ranjangaon Night Halt at Lenyadri. </p>
    <p><strong>Day 2:</strong></p>
    <p>Lenyadri - Ozar - Pali - Mahad - Return to Pune. </p>
    <p><strong>Yatra Includes:</strong></p>
    <ul>
    <li>Travel by 2x2 Luxury Coach.</li>
    <li>Delicious Meals served twice a day. Morning Breakfast &amp; Tea/Coffee served 2 times in a day.</li>
    <li>One Night stay </li>
    </ul>
    ↵<p><strong>Pickup Points in Pune:</strong></p>
    ↵<ul>
    ↵<li>Starts from Nigdi at 6.00 am.</li>
    ↵<li>Chinchwad ( Elpro Chowk )</li>
    ↵<li>Kalewadi Phata</li>
    ↵<li>Yerwada ( Gunjan Theatre )</li>
    ↵<li>Shivaji Nagar ( Bus stand )</li>
    ↵<li>Nashik Phata</li>
    ↵<li>Dapodi</li>
    <li>Hadapsar ( Gaadi Taal )</li>
    </ul>`
   
        , policy
        :
        `<ul>
    ↵<li>Cancellation will not be allowed once payment is received.</li>
    ↵<li>Please call for further clarification.</li>
    ↵</ul>
    ↵<p>&nbsp;</p>`
        , policy_name
        :
        "abcd"
        , seats
        :
        "50"
        , shortLocation
        :
        "Pune"
      }
    ],
    eventTypes: [
    { event_type: "Parties & Nightlife", key: "-KuJwULAq1dZdAL6eDGR" },
    {event_type: "Food & Dining", key: "-KuJwX1EMAX-kN9WI5pC"},
    {event_type: "Arts & Culture", key: "-KuJwZwvB23YHoi-iXqc"},
    {event_type: "Travel & Leisure", key: "-KuJx3UihY4eJjOR6lBe"},
    { event_type: "Adventure & Wildlife", key: "-KuJx7JP_g1o1u4LdkKz" },
    {event_type: "Sports & Fitness", key: "-KuJxCieXoletIBg8s3H"},
    {event_type: "Artist & Live performance", key: "-KuJxJ4F7QjbidaBE30o"},
    { event_type: "Spirituality", key: "-KuJxOHRaF0191jFXvN9" },
    { event_type: "Learning & Development", key: "-KuJxTUaBDFtw9rUsxr1" }
    ],
    userInfo: {},
   
    loading: false
  }
 


  render() {
    const {
      user,
      loggedIn,
      eventsData,
      redirect,
      selectedEvent,
      eventTypes,
      setEventType,
      setDay,
      setDate,
      loading
    } = this.state

   

    return (
      <div>
        <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
        <div style={{ backgroundColor: "#F5F5F5" }} className="wrapper">
          <div className="container">
            <div className="row">
              <div style={contStyle}>
                <div className="col-md-12">
                  <h2>Events & Activities</h2>
                  <p>Check out the amazing activities below:</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <label>Event Type:</label>
                  <select
                    style={{ padding: "4px" }}
                    defaultValue=""
                    value={setEventType}
                    onChange={this.eventTypeChanged}
                  >
                    <option value="">All</option>
                    {eventTypes.map(eventType => (
                      <option value={eventType.event_type} key={eventType.key}>
                        {eventType.event_type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-3 col-sm-6" style={{ zIndex: 100 }}>
                <div className="form-group" style={{ zIndex: 100 }}>
                  <label>Date:</label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    dateFormat="D/M/YYYY"
                    peekNextMonth
                    minDate={moment()}
                    style={{ zIndex: 100 }}
                    onFocus={(e)=>e.target.blur()}
                  />
                </div>
              </div>
            
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <button
                      className="btn btn-round btn-info pull-left"
                      onClick={this.resetFilter}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              
            </div>

            <hr />
            <div>
              <div className="row">
              {eventsData.map(event => (   
               
                  <div className="col-md-4 col-sm-6" key>
                    <Route
                      render={({ history }) => (
                        <div
                          className="card card-blog"
                          onClick
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
                            <h5 className="card-title"></h5>
                            <div className="card-description">
                              {event.description}
                            </div>
                            <hr />
                            <div>
                              <p>Prices start at <span style={{ fontFamily: "Arial" }}>₹</span> {event.lowestMember}</p>
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
                                {this.state.eventsData.shortLocation}
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
              
            </div>
          </div>
          <Footer />
          <Dimmer active={loading}>
            <Loader>
              Arranging chairs...<br />
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

export default Activities
