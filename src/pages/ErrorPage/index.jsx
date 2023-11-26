import React from "react";

import { Button, Img, Text } from "components";

const ErrorPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col md:gap-10 gap-[85px] justify-end p-[18px] w-full">
          <Text
            className="md:ml-[0] ml-[35px] mr-[1212px] mt-[39px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.15px]"
            size="txtDMSansBold30Black900"
          >
            <span className="text-blue_gray-900 font-dmsans text-left font-bold">
              Loan
            </span>
            <span className="text-green-500 font-dmsans text-left font-bold">
              Portal
            </span>
          </Text>
          <div className="flex flex-col font-karla gap-[50px] h-[823px] md:h-auto items-center justify-start max-w-[1274px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-[681px] w-full">
              <Img
                className="h-[315px] w-[291px]"
                src="images/img_illustartion.svg"
                alt="frame"
              />
              <div className="flex flex-col gap-2 items-center justify-center w-[359px]">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800_01 sm:text-xl w-[216px]"
                  size="txtKarlaBold24"
                >
                  Oops, we apologize
                </Text>
                <Text
                  className="max-w-[359px] md:max-w-full text-base text-blue_gray-800_01 text-center"
                  size="txtKarlaRegular16"
                >
                  <>
                    We&#39;re sorry but we cant offer you any loan at this
                    time,visit us again after a few days.
                  </>
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold h-[46px] leading-[normal] text-center text-sm tracking-[0.34px] w-[302px]"
              shape="square"
              color="teal_300"
              size="md"
              variant="fill"
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPagePage;
