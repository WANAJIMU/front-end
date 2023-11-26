import React from "react";

import { Img, Input, Text } from "components";

const SignUpPageColumnlabelTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-start justify-between pr-2 w-full">
          <Text
            className="mt-0.5 text-base text-gray-700_01"
            size="txtPoppinsRegular16"
          >
            {props?.passwordlabel}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-center">
            {!!props?.passwordicon ? (
              <Img
                className="h-6 mt-[3px] w-6"
                alt="icon"
                src={props?.passwordicon}
              />
            ) : null}
            {!!props?.passwordhide ? (
              <Text
                className="text-gray-700_cc text-lg text-right"
                size="txtPoppinsRegular18Gray700cc"
              >
                {props?.passwordhide}
              </Text>
            ) : null}
          </div>
        </div>
        <Input
          name="textfield_Two"
          placeholder="Enter your password"
          className="!placeholder:text-gray-700_99 !text-gray-700_99 font-poppins leading-[normal] p-0 text-base text-left w-full"
          wrapClassName="rounded-[12px] w-full"
          color="gray_700_59"
          size="xs"
          variant="outline"
        ></Input>
        {!!props?.passworderror ? (
          <Text
            className="text-gray-700_01 text-sm w-auto"
            size="txtPoppinsRegular14"
          >
            {props?.passworderror}
          </Text>
        ) : null}
      </div>
    </>
  );
};

SignUpPageColumnlabelTwo.defaultProps = { passwordlabel: "Create a password" };

export default SignUpPageColumnlabelTwo;
