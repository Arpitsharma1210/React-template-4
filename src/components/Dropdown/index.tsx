import React from "react";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  type: "status" | "priority" | "source" | "confirm";
  onChange?: any;
}

const status = ["open", "hold", "closed"];
const priority = ["low", "medium", "high"];
const source = ["linkedin", "referral", "direct", "indeed"];
const confirm = ["yes", "no"];

const Dropdown: React.FC<Props> = ({ type, onChange }) => {
  const [value, setValue] = React.useState<string>("");
  const [menuData, setMenuData] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (type === "status") {
      setValue(status[0]);
      setMenuData(status);
    } else if (type === "priority") {
      setValue(priority[0]);
      setMenuData(priority);
    } else if (type === "source") {
      setValue(source[0]);
      setMenuData(source);
    } else if (type === "confirm") {
      setValue(confirm[0]);
      setMenuData(confirm);
    }
  }, [type]);


  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event);
    }
    setValue(event.target.value);
  };

  return (
    <Select
      
      IconComponent={KeyboardArrowDownIcon}
      value={value}
      onChange={handleChange}
    >
      {menuData.map((menuItem, i) => (
        <MenuItem key={i} value={menuItem}>
          {menuItem}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
