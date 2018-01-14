import React, { Component } from "react"
import { Loader, Dimmer } from "semantic-ui-react"
import { Link, Redirect } from "react-router-dom"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"
import moment from "moment"
import { ModalContainer, ModalDialog } from "react-modal-dialog"

class UserDash extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    loggedIn: false,
    user: {},
    userInfo: {},
    activeItem: "Profile",
    loading: true,
    ordersHistory: [],
    referralCode: "",
    checkButtonText: "Check",
    referredBy: "",
    referredByName: "",
    yourReferrals: [],
    redirectToEdit: false,
    showModal: false,
    showModal2: false,
    warning: "",
    estBudget: "",
    peopleNo: ""
  }

  clickProfileSection() {
    // Explicitly focus the text input using the raw DOM API
    this.profileSection.click()
  }

  clickMemberSection() {
    // Explicitly focus the text input using the raw DOM API
    this.memberSection.click()
  }

  clickBookingSection() {
    // Explicitly focus the text input using the raw DOM API
    this.bookingSection.click()
  }

  componentDidMount() {
    if (sessionStorage.openOnInDash === "MemberSubscription") {
      this.clickMemberSection()
    } else if (sessionStorage.openOnInDash === "BookingHistory") {
      this.clickBookingSection()
    } else {
      this.clickProfileSection()
    }

  //   base
  //     .fetch(`appSettings`, {
  //       context: this
  //     })
  //     .then(data => {
  //       this.setState({ nextShareCode: data.nextShareCode })
  //     })

  //   auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("Esss")
  //       this.setState({
  //         loggedIn: true,
  //         user: user
  //       })
  //       console.log(user)
  //       base
  //         .fetch(`users/${user.uid}`, {
  //           context: this
  //         })
  //         .then(data => {
  //           this.setState({
  //             userInfo: data
  //           })
  //           console.log(this.state.userInfo)
  //           this.setState({ loading: false })
  //           if (!this.state.userInfo.type) {
  //             this.setState({ redirectToWelcome: true })
  //           }
  // if (data.orderHistory) {
  //   let orderHistoryJSON = data.orderHistory
  //   let keys = orderHistoryJSON.keys()
  //   let jsonArray = []

  //   while (keys.hasNext()) {
  //     let key = keys.next()
  //     jsonArray.put(orderHistoryJSON.get(key))
  //   }
  //   console.log("JSONarray is: " + jsonArray)
  //   this.setState({
  //     ordersHistory: jsonArray
  //   })
  // }
  //           base
  //             .fetch(`users/${user.uid}/orderHistory`, {
  //               context: this,
  //               asArray: true,
  //               queries: {
  //                 //orderByChild: 'iq',
  //                 limitToLast: 3
  //               }
  //             })
  //             .then(data => {
  //               console.log(data)
  //               this.setState({ ordersHistory: data })
  //               //console.log(this.state.eventsData[0].carousel_one);
  //             })
  //             .catch(error => {
  //               //handle error
  //             })

  //             base
  //             .fetch(`referrals`, {
  //               context: this,
  //               asArray: true,
  //               queries: {
  //                 orderByChild: "referredBy",
  //                 equalTo: user.uid
  //               }
  //             })
  //             .then(data => {
  //               console.log("Your referrals: " + data)
  //               this.setState({ yourReferrals: data })
  //             })

  //         })
  //         .catch(error => {
  //           //handle error
  //           console.log(error)
  //         })

        
  //     } else {
  //       console.log("naaaaaa")
  //       this.setState({
  //         redirectToHome: true
  //       })
  //     }
  //   })
  //   window.scrollTo(0, 0)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit = () => {
    console.log("submit clicked")
  }

  getNewUserInfo = () => {
    // base
    //   .fetch(`users/${this.state.user.uid}`, {
    //     context: this
    //   })
    //   .then(data => {
    //     this.setState({
    //       userInfo: data
    //     })
    //   })
  }

  handlePayment(amount) {
    let shareCode

    let userUID = this.state.userInfo.uid
    let eventID = "membershipFees"
    let name = this.state.userInfo.name
    let email = this.state.userInfo.email
    let number = this.state.userInfo.mobileNo

    if (this.state.nextShareCode) {
      shareCode = name.substr(0, 3).toUpperCase() + this.state.nextShareCode
    } else {
      return
    }

    let nextShareCode = this.state.nextShareCode + 1
    this.handleClose()

    let referredBy = ""
    let referredByName = ""
    if (this.state.checkButtonText === "Continue") {
      referredBy = this.state.referredBy
      referredByName = this.state.referredByName
    }

    // console.log("transfer check")
    // console.log(name)
    // console.log(email)
    // console.log(number)
    let options = {
      key: "rzp_live_5BFbJHjT5XYCBQ",
      //key: "rzp_test_nFonk1E46TDMqo",
      amount: amount * 100, // 2000 paise = INR 20
      name: "My Holistic Club",
      description: "Memebership Fees",
      //"image": "/your_logo.png",
      handler: function (response) {
        //alert(response.razorpay_payment_id);
        console.log(userUID)
        console.log(eventID)
        if (response.error_code) {
          alert(
            `Something has gone wrong, please retry your payment and if this problem persists, please contact our support team. Error Code ${response.error_code}`
          )
        } else {
          console.log(`Razorpay payment id: ${response.razorpay_payment_id}`)
                  // base
                  //   .push("paymentTransactions", {
                  //     data: {
                  //       userId: userUID,
                  //       RazorpayPaymentId: response.razorpay_payment_id,
                  //       eventId: eventID,
                  //       userName: name,
                  //       userEmail: email,
                  //       userContact: number,
                  //       eventName: "For Membership Fees",
                  //       totalPaid: amount,
                  //       bookDateTime: moment().format("DD/MM/YYYY, h:mm:ss a")
                  //     }
                  //   })
                    .then(newLocation => {
                      let generatedKey = newLocation.key
                      base
                        .push(`users/${userUID}/orderHistory`, {
                          data: {
                            userId: userUID,
                            RazorpayPaymentId: response.razorpay_payment_id,
                            eventId: eventID,
                            internalPTKey: generatedKey,
                            bookDateTime: moment().format("DD/MM/YYYY, h:mm:ss a")
                          }
                        })
                        .then(() => {
                          console.log("Payment details update successful")
                        })
                        .catch(err => {
                          //handle error
                          console.log(
                            `Error in pushing data to users order history, error is: ${err}`
                          )
                        })
                      base
                        .update(`appSettings`, {
                          data: {
                            nextShareCode: nextShareCode
                          }
                        })
                        .then(() => {
                          console.log("Next Share Code updated")
                        })
                        .catch(err => {
                          //handle error
                          console.log(
                            `Error in updating Next Share Code, error is: ${err}`
                          )
                        })
                      base
                        .update(`users/${userUID}`, {
                          data: {
                            subscription: {
                              datePaid: moment().format("DD/MM/YYYY, h:mm:ss a"),
                              RazorpayPaymentId: response.razorpay_payment_id,
                              validUpto: moment()
                                .add(365, "days")
                                .format("DD/MM/YYYY"),
                              internalPTKey: generatedKey
                            },
                            referredBy: referredBy,
                            referredByName: referredByName,
                            type: "member",
                            shareCode: shareCode
                          }
                        })
                        .then(() => {
                          console.log("Subscription details update successful")
                          console.log("Membership type details update successful")
                          //this.setState({ paymentComplete: true })
                          if (referredBy) {
                            base
                              .push(`referrals`, {
                                data: {
                                  userJoined: userUID,
                                  userJoinedName: name,
                                  datePaid: moment().format("DD/MM/YYYY, h:mm:ss a"),
                                  referredBy: referredBy,
                                  referredByName: referredByName
                                }
                              })
                              .then(() => {
                                console.log("Referrals Database Updated!")
                                window.location.href = "/dashboard"
                              })
                              .catch(err => {
                                //handle error
                                console.log(
                                  `Error in pushing data to referrals db, error is: ${err}`
                                )
                              })
                          } else {
                            window.location.href = "/dashboard"
                          }
                        })
                        .catch(err => {
                          //handle error
                          console.log(
                            `Error in pushing data to users order history, error is: ${err}`
                          )
                        })
                    })
                    .catch(err => {
                      console.log(
                        `Error in pushing data to payment Transactions, error is: ${err}`
                      )
                    })
                  //available immediately, you don't have to wait for the Promise to resolve
                  //let generatedKey = immediatelyAvailableReference.key;
                }
              },
              prefill: {
                name: name,
                email: email,
                contact: number
              },
              notes: {
                address: "Hello World"
              },
              theme: {
                color: "#F37254"
              }
            }

            let rzp1 = new Razorpay(options) // eslint-disable-line
            rzp1.open()
          }

          editProfile = () => {
            console.log(
              "Profile cannot be edited at the moment, please report this issue to MHC team"
            )
            this.setState({ redirectToEdit: true })
          }

          handleOpen = () => this.setState({ showModal: true })
          handleClose = () => this.setState({ showModal: false })

          handleOpenUnsubscribe = () => this.setState({ showModals: true })
          handleCloseUnsubscribe = () => this.setState({ showModals: false })
          sendYes = () => this.setState({ showModalYes: true, showModals: false })
          sendNo = () => this.setState({ showModalYes: false })
          sendClicked = () => this.setState({ showSend: true, showModalYes: false })
          sendCancle = () => this.setState({ showSend: false })

          handleRCChange = event => {
            this.setState({
              referralCode: event.target.value,
              checkButtonText: "Check"
            })
          }

          RCCheck = () => {
            if (this.state.checkButtonText === "Continue") {
              this.handlePayment(399)
              return
            }

            if (
              this.state.referralCode &&
              this.state.referralCode.length > 5 &&
              this.state.referralCode.length < 9
            ) {
              console.log("Checker ran")
              this.setState({ RCmessage: "Checking if it is a valid code..." })

              let checkCode = this.state.referralCode.toUpperCase()
              console.log(checkCode)
              base
                .fetch(`users`, {
                  context: this,
                  asArray: true,
                  queries: {
                    orderByChild: "shareCode",
                    equalTo: checkCode
                  }
                })
                .then(data => {
                  console.log(data)
                  if (data.length === 1) {
                    this.setState({
                      RCmessage: "Valid! Woohoo",
                      checkButtonText: "Continue",
                      referredBy: data[0].uid,
                      referredByName: data[0].name
                    })
                    //console.log(data[0].uid)
                  } else {
                    this.setState({
                      RCmessage:
                        "Yikes this didn't match, try another or skip this step"
                    })
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              this.setState({ RCmessage: "Enter a valid refferal code!" })
            }
          }

          // clickDiv = (el) => {
          //   el.click()
          // }
          // ref = {this.clickDiv}

          //

          resendEmail = order => {
            console.log(order)

            let data = {
              company: "mhc",
              templateName: "bookingConfirm",
              emailSubject: `Booking Received - My Holistic Club`,
              emailTo: this.state.userInfo.email,
              emailData: {
                name: this.state.userInfo.name,
                bookingId: order.key,
                dateOfBooking: order.bookDateTime,
                eventName: order.eventName,
                eventLocation: order.eventLocation,
                eventDateTime: order.eventDateTime,
                attendees: order.attendees,
                amountPaid: order.totalPaid
              }
            }

            let dataString = JSON.stringify(data)

            fetch("https://inevitable-mail-server.herokuapp.com/sendmail", {
              method: "post",
              headers: {
                "content-type": "application/json"
              },
              body: dataString
            })
              .then(data => {
                if (data.statusText === "OK") {
                  console.log("Email sent successfully")
                }
              })
              .catch(err => {
                console.log("Error man: " + err)
              })
          }

          handleOpen2 = () => this.setState({ showModalYes: true })
          handleClose2 = () => this.setState({ showModal2: false })

          handleEstBudgetChange = e => {
            //let newBudget
    
            if (this.validateNumber(e.target.value)) {
              // console.log(e.target.value)
              // newBudget = e.target.value
              this.setState({ estBudget: e.target.value })
            }
     
            // else {
            //   this.budget.value = ""
            // }
          }

          handlePeopleNoChange = e => {
            if (this.validateNumber(e.target.value)) {
              //let peopleNum = e.target.value.replace("e", "")
              //peopleNum = peopleNum.replace("-", "")
              this.setState({ peopleNo: e.target.value })
            }
          }

          sendClicked2 = () => {
    
            console.log("send query clicked")
    
            this.setState({ warning: ""})
            if (
              this.description.value
            ) {
                // if(!this.validatephno(this.phno.value)){
                //   return false
                //   this.setState({ warning: "Please enter a valid phone number" })
                // }
                this.setState({loading: true})
                let data = {
                  company: "mhc",
                  templateName: "corpQuery",
                  emailSubject: "A member is requesting a customised event query",
                  emailTo: "contact@myholisticclub.com",
                  emailData: {
                    name: this.state.userInfo.name,
                    emailAddress: this.state.userInfo.email,
                    phno: this.state.userInfo.mobileNo,
                    noOfPeople: this.noOfPeople.value,
                    budget: this.state.estBudget,
                    eventType: this.eventType.value,
                    message: this.description.value,
                    dateTime: moment().format("MMMM Do YYYY, h:mm:ss a")
                  }
                }

                let dataString = JSON.stringify(data)

                fetch("https://inevitable-mail-server.herokuapp.com/sendmail", {
                  method: "post",
                  headers: {
                    "content-type": "application/json"
                  },
                  body: dataString
                })
                  .then(data => {
                    if (data.statusText === "OK") {
                      this.setState({
                        warning:
                          "Email sent successfully, we'll get back to you at the earliest."
                      })
                      this.noOfPeople.value = ""
                      this.budget.value = ""
                      this.eventType.value = ""
                      this.description.value = ""
                    }
                    this.setState({loading: false,
                      estBudget: "",
                      peopleNo: ""
                      })
                  })
                  .catch(err => {
                    console.log("Error man: " + err)
                    this.setState({loading: false})
                  })
            } else {
              this.setState({
                warning: "Please enter at least event decription"
              })
            }
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

          render() {
            const { loggedIn, user, activeItem, userInfo, estBudget } = this.state

            let validUpto
            if (userInfo.subscription) {
              validUpto = userInfo.subscription.validUpto
            }
            let showUnscribe = false
            //validUpto = "01/11/2018"
            let showUnsubscribeTill = moment(validUpto,"DD/MM/YYYY").subtract(350, 'days')
            let diff = moment().diff(showUnsubscribeTill, 'days')
            if(diff < 1){
              showUnscribe = true
            }

            let width
            if(window.innerWidth>440){
              width = 400
            } else {
              width = parseInt(window.innerWidth*0.8,10)
            }


            let yourRefs = this.state.yourReferrals
          let yourRefs = this.state.yourReferrals.filter(referral=>{
            if(user.uid === referral.referredBy){
              return true
            } else {
              return false
            }
          })
          


          return (
            <div
              style={{
                backgroundColor: "#F5F5F5",
                display: "flex",
                flexDirection: "column",
                height: "100vh"
              }}
            >
              <Dimmer active={this.state.loading}>
                <Loader>Loading...</Loader>
              </Dimmer>
              <FixedMenu loggedIn={loggedIn} user={user} navStyle="true" />
              <div style={contStyle} className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="acordeon">
                      <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="card no-transition">
                          <div
                            className="card-header card-collapse"
                            role="tab"
                            id="headingOne"
                          >
                            <h5 className="mb-0 panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                                ref={section => {
                                  this.profileSection = section
                                }}
                              >
                                Profile
                          <i className="fa fa-angle-down" />
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                          >
                            <div className="card-block">
                              <div>
                                <h5>{userInfo.name}</h5>
                                <div style={rightButton}>
                                  <button
                                    className="btn btn-default btn-just-icon"
                                    onClick={() => this.editProfile()}
                                  >
                                    <i className="fa fa-pencil" />
                                  </button>
                                </div>
                              </div>
                              <p>{userInfo.profession}</p>
                              <p>Email Id: {userInfo.email}</p>
                              <p>Mobile No.: {userInfo.mobileNo}</p>
                              <p>Whatsapp No.: {userInfo.whatsappNo}</p>
                            </div>
                          </div>
                          <div
                            className="card-header card-collapse"
                            role="tab"
                            id="headingTwo"
                          >
                            <h5 className="mb-0 panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Details
                          <i className="fa fa-angle-down" />
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                          >
                            <div className="card-block">
                              <div>
                                <h5>Saved Address</h5>
                                <div style={rightButton}>
                                  <button
                                    className="btn btn-default btn-just-icon"
                                    onClick={() => this.editProfile()}
                                  >
                                    <i className="fa fa-pencil" />
                                  </button>
                                </div>
                              </div>
                              {userInfo.addLine1}
                              <br />
                              {userInfo.addLine2}
                              <br />
                              {userInfo.city}
                              <br />
                              {userInfo.state}
                              <br />
                              {userInfo.zipcode}
                              <br />
                              <hr />
                              <h5>Information</h5>
                              <p>Profession: {userInfo.profession}</p>
                              <p>Date of Birth: {userInfo.dob}</p>
                              <p>Gender: {userInfo.gender}</p>
                              <hr />
                              <p>
                                Incase of any descrepencies with regard to the
                          services provided, please feel free to contact us
                        </p>
                              <div style={rightButton}>
                                <Link to="/contact">
                                  <button className="btn btn-info">Contact Us</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div
                            className="card-header card-collapse"
                            role="tab"
                            id="headingThree"
                          >
                            <h5 className="mb-0 panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                ref={section => {
                                  this.bookingSection = section
                                }}
                              >
                                Booking History
                          <i className="fa fa-angle-down" />
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                          >
                            <div className="card-block">
                              {!userInfo.orderHistory ? (
                                <p>
                                  No booking to show yet! Check out one of the amazing
                            experiences we have to offer
                          </p>
                              ) : (
                                  <div>
                                    <p>Your past bookings:</p>
                                    {this.state.ordersHistory.map(order => {
                                      if (order.eventId === "membershipFees") {
                                        return (
                                          <div>
                                            <h4>For Membership Fees</h4>
                                            <span> (₹399)</span>
                                            <hr />
                                          </div>
                                        )
                                      } else {
                                        return (
                                          <div>
                                            <h4>Event: {order.eventName}</h4>
                                            <span>(₹{order.totalPaid})</span>
                                            <p>
                                              Event Type: {order.eventType}
                                              <br />
                                              Event Date & Time: {order.eventDateTime}
                                              <br />
                                              No. of attendees: {order.attendees.length}
                                              <br />
                                            </p>
                                            &nbsp;
                                    <Link to={"/event/" + order.eventId}>
                                              <button className="btn btn-info">
                                                View Event
                                      </button>
                                            </Link>&nbsp;
                                    <button
                                              className="btn btn-info btn-outline-info"
                                              onClick={() => this.resendEmail(order)}
                                            >
                                              Resend Booking Email
                                    </button>
                                            <hr />
                                          </div>
                                        )
                                      }
                                    })}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div
                            className="card-header card-collapse"
                            role="tab"
                            id="headingFour"
                          >
                            <h5 className="mb-0 panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                                ref={section => {
                                  this.memberSection = section
                                }}
                              >
                                Club Subscription
                          <i className="fa fa-angle-down" />
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseFour"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour"
                          >
                            <div className="card-block">
                              <h5>Member Subscription</h5>
                              {userInfo.type === "member" && (
                                <div>
                                  <p>
                                    We are so glad to have you as a member on board
                              with us!
                            </p>
                                  <p>Your membership is valid upto: {validUpto}</p>
                                  <p>
                                    Enjoy your privileges and ask your family &
                              friends to join us
                            </p>
                                  {showUnscribe && (
                                    <button
                                      className="btn btn-outline-default"
                                      style={rightButton}
                                      onClick={this.handleOpenUnsubscribe}
                                    >
                                      Unsubscribe
                            </button>
                                  )}
                                </div>
                              )}
                              {userInfo.type !== "member" && (
                                <div>
                                  <p>
                                    It's time you upgraded your privileges. Come
                              become a member and unlock a world of perks.
                            </p>
                                  <p>
                                    A wonderful crafted experience in just{" "}
                                    <strong>Rs 399/-</strong>. On a life changing
                              odyssey to an ultimate adventure we provide you
                              with a yearly membership with never ending
                              benefits like:
                            </p>
                                  <ul>
                                    <li>
                                      End to end experience covering all the expenses
                                like travel, food etc
                              </li>
                                    <li>
                                      Heavy discounts on our various events and
                                activities.
                              </li>
                                    <li>Vouchers</li>
                                    <li>A platform to raise customized queries.</li>
                                    <li>
                                      A card applicable at dining places provides
                                amazing discounts.
                              </li>
                                  </ul>

                                  <p>Membership Validity: 1 year</p>
                                  <p>
                                    Membership fees: <strong>₹ 399</strong>
                                  </p>
                                  <p>Click below to join the club</p>
                                  <div style={rightButton}>
                                    <button
                                      className="btn btn-warning"
                                      onClick={this.handleOpen}
                                    >
                                      1 year Membership
                              </button>
                                  </div>
                                  <br />
                                  <br />
                                </div>
                              )}
                            </div>
                          </div>
                          {userInfo.type === "member" && (
                            <div>
                              <div
                                className="card-header card-collapse"
                                role="tab"
                                id="headingFive"
                              >
                                <h5 className="mb-0 panel-title">
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                  >
                                    Referral Program
                              <i className="fa fa-angle-down" />
                                  </a>
                                </h5>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingFive"
                              >
                                <div className="card-block">
                                  <h5>Your Referral Code: {userInfo.shareCode}</h5>
                                  <p>
                                    Share your special referral code with your friends
                              and family and benefit from their bookings!!
                            </p>
                                  {(yourRefs.length !== 0) && (
                                    <div><p>Your Referrals</p>
                                      <hr /></div>
                                  )}
                                  {yourRefs.map(referral => (
                                    <div>
                                      <div>
                                        <p>Name: {referral.userJoinedName}</p>
                                        <p>Date Joined: {referral.datePaid}</p>
                                        <hr />
                                      </div>
                                    </div>
                                  ))}
                                  {(yourRefs.length === 0) && (
                                    <div><p>No referral to show yet</p>
                                      <hr /></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                          {userInfo.type === "member" && (
                            <div>
                              <div
                                className="card-header card-collapse"
                                role="tab"
                                id="headingSix"
                              >
                                <h5 className="mb-0 panel-title">
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                  >
                                    Customised Queries
                              <i className="fa fa-angle-down" />
                                  </a>
                                </h5>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingSix"
                              >
                                <div className="card-block">
                                  <p>
                                    Do you have a personal group of friends who want
                              to do something unique over the weekend. Or your
                              office group wants to shake things up a little
                              bit. Or maybe your entire family is over for a
                              holiday and you want to arrange a special lunch
                              for everyone. Let us help you plan it all out and
                              execute it too. Just send us a query by clikcing
                              the button below. Tell us the type of event you
                              are looking for and how many people you are
                              expecting along with your expected budget and we
                              will get back to you right away.
                            </p>
                                  <button onClick={this.handleOpen2} className="btn btn-primary">Request a custom event</button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              {this.state.showModal2 && (
                <ModalContainer onClose={this.handleClose2} style={{ zIndex: "100" }}>
                  <ModalDialog onClose={this.handleClose2}>
              
                    <p>
                      Enter the details of your needs and we'll get
                back to you with an irreristable offer.
              </p>

                    <label style={{ marginTop: "10px" }}>
                      Approx number of people:
              </label>
                    <input
                      type="text"
                      className="form-control border-input"
                      ref={input => (this.noOfPeople = input)}
                      value={this.state.peopleNo}
                      onChange={this.handlePeopleNoChange}
                      placeholder="No. of people"
                    />
                    <label style={{ marginTop: "10px" }}>Estimated Budget:</label>
                    <input
                      type="text"
                      name="budget"
                      className="form-control border-input"
                      ref={input => (this.budget = input)}
                      value={estBudget}
                      onChange={this.handleEstBudgetChange}
                      placeholder="per person or total"
                    />
                    <label style={{ marginTop: "10px" }}>Type of Event:</label>
                    <br />
                    <select defaultValue="" ref={input => (this.eventType = input)}>
                      <option value="">Pick an event type</option>
                      <option value="Party">Party</option>
                      <option value="Food & Dining">Food & Dining</option>
                      <option value="Arts & Culture">Arts & Culture</option>
                      <option value="Travel & Leisure">Travel & Leisure</option>
                      <option value="Adventure & Wildlife">
                        Adventure & Wildlife
                </option>
                      <option value="Sports & Fitness">Sports & Fitness</option>
                      <option value="Artist & Live performance">
                        Artist & Live performance
                </option>
                      <option value="Spirituality">Spirituality</option>
                      <option value="Learning & Development">
                        Learning & Development
                </option>
                    </select>
                    <br />
                    <label style={{ marginTop: "10px" }}>Short Description*:</label>
                    <textarea
                      type="text"
                      rows="3"
                      maxLength="350"
                      className="form-control border-input"
                      ref={input => (this.description = input)}
                      placeholder="Any specific information you would like to let us know"
                    />
                    <br />
                    <p style={{ color: "red" }}>{this.state.warning}</p>
                    <br />
              
                    <button
                      onClick={() => this.sendClicked2()}
                      className="btn btn-primary pull-right"
                      style={{ marginLeft: "16px" }}
                    >
                      Send Query
              </button>
                    <button className="btn btn-warning pull-right" onClick={this.handleClose2}>Cancel</button>
                    <br />
              
                  </ModalDialog>
                </ModalContainer>
              )}
              {this.state.showModal && (
                <ModalContainer>
                  <ModalDialog>
                    <h4>Do you have a Referral Code?</h4>
                    <p>
                      Enter it here and both you and your friend benefit on your first
                booking! :)
              </p>
                    <label>Referral Code:</label>
                    <input
                      type="text"
                      className="form-control border-input"
                      label="Referral Code"
                      value={this.state.referralCode}
                      name="referralCode"
                      onChange={this.handleRCChange}
                      style={{ textTransform: "uppercase" }}
                    />
                    <p>{this.state.RCmessage}</p>
                    <button onClick={this.handleClose}>Cancel</button>
                    <button onClick={() => this.handlePayment(399)}>Skip</button>
                    <button onClick={this.RCCheck}>
                      {this.state.checkButtonText}
                    </button>
                  </ModalDialog>
                </ModalContainer>
              )}

              {this.state.redirectToWelcome && <Redirect to={"/welcome"} />}
              {this.state.paymentComplete && <Redirect to={"/dashboard"} />}
              {this.state.redirectToEdit && <Redirect to={"/edit"} />}
              {this.state.redirectToHome && <Redirect to={"/"} />}

              {this.state.showModals && (
                <ModalContainer onClose={this.handleCloseUnsubscribe}>
                  <ModalDialog onClose={this.handleCloseUnsubscribe}>
                    <h5>
                      Are you sure you wish to unsubscribe from membership with My
                Holistic Club ?
              </h5>
                    <br />
                    <button
                      onClick={this.sendYes}
                      className="btn btn-primary pull-right"
                      style={{ marginLeft: "16px" }}
                    >
                      Yes
              </button>
                    <button
                      className="btn btn-warning pull-right"
                      onClick={this.handleCloseUnsubscribe}
                    >
                      No
              </button>
                    <br />
                  </ModalDialog>
                </ModalContainer>
              )}
              {this.state.showModalYes && (
                <ModalContainer onClose={this.sendNo}>
                  <ModalDialog onClose={this.sendNo}>
                    <h5>Reason for unsubscribing</h5>
                    <textarea style={{ width: `${width}px` }} placeholder="Tell us more" />
                    <br />
                    <button
                      onClick={() => this.sendClicked}
                      className="btn btn-primary pull-right"
                      style={{ marginLeft: "16px" }}
                    >
                      Send
              </button>
                    <button
                      className="btn btn-warning pull-right"
                      onClick={this.sendNo}
                    >
                      Cancel
              </button>
                    <br />
                  </ModalDialog>
                </ModalContainer>
              )}
              {this.state.showSend && (
                <ModalContainer onClose={this.sendCancle}>
                  <ModalDialog onClose={this.sendCancle}>
                    <h5>Request sent successfully</h5>
                    <p>
                      The My Holistic Club Team will get in touch with you to process
                the request.
              </p>
                    <br />
                    <button
                      className="btn btn-primary pull-right"
                      style={{ marginLeft: "16px" }}
                      onClick={this.sendCancle}
                    >
                      Ok
              </button>
                    <br />
                  </ModalDialog>
                </ModalContainer>
              )}
            </div>
          )
        }
            

  componentWillUnmount() {
    sessionStorage.openOnInDash = ""
  }
}

const contStyle = {
  paddingTop: "80px",
  flexGrow: "1"
}

const rightButton = {
  display: "inline-block",
  float: "right"
}

export default UserDash
