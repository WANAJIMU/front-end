import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import EmploymentDetailsColumnlabel from "components/EmploymentDetailsColumnlabel";
import Header from "components/Header";

const EmploymentdetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-100 flex flex-col items-center justify-start py-0.5 w-full">
          <div className="flex flex-col justify-start mb-1 w-full">
            <Header className="bg-white-A700 flex md:flex-col font-dmsans md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
            <Text
              className="md:ml-[0] ml-[432px] mt-[29px] md:text-5xl text-[64px] text-black-900 text-center"
              size="txtRobotoRomanBold64"
            >
              Employment Details
            </Text>
            <div className="flex flex-row font-roboto gap-[78px] items-start justify-start md:ml-[0] ml-[183px] mt-[53px] md:px-5 w-[24%] md:w-full">
              <Text
                className="text-gray-900_03 text-sm"
                size="txtRobotoRomanBold14"
              >
                What is your employment status?
              </Text>
              <Text
                className="text-gray-900_03 text-sm"
                size="txtRobotoRomanBold14"
              >
                Job Title
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-roboto sm:gap-10 gap-[98px] items-center justify-start md:ml-[0] ml-[178px] mt-5 md:px-5 w-[33%] md:w-full">
              <EmploymentDetailsColumnlabel className="flex flex-col items-center justify-start w-[38%] sm:w-full" />
              <div className="border border-gray-600_04 border-solid h-[37px] rounded-[1px] w-[42%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[183px] mt-[35px] text-gray-900_03 text-sm"
              size="txtRobotoRomanBold14"
            >
              Current Employer
            </Text>
            <div className="border border-gray-600_04 border-solid h-[34px] md:ml-[0] ml-[178px] mt-[22px] md:px-5 rounded-[1px] w-[14%]"></div>
            <Text
              className="md:ml-[0] ml-[183px] mt-[35px] text-gray-900_03 text-sm"
              size="txtRobotoRomanBold14"
            >
              Time at employment{" "}
            </Text>
            <div className="flex flex-row font-roboto gap-[57px] items-start justify-start md:ml-[0] ml-[178px] mt-[11px] md:px-5 w-[22%] md:w-full">
              <div className="flex flex-col items-start justify-start w-2/5">
                <div className="md:h-[30px] h-[38px] relative w-full">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[30px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[10%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    Years
                  </Text>
                </div>
                <Text
                  className="mt-0.5 text-[8px] text-gray-700_02"
                  size="txtRobotoRomanBold8"
                >
                  E.g. 5 years
                </Text>
              </div>
              <div className="md:h-[30px] h-[47px] relative w-[43%]">
                <div className="absolute border border-gray-600_04 border-solid h-[30px] inset-[0] justify-center m-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[9%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                  size="txtRobotoRegular8"
                >
                  Months
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] text-[8px] text-gray-700_02"
                  size="txtRobotoRomanBold8"
                >
                  E.g. 5 months
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[178px] mt-5 text-gray-900_03 text-sm"
              size="txtRobotoRomanBold14"
            >
              Work Contact Info
            </Text>
            <div className="flex flex-row font-roboto gap-[62px] items-center justify-start md:ml-[0] ml-[178px] mt-[22px] md:px-5 w-[26%] md:w-full">
              <div className="md:h-[33px] h-[41px] relative w-[47%]">
                <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[33px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[9%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                  size="txtRobotoRegular8"
                >
                  Email
                </Text>
              </div>
              <div className="md:h-[33px] h-[41px] relative w-[37%]">
                <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[33px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[6%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                  size="txtRobotoRegular8"
                >
                  Phone Number
                </Text>
              </div>
            </div>
            <div className="font-roboto h-[38px] md:h-[58px] md:ml-[0] ml-[178px] mt-[25px] md:px-5 relative w-[13%]">
              <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[33px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
              <Text
                className="absolute bg-white-A700 justify-center left-[7%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                size="txtRobotoRegular8"
              >
                Postal Address
              </Text>
            </div>
            <div className="font-roboto h-[17px] md:h-[46px] md:ml-[0] ml-[178px] mt-[29px] md:px-5 relative w-[7%]">
              <Text
                className="m-auto text-gray-900_03 text-sm"
                size="txtRobotoRomanBold14"
              >
                Income Details
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-gray-900_03 text-sm w-max"
                size="txtRobotoRomanBold14"
              >
                Income Details
              </Text>
            </div>
            <div className="font-roboto h-[41px] md:h-[68px] md:ml-[0] ml-[178px] mt-[35px] md:px-5 relative w-[13%]">
              <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[33px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
              <Text
                className="absolute bg-white-A700 justify-center left-[8%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                size="txtRobotoRegular8"
              >
                Monthly Gross Payment
              </Text>
            </div>
            <div className="flex flex-col font-roboto items-center justify-start md:ml-[0] ml-[1075px] mt-[70px] md:px-5 w-[6%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-[35px] rounded text-center text-sm tracking-[0.10px] w-[75px]"
                onClick={() => navigate("/upload")}
                color="teal_800"
                size="xs"
                variant="fill"
              >
                Next
              </Button>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row font-dmsans gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-[1428px] mt-[157px] mx-auto md:px-5 px-[158px] w-full"
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
      </div>
    </>
  );
};

export default EmploymentdetailsPage;
