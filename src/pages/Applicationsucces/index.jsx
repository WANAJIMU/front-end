import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ApplicationsuccesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col items-end justify-end p-[102px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[72px] justify-start mr-[231px] mt-[17px] w-[57%] md:w-full">
            <div className="flex flex-col justify-start w-[695px] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] items-end justify-start md:ml-[0] ml-[69px] w-[67%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-gray-900_02"
                  size="txtRobotoRomanSemiBold64"
                >
                  You’re all set!
                </Text>
                <Img
                  className="h-[60px] mb-1 sm:mt-0 mt-2.5 w-[60px]"
                  src="images/img_send.svg"
                  alt="television"
                />
              </div>
              <Text
                className="ml-9 md:ml-[0] mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRobotoRomanSemiBold32"
              >
                Your application is being processed
              </Text>
              <div className="h-[463px] md:h-[542px] mt-[79px] relative w-full">
                <div className="h-[463px] m-auto w-full">
                  <div className="h-[463px] m-auto w-full">
                    <Img
                      className="absolute h-[463px] inset-y-[0] left-[0] my-auto"
                      src="images/img_ellipse21.svg"
                      alt="ellipseTwentyOne"
                    />
                    <Img
                      className="absolute bottom-[24%] h-[189px] right-[0]"
                      src="images/img_group5_blue_gray_700.svg"
                      alt="groupFive"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[51px] h-max inset-[0] justify-center m-auto w-1/5">
                    <Img
                      className="h-[221px] ml-7 md:ml-[0]"
                      src="images/img_group5_green_600.svg"
                      alt="groupFive_One"
                    />
                    <Img
                      className="h-[38px]"
                      src="images/img_ellipse21_gray_500_02.svg"
                      alt="ellipseTwentyOne_One"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[21%] flex flex-row inset-x-[0] items-start justify-center mx-auto w-[9%]">
                  <Line className="bg-black-900 h-[50px] rotate-[-89deg] w-px" />
                  <Line className="bg-black-900 h-8 ml-[27px] mt-[17px] w-px" />
                  <Line className="bg-black-900 h-[50px] ml-[30px] rotate-[-92deg] w-0.5" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[215px] w-[31%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-9 rounded text-center text-xl tracking-[0.40px] w-[210px]"
                onClick={() => navigate("/")}
                color="blue_gray_700"
                size="xs"
                variant="fill"
              >
                Go back home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationsuccesPage;
