import React, { Component } from "react"
import { Container, Header } from "semantic-ui-react"
import FixedMenu from "./FixedMenu"
import Footer from "./Footer"

class Privacy extends Component {
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
          
          <Header as="h2">Privacy Policy</Header><br/>
          <p>
            Our Privacy Policy explains how information about you is collected,
            used, and disclosed by My Holistic Club. This Privacy Policy applies
            to information we collect when you use our Platform, which means any
            website, application, or service we offer, or when you communicate
            with us. For information about choices we offer under this policy,
            please see Your Choices below. This Privacy Policy does not apply to
            the information you may provide to third parties, such as members of
            My Holistic Club, and others with whom you may share information
            about you. For more information about the scope of our Privacy
            Policy, please see Section 4.8 below.
          </p>
          <p>
            To make this Privacy Policy easier to understand, we have provided
            summaries in these gray boxes. These summaries are not part of the
            official policy. Even though we have provided summaries, it is
            important for you to read the entire policy carefully.
          </p>
          <h3>1. Collection of Information</h3>
          <p>Summary: We collect information about you when you:</p>
          <ul>
            <li>create an account</li>
            <li>use the platform</li>
            <li>communicate with us</li>
          </ul>
          <p>
            <br />We also collect information, such as usage statistics, by
            using cookies, server logs, and similar technologies.
          </p>
          <p>&nbsp;</p>
          <p>
            If you elect to use certain features, we also collect information
            through other sources, such as social media services, invitations,
            and imported contacts.
          </p>
          <p>1.1 Information You Provide to Us</p>
          <p>
            We collect information you provide directly to us. For example, we
            collect information you provide when you create an account, fill out
            a form, or communicate with us. The types of information we may
            collect include your name, email address, postal address, phone
            number, payment method data, photos, and any other information you
            choose to provide.
          </p>
          <p>
            1.2 Information We Collect Automatically When You Use the Platform
          </p>
          <p>
            When you use our Platform, we automatically collect information
            about you, including:
          </p>
          <ul>
            <li>
              Log Information: We collect log information about your use of the
              Platform, including the type of browser you use, access times,
              pages viewed, your IP address, and the page you visited before
              visiting our Platform.
            </li>
            <li>
              Device Information: We collect information about the computer or
              mobile device you use to access our Platform, including the
              hardware model, operating system and version, unique device
              identifiers, and mobile network information.
            </li>
            <li>
              Location Information: We may collect information about the
              location of your device each time you use our Platform, or when
              you otherwise consent to the collection of this information.
            </li>
            <li>
              Information Collected by Cookies and Other Tracking Technologies:
              We and our service providers collect information using various
              technologies, including cookies and pixel tags (which are also
              called clear GIFs, web beacons, or pixels). Cookies are small data
              files stored on your hard drive or in device memory that help us
              improve our Platform and your experience, and track usage of our
              Platform. Pixel tags are electronic images that may be used in our
              Platform or emails, and track usage of our Platform and
              effectiveness of communications. You can learn more about the
              types of cookies we and our service providers use by reading our
              Cookie Policy.
            </li>
            <li>
              Other Information: With your permission, we may collect other
              information from your device, such as photos from your camera
              roll, contacts of individuals you wish to find or connect with, or
              calendar information you want to manage via the Platform.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>2. Use of Information</h3>
          <p>Summary: We use information about you to:</p>
          <ul>
            <li>
              operate, improve, promote, and protect My Holistic Club and our
              Platform;
            </li>
            <li>communicate with you; and</li>
            <li>personalize content.</li>
          </ul>
          <p>&nbsp;</p>
          <p>2.1 Operating our Platform</p>
          <p>
            We may use information about you for various purposes related to
            operating our Platform,including to:
          </p>
          <ul>
            <li>
              Provide, maintain, and improve our Platform, including to process
              transactions, and develop new products and services;
            </li>
            <li>Personalize the Platform;</li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our Platform;
            </li>
            <li>
              Detect, investigate, and prevent fraudulent transactions, abuse,
              and other illegal activities, and protect the rights property, or
              safety of My Holistic Club and others;
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>2.2 Communicating with You</p>
          <p>
            We may use information about you for various purposes related to
            communicating with you,including to:
          </p>
          <ul>
            <li>
              Respond to your comments, questions, and requests, and provide
              customer service;
            </li>
            <li>
              Communicate with you about products, services, and Bunchups
              offered by us and others,and provide news and information we think
              will be of interest to you;
            </li>
            <li>
              Deliver communications from other members, in accordance with the
              communication preferences that you indicate in your account;
            </li>
            <li>
              Send you technical notices, updates, security alerts and support,
              and administrative messages;
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>2.3 Advertising and Other Uses</p>
          <p>
            We may use information about you for various other purposes,
            including to:
          </p>
          <ul>
            <li>
              Provide advertisements, content, or features that match member
              profiles or interests;
            </li>
            <li>Facilitate contests and other promotions;</li>
            <li>
              Combine with information we collect for the purposes described in
              this Privacy Policy; and
            </li>
            <li>
              Carry out any other purposes described to you at the time the
              information was collected.
            </li>
          </ul>
          <p>&nbsp;</p>
          <h3>3. Sharing of Information</h3>
          <p>
            Summary:We do not share information about you in any way other than
            as described in this Privacy Policy or with your consent.
          </p>
          <p>We may disclose information about you:</p>
          <ul>
            <li>
              to members or social media services, subject to the choices you
              may make via the Platform;
            </li>
            <li>
              to our third-party service providers that help us to operate or
              improve our Platform;
            </li>
            <li>
              to authorities to comply with legal obligations and to protect and
              defend our rights and property; and
            </li>
            <li>
              to an affiliate or successor entity as part of a corporate
              transaction.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>We may also share de-identified or aggregated information.</p>
          <p>&nbsp;</p>
          <p>3.1 Through our Platform</p>
          <p>
            We share some of the information we collect by displaying it on our
            Platform according to your member profile and account settings. Some
            information, such as user name, is always public.Some information,
            such as interests, is public by default but can be hidden on our
            Platform. Some information, such as group memberships, will always
            be visible to other members of that Cabal,and may be public,
            depending on the settings of that group.
          </p>
          <p>&nbsp;</p>
          <p>3.2 With Our Service Providers</p>
          <p>
            We may use service providers in connection with operating and
            improving the Platform to assist with certain functions, such as
            payment processing, email transmission, conducting surveys or
            contests, data hosting, managing our ads, and some aspects of our
            technical and customer support. We take measures to ensure that
            these service providers access, process and store information about
            you only for the purposes we authorize, subject to confidentiality
            obligations.
          </p>
          <p>&nbsp;</p>
          <p>3.3 Following the Law and Protecting My Holistic Club</p>
          <p>
            We may access, preserve, and disclose to third parties information
            about you if we believe disclosure is in accordance with, or
            required by, applicable law, regulation or legal process. We may
            also disclose information about you if we believe that your actions
            are inconsistent with our Terms of Service or related guidelines and
            policies, or if necessary to protect the rights, property or safety
            of, or prevent fraud or abuse of, My Holistic Club or others.
          </p>
          <p>&nbsp;</p>
          <p>3.4 Social Sharing and Other Tools</p>
          <p>
            The Platform may offer social sharing features and other integrated
            tools which let you share actions you take on our Platform with
            third-party services and vice versa. Such features let you share
            information with your friends or the public, depending on the
            settings you have chosen with the service. The services use of the
            information will be governed by their privacy policies, and we do
            not control their use of the shared data. For more information about
            the purpose and scope of data collection and processing in
            connection with social sharing features, please review the privacy
            policies of the services that provide these features.
          </p>
          <p>&nbsp;</p>
          <p>
            3.5 Affiliate Sharing and Merger, Sale, or Other Asset Transfers
          </p>
          <p>
            If My Holistic Club is involved in a merger, acquisition, financing,
            reorganization, bankruptcy, or sale of our assets, information about
            you may be shared, sold, or transferred as part of that transaction.
            We may also share information about you with current or future
            corporate parents, subsidiaries, or affiliates.
          </p>
          <p>&nbsp;</p>
          <p>3.6 Other Situations</p>
          <p>
            We may share de-identified or aggregated information about you. We
            may also share information about you with your consent or at your
            direction.
          </p>
          <p>&nbsp;</p>
          <h3>4.Additional Details</h3>
          <p>&nbsp;</p>
          <p>Summary:</p>
          <ul>
            <li>
              We may allow others to use technologies that collect information
              about you to provide analytic services, and to serve ads for My
              Holistic Club. You may be able to opt out of the collection or use
              of this information.
            </li>
            <li>
              You can review and change information about you in your account on
              the Platform, or deactivate your account, but we may retain
              certain information.
            </li>
            <li>
              You may opt out of receiving My Holistic Club's promotional
              messages, but you may still receive other communications.
            </li>
            <li>
              My Holistic Club is based in and governed by Indian law, and you
              consent to processing, transfer, and storage of information in and
              to the India and other countries.
            </li>
            <li>
              We cannot guarantee the absolute security of information about
              you.
            </li>
            <li>
              This Privacy Policy is periodically updated, and does not apply to
              third parties.
            </li>
            <li>
              If you have any questions, you can contact us at rules@My Holistic
              Club.in
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>4.1 Analytics and Advertising Services Provided by Others</p>
          <p>
            We may allow others to use cookies, web beacons, device identifiers
            and other technologies to collect information about your use of the
            Platform and other websites and online services. See our Cookie
            Policy for details about these technologies and the information that
            they collect, use or share, including how you may be able to control
            these services or opt out.
          </p>
          <p>&nbsp;</p>
          <p>4.2 Your Choices: Account Information</p>
          <p>
            You may update or correct the account information that you have
            provided to My Holistic Club by editing your account settings or by
            sending an email to support@My Holistic Club.in. You may deactivate
            your account by editing your account settings or by sending an email
            to support@My Holistic Club.in. My Holistic Club may retain certain
            information as needed to comply with our legal obligations or for
            legitimate business purposes, such as to resolve disputes and
            enforce our legal rights. We may also retain cached or archived
            copies of information about you for a certain period of time.
          </p>
          <p>&nbsp;</p>
          <p>4.3 Your Choices: Location Information</p>
          <p>
            When you first access the Platform, you may be asked to consent to
            our collection of location information. If you do not consent to
            this collection, you may not be able to use our mobile application.
            You can stop the collection of location information at any time from
            a particular device by changing the settings on that device, but
            note that our Platform or its features may no longer function
            properly if you do.
          </p>
          <p>&nbsp;</p>
          <p>4.4 Your Choices: Cookies</p>
          <p>
            Most devices and web browsers are set to accept cookies by default.
            If you prefer, you may be able to remove or reject browser cookies.
            Please note that if you choose to remove or reject cookies,this
            could affect the availability and functionality of our Platform.
          </p>
          <p>&nbsp;</p>
          <p>4.5 Your Choices: Promotional Communications</p>
          <p>
            You may opt out of receiving promotional messages from My Holistic
            Club by following the instructions in those messages or by adjusting
            the communication preferences that you indicate in your account. If
            you opt out, we may still send you non-promotional messages, such as
            those about your account or our ongoing business relations.
          </p>
          <p>&nbsp;</p>
          <p>4.6 Transfer of Information</p>
          <p>
            My Holistic Club is based in the India and the information we
            collect is governed by Indian law. By accessing or using the
            Platform or otherwise providing information to us, you consent to
            the processing, transfer, and storage of information in and to the
            India and other countries, where you may not have the same rights
            and protections as you do under local law.
          </p>
          <p>&nbsp;</p>
          <p>4.7 Security</p>
          <p>
            We employ measures designed to protect information about you, both
            during transmission and once we receive it. For example, we use
            firewalls designed to protect against intruders and test for network
            vulnerabilities. However, no method of transmission over the
            internet or method of electronic storage is completely secure.
          </p>
          <p>&nbsp;</p>
          <p>4.8 Policy Scope</p>
          <p>
            This Privacy Policy does not apply to information you provide to
            third parties, such as members of My Holistic Club, and others with
            whom you may share information about you. Our Platform may direct
            you to a third-party service or a portion of our Platform controlled
            by a third party (typically through the use of a frame or pop-up
            window separate from other content on our Platform).Disclosure of
            information to these third parties is subject to the relevant third
            party's privacy policy. We are not responsible for the third-party
            privacy policy or content, even if we link to those services from
            our Platform.
          </p>
          <p>&nbsp;</p>
          <p>4.9 Revisions to this Policy</p>
          <p>
            We may modify this Privacy Policy from time to time. When we do, we
            will provide notice to you by publishing the most current version
            and revising the date at the top of this page. If we make any
            material change to this policy, we will provide additional notice to
            you, such as by sending you an email or displaying a prominent
            notice on our Platform. By continuing to use the Platform after any
            changes come into effect, the revised Privacy Policy applies to you.
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
  marginTop: "120px"
}

export default Privacy
