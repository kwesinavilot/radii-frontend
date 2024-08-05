// pages/privacy-policy.js
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="my-4 mx-10 font-rubik">
      <br />
      <Link href="/signup">
        <Button
          className={`lg:h-[44px] h-[32px] lg:p-4 p-2 rounded-l rounded-r bg-white text-[#F27405] hover:bg-[#F27405] hover:text-[#ffffff] flex items-center`}
        >
          <FaArrowLeft className="mr-2" />
          Back to register
        </Button>
      </Link>
      <p className="text-6xl lg:text-4xl text-center font-bold font-rubik">
        Privacy Policy
      </p>
      <br />
      <p className="text-l lg:text-sm font-regular font-rubik align-baseline">
        We at Radii (“Company,” “we,” “us,” “our”) know you care about how your
        personal information is used and shared, and we take your privacy
        seriously. Please read the following to learn more about our Privacy
        Policy. By using or accessing our products, services or website
        (collectively, “Services”) in any manner, you acknowledge that you
        accept the practices and policies outlined in this Privacy Policy, and
        you hereby consent that we will collect, use, and share your information
        in the following ways. Remember that your use of Company&quot;s Services
        is at all times subject to the Terms and Conditions, which incorporates
        this Privacy Policy. Any terms we use in this Policy without defining
        them have the definitions given to them in the Terms and Conditions.
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        What does this Privacy Policy cover?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        This Privacy Policy covers our treatment of personally identifiable
        information (Personal Information) that we gather when you are accessing
        or using our Services, but not to the practices of companies we
        don&quot;t own or control, or people that we don&quot;t manage. We
        gather various types of Personal Information from our users, as
        explained in more detail below, and we use this Personal Information
        internally in connection with our Services, including to personalize,
        provide, and improve our services, to allow you to set up a user account
        and profile, to contact you and allow other users to contact you, to
        fulfill your requests for certain products and services, and to analyze
        how you use the Services. In certain cases, we may also share some
        Personal Information with third parties, but only as described below.
      </p>{" "}
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        Will Company ever change this Privacy Policy?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        We&quot;re constantly trying to improve our Services, so we may need to
        change this Privacy Policy from time to time as well, but we will alert
        you to changes by placing a notice on http://www.getradii.com , by
        sending you an email, and/or by some other means. Please note that if
        you&quot;ve opted not to receive legal notice emails from us (or you
        haven&quot;t provided us with your email address), those legal notices
        will still govern your use of the Services, and you are still
        responsible for reading and understanding them. If you use the Services
        after any changes to the Privacy Policy have been posted, that means you
        agree to all of the changes.
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        What Information does the Company Collect?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        Information You Provide to Us:
        <br />
        We receive and store any information you knowingly provide to us. For
        example, we may collect Personal Information such as your name, email
        address, phone number. Certain information may be required to register
        with us or to take advantage of some of our features. We may communicate
        with you if you&quot;ve provided us the means to do so. For example, if
        you&quot;ve given us your email address, we may send you promotional
        email offers on behalf of other businesses, or email you about your use
        of the Services. Also, we may receive a confirmation when you open an
        email from us. This confirmation helps us make our communications with
        you more interesting and improve our services.
        <br />
        <br />
        Information Collected Automatically:
        <br />
        Whenever you interact with our Services, we automatically receive and
        record information on our server logs from your browser or device, which
        may include your IP address, geolocation data, device identification,
        “cookie” information, the type of browser and/or device you&quot;re
        using to access our Services, and the page or feature you requested.
        “Cookies” are identifiers we transfer to your browser or device that
        allow us to recognize your browser or device and tell us how and when
        pages and features in our Services are visited and by how many people.
        You may be able to change the preferences on your browser or device to
        prevent or limit your device&quot;s acceptance of cookies, but this may
        prevent you from taking advantage of some of our features. If you click
        on a link to a third party website or service, a third party may also
        transmit cookies to you. Again, this Privacy Policy does not cover the
        use of cookies by any third parties, and we aren&quot;t responsible for
        their privacy policies and practices. Please be aware that cookies
        placed by third parties may continue to track your activities online
        even after you have left our Services, and those third parties may not
        honor “Do Not Track” requests you have set using your browser or device.
        We may use this data to customize content for you that we think you
        might like, based on your usage patterns. We may also use it to improve
        the Services – for example, this data can tell us how often users use a
        particular feature of the Services, and we can use that knowledge to
        make the Services interesting to as many users as possible.
        <br />
        <br />
        Information Collected From Other Websites and Do Not Track Policy:
        <br />
        Through cookies we place on your browser or device, we may collect
        information about your online activity after you leave our Services.
        Just like any other usage information we collect, this information
        allows us to improve the Services and customize your online experience,
        and otherwise as described in this Privacy Policy. Your browser may
        offer you a “Do Not Track” option, which allows you to signal to
        operators of websites and web applications and services (including
        behavioral advertising services) that you do not wish such operators to
        track certain of your online activities over time and across different
        websites. Our Services do not support Do Not Track requests at this
        time, which means that we collect information about your online activity
        both while you are using the Services and after you leave our Services.
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">Data Security</p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        We take reasonable steps to protect your information from unauthorized
        access, disclosure, alteration, or destruction. These measures include:
      </p>
      <ol className="text-l lg:text-sm font-regular font-rubik">
        <li>- Secure data storage practices</li>
        <li>- Access controls and user authentication</li>
        <li>- Regular security audits and updates</li>
      </ol>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">Data Retention</p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        We will retain your personal information for as long as necessary to
        fulfill the purposes for which it was collected and to comply with our
        legal and regulatory obligations.
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        Will Company Share Any of the Personal Information it Receives?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        We do not rent or sell your Personal Information in personally
        identifiable form to anyone. We do not view, sell or collect any data
        related to our Services that we have not been granted access to. We may
        share your Personal Information with third parties as described in this
        section:
      </p>
      <br />
      <p className="text-l lg:text-sm font-regular font-rubik">
        <p className="text-l lg:text-l font-bold font-rubik">
          - Information that&quot;s been de-identified:
        </p>
        We may de-identify your Personal Information so that you are not
        identified as an individual, and provide that information to our
        partners. We may also provide aggregate usage information to our
        investors and/or partners (or allow partners to collect that information
        from you), who may use such information to understand how often and in
        what ways people use our Services, so that they, too, can provide you
        with an optimal online experience. However, we never disclose aggregate
        usage or de-identified information to a partner (or allow a partner to
        collect such information) in a manner that would identify you as an
        individual person.
        <br />
        <br />
        <p className="text-l lg:text-l font-bold font-rubik">
          - Affiliated Businesses:
        </p>
        In certain situations, businesses or third party websites we&quot;re
        affiliated with may sell or provide products or services to you through
        or in connection with the Services (either alone or jointly with us).
        You can recognize when an affiliated business is associated with such a
        transaction or service, and we will share your Personal Information with
        that affiliated business only to the extent that it is related to such
        transaction or service. We have no control over the policies and
        practices of third party websites or businesses as to privacy or
        anything else, so if you choose to take part in any transaction or
        service relating to an affiliated website or business, please review all
        such business&quot; or websites&quot; policies.
        <br />
        <br />
        <p className="text-l lg:text-l font-bold font-rubik">
          - Legal Requirements:
        </p>
        We may disclose your information if required by law or to comply with a
        legal process, such as a court order or subpoena.
        <br />
        <br />
        <p className="text-l lg:text-l font-bold font-rubik">
          - User Profiles and Submissions:
        </p>
        Certain user profile information, including your name, location, and any
        video or image content that such user has uploaded to the Services, may
        be displayed to other users to facilitate user interaction within the
        Services or address your request for our services. Your user name may
        also be displayed to other users if and when you send messages or
        comments or upload images or videos through the Services.
        <br />
        <br />
        <p className="text-l lg:text-l font-bold font-rubik">
          - Business Transfers:
        </p>
        We may choose to buy or sell assets, and may share and/or transfer
        customer information in connection with the evaluation of and entry into
        such transactions. Also, if we (or our assets) are acquired, or if we go
        out of business, enter bankruptcy, or go through some other change of
        control, Personal Information could be one of the assets transferred to
        or acquired by a third party.
        <br />
        <br />
        <p className="text-l lg:text-l font-bold font-rubik">
          - Protection of Company and Others:
        </p>
        We reserve the right to access, read, preserve, and disclose any
        information that we believe is necessary to comply with law or court
        order; enforce or apply our Terms and Conditions and other agreements;
        or protect the rights, property, or safety of Company, our employees,
        our users, or others.
        <br />
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        Use of Google Workspace APIs
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        At Radii, we value your privacy and are committed to ensuring the
        protection and responsible use of the data we access through Google
        Workspace APIs. To maintain transparency and compliance with
        Google&quot;s policies, we affirm the following:
        <br />
      </p>
      <br />
      <ol>
        <p className="text-l lg:text-base font-bold font-rubik">
          1. Data Handling and Use:
        </p>
        <p className="text-l lg:text-sm font-regular font-rubik">
          <ol>
            <li>
              - We use Google Workspace APIs strictly to provide and enhance the
              features of our services.
            </li>
            <li>
              - The data accessed through Google Workspace APIs is utilized
              solely for the purpose of delivering our services to you and
              improving your user experience.
            </li>
          </ol>
        </p>
        <br />

        <p className="text-l lg:text-l font-bold font-rubik">
          2. No Use for Generalized AI/ML Models:
        </p>
        <p className="text-l lg:text-sm font-regular font-rubik">
          <ol>
            <li>
              - We explicitly confirm that any user data obtained through Google
              Workspace APIs is not used to develop, improve, or train
              generalized artificial intelligence (AI) or machine learning (ML)
              models.
            </li>
            <li>
              - The data is only used in ways that are necessary to provide the
              specific services you have requested and to ensure the
              functionality of those services.
            </li>
          </ol>
        </p>
        <br />

        <p className="text-l lg:text-l font-bold font-rubik">
          3. Data Retention and Security:
        </p>
        <p className="text-l lg:text-sm font-regular font-rubik">
          <ol>
            <li>
              - All user data accessed through Google Workspace APIs is handled
              with the highest standards of security and privacy.
            </li>
            <li>
              - We do not retain user data for purposes beyond what is necessary
              for the delivery and enhancement of our services.
            </li>
            <li>
              - Data retention policies are in place to ensure that any
              unnecessary data is deleted in a timely and secure manner.
            </li>
          </ol>
        </p>
        <br />

        <p className="text-l lg:text-l font-bold font-rubik">
          4. Compliance and Transparency:
        </p>
        <p className="text-l lg:text-sm font-regular font-rubik">
          <ol>
            <li>
              - We adhere to all applicable privacy laws and regulations, and we
              are committed to maintaining transparency about how we handle user
              data.
            </li>
            <li>
              - Should there be any changes in how we use or handle data
              accessed through Google Workspace APIs, we will update our privacy
              policy accordingly and notify users as required.
            </li>
            If you have any questions or concerns about our use of Google
            Workspace APIs or our privacy practices, please contact us at
            support@getradii.com.
          </ol>
        </p>
        <br />
      </ol>
      <p className="text-l lg:text-l font-bold font-rubik">
        Is Personal Information about me secure?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        Your account is protected by a password for your privacy and security.
        You must prevent unauthorized access to your account and Personal
        Information by selecting and protecting your password appropriately and
        limiting access to your computer or device and browser by signing off
        after you have finished accessing your account.
        <br /> <br />
        We endeavour to protect the privacy of your account and other Personal
        Information we hold in our records, but unfortunately, we cannot
        guarantee complete security. Unauthorized entry or use, hardware or
        software failure, and other factors, may compromise the security of user
        information at any time.
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">Your Rights</p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        You may access, and, in some cases, edit or delete the following
        information you&quot;ve provided to us:
        <ol>
          <li>
            - <b>Access:</b> You have the right to access your personal
            information that we hold.
          </li>
          <li>
            - <b>Rectification:</b> You have the right to request that we
            correct any inaccurate or incomplete personal information.
          </li>
          <li>
            - <b>Erasure:</b> You have the right to request that we erase your
            personal information in certain circumstances.
          </li>
          <li>
            - <b>Restriction of Processing:</b> You have the right to request
            that we restrict the processing of your personal information.
          </li>
          <li>
            - <b>Objection:</b> You have the right to object to the processing
            of your personal information.
          </li>
        </ol>
        <br />
      </p>
      <p className="text-l lg:text-l font-bold font-rubik">
        What Personal Information can I access?{" "}
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        You may access, and, in some cases, edit or delete the following
        information you&quot;ve provided to us:
        <ol>
          <li>- name</li>
          <li>- email address</li>
        </ol>
        <br />
        The information you can view, update, and delete may change as the
        Services change. If you have any questions about viewing or updating
        information we have on file about you, please contact us at
        support@getradii.com
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        What choices do I have?
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        You can always opt not to disclose information to us, but keep in mind
        some information may be needed to register with us or to take advantage
        of some of our features.
        <br />
        <br />
        You may be able to add, update, or delete information as explained
        above. When you update information, however, we may maintain a copy of
        the unrevised information in our records. You may request deletion of
        your account or information by sending a request to
        support@getradii.com. Some information may remain in our records after
        your deletion of such information from your account. We may use any
        aggregated data derived from or incorporating your Personal Information
        after you update or delete it, but not in a manner that would identify
        you personally.
        <br />
        <br />
        Radii does not sell or rent any of your personal information to third
        parties including that of minors under the age of sixteen (16). While
        Radii does not consider the use of advertising cookies on our site as a
        sale, you have the right to opt out of it.
        <br />
      </p>
      <br />
      <p className="text-l lg:text-l font-bold font-rubik">
        International Transfers
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        Your information may be transferred to and processed in countries other
        than your own, where data protection laws may be different. We will take
        steps to ensure that your information is treated securely and in
        accordance with this Privacy Policy, including entering into standard
        contractual clauses approved by relevant data protection authorities.
        <br />
        <br />
      </p>
      <p className="text-l lg:text-l font-bold font-rubik">
        Children&quot;s Privacy
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        Radii is not intended for children under the age of 18. We do not
        knowingly collect personal information from children under 18. If you
        are a parent or guardian and you believe your child has provided us with
        personal information, please contact us. We will delete any personal
        information we have collected from children under 18.
        <br />
        <br />
      </p>
      <p className="text-l lg:text-l font-bold font-rubik">
        Changes to this Privacy Policy
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website.
        <br />
        <br />
      </p>
      <p className="text-l lg:text-l font-bold font-rubik">
        What if I have questions about this policy?{" "}
      </p>
      <p className="text-l lg:text-sm font-regular font-rubik">
        If you have any questions or concerns regarding our privacy policies,
        please send us a detailed message to support@getradii.com, and we will
        try to resolve your concerns. By using Radii, you acknowledge that you
        have read, understood, and agree to be bound by these privacy policies.
        <br />
      </p>
    </div>
  );
};

export default PrivacyPolicy;
