import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import MuiInputLabel from "@mui/material/InputLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "../..";
import { StyledSelect } from "./styles";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

interface Props {
  label?: string;
  value?: string;
  options?: { label: string; value: any }[];
  helperText?: string;
  placeholder?: string;
  error?: boolean | string;
  onChange?: any;
  linkText?: string;
  to?: string;
  required?: boolean;
  formatfor: "form" | "table" | "formmini" | "auth";
}

const Selectfield: React.FC<Props> = ({
  label,
  value,
  options,
  required,
  onChange,
  formatfor,
  error,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="selectfield">
      {label && <InputLabel label={label} required={required} />}
      <FormControl error={!!error}>
        <StyledSelect
          formatfor={formatfor}
          value={value || ""}
          onChange={handleChange}
          IconComponent={KeyboardArrowDownIcon}
        >
          {options?.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </StyledSelect>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Selectfield;
