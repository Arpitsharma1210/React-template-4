import React from "react";

interface Props {
  children: string;
  style?: {};
}

const TitleStyles = {
  // color: colors.black,
  // fontFamily: secondaryFontFamily,
  // fontSize: fontSize.h4,
  // fontWeight: fontWeight.medium,
  // lineHeight: "34px",
  // margin: 0,
};

const CardTitle: React.FC<Props> = ({ children, style }) => {
  return (
    <h4 style={{ ...TitleStyles, ...style }} className="card_title">
      {children}
    </h4>
  );
};

export default CardTitle;
