import React, { useEffect } from "react";

const ContactUsSalesforce = () => {
    useEffect(() => {
        if (window && document) {
            if (!window.embedded_svc) {
                const s = document.createElement("script");
                s.setAttribute(
                    "src",
                    "https://themix--dev.my.salesforce.com/embeddedservice/5.0/esw.min.js"
                );
                s.addEventListener("load", () => {
                    initESW(null);
                });
                document.body.appendChild(s);
            } else {
                initESW("https://service.force.com");
            }
        }
    }, []);

    const initESW = (gslbBaseURL) => {
        window.embedded_svc.addEventHandler("afterInit", function (data) {
            console.log(data);
            window.embedded_svc.bootstrapEmbeddedService();
        });

        window.embedded_svc.settings.displayHelpButton = false;
        window.embedded_svc.settings.language = "";

        // window.embedded_svc.settings.targetElement = "div#contact-us-form";

        window.embedded_svc.settings.enabledFeatures = ["Flows"];
        window.embedded_svc.settings.entryFeature = "Flows";

        window.embedded_svc.init(
            "https://themix--staging.my.salesforce.com",
            "https://staging-themixcharity.cs122.force.com/cmsforms",
            gslbBaseURL,
            "00D3H0000008jtx",
            "CMS_Form_Contact_us",
            {}
        );
    };

    return (
        <div id="contact-us-form" className="w-full"></div>
    );
};

export default ContactUsSalesforce;
