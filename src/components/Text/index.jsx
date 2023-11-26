import React from "react";

const sizeClasses = {
  txtRalewayRomanRegular18: "font-normal font-raleway",
  txtDMSansRegular20: "font-dmsans font-normal",
  txtRalewayRomanRegular16: "font-normal font-raleway",
  txtKarlaRegular14: "font-karla font-normal",
  txtRobotoRegular8: "font-normal font-roboto",
  txtRalewayRomanMedium33Black900: "font-medium font-raleway",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtDMSansBold30Black900: "font-bold font-dmsans",
  txtDMSansRegular24: "font-dmsans font-normal",
  txtRobotoRomanSemiBold64: "font-roboto font-semibold",
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanBold64: "font-bold font-roboto",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtAvenirRoman24: "font-avenir font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtAvenirRoman22: "font-avenir font-normal",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtMontserratRomanRegular24: "font-montserrat font-normal",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRobotoRomanBold8: "font-bold font-roboto",
  txtMulishRomanBold24: "font-bold font-mulish",
  txtRalewayRomanBold33: "font-bold font-raleway",
  txtInterRegular14: "font-inter font-normal",
  txtRobotoRomanSemiBold32: "font-roboto font-semibold",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtPoppinsRegular18Gray700cc: "font-normal font-poppins",
  txtRobotoRomanBold12: "font-bold font-roboto",
  txtRalewayRomanBold952Black9003e: "font-bold font-raleway",
  txtRalewayRomanMedium18: "font-medium font-raleway",
  txtDMSansBold22: "font-bold font-dmsans",
  txtInterRegular40: "font-inter font-normal",
  txtKarlaBold24: "font-bold font-karla",
  txtRalewayRomanBold952Black9003f: "font-bold font-raleway",
  txtRobotoItalicCondensedThin20: "font-hairline font-roboto italic",
  txtRalewayRomanBold952: "font-bold font-raleway",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRalewayRomanBold68: "font-bold font-raleway",
  txtRobotoRomanBold14: "font-bold font-roboto",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtDMSansRegular24Gray800: "font-dmsans font-normal",
  txtRobotoRomanBold40: "font-bold font-roboto",
  txtKarlaBold18: "font-bold font-karla",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtRobotoRegular16: "font-normal font-roboto",
  txtKarlaRegular16: "font-karla font-normal",
  txtRalewayRomanMedium33: "font-medium font-raleway",
  txtDMSansBold30: "font-bold font-dmsans",
  txtDMSansRegular18: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
