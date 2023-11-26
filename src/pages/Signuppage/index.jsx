import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";
import SignUpPageColumnlabelTwo from "components/SignUpPageColumnlabelTwo";
import SignUpPageColumnplay from "components/SignUpPageColumnplay";

const SignuppagePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect the user to the Login page
    navigate("/Loginpage");
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[1024px] items-center justify-start w-full"
            style={{ backgroundImage: "url('images/img_image.png')" }}
          >
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[78px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-center mt-3.5 w-auto md:w-full">
                <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_03 text-center w-auto"
                    size="txtPoppinsMedium32"
                  >
                    Create an account
                  </Text>
                  <div className="flex flex-col items-start justify-start p-0.5 w-auto">
                    <Text
                      className="text-base text-gray-700_01 underline w-auto cursor-pointer"
                      size="txtPoppinsRegular16"
                      onClick={handleLoginClick}
                    >
                      <span className="text-blue_gray-900_03 font-poppins text-left font-normal">
                        Already have an account?
                      </span>
                      <span className="text-gray-700_01 font-poppins text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-900_01 font-poppins text-left font-normal">
                        Log in{" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
                    <SignUpPageColumnlabelTwo
                      className="flex flex-col gap-1 items-start justify-start max-w-[715px] w-full"
                      passwordlabel="Name"
                    />
                    <SignUpPageColumnlabelTwo
                      className="flex flex-col gap-1 items-start justify-start max-w-[715px] w-full"
                      passwordlabel="Email"
                    />
                    <SignUpPageColumnlabelTwo
                      className="flex flex-col gap-1 items-start justify-start max-w-[715px] w-full"
                      passwordicon="images/img_icon.svg"
                      passwordhide="Hide"
                      passworderror="Use 8 or more characters with a mix of letters, numbers & symbols"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start pr-2 py-2 w-auto sm:w-full">
                        <Text
                          className="text-base text-gray-700_01 w-auto"
                          size="txtPoppinsRegular16"
                        >
                          <span className="text-blue_gray-900_03 font-poppins text-left font-normal">
                            By creating an account, you agree to the{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-gray-900_01 font-poppins text-left font-normal underline"
                          >
                            Terms of use
                          </a>
                          <span className="text-gray-700_01 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <span className="text-blue_gray-900_03 font-poppins text-left font-normal">
                            and
                          </span>
                          <span className="text-gray-700_01 font-poppins text-left font-normal">
                            {" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-gray-900_01 font-poppins text-left font-normal underline"
                          >
                            Privacy Policy.
                          </a>
                          <a
                            href="javascript:"
                            className="text-gray-700_01 font-poppins text-left font-normal underline"
                          >
                            {" "}
                          </a>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[715px] md:min-w-full text-[22px] text-center sm:text-lg md:text-xl"
                        shape="round"
                        color="gray_900_71"
                        size="md"
                        variant="fill"
                      >
                        Create an account
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col font-avenir gap-4 items-start justify-start w-auto md:w-full">
                    <a
                      href="javascript:"
                      className="text-2xl md:text-[22px] text-gray-700_01 sm:text-xl w-auto"
                    >
                      <Text size="txtAvenirRoman24">OR Continue with</Text>
                    </a>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <Button
                        className="border border-blue_gray-900_03 border-solid cursor-pointer flex items-center justify-center min-w-[227px]"
                        leftIcon={
                          <Img
                            className="h-8 mt-px mr-4"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
                          Facebook
                        </div>
                      </Button>
                      <Button
                        className="border border-blue_gray-900_03 border-solid cursor-pointer flex items-center justify-center min-w-[226px]"
                        leftIcon={
                          <Img
                            className="h-6 mt-0.5 mb-1 mr-4"
                            src="images/img_social_media_logo.svg"
                            alt="Social media logo"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="leading-[normal] md:text-xl sm:text-lg text-[22px] text-left">
                          Google
                        </div>
                      </Button>
                      <SignUpPageColumnplay className="bg-white-A700 border border-blue_gray-900_03 border-solid flex flex-col items-center justify-start p-[15px] rounded-[32px] w-[32%] md:w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignuppagePage;
