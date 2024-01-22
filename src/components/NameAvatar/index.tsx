import React from "react";
import { Avatar } from "@mui/material";

type Style = string | number;

interface Props {
  name: string;
  alt?: string;
  height?: Style;
  width?: Style;
  fontSize?: Style;
}

const NameAvatar: React.FC<Props> = ({
  name,
  alt = "Profile Picture",
  height = 150,
  width = 150,
  fontSize = 50,
}) => {
  return (
    <Avatar {...stringAvatar(name, { height, width, fontSize })} alt={alt} />
  );
};

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name: string, styles: Record<any, any>) {
  if (!name) {
    return {
      sx: {
        ...styles,
      },
    };
  }
  return {
    sx: {
      ...styles,
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default NameAvatar;
