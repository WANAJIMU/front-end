import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const BankingDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col justify-start w-full">
            <Header className="bg-white-A700 flex md:flex-col font-dmsans md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
            <Text
              className="md:ml-[0] ml-[167px] mt-[33px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
              size="txtRobotoRomanBold24"
            >
              Banking Details
            </Text>
            <div className="flex flex-row font-roboto items-start justify-between md:ml-[0] ml-[132px] mt-[18px] md:px-5 w-[36%] md:w-full">
              <Text
                className="mt-[11px] text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Banker’s Name
              </Text>
              <Text
                className="mb-[11px] text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Account Number
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[132px] mt-[33px] md:px-5 w-[41%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-[49px] rounded-[1px] w-[38%]"></div>
              <div className="border border-gray-600_04 border-solid h-[49px] rounded-[1px] w-[39%]"></div>
            </div>
            <div className="flex sm:flex-col flex-row font-roboto sm:gap-5 items-start justify-start md:ml-[0] ml-[131px] mt-9 md:px-5 w-[27%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[68%] sm:w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-gray-900_03 text-xl"
                  size="txtRobotoRomanBold20"
                >
                  Months/Years with the bank
                </Text>
                <div className="h-[38px] md:h-[54px] mt-6 relative w-[48%]">
                  <div className="absolute border border-gray-600_04 border-solid bottom-[0] h-[30px] inset-x-[0] mx-auto rounded-[1px] w-full"></div>
                  <Text
                    className="absolute bg-white-A700 justify-center left-[9%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
                    size="txtRobotoRegular8"
                  >
                    Years
                  </Text>
                </div>
                <Text
                  className="text-[8px] text-gray-700_02"
                  size="txtRobotoRomanBold8"
                >
                  E.g. 5 years
                </Text>
                <Text
                  className="ml-9 md:ml-[0] mt-[60px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                  size="txtRobotoRomanBold24"
                >
                  Loan Particulars
                </Text>
              </div>
              <div className="sm:h-[30px] h-[47px] md:h-[78px] sm:mt-0 mt-12 relative w-[33%] sm:w-full">
                <div className="absolute border border-gray-600_04 border-solid h-[30px] inset-[0] justify-center m-auto rounded-[1px] w-full"></div>
                <Text
                  className="absolute bg-white-A700 justify-center left-[12%] px-1 py-0.5 text-[8px] text-gray-800_03 top-[0] tracking-[0.40px] w-auto"
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
            <div className="flex flex-row font-roboto items-start justify-between md:ml-[0] ml-[131px] mt-[23px] md:px-5 w-[30%] md:w-full">
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Amount Requested
              </Text>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Credit Period
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[119px] mt-[31px] md:px-5 w-[38%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-[52px] rounded-[1px] w-[41%]"></div>
              <div className="border border-gray-600_04 border-solid h-[52px] rounded-[1px] w-[41%]"></div>
            </div>
            <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-start justify-between md:ml-[0] ml-[131px] mt-[82px] md:px-5 w-[59%] md:w-full">
              <Text
                className="text-gray-900_03 text-xl"
                size="txtRobotoRomanBold20"
              >
                Purpose of the loan
              </Text>
              <Text
                className="italic text-gray-900_03 text-xl"
                size="txtRobotoItalicCondensedThin20"
              >
                <>
                  Alternative source of repayment(Itemize if any)
                  <br />
                  Please attach proof of income
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[119px] mt-7 md:px-5 w-[47%] md:w-full">
              <div className="border border-gray-600_04 border-solid h-14 rounded-[1px] w-[38%]"></div>
              <div className="border border-gray-600_04 border-solid h-14 rounded-[1px] w-[37%]"></div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium font-roboto h-[35px] md:ml-[0] ml-[1110px] mr-[255px] mt-[84px] rounded text-center text-sm tracking-[0.10px] w-[75px]"
              onClick={() => navigate("/particularsofexistingloan")}
              color="teal_800"
              size="xs"
              variant="fill"
            >
              Next
            </Button>
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row font-dmsans gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-[1433px] mt-[94px] mx-auto md:px-5 px-[158px] w-full"
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

export default BankingDetailsPage;
