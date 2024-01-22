import * as React from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { InputLabel } from "../../";
import { StyledAutoComplete } from "./styles";
import SearchIcon from "../../../assets/images/searchIcon.svg";
import messages from "../../../messages";

const tempData = [{ label: "No Data Available" }];

interface Props {
  data?: any[];
  label?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: any;
  autocompleteValue?: string;
  autocompleteValueHandler?: any;
  typingValue?: string;
  typingValueHandler?: any;
  formatfor?: "table" | "form";
}

const Autocompletefield: React.FC<Props> = ({
  label,
  required,
  placeholder,
  formatfor,
  autocompleteValue,
  autocompleteValueHandler,
  typingValue,
  typingValueHandler,
  onChange,
  ...props
}) => {
  /* value selected from dropdown */
  const valueChangeHandler = (e: any, newValue: string | null) => {
    autocompleteValueHandler(newValue);
  };

  /* being typed value */
  const inputValueChangeHandler = (e: any, newInputValue: string) => {
    typingValueHandler(newInputValue);
  };

  return (
    <div>
      <InputLabel label={label} required={required} />
      <StyledAutoComplete
        freeSolo
        disablePortal
        {...props}
        formatfor={formatfor}
        onChange={valueChangeHandler}
        inputValue={typingValue}
        onInputChange={inputValueChangeHandler}
        options={tempData}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: formatfor === "table" && (
                <InputAdornment position="start">
                  <img src={SearchIcon} />
                </InputAdornment>
              ),
            }}
            placeholder={messages?.input?.search}
          />
        )}
      />
    </div>
  );
};

export default Autocompletefield;
