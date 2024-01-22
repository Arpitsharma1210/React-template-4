import React from "react";
import { InputLabel } from "../../";
import { StyledDatePicker } from "./styles";
import messages from "../../../messages";

interface Props {
  label?: string;
  value?: string;
  onChange?: any;
  error?: string;
  disableErrorMode?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  formatfor?: "form";
  onReadOnlyCtaClick?: () => void;
}

const Datefield: React.FC<Props> = ({
  label,
  error,
  value,
  onChange,
  disableErrorMode,
  readOnly,
  required,
  disabled,
  fullWidth,
  formatfor,
  onReadOnlyCtaClick,
  ...props
}) => {
  return (
    <div>
      <InputLabel required={required} label={label} />
      <StyledDatePicker
        {...props}
        format= {messages?.input?.dateFormat}
        formatfor={formatfor}
        disabled={disabled}
        value={value || null}
        onChange={newValue => {
          if (onChange) {
            onChange(newValue);
          }
        }}
      />
    </div>
  );
};

export default Datefield;
