import React from "react";
import { CardHeader as Card_Header } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const CardHeader: React.FC<Props> = ({
  children,
}) => {
  return (
    <Card_Header className="card_header" data-testid="card-header">
      {children}
    </Card_Header>
  );
};

export default CardHeader;
