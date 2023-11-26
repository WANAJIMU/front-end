import React from "react";

import { Img, Text } from "components";

const EmploymentDetailsColumnlabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="border border-gray-600_04 border-solid md:h-[35px] h-[37px] px-1 relative rounded-[1px] w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto pr-2 py-2">
              <Text
                className="text-base text-gray-600_04 tracking-[0.50px]"
                size="txtRobotoRegular16"
              >
                {props?.statustext}
              </Text>
            </div>
            <Img
              className="absolute h-[9px] inset-y-[0] my-auto right-[11%] w-[9px]"
              src="images/img_arrow.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

EmploymentDetailsColumnlabel.defaultProps = { statustext: "Choose Status" };

export default EmploymentDetailsColumnlabel;
