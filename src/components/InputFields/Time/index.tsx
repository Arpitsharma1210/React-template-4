import * as React from "react";
import { StyledTimePicker } from "./styles";
import { InputLabel } from "../../";

interface Props {
  value: string;
  onChange: any;
  label?: string;
  required?: boolean;
  views?: any;
  format?: string;
  ampm?: boolean;
  formatfor: "form";
}

const Timefield: React.FC<Props> = ({
  value,
  onChange,
  label,
  required,
  views,
  format,
  ampm,
  formatfor,
}) => {
  return (
    <div>
      <InputLabel label={label} required={required} />
      <StyledTimePicker
        value={value}
        formatfor={formatfor}
        views={views}
        format={format}
        onChange={(newValue) => {
          if (onChange) {
            onChange(newValue);
          }
        }}
        ampm={ampm}
      />
    </div>
  );
};

export default Timefield;
