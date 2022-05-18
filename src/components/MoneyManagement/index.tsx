import React from "react";

const MoneyManagementComponent = () => {
    return (
        <div className="faqs-item-width">
            <div className="border-below mb-6 mt-10">
                <h2 className="pb-1">Managing your money during the pandemic</h2>
            </div>
            <div>
                The coronavirus pandemic has turned everyone's lives upside down,
                with many people being furloughed, or losing their jobs. With rent and
                bills to pay, this can make managing your money stressful, but we're
                here to help. Throughout this page you'll find articles, tips, support and
                information on how to manage your money now and in the future.
            </div>
            <div className="mb-2 mt-6">
                <h3 className="pb-1">
                    Take an online money management course
                </h3>
            </div>
            <div>
                Sign up to our e-learning course and build your confidence in managing your money.
                This course will help you feel more in control of your finances and teach you about
                the different types of support that are available if you're struggling with money.
            </div>
            <div className="mt-10">
                <a className="outlined-button-linker no-underline-link" href="#">
                    Learn more about this free course
                </a>
            </div>
        </div>
    );
};

export default MoneyManagementComponent;
