import React from "react";

import { Button, Img, Text } from "components";

const LoansuccesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-karla items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col items-end justify-start p-[185px] md:px-10 sm:px-5 w-full">
          <Img
            className="h-[230px] w-[230px]"
            src="images/img_illustartion.svg"
            alt="frame"
          />
          <div className="flex flex-col gap-2 items-center justify-start mr-[420px] mt-[116px] w-auto">
            <Text
              className="text-blue_gray-800_01 text-center text-lg tracking-[0.43px] w-auto"
              size="txtKarlaBold18"
            >
              Yay! your loan has been approved
            </Text>
            <Text
              className="text-blue_gray-800_01 text-center text-sm tracking-[0.34px]"
              size="txtKarlaRegular14"
            >
              <>
                Congratulations, your loan has been approved,
                <br />
                withdraw funds now.
              </>
            </Text>
          </div>
          <Button
            className="cursor-pointer font-medium h-[46px] leading-[normal] mb-[62px] mr-[455px] mt-[139px] text-center text-sm tracking-[0.34px] w-[253px]"
            shape="square"
            color="teal_300"
            size="md"
            variant="fill"
          >
            Withdraw cash
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoansuccesPage;
