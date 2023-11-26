import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[32px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    blue_gray_700:
      "border-2 border-blue_gray-700 border-solid text-blue_gray-700",
    blue_gray_700_7c:
      "border-2 border-blue_gray-700_7c border-solid text-blue_gray-700",
  },
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900_03",
    gray_900_71: "bg-gray-900_71 text-white-A700",
    teal_300: "bg-teal-300 text-white-A700",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    red_50: "bg-red-50",
    teal_800: "bg-teal-800 text-white-A700",
  },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_700",
    "blue_gray_700_7c",
    "white_A700",
    "gray_900_71",
    "teal_300",
    "red_50",
    "teal_800",
  ]),
};

export { Button };
