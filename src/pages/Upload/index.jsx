import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const UploadPage = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // You can perform further actions with the selected file
      console.log('Selected file:', selectedFile);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans sm:gap-10 md:gap-10 gap-32 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-12 h-[72px] md:h-auto items-center justify-between md:px-5 px-[98px] py-[9px] w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtInterRegular40"
          >
            Upload your documents
          </Text>
          <Text
            className="mt-[50px] text-black-900 text-center text-sm w-[41%] sm:w-full"
            size="txtInterRegular14"
          >
            Please attach: ID card (e.g National ID, Voters reg. No, Driving
            license, Passport, Ward ID, Others), Three Recent Salary slips, Two
            Recent Photographs, Employment Contract, Introduction letter,
            Passport (if any), Valuation report (if security is landed
            property), Working and Residence permit (if non citizen) and Others
            as may be advised by Bank official.
          </Text>
          <Img
            className="h-[121px] mt-[39px]"
            src="images/img_uploadicon.svg"
            alt="uploadicon"
          />
          <Text
            className="mt-[37px] text-2xl md:text-[22px] text-blue_gray-900_03 text-center sm:text-xl"
            size="txtMulishRomanBold24"
          >
            <span className="text-gray-800_04 font-montserrat font-semibold">
              Drag & drop files or
            </span>
            <span className="text-blue_gray-900_03 font-montserrat font-semibold">
              {" "}
            </span>
            <a
              href="javascript:"
              className="text-cyan-800 font-montserrat font-semibold underline"
            >
              Browse
            </a>
          </Text>
          <Text
            className="mt-11 text-2xl md:text-[22px] text-center text-gray-700_03 sm:text-xl"
            size="txtMontserratRomanSemiBold24"
          >
            Uploaded
          </Text>
          <div className="flex flex-col font-montserrat items-start justify-start mb-8 mt-6 md:px-5 w-[59%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group583.svg')" }}
            >
              <div className="flex flex-row sm:gap-10 items-center justify-between mb-1.5 w-[95%] md:w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl w-auto"
                      size="txtMontserratRomanRegular24"
                    >
                      document-name.PDF
                    </Text>
                  </div>
                </div>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="red_50"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_trash.svg" alt="thumbsup" />
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-14 items-center mt-[50px] w-full"
              orientation="vertical"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[81px] items-center justify-start p-[17px] w-full"
                style={{ backgroundImage: "url('images/img_group583.svg')" }}
              >
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[95%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                    size="txtMontserratRomanRegular24"
                  >
                    document-name.PDF
                  </Text>
                  <Button
                    className="flex h-10 items-center justify-center mt-[5px] w-10"
                    shape="circle"
                    color="red_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img src="images/img_trash.svg" alt="thumbsup" />
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[81px] items-center justify-start p-[7px] w-full"
                style={{ backgroundImage: "url('images/img_group583.svg')" }}
              >
                <div className="flex flex-row sm:gap-10 items-start justify-between mb-0.5 w-[93%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl"
                    size="txtMontserratRomanRegular24"
                  >
                    document-name.PDF
                  </Text>
                  <Button
                    className="flex h-10 items-center justify-center mt-[23px] w-10"
                    shape="circle"
                    color="red_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img src="images/img_trash.svg" alt="thumbsup" />
                  </Button>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[219px] mt-[27px] w-[56%] md:w-full">
            <div>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button
        className="common-pointer cursor-pointer font-bold h-[45px] rounded text-center text-sm uppercase w-[445px]"
        onClick={handleButtonClick}
        color="blue_gray_700"
        size="md"
        variant="fill"
      >
        Upload Files
      </Button>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPage;