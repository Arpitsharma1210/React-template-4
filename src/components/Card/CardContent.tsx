import React from "react";
import { CardContent } from "@mui/material";
interface Props {
  children: any;
}

const Card_Content: React.FC<Props> = ({ children }) => {
  return (
    <CardContent>
      {children}
    </CardContent>
  );
};

export default Card_Content;
