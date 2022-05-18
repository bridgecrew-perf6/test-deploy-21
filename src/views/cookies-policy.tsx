import React, { FC } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { RouteComponentProps } from "@reach/router";

// markup
const CookiesPolicyPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div className="blue-banner-bg mt-10"></div>
      <Container>
        <div className="wave-content">
          <h1>Cookies Policy</h1>
        </div>
        <div className="cookies-policy-page-width">
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>What are cookies?</h2>
          </div>
          <div>
            "Cookies" are small files sent to your computer or mobile phone
            browser when you enter a website. They're stored by your browser on
            the device and can be used for a variety of purposes:
            <div className="my-4 ml-10">
              <ul className="list-disc">
                <li className="bullet-list-dot-color">
                  <span className="text-black">
                    Identifying your previous visits to a website.
                  </span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">
                    Researching the most popular features of a website, or
                  </span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">
                    Letting you move between pages without asking you to log in
                    multiple times.
                  </span>
                </li>
              </ul>
            </div>
            You can find out more about cokkies on the BBC Web Wise website.
          </div>
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>Cookies and the law</h2>
          </div>
          <div>
            Since 26 May 2011 the law has stated that cookies can only be used
            by a website with the specific consent of its users. Like many other
            websites, we use cookies to deliver our services online.
          </div>
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>How does The Mix use cookies?</h2>
          </div>
          <div>
            The Mix does not use cookies to collect personal information about
            you. We try touse cookies only where it's strictly necessary to
            provide our services. We also use cookies to evelop a clearer
            picture of which parts of The Mix are the most popular to help us
            develop our services. The Mix never uses cookies to for targeted
            advertising, or any form of advertising. We do not carry adverts or
            paid-for links on our website.
          </div>
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>How to reject cookies from The Mix</h2>
          </div>
          <div>
            Browsers automatically accept cookies but you can set your browser
            to reject them. Please be aware that disabling cookies might
            interfere with the way The Mix is able to provide services for you.
          </div>
          <div className="my-4">
            To find out how to reject cookies from your browser, select the link
            for the browser you're using:
          </div>
          <div className="my-5">
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">Internet Explorer</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">Firefox</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">Chrome</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">Safari</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">IPhone/IPad Safari</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
            <div className="outlined-linker mb-3">
              <a href="#">
                <div className="flex item-center">
                  <span className="external-link">Opera</span>{" "}
                  <FaExternalLinkAlt className="ml-2" />
                </div>
              </a>
            </div>
          </div>
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>Cookies on third party websites</h2>
          </div>
          <div>
            When you follow a hyperlink form The Mix to a third party website,
            it's up to you to review the cookie policy of that site as we have
            no control over other website's privacy policies. Therefore The Mix
            cannot accept any responsibility or liablity for the privacy
            practices of third party websites and your use of such websites is
            at your own risk.
          </div>
          <div className="border-below pb-0.5 mb-4 mt-10">
            <h2>Cookies used by The Mix</h2>
          </div>
          <div>
            We use cookies on these services
            <div className="my-4 ml-10">
              <ul className="list-disc">
                <li className="bullet-list-dot-color">
                  <span className="text-black">Fospha</span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">Home Truths</span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">Local</span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">Google SEO</span>
                </li>
                <li className="bullet-list-dot-color">
                  <span className="text-black">Surveys</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CookiesPolicyPage;
