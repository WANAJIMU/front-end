import React from "react";

import { Img, Text } from "components";

const SignUpPageColumnplay = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-center w-auto">
          <div className="md:h-7 h-8 p-0.5 relative w-8">
            <Img
              className="h-7 m-auto w-7"
              src="images/img_globe_blue_gray_900_03.svg"
              alt="play"
            />
            <Img
              className="absolute h-4 inset-x-[0] mx-auto top-[22%]"
              src="images/img_volume.svg"
              alt="user"
            />
          </div>
          <Text
            className="text-[22px] text-blue_gray-900_03 sm:text-lg md:text-xl w-auto"
            size="txtAvenirRoman22"
          >
            {props?.usertext}
          </Text>
        </div>
      </div>
    </>
  );
};

SignUpPageColumnplay.defaultProps = { usertext: "Apple" };

export default SignUpPageColumnplay;
