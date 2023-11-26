import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to redirect to the /personalinfo page
    navigate("/personalinfo");
  };

  return (
    <>
      <header className={props.className}>
        <Link
          to="/"
          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[0.15px] w-auto"
        >
          <Text size="txtDMSansBold30Black900">
            <span className="text-blue_gray-900 font-dmsans text-left font-bold">
              Loan
            </span>
            <span className="text-green-500 font-dmsans text-left font-bold">
              Portal
            </span>
          </Text>
        </Link>
        <ul className="flex sm:flex-col flex-row gap-12 sm:hidden items-center justify-start w-auto common-row-list">
          <li>
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
          </li>
          <li>
            <Text
              className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
              size="txtDMSansRegular24Gray800"
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
              size="txtDMSansRegular24Gray800"
            >
              How we work?
            </Text>
          </li>
          <li>
            <Text
              className="text-2xl md:text-[22px] hover:text-blue_gray-700 text-center text-gray-800 sm:text-xl tracking-[0.50px]"
              size="txtDMSansRegular24Gray800"
            >
              About Us
            </Text>
          </li>
        </ul>
        <Button
          className="border border-blue_gray-700 border-solid cursor-pointer font-dmsans min-w-[126px] rounded-[24px] text-base text-center tracking-[0.50px]"
          color="blue_gray_700"
          size="md"
          variant="fill"
          onClick={handleButtonClick}
        >
          Apply
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
