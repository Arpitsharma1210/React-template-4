import React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { StyledTextField, VisibileIcon, InvisibileIcon } from "./styles";
import { InputLabel } from "../..";

interface Props {
  label?: string;
  value?: string;
  helperText?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: any;
  linkText?: string;
  to?: string;
  required?: boolean;
  formatfor: "auth" | "password" | "form";
}

const MaterialTextInput: React.FC<Props> = ({
  onChange,
  label,
  value,
  placeholder,
  helperText,
  error,
  linkText,
  to,
  required,
  formatfor,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const passwordHandler = () => setShowPassword((pass) => !pass);

  const changeHandler = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="textfield">
      <InputLabel
        label={label}
        linkText={linkText}
        to={to}
        required={required}
      />
      <StyledTextField
        {...props}
        variant="outlined"
        onChange={changeHandler}
        value={value || ""}
        placeholder={placeholder || ""}
        helperText={error}
        error={!!error}
        formatfor={formatfor}
        type={
          formatfor === "password"
            ? showPassword
              ? "text"
              : "password"
            : "text"
        }
        InputProps={
          formatfor === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end" onClick={passwordHandler}>
                    <IconButton aria-label="toggle password visibility">
                      {showPassword ? <VisibileIcon /> : <InvisibileIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </div>
  );
};

export default MaterialTextInput;
