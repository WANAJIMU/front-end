import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FloatingInput, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col items-start justify-start pt-[3px] w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
          <div className="flex flex-col font-roboto items-center justify-start ml-44 md:ml-[0] mt-[93px] md:px-5 w-[42%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                <div className="flex sm:flex-1 flex-col justify-start w-1/2 sm:w-full">
                  <Text
                    className="md:ml-[0] ml-[53px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02"
                    size="txtRobotoRomanBold40"
                  >
                    Personal Info
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-1 w-3/4 md:w-full">
                    <Text
                      className="text-base text-gray-900_03"
                      size="txtRobotoRomanBold16"
                    >
                      Name
                    </Text>
                    <FloatingInput
                      wrapClassName="placeholder:bg-gray-50 placeholder:left-2.5 p-0 sm:pr-5 placeholder:text-black-900 text-black-900 text-left text-xs placeholder:top-[0] tracking-[0.50px] w-full"
                      className="p-0 sm:pr-5 text-black-900 text-left text-xs tracking-[0.50px] w-full"
                      name="lilly"
                      labelClasses="bg-gray-50 left-2.5 top-[0] text-black-900"
                      focusedClasses="translate-y-[17px] scale-[1]"
                      wrapperClasses="w-full top-[0]"
                      labelText="first name"
                      defaultText="Lilly"
                    ></FloatingInput>
                  </div>
                </div>
                <div className="h-[70px] mb-[3px] sm:mt-0 mt-[61px] relative w-2/5 sm:w-full">
                  <Button
                    className="!text-black-900 cursor-pointer mb-[-21px] min-w-[70px] ml-[19px] text-center text-xs tracking-[0.50px] z-[1]"
                    shape="square"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    surname
                  </Button>
                  <Input
                    name="textfieldbuildi"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[47px] mb-[undefinedpx] mt-auto mx-auto rounded-[1px] w-full z-[1]"
                    color="gray_600_04"
                    variant="outline"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-9 w-[69%] md:w-full">
                <Text
                  className="text-base text-gray-900_03"
                  size="txtRobotoRomanBold16"
                >
                  Date of birth
                </Text>
                <Text
                  className="text-base text-gray-900_03"
                  size="txtRobotoRomanBold16"
                >
                  Driver’s License #
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[25px] w-[74%] md:w-full">
                <div className="border border-gray-600_04 border-solid h-[47px] rounded-[1px] w-[36%]"></div>
                <div className="border border-gray-600_04 border-solid h-[47px] rounded-[1px] w-[36%]"></div>
              </div>
              <Text
                className="md:ml-[0] ml-[5px] mt-1.5 text-gray-700_02 text-xs"
                size="txtRobotoRomanBold12"
              >
                MM/DD/YYYY
              </Text>
              <Text
                className="mt-[25px] text-gray-900_03 text-sm"
                size="txtRobotoRomanBold14"
              >
                Current Address
              </Text>
              <div className="md:h-[51px] h-[54px] ml-0.5 md:ml-[0] mt-1 relative w-[74%] sm:w-full">
                <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[1%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                  size="txtRobotoRegular8"
                >
                  Street Address
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-6 w-[74%] md:w-full">
                <div className="md:h-[47px] h-[54px] relative w-[35%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[3%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    City
                  </Text>
                </div>
                <div className="h-[55px] relative w-[34%]">
                  <Text
                    className="bg-white-A700 h-[17px] justify-center mb-[-8.16px] ml-1 px-1 py-[3px] text-[8px] text-gray-800_03 tracking-[0.40px] w-auto z-[1]"
                    size="txtRobotoRegular8"
                  >
                    State
                  </Text>
                  <div className="border border-gray-600_04 border-solid h-[47px] mt-auto mx-auto rounded-[1px] w-full"></div>
                </div>
              </div>
              <div className="h-[52px] md:h-[77px] ml-0.5 md:ml-[0] mt-[30px] relative w-[26%]">
                <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[3%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                  size="txtRobotoRegular8"
                >
                  Zip Code
                </Text>
              </div>
              <Text
                className="mt-[35px] text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Marital Status
              </Text>
              <div className="flex flex-row gap-[17px] items-center justify-start ml-0.5 md:ml-[0] mt-[11px] w-2/5 md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-between w-3/5">
                  <div className="flex flex-row gap-0.5 items-center justify-start w-[60px]">
                    <div className="bg-white-A700 border border-blue_gray-900_05 border-solid h-4 rounded-[50%] w-4"></div>
                    <Text
                      className="text-center text-gray-900_03 text-sm w-auto"
                      size="txtRobotoRomanRegular14"
                    >
                      Single
                    </Text>
                  </div>
                  <div className="flex flex-row gap-0.5 h-[17px] md:h-auto items-center justify-start w-[70px]">
                    <div className="bg-white-A700 border border-blue_gray-900_05 border-solid h-4 rounded-[50%] w-4"></div>
                    <Text
                      className="text-center text-gray-900_03 text-sm w-auto"
                      size="txtRobotoRomanRegular14"
                    >
                      Married
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-0.5 h-[17px] md:h-auto items-center justify-start w-20">
                  <div className="bg-white-A700 border border-blue_gray-900_05 border-solid h-4 rounded-[50%] w-4"></div>
                  <Text
                    className="text-center text-gray-900_03 text-sm w-auto"
                    size="txtRobotoRomanRegular14"
                  >
                    Widow
                  </Text>
                </div>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-9 text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Spouse Info (optional)
              </Text>
              <div className="flex flex-row items-center justify-between mt-5 w-3/4 md:w-full">
                <div className="md:h-[47px] h-[55px] relative w-[35%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[5%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    First Name
                  </Text>
                </div>
                <div className="md:h-[47px] h-[55px] relative w-[34%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[5%] pl-1 pr-2 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-[54px]"
                    size="txtRobotoRegular8"
                  >
                    Last Name
                  </Text>
                </div>
              </div>
              <div className="h-14 ml-0.5 md:ml-[0] mt-[33px] relative w-[26%]">
                <Text
                  className="bg-white-A700 justify-center mb-[-7px] ml-[7px] px-1 py-0.5 text-[8px] text-gray-800_03 tracking-[0.40px] w-auto z-[1]"
                  size="txtRobotoRegular8"
                >
                  Driver’s License #
                </Text>
                <div className="border border-gray-600_04 border-solid h-[47px] mt-auto mx-auto rounded-[1px] w-full"></div>
              </div>
              <Text
                className="mt-[23px] text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Contact Info
              </Text>
              <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-[18px] w-3/4 md:w-full">
                <div className="md:h-[50px] h-[52px] mt-[3px] relative w-[39%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[10%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    Email
                  </Text>
                </div>
                <div className="md:h-[47px] h-[55px] relative w-[32%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[47px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[12%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    Phone Number
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-roboto items-center justify-start md:ml-[0] ml-[1207px] mt-[126px] md:px-5 w-[6%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-medium h-[35px] rounded text-center text-sm tracking-[0.10px] w-[75px]"
              onClick={() => navigate("/employmentdetails")}
              color="teal_800"
              size="xs"
              variant="fill"
            >
              Next
            </Button>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row font-dmsans gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-[1440px] mt-12 md:px-10 sm:px-5 px-[158px] w-full"
            style={{
              backgroundImage: "url('images/img_autolayouthorizontal.png')",
            }}
          >
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[0.15px] w-auto"
                size="txtDMSansBold30"
              >
                <span className="text-white-A700 font-dmsans text-left font-bold">
                  Loan
                </span>
                <span className="text-green-500_01 font-dmsans text-left font-bold">
                  Portal
                </span>
              </Text>
              <Text
                className="leading-[24.00px] text-lg text-white-A700 tracking-[0.15px]"
                size="txtRalewayRomanRegular18"
              >
                <>
                  Our mission is to empower <br />
                  businesses by providing them with the
                  <br />
                  financial resources they
                  <br />
                  need to achieve their goals.
                </>
              </Text>
              <Img
                className="h-5 w-[126px]"
                src="images/img_frame17_white_a700.svg"
                alt="frameSeventeen"
              />
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[126px] items-center justify-between w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col font-dmsans gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                    size="txtDMSansBold22"
                  >
                    OUR SERVICES
                  </Text>
                  <Line className="bg-white-A700 h-px w-[44%]" />
                </div>
                <Text
                  className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                  size="txtRalewayRomanMedium18"
                >
                  Personal loan
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                  size="txtRalewayRomanMedium18"
                >
                  SME loan
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                  size="txtRalewayRomanMedium18"
                >
                  Jijenge loan
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                  >
                    <Text size="txtDMSansBold22">CONTACT US</Text>
                  </a>
                  <Line className="bg-white-A700 h-px w-2/5" />
                </div>
                <div className="flex flex-row font-raleway gap-[18px] items-center justify-start w-auto">
                  <Img
                    className="h-5 w-[19px]"
                    src="images/img_speechbubble.svg"
                    alt="speechbubble"
                  />
                  <Text
                    className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                    size="txtRalewayRomanMedium18"
                  >
                    +91 99999 99999
                  </Text>
                </div>
                <div className="flex flex-row font-raleway gap-[18px] items-center justify-start w-auto">
                  <Img
                    className="h-5 w-[19px]"
                    src="images/img_speechbubble_white_a700.svg"
                    alt="speechbubble_One"
                  />
                  <Text
                    className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                    size="txtRalewayRomanMedium18"
                  >
                    xyzfh5@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row font-raleway gap-[18px] items-start justify-start w-auto">
                  <Img
                    className="h-5 w-[19px]"
                    src="images/img_speechbubble_white_a700_20x19.svg"
                    alt="speechbubble_Two"
                  />
                  <Text
                    className="text-lg text-white-A700 tracking-[1.15px]"
                    size="txtRalewayRomanMedium18"
                  >
                    <>
                      Address line-1
                      <br />
                      Address line-2,
                      <br />
                      city, state-pin code.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoPage;
