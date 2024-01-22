import React from "react";
import { CardHeader as Card_Header } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const CardHeader: React.FC<Props> = ({
  children,
}) => {
  return (
    <Card_Header className="card_header">
      {children}
    </Card_Header>
  );
};

export default CardHeader;
