import React from "react";
import { CardActions as Card_Actions } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CardActions: React.FC<Props> = ({ children }) => {
  return (
    <Card_Actions>
      <aside className="card_actions">{children}</aside>
    </Card_Actions>
  );
};

export default CardActions;
