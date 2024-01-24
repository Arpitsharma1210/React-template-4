import React from "react";
import { Card as MaterialCard } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <MaterialCard >{children}</MaterialCard>
  );
};

export default Card;
