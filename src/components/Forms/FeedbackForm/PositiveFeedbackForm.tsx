import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      className="form-control
        block
        w-full
        p-2
        text-base 
        font-normal
        text-gray-main
        bg-white bg-clip-padding
        rounded-[12px]
        transition
        ease-in-out
        shadow-lg
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-teal focus:outline-none"
      placeholder={placeholder}
    />
  );
};
const PositiveFeedbackForm = () => {
  return (
    <div>
      <p className="pl-2">
        We’re really happy you found these results helpful!
      </p>
      <div className="border-b border-gray-light py-2 opacity-40"></div>
      <p className="font-bold pl-2 my-4">
        Would you like for us to email you the top 5 results?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Input placeholder="Name*" />
        <Input placeholder="Surname*" />
        <Input placeholder="Email address*" />
        <Input placeholder="Where did you hear about us?*" />
        <Input placeholder="Where were you born? (MM/YYY)*" />
        <button className="bg-blue-teal text-white font-bold p-2 w-full rounded-[12px]">
          Submit
        </button>
      </div>
      <div className="py-2 pl-4">
        <div>
          <input
            type="checkbox"
            className="w-[15px] h-[15px] rounded-lg"
            id="remember"
          />
          <label htmlFor="remember" className="pl-2">
            I have read and accepted the Terms of Use and Privacy Policy*
          </label>
        </div>
        <div className="py-2">
          <input
            type="checkbox"
            className="w-[15px] h-[15px] rounded-lg"
            id="remember"
          />
          <label htmlFor="remember" className="pl-2">
            By ticking this box I confirm to have my data processed in order to
            sign up to The Mix’s website*
          </label>
        </div>
      </div>
    </div>
  );
};

export default PositiveFeedbackForm;
