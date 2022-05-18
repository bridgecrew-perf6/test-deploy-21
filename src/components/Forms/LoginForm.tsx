import React, { FC } from "react";

const LoginForm: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-between flex-col lg:flex-row">
        <input
          type="text"
          placeholder="Username"
          className="custom-input w-full lg:w-[44%] mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="custom-input w-full lg:w-[44%] mb-2"
        />
        <button className=" bg-blue-teal w-full lg:w-[10%] h-[36px] rounded-[10px] text-white font-bold">
          Log in
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="pt-[15px] pl-[15px] flex items-center w-full lg:w-[44%]">
          <input
            type="checkbox"
            className="w-[15px] h-[15px] rounded-lg"
            id="remember"
          />
          <label htmlFor="remember" className="pl-2">
            Remember me
          </label>
        </div>
        <div className="pt-[15px] pl-[15px] text-blue-teal">
          Forgotten password?
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
