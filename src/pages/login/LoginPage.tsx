import LoginForm from "@/auth/login/LoginForm";
import LoginIntro from "@/auth/login/LoginIntro";
import React from "react";

export default function LoginPage() {
  return (
    <section className="relative 2xl:py-10 overflow-hidden py-20">
      <div className="container px-4 mx-auto ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-wrap -mx-4">
            <LoginIntro />
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 py-20">
              <div className="max-w-lg lg:pt-8 2xl:pt-24 lg:pb-8 mx-auto 2xl:mr-0">
                <h3 className="text-5xl sm:text-6xl text-gray-900 font-bold mb-4">
                  Welcome Back
                </h3>
                <p className="text-lg text-gray-500 mb-15">
                  See our software in action with the demo version.
                </p>
                <div className="flex flex-wrap mb-6 items-center -mx-2"></div>
                <div className="flex mb-6 items-center">
                  <div className="w-full h-px bg-gray-300"></div>
                  <span className="mx-4 text-sm font-semibold text-gray-500">
                    Or
                  </span>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>

                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
