import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans sm:gap-10 md:gap-10 gap-32 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
        <div className="h-[420px] md:px-5 px-[98px] relative w-[1440px] md:w-full">
          <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-[612px] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="leading-[76.00px] max-w-[612px] md:max-w-full md:text-5xl text-[68px] text-blue_gray-700 tracking-[0.50px]"
                size="txtRalewayRomanBold68"
              >
                Quick and Easy Loans for Your Financial Needs.
              </Text>
              <Text
                className="max-w-[592px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                size="txtDMSansRegular18"
              >
                Our loan services offer a hassle-free and streamlined borrowing
                experience, providing you with the funds you need in a timely
                manner to meet your financial requirements.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[133px] rounded-[24px] text-base text-center tracking-[0.50px]"
              color="blue_gray_700"
              size="md"
              variant="outline"
            >
              Get started
            </Button>
          </div>
          <Img
            className="absolute h-[420px] inset-y-[0] my-auto right-[23%] w-[644px]"
            src="images/img_illustartion.svg"
            alt="illustartion"
          />
        </div>
        <div className="flex flex-col font-raleway md:gap-10 gap-[74px] items-start justify-start w-auto md:w-full">
          <div className="bg-gradient  flex flex-col h-[613px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[125px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1243px] mx-auto w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto"
                size="txtRalewayRomanBold40"
              >
                Our Services
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[49px] w-full">
                <div className="bg-blue_gray-50_33 border border-black-900 border-solid flex sm:flex-1 flex-col gap-[17px] items-center justify-start md:mt-0 my-[5px] px-[18px] py-7 rounded-[39px] shadow-bs w-auto sm:w-full">
                  <Img
                    className="h-[95px] w-[78px]"
                    src="images/img_settings.svg"
                    alt="user"
                  />
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-900 tracking-[0.50px] w-[216px]"
                    size="txtRalewayRomanMedium33"
                  >
                    Personal loan
                  </Text>
                  <Text
                    className="leading-[30.00px] max-w-[365px] md:max-w-full text-center text-gray-700 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18"
                  >
                    <>
                      Are you in the government or private sector, seeking a
                      loan, we&#39;ve got you covered! Connect with us to..
                    </>
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-dmsans font-medium h-10 text-center text-lg tracking-[0.50px] w-[123px]"
                    onClick={() => navigate("/personalinfo")}
                    shape="circle"
                    color="blue_gray_700_7c"
                    size="xs"
                    variant="outline"
                  >
                    Apply now
                  </Button>
                </div>
                <div className="bg-blue_gray-50_33 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col gap-[21px] items-center justify-start md:mt-0 my-0.5 px-4 py-[29px] rounded-[38px] shadow-bs w-auto sm:w-full">
                  <Img
                    className="h-[88px] w-[67px]"
                    src="images/img_group5.svg"
                    alt="settings"
                  />
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-black-900 tracking-[0.50px] w-auto"
                    size="txtRalewayRomanMedium33Black900"
                  >
                    {" "}
                    SME loan
                  </Text>
                  <Text
                    className="leading-[30.00px] text-center text-gray-600 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18Gray600"
                  >
                    <>
                      Business Loan Services provide
                      <br /> financial assistance to businesses
                      <br /> for various purposes..
                    </>
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-dmsans font-medium h-10 text-center text-lg tracking-[0.50px] w-[123px]"
                    onClick={() => navigate("/personalinfo")}
                    shape="circle"
                    color="blue_gray_700_7c"
                    size="xs"
                    variant="outline"
                  >
                    Apply now
                  </Button>
                </div>
                <div className="bg-blue_gray-50_33 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col gap-[27px] h-[353px] md:h-auto items-center justify-start px-2 py-[18px] rounded-[38px] shadow-bs w-auto sm:w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_mortgage.png"
                    alt="mortgage"
                  />
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-black-900 tracking-[0.50px] w-auto"
                    size="txtRalewayRomanMedium33Black900"
                  >
                    Jijenge loan
                  </Text>
                  <Text
                    className="leading-[30.00px] text-center text-gray-600 text-lg tracking-[0.50px]"
                    size="txtPoppinsRegular18Gray600"
                  >
                    <>
                      Auto Loan Services provide <br />
                      financing options for individuals
                      <br /> businesses to purchase a vehicle.
                    </>
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-dmsans font-medium h-10 text-center text-lg tracking-[0.50px] w-[123px]"
                    onClick={() => navigate("/personalinfo")}
                    shape="circle"
                    color="blue_gray_700_7c"
                    size="xs"
                    variant="outline"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
              <Button
                className="!text-blue_gray-50 border border-blue_gray-700 border-solid cursor-pointer font-dmsans font-medium h-[49px] mt-11 rounded-[24px] text-center text-lg tracking-[0.50px] w-[201px]"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                View more
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[125px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto"
              size="txtRalewayRomanBold40"
            >
              How we work ?
            </Text>
            <Text
              className="text-center text-gray-800_01 text-lg tracking-[0.50px] w-auto"
              size="txtDMSansRegular18"
            >
              This is a process, how you can get loan for your self.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[158px] w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-center md:pl-10 sm:pl-5 pl-[90px] w-[49%] md:w-full">
              <Img
                className="h-[274px] sm:h-auto object-cover w-[70%] md:w-full"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <Text
                className="sm:mt-0 mt-3 md:text-5xl text-[95.2px] text-black-900_36 tracking-[0.45px]"
                size="txtRalewayRomanBold952"
              >
                01
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                size="txtRalewayRomanBold33"
              >
                Application
              </Text>
              <Text
                className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                size="txtDMSansRegular18"
              >
                The borrower submits a loan application to the bank, either in
                person, online, or through other channels. The application
                includes personal and financial information, such as income,
                employment history, credit score, and the purpose of the loan.
              </Text>
            </div>
          </div>
          <div className="md:px-5 px-[158px] relative w-[1440px] md:w-full">
            <div className="h-[279px] sm:h-[391px] my-auto w-[73%] md:w-full">
              <div className="flex flex-col gap-6 h-full items-start justify-start ml-[52px] my-auto w-full">
                <Text
                  className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                  size="txtRalewayRomanBold33"
                >
                  Documentation and Verification
                </Text>
                <Text
                  className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                  size="txtDMSansRegular18"
                >
                  <>
                    The bank requests supporting documents from the borrower,
                    such as identification proof, income statements, bank
                    statements, and collateral details (if applicable). The bank
                    verifies the information provided to assess the
                    borrower&#39;s creditworthiness and eligibility for the
                    loan.
                  </>
                </Text>
              </div>
              <div className="absolute flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto w-full">
                <Text
                  className="sm:mt-0 mt-1.5 md:text-5xl text-[95.2px] text-black-900_3f tracking-[0.45px]"
                  size="txtRalewayRomanBold952Black9003f"
                >
                  02
                </Text>
                <Img
                  className="h-[279px]"
                  src="images/img_illustartion.svg"
                  alt="lefthand"
                />
              </div>
            </div>
            <Text
              className="absolute leading-[31.00px] right-[57%] text-center text-lg text-white-A700 top-[0] tracking-[0.45px]"
              size="txtRalewayRomanRegular18"
            >
              <>
                In case you haven’t <br />
                found the answer to <br />
                your question,please fool
                <br /> free to contact us,
                <br />
                support will be happy to <br />
                help you.
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[158px] w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[87px] items-start justify-center md:pl-10 sm:pl-5 pl-[106px] w-[49%] md:w-full">
              <Img
                className="h-[347px]"
                src="images/img_illustartion.svg"
                alt="card"
              />
              <Text
                className="sm:mt-0 mt-[47px] md:text-5xl text-[95.2px] text-black-900_3e tracking-[0.45px]"
                size="txtRalewayRomanBold952Black9003e"
              >
                03
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                size="txtRalewayRomanBold33"
              >
                Credit Assessment
              </Text>
              <Text
                className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                size="txtDMSansRegular18"
              >
                <>
                  The bank conducts a credit assessment to evaluate the
                  borrower&#39;s creditworthiness and ability to repay the loan.
                  This process involves analyzing the borrower&#39;s credit
                  history, income stability, debt-to-income ratio, and other
                  factors.
                </>
              </Text>
            </div>
          </div>
          <div className="h-[323px] sm:h-[435px] md:px-5 px-[158px] relative w-[1440px] md:w-full">
            <div className="flex flex-col gap-6 h-full items-start justify-start my-auto w-full">
              <Text
                className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-700 tracking-[0.50px] w-auto"
                size="txtRalewayRomanBold33"
              >
                Loan Approval
              </Text>
              <Text
                className="max-w-[546px] md:max-w-full text-gray-800_01 text-lg tracking-[0.50px]"
                size="txtDMSansRegular18"
              >
                <>
                  If the borrower meets the bank&#39;s lending criteria and
                  passes the credit assessment, the loan is approved. The bank
                  determines the loan amount, interest rate, repayment term, and
                  any associated fees.
                </>
              </Text>
            </div>
            <div className="absolute flex sm:flex-col flex-row md:gap-10 h-full inset-y-[0] items-start justify-between left-[49%] my-auto w-[78%]">
              <Text
                className="sm:mt-0 mt-[38px] md:text-5xl text-[95.2px] text-black-900_3f tracking-[0.50px]"
                size="txtRalewayRomanBold952Black9003f"
              >
                04
              </Text>
              <div className="h-[323px] relative w-[39%] sm:w-full">
                <Img
                  className="absolute h-[22px] left-[0] top-[9%]"
                  src="images/img_subtract.svg"
                  alt="subtract"
                />
                <Img
                  className="absolute h-[323px] inset-y-[0] my-auto right-[0]"
                  src="images/img_illustartion.svg"
                  alt="speechbubble"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-raleway items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gradient  flex md:flex-col flex-row gap-3.5 items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[125px] py-[90px] w-full">
              <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 text-center tracking-[0.50px] w-auto"
                  size="txtRalewayRomanBold40"
                >
                  About us
                </Text>
                <div className="flex flex-col font-dmsans gap-[34px] items-start justify-start w-auto sm:w-full">
                  <div className="md:h-[333px] h-[370px] relative w-[81%]">
                    <div className="md:h-[333px] h-[369px] m-auto w-full">
                      <div className="md:h-[333px] h-[369px] m-auto w-full">
                        <div className="md:h-[333px] h-[369px] m-auto w-full">
                          <div className="md:h-[333px] h-[369px] m-auto w-full">
                            <div className="md:h-[333px] h-[369px] m-auto w-full">
                              <div className="md:h-[333px] h-[369px] m-auto w-full">
                                <div className="md:h-[333px] h-[369px] m-auto w-full">
                                  <div className="md:h-[333px] h-[369px] m-auto w-full">
                                    <div className="md:h-[333px] h-[369px] m-auto w-full">
                                      <div className="md:h-[333px] h-[369px] m-auto w-full">
                                        <div className="md:h-[333px] h-[369px] m-auto w-full">
                                          <div className="md:h-[333px] h-[369px] m-auto w-full">
                                            <div className="md:h-[333px] h-[369px] m-auto w-full">
                                              <div className="md:h-[333px] h-[369px] m-auto w-full">
                                                <div className="md:h-[333px] h-[369px] m-auto w-full">
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group3.svg')",
                                                    }}
                                                  >
                                                    <div
                                                      className="bg-cover bg-no-repeat flex flex-col gap-1.5 h-[369px] items-start justify-end p-[5px] w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group513.svg')",
                                                      }}
                                                    >
                                                      <div className="md:h-[316px] h-[325px] md:ml-[0] ml-[15px] mt-[26px] relative w-[68%]">
                                                        <div className="absolute bottom-[0] md:h-[290px] h-[306px] inset-x-[0] mx-auto w-full">
                                                          <div className="absolute bottom-[0] h-[290px] left-[0] w-[96%]">
                                                            <div className="h-[290px] m-auto w-full">
                                                              <div className="absolute h-[290px] inset-[0] justify-center m-auto w-full">
                                                                <div className="h-[290px] m-auto w-full">
                                                                  <div className="h-[290px] m-auto w-full">
                                                                    <div className="absolute h-[290px] inset-[0] justify-center m-auto w-full">
                                                                      <div className="h-[290px] m-auto w-full">
                                                                        <div className="h-[290px] m-auto w-full">
                                                                          <div className="h-[290px] m-auto w-full">
                                                                            <div className="h-[290px] m-auto w-full">
                                                                              <div className="h-[290px] m-auto w-full">
                                                                                <div className="flex flex-row h-full items-start justify-end m-auto w-full">
                                                                                  <div className="h-[290px] relative w-[63%]">
                                                                                    <div className="h-[290px] m-auto w-full">
                                                                                      <div className="h-[290px] m-auto w-full">
                                                                                        <div className="flex flex-row gap-[7px] h-full items-start justify-between m-auto w-full">
                                                                                          <div className="md:h-28 h-[290px] relative w-[91%]">
                                                                                            <div className="md:h-28 h-[290px] m-auto w-full">
                                                                                              <div className="md:h-28 h-[290px] m-auto w-full">
                                                                                                <div className="md:h-28 h-[290px] m-auto w-full">
                                                                                                  <div className="md:h-28 h-[290px] m-auto w-full">
                                                                                                    <div className="absolute bottom-[0] md:h-28 h-[277px] inset-x-[0] mx-auto w-full">
                                                                                                      <div className="absolute bottom-[0] md:h-28 h-[121px] left-[0] w-3/5">
                                                                                                        <div className="absolute bottom-[0] md:h-28 h-[113px] inset-x-[0] mx-auto w-full">
                                                                                                          <div className="md:h-28 h-[113px] m-auto w-full">
                                                                                                            <div className="md:h-28 h-[113px] m-auto w-full">
                                                                                                              <div className="md:h-28 h-[113px] m-auto w-full">
                                                                                                                <div className="md:h-28 h-[113px] m-auto w-full">
                                                                                                                  <div className="absolute md:h-28 h-[113px] inset-y-[0] my-auto right-[0] w-[76%]">
                                                                                                                    <div className="absolute bottom-[0] md:h-[55px] h-[65px] left-[5%] w-[79%]">
                                                                                                                      <div className="absolute h-16 md:h-[55px] inset-y-[0] left-[0] my-auto w-[92%]">
                                                                                                                        <div className="h-16 md:h-[55px] m-auto w-full">
                                                                                                                          <div className="h-16 md:h-[55px] m-auto w-full">
                                                                                                                            <div
                                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-start justify-start my-auto right-[0] w-[81%]"
                                                                                                                              style={{
                                                                                                                                backgroundImage:
                                                                                                                                  "url('images/img_group522.svg')",
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <div className="flex flex-col justify-start mb-2 mt-3 w-[85%] md:w-full">
                                                                                                                                <Img
                                                                                                                                  className="h-2 ml-3 md:ml-[0]"
                                                                                                                                  src="images/img_eye.svg"
                                                                                                                                  alt="settings_One"
                                                                                                                                />
                                                                                                                                <ul className="flex flex-col items-start justify-start mr-[5px] w-[79%] md:w-full common-column-list">
                                                                                                                                  <li>
                                                                                                                                    <a href="javascript:">
                                                                                                                                      <Img
                                                                                                                                        className="h-[7px] ml-1.5 md:ml-[0]"
                                                                                                                                        src="images/img_eye.svg"
                                                                                                                                        alt="settings_Two"
                                                                                                                                      />
                                                                                                                                    </a>
                                                                                                                                  </li>
                                                                                                                                  <li>
                                                                                                                                    <a href="javascript:">
                                                                                                                                      <Img
                                                                                                                                        className="h-[9px] ml-0.5 md:ml-[0]"
                                                                                                                                        src="images/img_eye.svg"
                                                                                                                                        alt="settings_Three"
                                                                                                                                      />
                                                                                                                                    </a>
                                                                                                                                  </li>
                                                                                                                                  <li>
                                                                                                                                    <a href="javascript:">
                                                                                                                                      <Img
                                                                                                                                        className="h-[11px]"
                                                                                                                                        src="images/img_eye.svg"
                                                                                                                                        alt="settings_Four"
                                                                                                                                      />
                                                                                                                                    </a>
                                                                                                                                  </li>
                                                                                                                                </ul>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <Img
                                                                                                                              className="absolute bottom-[14%] h-[18px] left-[0]"
                                                                                                                              src="images/img_eye.svg"
                                                                                                                              alt="settings_Five"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                          <Img
                                                                                                                            className="absolute h-[19px] inset-y-[0] left-[10%] my-auto"
                                                                                                                            src="images/img_eye.svg"
                                                                                                                            alt="settings_Six"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                        <Img
                                                                                                                          className="absolute h-5 left-[27%] top-[14%]"
                                                                                                                          src="images/img_eye.svg"
                                                                                                                          alt="settings_Seven"
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <Img
                                                                                                                        className="absolute h-5 inset-x-[0] mx-auto top-[0]"
                                                                                                                        src="images/img_eye.svg"
                                                                                                                        alt="settings_Eight"
                                                                                                                      />
                                                                                                                      <Img
                                                                                                                        className="absolute h-[9px] right-[0] top-[11%]"
                                                                                                                        src="images/img_eye.svg"
                                                                                                                        alt="settings_Nine"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <Img
                                                                                                                      className="absolute h-5 right-[32%] top-[34%]"
                                                                                                                      src="images/img_eye.svg"
                                                                                                                      alt="settings_Ten"
                                                                                                                    />
                                                                                                                    <Img
                                                                                                                      className="absolute h-[11px] right-[0] top-[35%]"
                                                                                                                      src="images/img_eye.svg"
                                                                                                                      alt="settings_Eleven"
                                                                                                                    />
                                                                                                                    <Img
                                                                                                                      className="absolute h-3 right-[0] top-[35%]"
                                                                                                                      src="images/img_checkmark.svg"
                                                                                                                      alt="settings_Twelve"
                                                                                                                    />
                                                                                                                    <div
                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto p-0.5 w-[39%]"
                                                                                                                      style={{
                                                                                                                        backgroundImage:
                                                                                                                          "url('images/img_group521.svg')",
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <Img
                                                                                                                        className="h-6 mb-2.5 mt-[74px]"
                                                                                                                        src="images/img_eye.svg"
                                                                                                                        alt="settings_Thirteen"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <Img
                                                                                                                    className="absolute bottom-[11%] h-[22px] left-[0] w-[21px]"
                                                                                                                    src="images/img_eye.svg"
                                                                                                                    alt="settings_Fourteen"
                                                                                                                  />
                                                                                                                </div>
                                                                                                                <Img
                                                                                                                  className="absolute bottom-[28%] h-[21px] left-1/4"
                                                                                                                  src="images/img_eye.svg"
                                                                                                                  alt="settings_Fifteen"
                                                                                                                />
                                                                                                              </div>
                                                                                                              <div className="absolute bottom-[28%] flex flex-row items-start justify-evenly left-[0] w-[54%]">
                                                                                                                <Img
                                                                                                                  className="h-[25px] mt-3"
                                                                                                                  src="images/img_eye.svg"
                                                                                                                  alt="settings_Sixteen"
                                                                                                                />
                                                                                                                <Img
                                                                                                                  className="h-[18px]"
                                                                                                                  src="images/img_eye.svg"
                                                                                                                  alt="settings_Seventeen"
                                                                                                                />
                                                                                                              </div>
                                                                                                            </div>
                                                                                                            <div className="absolute flex flex-row items-start justify-start left-[4%] top-[22%] w-[57%]">
                                                                                                              <Img
                                                                                                                className="h-7 mt-1.5"
                                                                                                                src="images/img_eye.svg"
                                                                                                                alt="settings_Eighteen"
                                                                                                              />
                                                                                                              <Img
                                                                                                                className="h-[15px] ml-0.5"
                                                                                                                src="images/img_eye.svg"
                                                                                                                alt="settings_Nineteen"
                                                                                                              />
                                                                                                            </div>
                                                                                                          </div>
                                                                                                          <div className="absolute flex flex-row gap-[5px] items-start justify-center left-[12%] top-[9%] w-[57%]">
                                                                                                            <Img
                                                                                                              className="h-[30px]"
                                                                                                              src="images/img_eye.svg"
                                                                                                              alt="settings_Twenty"
                                                                                                            />
                                                                                                            <Img
                                                                                                              className="h-3"
                                                                                                              src="images/img_eye.svg"
                                                                                                              alt="settings_TwentyOne"
                                                                                                            />
                                                                                                          </div>
                                                                                                        </div>
                                                                                                        <Img
                                                                                                          className="absolute h-[31px] left-1/4 top-[0]"
                                                                                                          src="images/img_eye.svg"
                                                                                                          alt="settings_TwentyTwo"
                                                                                                        />
                                                                                                      </div>
                                                                                                      <Img
                                                                                                        className="absolute h-px right-[0] top-[10%] w-px"
                                                                                                        src="images/img_vector_green_200.svg"
                                                                                                        alt="vector"
                                                                                                      />
                                                                                                      <div className="absolute md:h-[90px] h-[91px] right-[19%] top-[0] w-[57%]">
                                                                                                        <Img
                                                                                                          className="h-px ml-auto mr-[17px] mt-[42px]"
                                                                                                          src="images/img_vector_green_200_1x3.svg"
                                                                                                          alt="vector_One"
                                                                                                        />
                                                                                                        <div
                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto pb-0.5 pr-0.5 w-full"
                                                                                                          style={{
                                                                                                            backgroundImage:
                                                                                                              "url('images/img_group516.svg')",
                                                                                                          }}
                                                                                                        >
                                                                                                          <div className="flex flex-row items-start justify-start w-[89%] md:w-full">
                                                                                                            <ul className="flex flex-col h-[54px] items-center justify-start w-[54px] common-column-list">
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <Img
                                                                                                                    className="h-[5px]"
                                                                                                                    src="images/img_vector_green_200_5x9.svg"
                                                                                                                    alt="vector_Two"
                                                                                                                  />
                                                                                                                </a>
                                                                                                              </li>
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <div className="flex flex-row gap-6 items-start justify-between">
                                                                                                                    <ul className="flex flex-col items-start justify-start mt-[7px] w-[36%] md:w-full common-column-list">
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px"
                                                                                                                            src="images/img_vector_green_200_1x1.svg"
                                                                                                                            alt="vector_Three"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px ml-1.5 md:ml-[0]"
                                                                                                                            src="images/img_vector_1x1.svg"
                                                                                                                            alt="vector_Four"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px"
                                                                                                                            src="images/img_vector_green_200.svg"
                                                                                                                            alt="vector_Five"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <div className="flex flex-row gap-[17px] items-start justify-between">
                                                                                                                            <Img
                                                                                                                              className="h-px w-px"
                                                                                                                              src="images/img_vector_1.svg"
                                                                                                                              alt="vector_Six"
                                                                                                                            />
                                                                                                                            <Img
                                                                                                                              className="h-px w-px"
                                                                                                                              src="images/img_vector_green_200.svg"
                                                                                                                              alt="vector_Seven"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                    </ul>
                                                                                                                    <ul className="flex flex-col items-start justify-start w-[21%] md:w-full common-column-list">
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px md:ml-[0] ml-[5px]"
                                                                                                                            src="images/img_vector_green_200_1x1.svg"
                                                                                                                            alt="vector_Eight"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-0.5"
                                                                                                                            src="images/img_vector_green_200_2x3.svg"
                                                                                                                            alt="vector_Nine"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px ml-1 md:ml-[0] mt-7"
                                                                                                                            src="images/img_vector_2.svg"
                                                                                                                            alt="vector_Ten"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <Img
                                                                                                                            className="h-px"
                                                                                                                            src="images/img_vector_1x1.svg"
                                                                                                                            alt="vector_Eleven"
                                                                                                                          />
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                      <li>
                                                                                                                        <a href="javascript:">
                                                                                                                          <div className="flex flex-row gap-[5px] items-start justify-evenly ml-1 md:ml-[0]">
                                                                                                                            <Img
                                                                                                                              className="h-px w-px"
                                                                                                                              src="images/img_vector_1.svg"
                                                                                                                              alt="vector_Twelve"
                                                                                                                            />
                                                                                                                            <Img
                                                                                                                              className="h-px w-px"
                                                                                                                              src="images/img_vector_1.svg"
                                                                                                                              alt="vector_Thirteen"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                        </a>
                                                                                                                      </li>
                                                                                                                    </ul>
                                                                                                                  </div>
                                                                                                                </a>
                                                                                                              </li>
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <Img
                                                                                                                    className="h-px mt-2.5"
                                                                                                                    src="images/img_vector_1.svg"
                                                                                                                    alt="vector_Fourteen"
                                                                                                                  />
                                                                                                                </a>
                                                                                                              </li>
                                                                                                            </ul>
                                                                                                            <ul className="flex flex-col items-start justify-start mt-5 w-[10%] md:w-full common-column-list">
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <div className="flex flex-row items-start justify-evenly">
                                                                                                                    <Img
                                                                                                                      className="h-px w-px"
                                                                                                                      src="images/img_vector_1.svg"
                                                                                                                      alt="vector_Fifteen"
                                                                                                                    />
                                                                                                                    <Img
                                                                                                                      className="h-[3px] w-[3px]"
                                                                                                                      src="images/img_vector_green_200_3x3.svg"
                                                                                                                      alt="vector_Sixteen"
                                                                                                                    />
                                                                                                                  </div>
                                                                                                                </a>
                                                                                                              </li>
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <Img
                                                                                                                    className="h-px mt-[23px]"
                                                                                                                    src="images/img_vector_3.svg"
                                                                                                                    alt="vector_Seventeen"
                                                                                                                  />
                                                                                                                </a>
                                                                                                              </li>
                                                                                                              <li>
                                                                                                                <a href="javascript:">
                                                                                                                  <div className="flex flex-row h-px items-start justify-evenly mt-[39px]">
                                                                                                                    <Img
                                                                                                                      className="h-px w-px"
                                                                                                                      src="images/img_vector_1.svg"
                                                                                                                      alt="vector_Eighteen"
                                                                                                                    />
                                                                                                                    <Img
                                                                                                                      className="h-px w-px"
                                                                                                                      src="images/img_vector_1.svg"
                                                                                                                      alt="vector_Nineteen"
                                                                                                                    />
                                                                                                                  </div>
                                                                                                                </a>
                                                                                                              </li>
                                                                                                            </ul>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[26px] justify-end pl-[3px] py-[3px] right-[9%] top-[0] w-[26%]"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_group518.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <Img
                                                                                                        className="h-px ml-1.5 md:ml-[0] mr-[21px] mt-[13px] w-px"
                                                                                                        src="images/img_vector_2.svg"
                                                                                                        alt="vector_Twenty"
                                                                                                      />
                                                                                                      <Img
                                                                                                        className="h-[3px] md:ml-[0] ml-[23px] mt-0.5"
                                                                                                        src="images/img_vector_green_200_3x5.svg"
                                                                                                        alt="vector_TwentyOne"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <Img
                                                                                                      className="absolute h-0.5 left-[43%] top-[3%] w-[3px]"
                                                                                                      src="images/img_vector_2x3.svg"
                                                                                                      alt="vector_TwentyTwo"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="absolute h-px right-[44%] top-[3%] w-px"
                                                                                                      src="images/img_vector_green_200.svg"
                                                                                                      alt="vector_TwentyThree"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="absolute h-px inset-x-[0] mx-auto top-[3%] w-px"
                                                                                                      src="images/img_vector_1.svg"
                                                                                                      alt="vector_TwentyFour"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="absolute h-px right-[42%] top-[3%] w-px"
                                                                                                      src="images/img_vector_1.svg"
                                                                                                      alt="vector_TwentyFive"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="absolute h-[3px] right-[38%] top-[3%]"
                                                                                                      src="images/img_vector_green_200_3x9.svg"
                                                                                                      alt="vector_TwentySix"
                                                                                                    />
                                                                                                  </div>
                                                                                                  <div className="absolute flex flex-col items-start justify-start right-[30%] top-[0] w-[15%]">
                                                                                                    <div className="flex flex-row items-end justify-evenly w-full">
                                                                                                      <Img
                                                                                                        className="h-px mt-[7px] w-px"
                                                                                                        src="images/img_vector_1.svg"
                                                                                                        alt="vector_TwentySeven"
                                                                                                      />
                                                                                                      <Img
                                                                                                        className="h-[9px]"
                                                                                                        src="images/img_settings_green_200.svg"
                                                                                                        alt="television"
                                                                                                      />
                                                                                                    </div>
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col gap-2.5 h-3 items-start justify-start md:ml-[0] ml-[3px] mt-0.5 px-[3px] w-[84%] md:w-full"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_group519.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <Img
                                                                                                        className="h-px w-0.5"
                                                                                                        src="images/img_group3.svg"
                                                                                                        alt="vector_TwentyEight"
                                                                                                      />
                                                                                                      <Img
                                                                                                        className="h-px w-px"
                                                                                                        src="images/img_vector_1.svg"
                                                                                                        alt="vector_TwentyNine"
                                                                                                      />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                                <Img
                                                                                                  className="absolute h-px right-[38%] top-[8%] w-px"
                                                                                                  src="images/img_vector_1.svg"
                                                                                                  alt="vector_Thirty"
                                                                                                />
                                                                                                <Img
                                                                                                  className="absolute h-0.5 inset-x-[0] mx-auto top-[3%]"
                                                                                                  src="images/img_vector_green_200_2x6.svg"
                                                                                                  alt="vector_ThirtyOne"
                                                                                                />
                                                                                              </div>
                                                                                              <div className="absolute flex flex-col items-start justify-start right-[41%] top-[1%] w-[12%]">
                                                                                                <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                                                                                                  <Img
                                                                                                    className="h-px mt-[3px] w-0.5"
                                                                                                    src="images/img_vector_2.svg"
                                                                                                    alt="vector_ThirtyTwo"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-1"
                                                                                                    src="images/img_vector_green_200_4x6.svg"
                                                                                                    alt="vector_ThirtyThree"
                                                                                                  />
                                                                                                </div>
                                                                                                <div className="flex flex-row items-start justify-start w-0.5 md:w-full">
                                                                                                  <Img
                                                                                                    className="h-px w-px"
                                                                                                    src="images/img_vector_1.svg"
                                                                                                    alt="vector_ThirtyFour"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-px w-px"
                                                                                                    src="images/img_vector_2.svg"
                                                                                                    alt="vector_ThirtyFive"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <div className="absolute flex flex-col h-[5px] items-start justify-start left-[42%] top-[3%] w-[5px]">
                                                                                                <Img
                                                                                                  className="h-px md:ml-[0] ml-[3px] w-px"
                                                                                                  src="images/img_vector_1.svg"
                                                                                                  alt="vector_ThirtySix"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-1 w-[5px]"
                                                                                                  src="images/img_vector_green_200_4x5.svg"
                                                                                                  alt="vector_ThirtySeven"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <ul className="absolute flex flex-col items-start justify-start right-[45%] top-[2%] w-[4%] md:w-full common-column-list">
                                                                                              <li>
                                                                                                <a href="javascript:">
                                                                                                  <Img
                                                                                                    className="h-px md:ml-[0] ml-[3px]"
                                                                                                    src="images/img_vector_1.svg"
                                                                                                    alt="vector_ThirtyEight"
                                                                                                  />
                                                                                                </a>
                                                                                              </li>
                                                                                              <li>
                                                                                                <a href="javascript:">
                                                                                                  <div className="flex flex-row items-start justify-evenly">
                                                                                                    <Img
                                                                                                      className="h-0.5 w-[3px]"
                                                                                                      src="images/img_vector_4.svg"
                                                                                                      alt="vector_ThirtyNine"
                                                                                                    />
                                                                                                    <Img
                                                                                                      className="h-px w-px"
                                                                                                      src="images/img_vector_2.svg"
                                                                                                      alt="vector_Forty"
                                                                                                    />
                                                                                                  </div>
                                                                                                </a>
                                                                                              </li>
                                                                                              <li>
                                                                                                <a href="javascript:">
                                                                                                  <Img
                                                                                                    className="h-px"
                                                                                                    src="images/img_vector_1.svg"
                                                                                                    alt="vector_FortyOne"
                                                                                                  />
                                                                                                </a>
                                                                                              </li>
                                                                                              <li>
                                                                                                <a href="javascript:">
                                                                                                  <Img
                                                                                                    className="h-0.5"
                                                                                                    src="images/img_vector_5.svg"
                                                                                                    alt="vector_FortyTwo"
                                                                                                  />
                                                                                                </a>
                                                                                              </li>
                                                                                              <li>
                                                                                                <a href="javascript:">
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_vector_5.svg"
                                                                                                    alt="vector_FortyThree"
                                                                                                  />
                                                                                                </a>
                                                                                              </li>
                                                                                            </ul>
                                                                                            <Img
                                                                                              className="absolute h-px right-[2%] top-[14%] w-px"
                                                                                              src="images/img_vector_1.svg"
                                                                                              alt="vector_FortyFour"
                                                                                            />
                                                                                            <div className="absolute flex flex-col items-start justify-start right-[6%] top-[10%] w-[2%]">
                                                                                              <Img
                                                                                                className="h-px w-px"
                                                                                                src="images/img_vector_1.svg"
                                                                                                alt="vector_FortyFive"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[3px] mt-0.5 w-0.5"
                                                                                                src="images/img_vector_green_200_3x2.svg"
                                                                                                alt="vector_FortySix"
                                                                                              />
                                                                                            </div>
                                                                                            <Img
                                                                                              className="absolute h-px right-[4%] top-[9%] w-px"
                                                                                              src="images/img_vector_1.svg"
                                                                                              alt="vector_FortySeven"
                                                                                            />
                                                                                          </div>
                                                                                          <div className="flex flex-row items-center justify-evenly mt-11 w-[4%]">
                                                                                            <Img
                                                                                              className="h-px w-px"
                                                                                              src="images/img_vector_2.svg"
                                                                                              alt="vector_FortyEight"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-px w-px"
                                                                                              src="images/img_vector_6.svg"
                                                                                              alt="vector_FortyNine"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                        <div className="absolute flex flex-row items-start justify-center right-[4%] top-[2%] w-[11%]">
                                                                                          <div className="flex flex-col gap-[19px] items-end justify-start w-[87%]">
                                                                                            <Img
                                                                                              className="h-px w-px"
                                                                                              src="images/img_vector_3.svg"
                                                                                              alt="vector_Fifty"
                                                                                            />
                                                                                            <div className="flex flex-row items-start justify-between w-full">
                                                                                              <Img
                                                                                                className="h-[7px]"
                                                                                                src="images/img_vector_green_200_7x4.svg"
                                                                                                alt="vector_FiftyOne"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-px mt-0.5 w-px"
                                                                                                src="images/img_group3.svg"
                                                                                                alt="vector_FiftyTwo"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-px w-px"
                                                                                                src="images/img_vector_1.svg"
                                                                                                alt="vector_FiftyThree"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <div className="flex flex-col h-px items-start justify-start mt-5 w-px">
                                                                                            <Img
                                                                                              className="h-px w-px"
                                                                                              src="images/img_vector_2.svg"
                                                                                              alt="vector_FiftyFour"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-px w-px"
                                                                                              src="images/img_vector_green_200.svg"
                                                                                              alt="vector_FiftyFive"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <Img
                                                                                        className="absolute h-1 right-[4%] top-[2%]"
                                                                                        src="images/img_vector_green_200_4x7.svg"
                                                                                        alt="vector_FiftySix"
                                                                                      />
                                                                                    </div>
                                                                                    <Img
                                                                                      className="absolute h-px right-[2%] top-[1%]"
                                                                                      src="images/img_vector_green_200_4x6.svg"
                                                                                      alt="vector_FiftySeven"
                                                                                    />
                                                                                  </div>
                                                                                  <Img
                                                                                    className="h-px ml-[51px] mt-[46px] w-px"
                                                                                    src="images/img_vector_1x1.svg"
                                                                                    alt="vector_FiftyEight"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-px ml-7 mt-[23px] w-px"
                                                                                    src="images/img_vector_3.svg"
                                                                                    alt="vector_FiftyNine"
                                                                                  />
                                                                                </div>
                                                                                <div className="absolute flex flex-col h-2 items-start justify-start right-[11%] top-[13%] w-2">
                                                                                  <Img
                                                                                    className="h-0.5 ml-1 md:ml-[0] w-[3px]"
                                                                                    src="images/img_vector_7.svg"
                                                                                    alt="vector_Sixty"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-[5px] w-[5px]"
                                                                                    src="images/img_vector_5x5.svg"
                                                                                    alt="vector_SixtyOne"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                              <Img
                                                                                className="absolute h-px right-[14%] top-[16%] w-px"
                                                                                src="images/img_group3.svg"
                                                                                alt="vector_SixtyTwo"
                                                                              />
                                                                              <ul className="absolute flex flex-col items-start justify-start right-[16%] top-[18%] w-[5%] md:w-full common-column-list">
                                                                                <li>
                                                                                  <a href="javascript:">
                                                                                    <Img
                                                                                      className="h-px ml-1.5 md:ml-[0]"
                                                                                      src="images/img_vector_green_200.svg"
                                                                                      alt="vector_SixtyThree"
                                                                                    />
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a href="javascript:">
                                                                                    <div className="flex flex-row items-start justify-evenly">
                                                                                      <Img
                                                                                        className="h-px w-px"
                                                                                        src="images/img_vector_3.svg"
                                                                                        alt="vector_SixtyFour"
                                                                                      />
                                                                                      <div
                                                                                        className="bg-cover bg-no-repeat flex flex-row h-[5px] items-center justify-center w-[34%]"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group18.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <Img
                                                                                          className="h-px w-px"
                                                                                          src="images/img_vector_1.svg"
                                                                                          alt="vector_SixtyFive"
                                                                                        />
                                                                                      </div>
                                                                                    </div>
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a href="javascript:">
                                                                                    <Img
                                                                                      className="h-0.5 md:ml-[0] ml-[7px]"
                                                                                      src="images/img_vector_green_200_2x2.svg"
                                                                                      alt="vector_SixtySix"
                                                                                    />
                                                                                  </a>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                            <div className="absolute flex flex-row items-start justify-center right-[16%] top-[21%] w-[2%]">
                                                                              <Img
                                                                                className="h-px w-px"
                                                                                src="images/img_vector_green_200_1x1.svg"
                                                                                alt="vector_SixtySeven"
                                                                              />
                                                                              <Img
                                                                                className="h-px ml-0.5 w-px"
                                                                                src="images/img_vector_1.svg"
                                                                                alt="vector_SixtyEight"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                          <Img
                                                                            className="absolute h-px right-[16%] top-[21%] w-px"
                                                                            src="images/img_vector_green_200_1x1.svg"
                                                                            alt="vector_SixtyNine"
                                                                          />
                                                                          <Img
                                                                            className="absolute h-px right-[9%] top-[24%] w-px"
                                                                            src="images/img_vector_green_200.svg"
                                                                            alt="vector_Seventy"
                                                                          />
                                                                        </div>
                                                                        <Img
                                                                          className="absolute h-px right-[9%] top-[24%] w-0.5"
                                                                          src="images/img_vector_green_200_1x1.svg"
                                                                          alt="vector_SeventyOne"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="absolute h-1.5 right-[10%] top-[23%]"
                                                                        src="images/img_map.svg"
                                                                        alt="television_One"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute h-0.5 right-[26%] top-[21%] w-px"
                                                                      src="images/img_vector_2.svg"
                                                                      alt="vector_SeventyTwo"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-2 right-[34%] top-[26%]"
                                                                      src="images/img_vector_green_200_8x3.svg"
                                                                      alt="vector_SeventyThree"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-px right-[33%] top-[20%] w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_SeventyFour"
                                                                    />
                                                                    <div className="absolute flex flex-row items-start justify-center right-[7%] top-[24%] w-0.5">
                                                                      <div className="flex flex-col h-px items-start justify-start w-px">
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_vector_1.svg"
                                                                          alt="vector_SeventyFive"
                                                                        />
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_vector_1.svg"
                                                                          alt="vector_SeventySix"
                                                                        />
                                                                      </div>
                                                                      <div className="flex flex-col h-px items-start justify-start w-px">
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_vector_1.svg"
                                                                          alt="vector_SeventySeven"
                                                                        />
                                                                        <Img
                                                                          className="h-px w-px"
                                                                          src="images/img_vector_1.svg"
                                                                          alt="vector_SeventyEight"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                    <div className="absolute flex flex-row h-px items-start justify-center right-[8%] top-[24%] w-px">
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_1.svg"
                                                                        alt="vector_SeventyNine"
                                                                      />
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_1.svg"
                                                                        alt="vector_Eighty"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute h-px right-[14%] top-1/4 w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_EightyOne"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-px right-[13%] top-[31%] w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_EightyTwo"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-0.5 right-[10%] top-[32%] w-px"
                                                                      src="images/img_vector_1x1.svg"
                                                                      alt="vector_EightyThree"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-[18px] right-[9%] top-1/4"
                                                                      src="images/img_vector.svg"
                                                                      alt="television_Two"
                                                                    />
                                                                    <Img
                                                                      className="absolute h-1 right-[3%] top-[30%]"
                                                                      src="images/img_vector_green_200_4x2.svg"
                                                                      alt="vector_EightyFour"
                                                                    />
                                                                  </div>
                                                                  <div className="absolute flex flex-col h-1 items-start justify-start right-[4%] top-[32%] w-1">
                                                                    <Img
                                                                      className="h-1 w-1"
                                                                      src="images/img_vector_2x3.svg"
                                                                      alt="vector_EightyFive"
                                                                    />
                                                                    <Img
                                                                      className="h-px w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_EightySix"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="absolute h-px right-[3%] top-[27%] w-px"
                                                                    src="images/img_vector_1.svg"
                                                                    alt="vector_EightySeven"
                                                                  />
                                                                  <Img
                                                                    className="absolute h-px right-[3%] top-[27%] w-px"
                                                                    src="images/img_vector_1.svg"
                                                                    alt="vector_EightyEight"
                                                                  />
                                                                  <div className="absolute flex flex-col items-start justify-start right-[31%] top-[1%] w-[3px]">
                                                                    <Img
                                                                      className="h-px w-px"
                                                                      src="images/img_vector_2.svg"
                                                                      alt="vector_EightyNine"
                                                                    />
                                                                    <div className="flex flex-row items-start justify-evenly w-full">
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_6.svg"
                                                                        alt="vector_Ninety"
                                                                      />
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_3.svg"
                                                                        alt="vector_NinetyOne"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="absolute flex flex-col items-start justify-start right-[19%] top-[1%] w-[16%]">
                                                                  <div className="flex flex-row items-start justify-start w-[27%] md:w-full">
                                                                    <Img
                                                                      className="h-px w-0.5"
                                                                      src="images/img_vector_green_200_1x1.svg"
                                                                      alt="vector_NinetyTwo"
                                                                    />
                                                                    <Img
                                                                      className="h-px w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_NinetyThree"
                                                                    />
                                                                    <Img
                                                                      className="h-px ml-1 w-px"
                                                                      src="images/img_vector_3.svg"
                                                                      alt="vector_NinetyFour"
                                                                    />
                                                                  </div>
                                                                  <div className="flex flex-row items-start justify-evenly ml-0.5 md:ml-[0] mt-1 w-[95%] md:w-full">
                                                                    <Img
                                                                      className="h-[7px]"
                                                                      src="images/img_checkmark_green_200.svg"
                                                                      alt="television_Three"
                                                                    />
                                                                    <Img
                                                                      className="h-px mt-1 w-px"
                                                                      src="images/img_vector_green_200.svg"
                                                                      alt="vector_NinetyFive"
                                                                    />
                                                                    <Img
                                                                      className="h-px mt-1 w-px"
                                                                      src="images/img_vector_1.svg"
                                                                      alt="vector_NinetySix"
                                                                    />
                                                                    <Img
                                                                      className="h-px mt-0.5 w-px"
                                                                      src="images/img_vector_green_200.svg"
                                                                      alt="vector_NinetySeven"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="absolute flex flex-row items-start justify-between right-[9%] top-[3%] w-1/4">
                                                                <Img
                                                                  className="h-px mt-[7px] w-px"
                                                                  src="images/img_vector_green_200.svg"
                                                                  alt="vector_NinetyEight"
                                                                />
                                                                <div className="flex flex-col gap-5 items-start justify-start">
                                                                  <div className="flex flex-row items-start justify-evenly w-full">
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_green_200_2x2.svg"
                                                                      alt="vector_NinetyNine"
                                                                    />
                                                                    <Img
                                                                      className="h-px w-0.5"
                                                                      src="images/img_vector_green_200_1x1.svg"
                                                                      alt="vector_OneHundred"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="h-1.5 ml-0.5 md:ml-[0]"
                                                                    src="images/img_vector_green_200_6x1.svg"
                                                                    alt="vector_OneHundredOne"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <div className="absolute flex flex-row items-start justify-center right-[32%] top-[1%] w-[3%]">
                                                                <Img
                                                                  className="h-px w-px"
                                                                  src="images/img_vector_green_200_1x1.svg"
                                                                  alt="vector_OneHundredTwo"
                                                                />
                                                                <Img
                                                                  className="h-px ml-[3px] w-px"
                                                                  src="images/img_vector_3.svg"
                                                                  alt="vector_OneHundredThree"
                                                                />
                                                              </div>
                                                              <div
                                                                className="absolute bg-cover bg-no-repeat flex flex-row h-20 items-start justify-end p-1 right-[0] top-[3%] w-1/2"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group517.svg')",
                                                                }}
                                                              >
                                                                <Img
                                                                  className="h-px mt-[29px] w-px"
                                                                  src="images/img_vector_6.svg"
                                                                  alt="vector_OneHundredFour"
                                                                />
                                                                <Img
                                                                  className="h-px mt-[30px] w-px"
                                                                  src="images/img_vector_green_200_1x1.svg"
                                                                  alt="vector_OneHundredFive"
                                                                />
                                                                <div className="h-[68px] md:h-[71px] mb-[3px] ml-[42px] relative w-[46%]">
                                                                  <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-evenly my-auto right-[0] w-[90%]">
                                                                    <Img
                                                                      className="h-px mt-[58px]"
                                                                      src="images/img_vector_green_200_6x1.svg"
                                                                      alt="vector_OneHundredSix"
                                                                    />
                                                                    <div className="md:h-[66px] h-[68px] relative w-[88%]">
                                                                      <div className="flex flex-col h-full justify-start m-auto w-full">
                                                                        <div className="flex flex-col h-px items-start justify-start md:ml-[0] ml-[13px] w-px">
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_1.svg"
                                                                            alt="vector_OneHundredSeven"
                                                                          />
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_green_200.svg"
                                                                            alt="vector_OneHundredEight"
                                                                          />
                                                                        </div>
                                                                        <Img
                                                                          className="h-px md:ml-[0] ml-[33px] w-0.5"
                                                                          src="images/img_vector_3.svg"
                                                                          alt="vector_OneHundredNine"
                                                                        />
                                                                        <div className="flex flex-col items-end justify-start mr-[29px] mt-[52px] w-[17%] md:w-full">
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_1.svg"
                                                                            alt="vector_OneHundredTen"
                                                                          />
                                                                          <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                                                                            <Img
                                                                              className="h-px w-px"
                                                                              src="images/img_vector_6.svg"
                                                                              alt="vector_OneHundredEleven"
                                                                            />
                                                                            <Img
                                                                              className="h-px w-0.5"
                                                                              src="images/img_vector_green_200_1x2.svg"
                                                                              alt="vector_OneHundredTwelve"
                                                                            />
                                                                          </div>
                                                                        </div>
                                                                        <Img
                                                                          className="h-px md:ml-[0] ml-[25px] mt-1.5 w-px"
                                                                          src="images/img_vector_1.svg"
                                                                          alt="vector_OneHundredThirteen"
                                                                        />
                                                                      </div>
                                                                      <div className="absolute bottom-[12%] flex flex-row h-1.5 items-start justify-center left-[0] w-1.5">
                                                                        <div className="flex flex-col items-center justify-start w-1/2">
                                                                          <Img
                                                                            className="h-1 w-[3px]"
                                                                            src="images/img_group18.svg"
                                                                            alt="vector_OneHundredFourteen"
                                                                          />
                                                                          <Img
                                                                            className="h-px w-0.5"
                                                                            src="images/img_vector_2.svg"
                                                                            alt="vector_OneHundredFifteen"
                                                                          />
                                                                        </div>
                                                                        <div className="flex flex-col items-start justify-start w-[17%]">
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_2.svg"
                                                                            alt="vector_OneHundredSixteen"
                                                                          />
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_3.svg"
                                                                            alt="vector_OneHundredSeventeen"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <Img
                                                                    className="absolute bottom-[18%] h-px left-[0] w-px"
                                                                    src="images/img_vector_1.svg"
                                                                    alt="vector_OneHundredEighteen"
                                                                  />
                                                                  <div className="absolute bottom-[10%] flex flex-col items-end justify-start left-[13%] w-[16%]">
                                                                    <div className="flex flex-row h-1.5 items-end justify-evenly w-1.5">
                                                                      <Img
                                                                        className="h-px mt-[5px] w-px"
                                                                        src="images/img_vector_1.svg"
                                                                        alt="vector_OneHundredNineteen"
                                                                      />
                                                                      <Img
                                                                        className="h-1.5 w-[5px]"
                                                                        src="images/img_vector_green_200_6x5.svg"
                                                                        alt="vector_OneHundredTwenty"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="h-px mt-[3px] w-px"
                                                                      src="images/img_vector_green_200.svg"
                                                                      alt="vector_OneHundredTwentyOne"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="absolute bottom-[19%] h-px left-[0] w-px"
                                                                    src="images/img_vector_1.svg"
                                                                    alt="vector_OneHundredTwentyTwo"
                                                                  />
                                                                  <Img
                                                                    className="absolute bottom-[13%] h-1.5 left-[0] w-1.5"
                                                                    src="images/img_vector_green_200_5x5.svg"
                                                                    alt="user_One"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute h-px right-[22%] top-[2%]"
                                                                src="images/img_vector_1x1.svg"
                                                                alt="vector_OneHundredTwentyThree"
                                                              />
                                                            </div>
                                                            <Img
                                                              className="absolute h-0.5 right-[23%] top-[1%] w-0.5"
                                                              src="images/img_vector_4.svg"
                                                              alt="vector_OneHundredTwentyFour"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute h-px right-[24%] top-[7%]"
                                                            src="images/img_vector_green_200_1x3.svg"
                                                            alt="vector_OneHundredTwentyFive"
                                                          />
                                                          <Img
                                                            className="absolute h-px right-[27%] top-[7%] w-px"
                                                            src="images/img_vector_1.svg"
                                                            alt="vector_OneHundredTwentySix"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-[141px] items-center justify-end p-1 right-[0] top-[0] w-[92%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group514.svg')",
                                                            }}
                                                          >
                                                            <ul className="flex flex-col items-center justify-start w-full common-column-list">
                                                              <li>
                                                                <a href="javascript:">
                                                                  <div
                                                                    className="bg-cover bg-no-repeat md:h-28 h-[115px] px-[3px] relative"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group514.svg')",
                                                                    }}
                                                                  >
                                                                    <div className="absolute bottom-[34%] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-[95%]">
                                                                      <div className="flex flex-col items-center justify-start w-[99%]">
                                                                        <div className="flex flex-row items-center justify-evenly w-full">
                                                                          <Img
                                                                            className="h-px w-px"
                                                                            src="images/img_vector_gray_500_01.svg"
                                                                            alt="vector_OneHundredTwentySeven"
                                                                          />
                                                                          <Line className="bg-gray-500_01 h-px w-[98%]" />
                                                                        </div>
                                                                      </div>
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_gray_500_01.svg"
                                                                        alt="vector_OneHundredTwentyNine"
                                                                      />
                                                                    </div>
                                                                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[47%] my-auto w-[1%]">
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_gray_500_01.svg"
                                                                        alt="vector_OneHundredThirty"
                                                                      />
                                                                      <Line className="bg-gray-500_01 h-[108px] mt-0.5 w-px" />
                                                                      <Img
                                                                        className="h-px w-px"
                                                                        src="images/img_vector_gray_500_01.svg"
                                                                        alt="vector_OneHundredThirtyTwo"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </a>
                                                              </li>
                                                              <li>
                                                                <a href="javascript:">
                                                                  <div className="flex flex-row items-center justify-between mt-[5px]">
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtyThree"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtyFour"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtyFive"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtySix"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtySeven"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtyEight"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredThirtyNine"
                                                                    />
                                                                  </div>
                                                                </a>
                                                              </li>
                                                              <li>
                                                                <a href="javascript:">
                                                                  <div className="flex flex-row items-center justify-between mt-0.5">
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredForty"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyOne"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyTwo"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyThree"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyFour"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyFive"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortySix"
                                                                    />
                                                                  </div>
                                                                </a>
                                                              </li>
                                                              <li>
                                                                <a href="javascript:">
                                                                  <div className="flex flex-row items-center justify-between mt-0.5">
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortySeven"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyEight"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFortyNine"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFifty"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyOne"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyTwo"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyThree"
                                                                    />
                                                                  </div>
                                                                </a>
                                                              </li>
                                                              <li>
                                                                <a href="javascript:">
                                                                  <div className="flex flex-row items-center justify-between mt-0.5">
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyFour"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyFive"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftySix"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftySeven"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyEight"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredFiftyNine"
                                                                    />
                                                                    <Img
                                                                      className="h-px"
                                                                      src="images/img_vector_gray_500_01.svg"
                                                                      alt="vector_OneHundredSixty"
                                                                    />
                                                                  </div>
                                                                </a>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[122px] inset-x-[0] items-start justify-start mx-auto p-2.5 top-[0] w-[19%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group515.svg')",
                                                          }}
                                                        >
                                                          <div className="flex flex-col gap-3 items-end justify-start mb-[65px] mt-[9px] w-1/2 md:w-full">
                                                            <Img
                                                              className="h-[3px] mr-[3px]"
                                                              src="images/img_vector_blue_gray_900_01_3x9.svg"
                                                              alt="vector_OneHundredSixtyOne"
                                                            />
                                                            <div className="flex flex-col items-start justify-start w-1/4 md:w-full">
                                                              <Img
                                                                className="h-2"
                                                                src="images/img_vector_blue_gray_900_01_8x3.svg"
                                                                alt="vector_OneHundredSixtyTwo"
                                                              />
                                                              <Img
                                                                className="h-px w-px"
                                                                src="images/img_vector_blue_gray_900_01_1x1.svg"
                                                                alt="vector_OneHundredSixtyThree"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <Line className="bg-blue_gray-900_01 h-px ml-3.5 md:ml-[0] w-[95%]" />
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[137px] items-center justify-start p-[3px] right-[0] w-[36%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group514.svg')",
                                                    }}
                                                  >
                                                    <div
                                                      className="bg-cover bg-no-repeat md:h-[123px] h-[130px] relative w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group514.svg')",
                                                      }}
                                                    >
                                                      <div className="h-32 md:h-[123px] m-auto w-full">
                                                        <div className="h-32 md:h-[123px] m-auto w-full">
                                                          <div className="h-32 md:h-[123px] m-auto w-full">
                                                            <div className="h-32 md:h-[123px] m-auto w-full">
                                                              <div className="h-32 md:h-[123px] m-auto w-full">
                                                                <div className="flex flex-col h-full justify-start m-auto w-full">
                                                                  <div className="md:h-[86px] h-[89px] relative w-full">
                                                                    <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                      <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                        <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                          <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                            <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                              <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                  <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                    <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                      <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                        <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                          <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                            <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                                                <div className="flex flex-col items-center justify-start w-full">
                                                                                                  <Line className="bg-gray-500_01 h-10 w-0.5" />
                                                                                                  <div className="flex flex-col items-center justify-start w-full">
                                                                                                    <Line className="bg-gray-500_01 h-[3px] w-full" />
                                                                                                    <div className="flex flex-row items-start justify-center w-[36%] md:w-full">
                                                                                                      <Line className="bg-gray-500_01 h-10 w-0.5" />
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group12.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSixtyEight"
                                                                                                          />
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSixtyNine"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group12.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSeventy"
                                                                                                          />
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSeventyOne"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group12.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSeventyTwo"
                                                                                                          />
                                                                                                          <Img
                                                                                                            className="h-[3px]"
                                                                                                            src="images/img_group514.svg"
                                                                                                            alt="vector_OneHundredSeventyThree"
                                                                                                          />
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <Img
                                                                                                        className="h-[37px] mt-[3px]"
                                                                                                        src="images/img_group12.svg"
                                                                                                        alt="grid"
                                                                                                      />
                                                                                                      <Line className="bg-gray-500_01 h-10 ml-3 w-0.5" />
                                                                                                    </div>
                                                                                                    <Line className="bg-gray-500_01 h-[3px] w-full" />
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                              <Img
                                                                                                className="absolute bottom-[4%] h-[37px] right-[35%]"
                                                                                                src="images/img_group12.svg"
                                                                                                alt="grid_One"
                                                                                              />
                                                                                            </div>
                                                                                            <div className="absolute bottom-[4%] flex flex-row items-center justify-between right-[10%] w-2/5">
                                                                                              <div className="flex flex-col gap-[22px] items-center justify-start">
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group514.svg"
                                                                                                  alt="vector_OneHundredSeventySix"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group514.svg"
                                                                                                  alt="vector_OneHundredSeventySeven"
                                                                                                />
                                                                                              </div>
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group12.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredSeventyEight"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredSeventyNine"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group12.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredEighty"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredEightyOne"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group12.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredEightyTwo"
                                                                                                  />
                                                                                                  <Img
                                                                                                    className="h-[3px]"
                                                                                                    src="images/img_group514.svg"
                                                                                                    alt="vector_OneHundredEightyThree"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                              <Img
                                                                                                className="h-[37px]"
                                                                                                src="images/img_group12.svg"
                                                                                                alt="grid_Two"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <Img
                                                                                            className="absolute bottom-[4%] h-[37px] right-[2%]"
                                                                                            src="images/img_group12.svg"
                                                                                            alt="grid_Three"
                                                                                          />
                                                                                        </div>
                                                                                        <div className="absolute bottom-[4%] flex flex-row items-center justify-start left-[0] w-[89%]">
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group12.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightyFour"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightyFive"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group12.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightySix"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightySeven"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group12.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightyEight"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group514.svg"
                                                                                                alt="vector_OneHundredEightyNine"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                          <Img
                                                                                            className="h-[37px]"
                                                                                            src="images/img_group12.svg"
                                                                                            alt="grid_Four"
                                                                                          />
                                                                                          <div className="flex flex-col gap-[22px] items-center justify-start ml-[77px] w-[6%]">
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group514.svg"
                                                                                              alt="vector_OneHundredNinety"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group514.svg"
                                                                                              alt="vector_OneHundredNinetyOne"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <Img
                                                                                        className="absolute bottom-[4%] h-[37px] left-[22%]"
                                                                                        src="images/img_group12.svg"
                                                                                        alt="grid_Five"
                                                                                      />
                                                                                    </div>
                                                                                    <div className="absolute flex flex-col items-start justify-start left-[15%] top-[3%] w-[6%]">
                                                                                      <div
                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group12.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                          <Img
                                                                                            className="h-[3px]"
                                                                                            src="images/img_group514.svg"
                                                                                            alt="vector_OneHundredNinetyTwo"
                                                                                          />
                                                                                          <Img
                                                                                            className="h-[3px]"
                                                                                            src="images/img_group514.svg"
                                                                                            alt="vector_OneHundredNinetyThree"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                      <Img
                                                                                        className="h-[3px] mt-[11px]"
                                                                                        src="images/img_group514.svg"
                                                                                        alt="vector_OneHundredNinetyFour"
                                                                                      />
                                                                                      <Img
                                                                                        className="h-[3px] mt-[22px]"
                                                                                        src="images/img_group514.svg"
                                                                                        alt="vector_OneHundredNinetyFive"
                                                                                      />
                                                                                    </div>
                                                                                  </div>
                                                                                  <div
                                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start left-[11%] py-[3px] top-[3%] w-[5%]"
                                                                                    style={{
                                                                                      backgroundImage:
                                                                                        "url('images/img_group12.svg')",
                                                                                    }}
                                                                                  >
                                                                                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                      <Img
                                                                                        className="h-[3px]"
                                                                                        src="images/img_group514.svg"
                                                                                        alt="vector_OneHundredNinetySix"
                                                                                      />
                                                                                      <Img
                                                                                        className="h-[3px]"
                                                                                        src="images/img_group514.svg"
                                                                                        alt="vector_OneHundredNinetySeven"
                                                                                      />
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div
                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start left-[5%] py-[3px] top-[3%] w-[5%]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group12.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_OneHundredNinetyEight"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_OneHundredNinetyNine"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div className="absolute flex flex-row items-center justify-between left-[0] top-[3%] w-[36%]">
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group12.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundred"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundredOne"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group12.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundredTwo"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundredThree"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group12.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundredFour"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group514.svg"
                                                                                      alt="vector_TwoHundredFive"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <Img
                                                                                  className="h-[37px]"
                                                                                  src="images/img_group12.svg"
                                                                                  alt="grid_Six"
                                                                                />
                                                                              </div>
                                                                            </div>
                                                                            <Img
                                                                              className="absolute h-[37px] left-[37%] top-[3%]"
                                                                              src="images/img_group12.svg"
                                                                              alt="grid_Seven"
                                                                            />
                                                                          </div>
                                                                          <div className="absolute flex flex-row items-center justify-between right-[15%] top-[3%] w-[54%]">
                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-[10%]">
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group514.svg"
                                                                                alt="vector_TwoHundredSix"
                                                                              />
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group514.svg"
                                                                                alt="vector_TwoHundredSeven"
                                                                              />
                                                                            </div>
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[10%]"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group12.svg')",
                                                                              }}
                                                                            >
                                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                <Img
                                                                                  className="h-[3px]"
                                                                                  src="images/img_group514.svg"
                                                                                  alt="vector_TwoHundredEight"
                                                                                />
                                                                                <Img
                                                                                  className="h-[3px]"
                                                                                  src="images/img_group514.svg"
                                                                                  alt="vector_TwoHundredNine"
                                                                                />
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[10%]"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group12.svg')",
                                                                              }}
                                                                            >
                                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                <Img
                                                                                  className="h-[3px]"
                                                                                  src="images/img_group514.svg"
                                                                                  alt="vector_TwoHundredTen"
                                                                                />
                                                                                <Img
                                                                                  className="h-[3px]"
                                                                                  src="images/img_group514.svg"
                                                                                  alt="vector_TwoHundredEleven"
                                                                                />
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col gap-[19px] h-[37px] justify-start w-[31%]"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_vector_gray_500_01_5x7.svg')",
                                                                              }}
                                                                            >
                                                                              <Img
                                                                                className="h-[5px] mr-2.5 mt-0.5"
                                                                                src="images/img_vector_8.svg"
                                                                                alt="vector_TwoHundredTwelve"
                                                                              />
                                                                              <Img
                                                                                className="h-[5px] mb-[3px] ml-2.5 md:ml-[0]"
                                                                                src="images/img_vector_8.svg"
                                                                                alt="vector_TwoHundredThirteen"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <Img
                                                                          className="absolute h-0.5 right-[4%] top-[43%]"
                                                                          src="images/img_vector_2x19.svg"
                                                                          alt="vector_TwoHundredFourteen"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="absolute h-[35px] right-[4%] top-[3%]"
                                                                        src="images/img_vector_gray_500_01_2x19.svg"
                                                                        alt="thumbsup"
                                                                      />
                                                                    </div>
                                                                    <div className="absolute flex flex-row items-center justify-center right-[20%] top-[3%] w-[18%]">
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[28%]"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group12.svg')",
                                                                        }}
                                                                      >
                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                          <Img
                                                                            className="h-[3px]"
                                                                            src="images/img_group514.svg"
                                                                            alt="vector_TwoHundredFifteen"
                                                                          />
                                                                          <Img
                                                                            className="h-[3px]"
                                                                            src="images/img_group514.svg"
                                                                            alt="vector_TwoHundredSixteen"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                      <Img
                                                                        className="h-[37px]"
                                                                        src="images/img_folder.svg"
                                                                        alt="user_Two"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                  <div className="flex flex-row items-center justify-end ml-16 md:ml-[0] w-[33%] md:w-full">
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[15%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group12.svg')",
                                                                      }}
                                                                    >
                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group514.svg"
                                                                          alt="vector_TwoHundredSeventeen"
                                                                        />
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group514.svg"
                                                                          alt="vector_TwoHundredEighteen"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[15%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group12.svg')",
                                                                      }}
                                                                    >
                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group514.svg"
                                                                          alt="vector_TwoHundredNineteen"
                                                                        />
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group514.svg"
                                                                          alt="vector_TwoHundredTwenty"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-col gap-[19px] h-[37px] justify-start ml-[7px] w-1/2"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_vector_gray_500_01_5x7.svg')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        className="h-[5px] mr-2.5 mt-0.5"
                                                                        src="images/img_vector_8.svg"
                                                                        alt="vector_TwoHundredTwentyOne"
                                                                      />
                                                                      <Img
                                                                        className="h-[5px] mb-[3px] ml-2.5 md:ml-[0]"
                                                                        src="images/img_vector_8.svg"
                                                                        alt="vector_TwoHundredTwentyTwo"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <Img
                                                                  className="absolute bottom-[0] h-0.5 right-[4%]"
                                                                  src="images/img_vector_2x19.svg"
                                                                  alt="vector_TwoHundredTwentyThree"
                                                                />
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[2%] h-[35px] right-[4%]"
                                                                src="images/img_vector_gray_500_01_2x19.svg"
                                                                alt="thumbsup_One"
                                                              />
                                                            </div>
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start py-[3px] right-[32%] w-[5%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group12.svg')",
                                                              }}
                                                            >
                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentyFour"
                                                                />
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentyFive"
                                                                />
                                                              </div>
                                                            </div>
                                                            <Img
                                                              className="absolute bottom-[0] h-[37px] right-[20%]"
                                                              src="images/img_folder.svg"
                                                              alt="user_Three"
                                                            />
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start left-[6%] py-[3px] w-[5%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group12.svg')",
                                                              }}
                                                            >
                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentySix"
                                                                />
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentySeven"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start left-[0] py-[3px] w-[5%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group12.svg')",
                                                              }}
                                                            >
                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentyEight"
                                                                />
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredTwentyNine"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start left-[11%] py-[3px] w-[5%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group12.svg')",
                                                              }}
                                                            >
                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredThirty"
                                                                />
                                                                <Img
                                                                  className="h-[3px]"
                                                                  src="images/img_group514.svg"
                                                                  alt="vector_TwoHundredThirtyOne"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-[19px] h-[37px] justify-start left-[22%] w-[17%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_vector_gray_500_01_5x7.svg')",
                                                              }}
                                                            >
                                                              <Img
                                                                className="h-[5px] mr-2.5 mt-0.5"
                                                                src="images/img_vector_8.svg"
                                                                alt="vector_TwoHundredThirtyTwo"
                                                              />
                                                              <Img
                                                                className="h-[5px] mb-[3px] ml-2.5 md:ml-[0]"
                                                                src="images/img_vector_8.svg"
                                                                alt="vector_TwoHundredThirtyThree"
                                                              />
                                                            </div>
                                                          </div>
                                                          <Img
                                                            className="absolute bottom-[0] h-0.5 left-[34%]"
                                                            src="images/img_vector_2x19.svg"
                                                            alt="vector_TwoHundredThirtyFour"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute bottom-[2%] h-[35px] left-[27%]"
                                                          src="images/img_vector_gray_500_01_2x19.svg"
                                                          alt="thumbsup_Two"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start left-[16%] py-[3px] w-[5%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group12.svg')",
                                                        }}
                                                      >
                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                          <Img
                                                            className="h-[3px]"
                                                            src="images/img_group514.svg"
                                                            alt="vector_TwoHundredThirtyFive"
                                                          />
                                                          <Img
                                                            className="h-[3px]"
                                                            src="images/img_group514.svg"
                                                            alt="vector_TwoHundredThirtySix"
                                                          />
                                                        </div>
                                                      </div>
                                                      <Img
                                                        className="absolute bottom-[0] h-[37px] left-[22%]"
                                                        src="images/img_folder.svg"
                                                        alt="user_Four"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[137px] items-center justify-start left-[29%] p-[3px] w-[36%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group509.svg')",
                                                  }}
                                                >
                                                  <div
                                                    className="bg-cover bg-no-repeat md:h-[123px] h-[130px] relative w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group509.svg')",
                                                    }}
                                                  >
                                                    <div className="h-32 md:h-[123px] m-auto w-full">
                                                      <div className="h-32 md:h-[123px] m-auto w-full">
                                                        <div className="h-32 md:h-[123px] m-auto w-full">
                                                          <div className="h-32 md:h-[123px] m-auto w-full">
                                                            <div className="h-32 md:h-[123px] m-auto w-full">
                                                              <div className="flex flex-col h-full justify-start m-auto w-full">
                                                                <div className="md:h-[86px] h-[89px] relative w-full">
                                                                  <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                    <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                      <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                        <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                          <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                            <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                              <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                  <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                    <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                      <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                        <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                          <div className="md:h-[86px] h-[89px] m-auto w-full">
                                                                                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                                              <div className="flex flex-col items-center justify-start w-full">
                                                                                                <Line className="bg-gray-500_01 h-10 rotate-[-180deg] w-0.5" />
                                                                                                <div className="flex flex-col items-center justify-start w-full">
                                                                                                  <Line className="bg-gray-500_01 h-[3px] rotate-[-180deg] w-full" />
                                                                                                  <div className="flex flex-row items-start justify-center w-[36%] md:w-full">
                                                                                                    <Line className="bg-gray-500_01 h-10 rotate-[-180deg] w-0.5" />
                                                                                                    <Img
                                                                                                      className="h-[37px] ml-3 mt-[3px]"
                                                                                                      src="images/img_file.svg"
                                                                                                      alt="grid_Eight"
                                                                                                    />
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_file.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredForty"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredFortyOne"
                                                                                                        />
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_file.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredFortyTwo"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredFortyThree"
                                                                                                        />
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start mt-[3px] py-[3px] w-[14%]"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_file.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredFortyFour"
                                                                                                        />
                                                                                                        <Img
                                                                                                          className="h-[3px]"
                                                                                                          src="images/img_group509.svg"
                                                                                                          alt="vector_TwoHundredFortyFive"
                                                                                                        />
                                                                                                      </div>
                                                                                                    </div>
                                                                                                    <Line className="bg-gray-500_01 h-10 rotate-[-180deg] w-0.5" />
                                                                                                  </div>
                                                                                                  <Line className="bg-gray-500_01 h-[3px] rotate-[-180deg] w-full" />
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                            <Img
                                                                                              className="absolute bottom-[4%] h-[37px] left-[36%]"
                                                                                              src="images/img_file.svg"
                                                                                              alt="grid_Nine"
                                                                                            />
                                                                                          </div>
                                                                                          <div className="absolute bottom-[4%] flex flex-row items-center justify-center left-[10%] w-2/5">
                                                                                            <Img
                                                                                              className="h-[37px]"
                                                                                              src="images/img_file.svg"
                                                                                              alt="grid_Ten"
                                                                                            />
                                                                                            <div
                                                                                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[13%]"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_file.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFortyEight"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFortyNine"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[13%]"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_file.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFifty"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFiftyOne"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[13%]"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_file.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFiftyTwo"
                                                                                                />
                                                                                                <Img
                                                                                                  className="h-[3px]"
                                                                                                  src="images/img_group509.svg"
                                                                                                  alt="vector_TwoHundredFiftyThree"
                                                                                                />
                                                                                              </div>
                                                                                            </div>
                                                                                            <div className="flex flex-col gap-[22px] items-center justify-start ml-4 w-[13%]">
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group509.svg"
                                                                                                alt="vector_TwoHundredFiftyFour"
                                                                                              />
                                                                                              <Img
                                                                                                className="h-[3px]"
                                                                                                src="images/img_group509.svg"
                                                                                                alt="vector_TwoHundredFiftyFive"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <Img
                                                                                          className="absolute bottom-[4%] h-[37px] left-[2%]"
                                                                                          src="images/img_file.svg"
                                                                                          alt="grid_Eleven"
                                                                                        />
                                                                                      </div>
                                                                                      <div className="absolute bottom-[4%] flex flex-row items-center justify-start right-[0] w-[89%]">
                                                                                        <div className="flex flex-col gap-[22px] items-center justify-start w-[6%]">
                                                                                          <Img
                                                                                            className="h-[3px]"
                                                                                            src="images/img_group509.svg"
                                                                                            alt="vector_TwoHundredFiftySix"
                                                                                          />
                                                                                          <Img
                                                                                            className="h-[3px]"
                                                                                            src="images/img_group509.svg"
                                                                                            alt="vector_TwoHundredFiftySeven"
                                                                                          />
                                                                                        </div>
                                                                                        <Img
                                                                                          className="h-[37px] ml-[77px]"
                                                                                          src="images/img_file.svg"
                                                                                          alt="grid_Twelve"
                                                                                        />
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_file.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredFiftyEight"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredFiftyNine"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_file.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredSixty"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredSixtyOne"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[6%]"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_file.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredSixtyTwo"
                                                                                            />
                                                                                            <Img
                                                                                              className="h-[3px]"
                                                                                              src="images/img_group509.svg"
                                                                                              alt="vector_TwoHundredSixtyThree"
                                                                                            />
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <Img
                                                                                      className="absolute bottom-[4%] h-[37px] right-[22%]"
                                                                                      src="images/img_file.svg"
                                                                                      alt="grid_Thirteen"
                                                                                    />
                                                                                  </div>
                                                                                  <div className="absolute flex flex-col items-start justify-start right-[15%] top-[3%] w-[6%]">
                                                                                    <div
                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-full"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_file.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                        <Img
                                                                                          className="h-[3px]"
                                                                                          src="images/img_group509.svg"
                                                                                          alt="vector_TwoHundredSixtyFour"
                                                                                        />
                                                                                        <Img
                                                                                          className="h-[3px]"
                                                                                          src="images/img_group509.svg"
                                                                                          alt="vector_TwoHundredSixtyFive"
                                                                                        />
                                                                                      </div>
                                                                                    </div>
                                                                                    <Img
                                                                                      className="h-[3px] mt-[11px]"
                                                                                      src="images/img_group509.svg"
                                                                                      alt="vector_TwoHundredSixtySix"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px] mt-[22px]"
                                                                                      src="images/img_group509.svg"
                                                                                      alt="vector_TwoHundredSixtySeven"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <div
                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] right-[11%] top-[3%] w-[5%]"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_file.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group509.svg"
                                                                                      alt="vector_TwoHundredSixtyEight"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-[3px]"
                                                                                      src="images/img_group509.svg"
                                                                                      alt="vector_TwoHundredSixtyNine"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div
                                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] right-[5%] top-[3%] w-[5%]"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_file.svg')",
                                                                                }}
                                                                              >
                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventy"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventyOne"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="absolute flex flex-row items-center justify-center right-[0] top-[3%] w-[36%]">
                                                                              <Img
                                                                                className="h-[37px]"
                                                                                src="images/img_file.svg"
                                                                                alt="grid_Fourteen"
                                                                              />
                                                                              <div
                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[14%]"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_file.svg')",
                                                                                }}
                                                                              >
                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventyTwo"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventyThree"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                              <div
                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[14%]"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_file.svg')",
                                                                                }}
                                                                              >
                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventyFour"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventyFive"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                              <div
                                                                                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start ml-[18px] py-[3px] w-[14%]"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_file.svg')",
                                                                                }}
                                                                              >
                                                                                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventySix"
                                                                                  />
                                                                                  <Img
                                                                                    className="h-[3px]"
                                                                                    src="images/img_group509.svg"
                                                                                    alt="vector_TwoHundredSeventySeven"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <Img
                                                                            className="absolute h-[37px] right-[37%] top-[3%]"
                                                                            src="images/img_file.svg"
                                                                            alt="grid_Fifteen"
                                                                          />
                                                                        </div>
                                                                        <div className="absolute flex flex-row items-center justify-center left-[15%] top-[3%] w-[54%]">
                                                                          <div
                                                                            className="bg-cover bg-no-repeat flex flex-col gap-[19px] h-[37px] justify-start w-[31%]"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_vector_5x7.svg')",
                                                                            }}
                                                                          >
                                                                            <Img
                                                                              className="h-[5px] ml-2.5 md:ml-[0] mt-0.5"
                                                                              src="images/img_vector_9.svg"
                                                                              alt="vector_TwoHundredSeventyEight"
                                                                            />
                                                                            <Img
                                                                              className="h-[5px] mb-[3px] mr-2.5"
                                                                              src="images/img_vector_9.svg"
                                                                              alt="vector_TwoHundredSeventyNine"
                                                                            />
                                                                          </div>
                                                                          <div
                                                                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start ml-[7px] py-[3px] w-[10%]"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_file.svg')",
                                                                            }}
                                                                          >
                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group509.svg"
                                                                                alt="vector_TwoHundredEighty"
                                                                              />
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group509.svg"
                                                                                alt="vector_TwoHundredEightyOne"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                          <div
                                                                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[10%]"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_file.svg')",
                                                                            }}
                                                                          >
                                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group509.svg"
                                                                                alt="vector_TwoHundredEightyTwo"
                                                                              />
                                                                              <Img
                                                                                className="h-[3px]"
                                                                                src="images/img_group509.svg"
                                                                                alt="vector_TwoHundredEightyThree"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                          <div className="flex flex-col gap-[22px] items-center justify-start ml-[19px] w-[10%]">
                                                                            <Img
                                                                              className="h-[3px]"
                                                                              src="images/img_group509.svg"
                                                                              alt="vector_TwoHundredEightyFour"
                                                                            />
                                                                            <Img
                                                                              className="h-[3px]"
                                                                              src="images/img_group509.svg"
                                                                              alt="vector_TwoHundredEightyFive"
                                                                            />
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <Img
                                                                        className="absolute h-0.5 left-[4%] top-[43%]"
                                                                        src="images/img_vector_2x19.svg"
                                                                        alt="vector_TwoHundredEightySix"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute h-[35px] left-[4%] top-[3%]"
                                                                      src="images/img_vector_gray_500_01_2x19.svg"
                                                                      alt="thumbsup_Three"
                                                                    />
                                                                  </div>
                                                                  <div className="absolute flex flex-row items-center justify-center left-[20%] top-[3%] w-[18%]">
                                                                    <Img
                                                                      className="h-[37px]"
                                                                      src="images/img_folder.svg"
                                                                      alt="user_Five"
                                                                    />
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[28%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_file.svg')",
                                                                      }}
                                                                    >
                                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group509.svg"
                                                                          alt="vector_TwoHundredEightySeven"
                                                                        />
                                                                        <Img
                                                                          className="h-[3px]"
                                                                          src="images/img_group509.svg"
                                                                          alt="vector_TwoHundredEightyEight"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[18px] w-[33%] md:w-full">
                                                                  <div
                                                                    className="bg-cover bg-no-repeat flex flex-col gap-[19px] h-[37px] justify-start w-1/2"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_vector_5x7.svg')",
                                                                    }}
                                                                  >
                                                                    <Img
                                                                      className="h-[5px] ml-2.5 md:ml-[0] mt-0.5"
                                                                      src="images/img_vector_9.svg"
                                                                      alt="vector_TwoHundredEightyNine"
                                                                    />
                                                                    <Img
                                                                      className="h-[5px] mb-[3px] mr-2.5"
                                                                      src="images/img_vector_9.svg"
                                                                      alt="vector_TwoHundredNinety"
                                                                    />
                                                                  </div>
                                                                  <div
                                                                    className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start ml-[7px] py-[3px] w-[15%]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_file.svg')",
                                                                    }}
                                                                  >
                                                                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                      <Img
                                                                        className="h-[3px]"
                                                                        src="images/img_group509.svg"
                                                                        alt="vector_TwoHundredNinetyOne"
                                                                      />
                                                                      <Img
                                                                        className="h-[3px]"
                                                                        src="images/img_group509.svg"
                                                                        alt="vector_TwoHundredNinetyTwo"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start py-[3px] w-[15%]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_file.svg')",
                                                                    }}
                                                                  >
                                                                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                                      <Img
                                                                        className="h-[3px]"
                                                                        src="images/img_group509.svg"
                                                                        alt="vector_TwoHundredNinetyThree"
                                                                      />
                                                                      <Img
                                                                        className="h-[3px]"
                                                                        src="images/img_group509.svg"
                                                                        alt="vector_TwoHundredNinetyFour"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[0] h-0.5 left-[4%]"
                                                                src="images/img_vector_2x19.svg"
                                                                alt="vector_TwoHundredNinetyFive"
                                                              />
                                                            </div>
                                                            <Img
                                                              className="absolute bottom-[2%] h-[35px] left-[4%]"
                                                              src="images/img_vector_gray_500_01_2x19.svg"
                                                              alt="thumbsup_Four"
                                                            />
                                                          </div>
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start left-[32%] py-[3px] w-[5%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_file.svg')",
                                                            }}
                                                          >
                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_TwoHundredNinetySix"
                                                              />
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_TwoHundredNinetySeven"
                                                              />
                                                            </div>
                                                          </div>
                                                          <Img
                                                            className="absolute bottom-[0] h-[37px] left-[20%]"
                                                            src="images/img_folder.svg"
                                                            alt="user_Six"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start py-[3px] right-[6%] w-[5%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_file.svg')",
                                                            }}
                                                          >
                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_TwoHundredNinetyEight"
                                                              />
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_TwoHundredNinetyNine"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start py-[3px] right-[0] w-[5%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_file.svg')",
                                                            }}
                                                          >
                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_ThreeHundred"
                                                              />
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_ThreeHundredOne"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start py-[3px] right-[11%] w-[5%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_file.svg')",
                                                            }}
                                                          >
                                                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_ThreeHundredTwo"
                                                              />
                                                              <Img
                                                                className="h-[3px]"
                                                                src="images/img_group509.svg"
                                                                alt="vector_ThreeHundredThree"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-[19px] h-[37px] justify-start right-[22%] w-[17%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_vector_5x7.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              className="h-[5px] ml-2.5 md:ml-[0] mt-0.5"
                                                              src="images/img_vector_9.svg"
                                                              alt="vector_ThreeHundredFour"
                                                            />
                                                            <Img
                                                              className="h-[5px] mb-0.5 mr-[9px]"
                                                              src="images/img_vector_9.svg"
                                                              alt="vector_ThreeHundredFive"
                                                            />
                                                          </div>
                                                        </div>
                                                        <Img
                                                          className="absolute bottom-[0] h-0.5 right-[34%]"
                                                          src="images/img_vector_2x19.svg"
                                                          alt="vector_ThreeHundredSix"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="absolute bottom-[2%] h-[35px] right-[27%]"
                                                        src="images/img_vector_gray_500_01_2x19.svg"
                                                        alt="thumbsup_Five"
                                                      />
                                                    </div>
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[37px] items-center justify-start py-[3px] right-[16%] w-[5%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_file.svg')",
                                                      }}
                                                    >
                                                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                                                        <Img
                                                          className="h-[3px]"
                                                          src="images/img_group509.svg"
                                                          alt="vector_ThreeHundredSeven"
                                                        />
                                                        <Img
                                                          className="h-[3px]"
                                                          src="images/img_group509.svg"
                                                          alt="vector_ThreeHundredEight"
                                                        />
                                                      </div>
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[0] h-[37px] right-[22%]"
                                                      src="images/img_folder.svg"
                                                      alt="user_Seven"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute bottom-[3%] h-[78px] right-[28%]"
                                                src="images/img_vector_gray_500_02.svg"
                                                alt="vector_ThreeHundredNine"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[17%] h-[161px] right-[28%]"
                                              src="images/img_vector_blue_gray_900_01_161x61.svg"
                                              alt="vector_ThreeHundredTen"
                                            />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat bottom-[3%] h-36 md:h-[120px] inset-x-[0] mx-auto w-[17%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group507.svg')",
                                            }}
                                          >
                                            <Img
                                              className="absolute h-[25px] right-[0] top-[0]"
                                              src="images/img_play.svg"
                                              alt="user_Eight"
                                            />
                                            <Img
                                              className="absolute bottom-[0] h-[120px] left-[0]"
                                              src="images/img_vector_white_a700.svg"
                                              alt="vector_ThreeHundredEleven"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col gap-[5px] h-[210px] items-center justify-center left-[34%] p-[11px] w-[14%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group506.svg')",
                                          }}
                                        >
                                          <div className="md:h-[119px] h-[76px] mt-[59px] relative w-3/4">
                                            <div className="absolute flex flex-col gap-[27px] inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                              <div className="md:h-[23px] h-[30px] ml-0.5 md:ml-[0] relative w-1/2">
                                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                                                  <Img
                                                    className="h-[5px] ml-1.5 md:ml-[0]"
                                                    src="images/img_vector_blue_gray_900_01_1x1.svg"
                                                    alt="vector_ThreeHundredTwelve"
                                                  />
                                                  <Img
                                                    className="h-3.5 mr-[5px] mt-1"
                                                    src="images/img_vector_blue_gray_900_01_1x1.svg"
                                                    alt="vector_ThreeHundredThirteen"
                                                  />
                                                </div>
                                                <Line className="absolute bg-blue_gray-900_01 h-[22px] left-[0] top-[0] w-[3px]" />
                                              </div>
                                              <Img
                                                className="h-2.5"
                                                src="images/img_vector_blue_gray_900_01.svg"
                                                alt="vector_ThreeHundredFifteen"
                                              />
                                            </div>
                                            <Line className="absolute bg-blue_gray-900_01 bottom-[0] h-[19px] right-[15%] w-[3px]" />
                                          </div>
                                          <Img
                                            className="h-1 mb-[42px]"
                                            src="images/img_vector_blue_gray_900_01_1x1.svg"
                                            alt="vector_ThreeHundredSeventeen"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute bottom-[30%] h-[108px] inset-x-[0] mx-auto"
                                        src="images/img_vector_blue_gray_900_01_108x49.svg"
                                        alt="vector_ThreeHundredEighteen"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[37%] flex flex-col h-[68px] items-end justify-start p-1.5 right-[37%] w-[13%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group511.svg')",
                                      }}
                                    >
                                      <ul className="flex flex-col items-start justify-start mb-[7px] mt-4 w-4/5 md:w-full common-column-list">
                                        <li>
                                          <a href="javascript:">
                                            <Img
                                              className="h-px"
                                              src="images/img_vector_blue_gray_900_01_1x9.svg"
                                              alt="vector_ThreeHundredNineteen"
                                            />
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:">
                                            <div className="flex flex-row gap-3.5 items-start justify-between ml-0.5 md:ml-[0] mt-[3px]">
                                              <Img
                                                className="h-[5px]"
                                                src="images/img_vector_blue_gray_900_01_5x3.svg"
                                                alt="vector_ThreeHundredTwenty"
                                              />
                                              <Img
                                                className="h-1"
                                                src="images/img_vector_blue_gray_900_01_4x8.svg"
                                                alt="vector_ThreeHundredTwentyOne"
                                              />
                                            </div>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:">
                                            <Img
                                              className="h-[5px] ml-5 md:ml-[0]"
                                              src="images/img_vector_blue_gray_900_01_5x3.svg"
                                              alt="vector_ThreeHundredTwentyTwo"
                                            />
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:">
                                            <Img
                                              className="h-[5px] ml-1.5 md:ml-[0]"
                                              src="images/img_vector_blue_gray_900_01_5x11.svg"
                                              alt="vector_ThreeHundredTwentyThree"
                                            />
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:">
                                            <Img
                                              className="h-[9px]"
                                              src="images/img_globe.svg"
                                              alt="settings_TwentyThree"
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute bottom-[44%] h-4 inset-x-[0] mx-auto"
                                    src="images/img_forward.svg"
                                    alt="contrast"
                                  />
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[3%] h-[116px] md:h-[77px] pt-0.5 px-0.5 right-[31%] w-[15%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group510.svg')",
                                    }}
                                  >
                                    <div className="absolute bottom-[0] h-20 md:h-[77px] right-[9%] w-[65%]">
                                      <div className="absolute flex flex-col gap-[7px] h-full inset-y-[0] items-end justify-start left-[15%] my-auto w-[56%]">
                                        <Img
                                          className="h-[7px]"
                                          src="images/img_vector_blue_gray_900_01_4x8.svg"
                                          alt="vector_ThreeHundredTwentyFour"
                                        />
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[65px] items-end justify-start mr-0.5 p-1 w-[90%] md:w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group582.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-px mb-[47px] mt-[7px]"
                                            src="images/img_vector_blue_gray_900_01_1x1.svg"
                                            alt="vector_ThreeHundredTwentyFive"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute bottom-1/4 h-1.5 right-[9%]"
                                        src="images/img_vector_blue_gray_900_01.svg"
                                        alt="vector_ThreeHundredTwentySix"
                                      />
                                      <Img
                                        className="absolute bottom-[34%] h-px right-[0]"
                                        src="images/img_vector_blue_gray_900_01_1x10.svg"
                                        alt="vector_ThreeHundredTwentySeven"
                                      />
                                      <Img
                                        className="absolute h-0.5 left-[0] top-[30%]"
                                        src="images/img_vector_blue_gray_900_01_3x9.svg"
                                        alt="vector_ThreeHundredTwentyEight"
                                      />
                                    </div>
                                    <div className="absolute flex flex-col items-center justify-start left-[2%] top-[5%] w-[16%]">
                                      <Img
                                        className="h-3.5"
                                        src="images/img_vector_blue_gray_900_01.svg"
                                        alt="vector_ThreeHundredTwentyNine"
                                      />
                                      <Img
                                        className="h-[7px]"
                                        src="images/img_vector_blue_gray_900_01_7x5.svg"
                                        alt="vector_ThreeHundredThirty"
                                      />
                                    </div>
                                    <div className="absolute bottom-[15%] flex flex-col gap-[29px] items-start justify-start left-[2%] w-[17%]">
                                      <Img
                                        className="h-[7px] w-[7px]"
                                        src="images/img_search.svg"
                                        alt="search"
                                      />
                                      <Img
                                        className="h-[7px] w-[7px]"
                                        src="images/img_search_blue_gray_900_01.svg"
                                        alt="search_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[4%] h-[7px] right-[16%]"
                                  src="images/img_car.svg"
                                  alt="television_Four"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[3%] h-2.5 right-[10%]"
                                src="images/img_menu.svg"
                                alt="television_Five"
                              />
                            </div>
                            <div className="absolute bottom-[3%] flex flex-col gap-3 items-center justify-start right-[16%] w-[16%]">
                              <Img
                                className="h-[7px]"
                                src="images/img_car_white_a700.svg"
                                alt="television_Six"
                              />
                              <Img
                                className="h-2.5"
                                src="images/img_menu_green_200.svg"
                                alt="megaphone"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[9%] h-2.5 right-[10%]"
                            src="images/img_menu_green_200_10x71.svg"
                            alt="television_Seven"
                          />
                        </div>
                        <div className="absolute bottom-[6%] flex flex-col items-end justify-start right-[15%] w-[17%]">
                          <Img
                            className="h-2.5 mr-[3px]"
                            src="images/img_menu_green_200_10x57.svg"
                            alt="megaphone_One"
                          />
                          <Img
                            className="h-[7px]"
                            src="images/img_car.svg"
                            alt="television_Eight"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[6%] h-2.5 right-[9%]"
                        src="images/img_menu_blue_gray_900_01.svg"
                        alt="thumbsup_Six"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[6%] h-2.5 right-[15%]"
                      src="images/img_menu_10x57.svg"
                      alt="megaphone_Two"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[18px] items-center justify-start left-[19%] pt-1 px-1 w-[42%]"
                      style={{
                        backgroundImage: "url('images/img_group512.svg')",
                      }}
                    >
                      <Img
                        className="h-[13px]"
                        src="images/img_vector_blue_gray_900_01_13x117.svg"
                        alt="vector_ThreeHundredThirtyOne"
                      />
                    </div>
                    <Line className="absolute bg-blue_gray-900_01 bottom-[3%] h-px inset-x-[0] mx-auto w-[88%]" />
                  </div>
                  <Text
                    className="max-w-[455px] md:max-w-full text-gray-800_02 text-xl tracking-[0.15px]"
                    size="txtDMSansRegular20"
                  >
                    CRDB- Your trusted financial partner for loans. Quick
                    approvals, competitive rates, and personalized solutions to
                    meet your unique needs. Empowering you to achieve your
                    financial goals. Apply online today!
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-7 items-center justify-end md:px-10 sm:px-5 px-[47px] py-[45px] rounded-[21px] w-[489px] sm:w-full">
                <div className="flex flex-col font-raleway gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    {" "}
                    Your Name
                  </Text>
                  <Input
                    name="frameThirtyOne"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[46px] w-full"
                    shape="round"
                    color="gray_600_02"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col font-raleway gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    Phone number
                  </Text>
                  <Input
                    name="frameThirtyOne_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[46px] w-full"
                    shape="round"
                    color="gray_600_02"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col font-raleway gap-[7px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center tracking-[0.50px] w-auto"
                    size="txtRalewayRomanRegular16"
                  >
                    Email address
                  </Text>
                  <Input
                    name="frameThirtyOne_Two"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[46px] w-full"
                    shape="round"
                    color="gray_600_02"
                    variant="outline"
                  ></Input>
                </div>
                <Button
                  className="border border-blue_gray-700 border-solid cursor-pointer font-dmsans min-w-[125px] rounded-[24px] text-center text-xl tracking-[0.50px]"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  SEND
                </Button>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row font-dmsans gap-3.5 h-[492px] md:h-auto items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[158px] w-full"
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
                  src="images/img_frame17.svg"
                  alt="frameSeventeen"
                />
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[126px] items-center justify-between w-auto sm:w-full">
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col font-dmsans gap-2 items-start justify-start">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                          size="txtDMSansBold22"
                        >
                          OUR SERVICES
                        </Text>
                        <Line className="bg-white-A700 h-px w-[44%]" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-lg text-white-A700 tracking-[1.15px]"
                    >
                      <Text size="txtRalewayRomanMedium18">Personal loan</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-lg text-white-A700 tracking-[1.15px]"
                    >
                      <Text size="txtRalewayRomanMedium18">SME loan</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-lg text-white-A700 tracking-[1.15px]"
                    >
                      <Text size="txtRalewayRomanMedium18">Jijenge loan</Text>
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <a
                          href="javascript:"
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[0.15px] w-auto"
                        >
                          <Text size="txtDMSansBold22">CONTACT US</Text>
                        </a>
                        <Line className="bg-white-A700 h-px w-2/5" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row font-raleway gap-[18px] items-center justify-start">
                        <Img
                          className="h-5 w-[19px]"
                          src="images/img_speechbubble.svg"
                          alt="speechbubble_One"
                        />
                        <Text
                          className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                          size="txtRalewayRomanMedium18"
                        >
                          +91 99999 99999
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row font-raleway gap-[18px] items-center justify-start">
                        <Img
                          className="h-5 w-[19px]"
                          src="images/img_speechbubble_white_a700.svg"
                          alt="speechbubble_Two"
                        />
                        <Text
                          className="text-lg text-white-A700 tracking-[1.15px] w-auto"
                          size="txtRalewayRomanMedium18"
                        >
                          xyzfh5@gmail.com
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row font-raleway gap-[18px] items-start justify-start">
                        <Img
                          className="h-5 w-[19px]"
                          src="images/img_speechbubble_white_a700_20x19.svg"
                          alt="speechbubble_Three"
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepagePage;
