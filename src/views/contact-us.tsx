import React, { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { RouteComponentProps } from "@reach/router";
import ContactUsSalesforce from "../components/ContactUsSalesforce";

const ContactUsPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div className="blue-banner-bg mt-10"></div>
      <Container>
        <div className="wave-content">
          <h1>Contact Us</h1>
        </div>
        <Container>
          <div className="mt-10 mb-4">
            Want to give us your feedback or make a suggestion. Below are the
            ways you can get in touch - we're always happy to hear from you.
          </div>
          <div className="my-6">
            <h2>Looking for advice or support?</h2>
          </div>
          <div>
            If you're under 25 and need help call our helpline for FREE on{" "}
            <a href="tel:0808 808 4994" target="_blank">
              <span className="external-link">0808 808 4994</span>
            </a>
            . You can also speak to our trained helpline supporters on our{" "}
            <a
              href="https://www.themix.org.uk/get-support/speak-to-our-team"
              target="_blank"
            >
              <span className="external-link">one to one chat service.</span>
            </a>
            <br />
            <a
              href="https://www.themix.org.uk/get-support/speak-to-our-team"
              target="_blank"
            >
              <span className="external-link">The Mix's team</span>
            </a>{" "}
            will be able to connect you with a range of services to help you
            with your query.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
            <div>
              <div className="mb-4">
                <h3>Contact us with general enquiries - not support</h3>
              </div>
              <div className="mb-4">
                <p>
                  We'd love to hear what you think about The Mix! Contact us
                  with general enquiries and please do send us your feedback.
                </p>
              </div>
              <div className="grid grid-cols-1">
              <ContactUsSalesforce />
                {/* <select className="default-input w-full my-2">
                  <option>General Enquiries / Feedback</option>
                  <option>Media Enquiries</option>
                  <option>Volunteering Enquiries</option>
                  <option>Helpline</option>
                  <option>Counselling</option>
                </select>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="default-input w-full my-2"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="default-input w-full my-2"
                />
                <input
                  type="text"
                  placeholder="Your Subject *"
                  className="default-input w-full my-2"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message *"
                  className="default-textarea w-full my-2"
                />
                <div className="my-3 px-4">
                  <input type="checkbox" /> By ticking this box I consent to
                  have my data processed in order to receive a reply to my email
                  and I have read and agree with the terms in your privacy
                  policy.
                </div>
                <div className="mb-2 px-4">
                  <a
                    href="https://www.themix.org.uk/about-us/privacy-policy"
                    target="_blank"
                  >
                    <div className="flex item-center">
                      <span className="text-black mr-1">Read our</span>
                      <span className="external-link">privacy policy</span>
                      <FaExternalLinkAlt className="ml-1" />
                    </div>
                    .
                  </a>
                </div>
                <div>
                  <button className="outlined-button-linker bg-blue-teal w-full h-[36px] rounded-[10px] text-white font-bold">
                    SEND
                  </button>
                </div> */}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3>Get in touch with The Mix</h3>
              </div>
              <div className="mb-4">
                If you're a funder, prospective partner or would just like to
                chat to us about the work we do supporting young people in the
                UK, use our general number 020 7009 2500.
              </div>
              <div className="mb-4">
                <strong>
                  If you're a journalist, you can also call us via our media
                  line: 07766 660 755.
                </strong>
              </div>
              <div className="mb-4">
                <strong>Write to</strong> The Mix, 209 City Road, London EC1V
                1JN.
              </div>
              <div className="mb-4">
                <strong>Contact us on Social Media</strong>
              </div>
              <div className="mb-10">
                <div className="flex space-x-4 items-center pt-[16px] lg:pt-0">
                  <a
                    className="socials-linker"
                    href="https://www.instagram.com/themixuk/"
                    target="_blank"
                  >
                    <FaInstagram className="ml-2" />
                  </a>
                  <a href="https://www.facebook.com/TheMixUK" target="_blank">
                    <FaFacebookF className="ml-2" />
                  </a>
                  {/* <a href="https://www.youtube.com/themixuk" target="_blank">
                                    <FaYoutube className="ml-2" />
                                    </a> */}
                  <a href="https://twitter.com/themixUK" target="_blank">
                    <FaTwitter className="ml-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/the-mix-charity"
                    target="_blank"
                  >
                    <FaLinkedin className="ml-2" />
                  </a>
                </div>
              </div>
              <div>
                <p>
                  Our social media channels are open 9:30am - 5:30pm, Mon to
                  Fri. We will endeavour to respond to your messages within 24
                  hrs (Mon-Fri).
                  <br />
                  Unfortunately we are unable offer support via Facebook.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </Layout>
  );
};

export default ContactUsPage;
