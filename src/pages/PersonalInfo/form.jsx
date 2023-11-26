import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FloatingInput, Input, Text } from "components";
import Header from "components/Header";

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-center min-h-screen">
      <Header className="bg-white-A700 flex gap-12 items-center justify-between px-5 py-9 w-full" />

      <div className="flex flex-col items-center justify-start w-full max-w-md p-6 bg-white">
        <Text className="text-4xl text-gray-900_02" size="txtRobotoRomanBold40">
          Personal Info
        </Text>

        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <div className="flex items-start justify-between w-full">
            <div className="w-1/2">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Name
              </Text>
            </div>
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="w-1/2 flex flex-col gap-1">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                First Name
              </Text>
              <Input
                type="text"
                className="border border-gray-600 h-12 w-full px-3"
              />
            </div>
            <div className="w-1/2">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Surname
              </Text>
              <Input
                type="text"
                className="border border-gray-600 h-12 w-full px-3"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col gap-1">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Date of Birth
              </Text>
              <Input
                type="text"
                placeholder="MM/DD/YYYY"
                className="border border-gray-600 h-12 w-full px-3"
              />
            </div>
            <div className="w-1/2">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Driver’s License #
              </Text>
              <Input
                type="text"
                placeholder="Enter License Number"
                className="border border-gray-600 h-12 w-full px-3"
              />
            </div>
          </div>

          <div className="flex items-start justify-start w-full">
            <Text
              className="text-base text-gray-900_03"
              size="txtRobotoRomanBold16"
            >
              Current Address
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div>
                <Text
                  className="text-xs text-gray-800_03"
                  size="txtRobotoRegular8"
                >
                  Street Address
                </Text>
                <div className="border border-gray-600_04 h-12"></div>
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <Text
                    className="text-xs text-gray-800_03"
                    size="txtRobotoRegular8"
                  >
                    City
                  </Text>
                  <div className="border border-gray-600_04 h-12"></div>
                </div>
                <div className="w-1/2">
                  <Text
                    className="text-xs text-gray-800_03"
                    size="txtRobotoRegular8"
                  >
                    State
                  </Text>
                  <div className="border border-gray-600_04 h-12"></div>
                </div>
              </div>
              <div>
                <Text
                  className="text-xs text-gray-800_03"
                  size="txtRobotoRegular8"
                >
                  Zip Code
                </Text>
                <div className="border border-gray-600_04 h-12"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start w-full">
            <Text
              className="text-base text-gray-900_03"
              size="txtRobotoRomanBold16"
            >
              Marital Status
            </Text>
            <div className="flex gap-5 items-center mt-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-white-A700 border border-blue_gray-900_05 h-4 rounded-full w-4"></div>
                <Text
                  className="text-sm text-gray-900_03"
                  size="txtRobotoRomanRegular14"
                >
                  Single
                </Text>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-white-A700 border border-blue_gray-900_05 h-4 rounded-full w-4"></div>
                <Text
                  className="text-sm text-gray-900_03"
                  size="txtRobotoRomanRegular14"
                >
                  Married
                </Text>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-white-A700 border border-blue_gray-900_05 h-4 rounded-full w-4"></div>
                <Text
                  className="text-sm text-gray-900_03"
                  size="txtRobotoRomanRegular14"
                >
                  Widow
                </Text>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start w-full">
            <Text
              className="text-base text-gray-900_03"
              size="txtRobotoRomanBold16"
            >
              Spouse Info (optional)
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div>
                <Text
                  className="text-xs text-gray-800_03"
                  size="txtRobotoRegular8"
                >
                  First Name
                </Text>
                <div className="border border-gray-600_04 h-12"></div>
              </div>
              <div>
                <Text
                  className="text-xs text-gray-800_03"
                  size="txtRobotoRegular8"
                >
                  Last Name
                </Text>
                <div className="border border-gray-600_04 h-12"></div>
              </div>
              <div>
                <Text
                  className="text-xs text-gray-800_03"
                  size="txtRobotoRegular8"
                >
                  Driver’s License #
                </Text>
                <div className="border border-gray-600_04 h-12"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="w-1/2">
              <Text
                className="text-base text-gray-900_03"
                size="txtRobotoRomanBold16"
              >
                Contact Info
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div>
                  <Text
                    className="text-xs text-gray-800_03"
                    size="txtRobotoRegular8"
                  >
                    Email
                  </Text>
                  <div className="border border-gray-600_04 h-12"></div>
                </div>
                <div>
                  <Text
                    className="text-xs text-gray-800_03"
                    size="txtRobotoRegular8"
                  >
                    Phone Number
                  </Text>
                  <div className="border border-gray-600_04 h-12"></div>
                </div>
              </div>
            </div>
          </div>

          <Button
            className="common-pointer cursor-pointer font-medium h-10 rounded text-center text-sm tracking-[0.10px] w-24 mt-8"
            onClick={() => navigate("/employmentdetails")}
            color="teal_800"
            size="xs"
            variant="fill"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
