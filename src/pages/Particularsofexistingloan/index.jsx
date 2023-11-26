import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ParticularsofexistingloanPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col justify-start w-full">
            <header className="bg-white-A700 flex md:flex-col font-dmsans md:gap-12 h-[72px] md:h-auto items-center justify-between md:ml-[0] ml-[3px] md:px-5 px-[98px] py-[9px] w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.15px] w-auto"
                size="txtDMSansBold30Black900"
              >
                <span className="text-blue_gray-900 font-dmsans text-left font-bold">
                  Loan
                </span>
                <span className="text-green-500 font-dmsans text-left font-bold">
                  Portal
                </span>
              </Text>
              <ul className="flex sm:flex-col flex-row gap-12 sm:hidden items-center justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-700 text-center sm:text-xl tracking-[0.50px] w-auto"
                        size="txtDMSansRegular24"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-px w-12"
                        src="images/img_line1.svg"
                        alt="lineOne"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
                  >
                    <Text size="txtDMSansRegular24Gray800">Services</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
                  >
                    <Text size="txtDMSansRegular24Gray800">How we work?</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
                  >
                    <Text size="txtDMSansRegular24Gray800">About Us</Text>
                  </a>
                </li>
              </ul>
              <Button
                className="border border-blue_gray-700 border-solid cursor-pointer min-w-[126px] rounded-[24px] text-base text-center tracking-[0.50px]"
                color="blue_gray_700"
                size="md"
                variant="fill"
              >
                Contact us
              </Button>
            </header>
            <Text
              className="md:ml-[0] ml-[168px] mt-2 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
              size="txtRobotoRomanBold24"
            >
              Particulars of Existing Loans
            </Text>
            <div className="flex flex-row font-roboto sm:gap-10 items-start justify-between md:ml-[0] ml-[145px] mt-14 md:px-5 w-[41%] md:w-full">
              <Text
                className="mb-1 text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Loan Amount
              </Text>
              <Text
                className="mt-1 text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Lender
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[145px] mt-[38px] md:px-5 w-[49%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-14 rounded-[1px] w-[36%]"></div>
              <div className="border border-gray-600_04 border-solid h-14 rounded-[1px] w-[36%]"></div>
            </div>
            <div className="flex flex-row font-roboto sm:gap-10 items-center justify-between md:ml-[0] ml-[145px] mt-[72px] md:px-5 w-2/5 md:w-full">
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Monthly Installment
              </Text>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Expiry date
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[140px] mt-9 md:px-5 w-[49%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-14 sm:mt-0 mt-[5px] rounded-[1px] w-[36%]"></div>
              <div className="border border-gray-600_04 border-solid h-14 mb-[5px] rounded-[1px] w-[36%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[145px] mt-[72px] text-gray-900_03 text-xl"
              size="txtRobotoRomanBold20"
            >
              Credit Info Report Status
            </Text>
            <div className="border border-gray-600_04 border-solid h-14 md:ml-[0] ml-[145px] mt-[41px] md:px-5 rounded-[1px] w-[18%]"></div>
            <Text
              className="md:ml-[0] ml-[145px] mt-[103px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
              size="txtRobotoRomanBold24"
            >
              Proposed Security for the Loan
            </Text>
            <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start md:ml-[0] ml-[145px] mt-[41px] md:px-5 w-[73%] md:w-full">
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Fixed Deposits
              </Text>
              <Text
                className="md:ml-[0] ml-[281px] md:mt-0 mt-1 text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Shares
              </Text>
              <Text
                className="md:ml-[0] ml-[301px] md:mt-0 mt-[5px] text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                <span className="text-gray-900_03 font-roboto text-left font-bold">
                  <>
                    Motor Vehicles
                    <br />
                  </>
                </span>
                <span className="text-gray-900_03 font-roboto text-left font-normal italic">
                  Include vehicle’s plate number
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[140px] mt-[13px] md:px-5 w-[70%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-14 rounded-[1px] w-1/4"></div>
              <div className="border border-gray-600_04 border-solid h-14 md:ml-[0] ml-[107px] rounded-[1px] w-1/4"></div>
              <div className="border border-gray-600_04 border-solid h-14 md:ml-[0] ml-[146px] rounded-[1px] w-1/4"></div>
            </div>
            <div className="flex md:flex-col flex-row font-roboto gap-[19px] items-start justify-start md:ml-[0] ml-[145px] mt-[138px] md:px-5 w-[44%] md:w-full">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_computer.svg"
                alt="contrast"
              />
              <Text
                className="md:mt-0 mt-0.5 text-black-900 text-xl"
                size="txtRobotoRomanRegular20"
              >
                I certify that all the particulars given by me are true and
                complete.
              </Text>
            </div>
            <div className="flex flex-col font-roboto items-center justify-start md:ml-[0] ml-[1068px] mt-10 md:px-5 w-[6%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-[35px] rounded text-center text-sm tracking-[0.10px] w-[75px]"
                onClick={() => navigate("/applicationsucces")}
                color="teal_800"
                size="xs"
                variant="fill"
              >
                Finish
              </Button>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row font-dmsans gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-[1440px] mt-20 md:px-10 sm:px-5 px-[158px] w-full"
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

export default ParticularsofexistingloanPage;
