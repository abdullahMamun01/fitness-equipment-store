import React from "react";

export default function LoginIntro() {
  return (
    <div className="w-full lg:w-1/2 px-4 order-last lg:order-first ">
      <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
        <img
          className="block w-full h-142 sm:h-full object-cover rounded-5xl"
          src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/sign-up/dark-background.png"
          alt=""
        />
        <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
          <div className="max-w-md mx-auto">
            <h4 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8">
              Sign in to your account
            </h4>
            <div className="md:flex mb-20">
              <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                <svg
                  width="84"
                  height="10"
                  viewBox="0 0 84 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                    fill="#FAFBFC"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-200">
                  Greetings on your return! We kindly request you to enter your
                  details.
                </p>
              </div>
            </div>
            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
