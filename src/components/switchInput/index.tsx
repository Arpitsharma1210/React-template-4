import React, { useState } from "react";
import { IOSSwitch } from "./styles";

interface Props {
  checked: string;
  onChange: any;
}

const SwitchInput: React.FC<Props> = ({ checked, onChange }) => {
  const [tick, setTick] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (checked === "ACTIVE") {
      setTick(true);
    } else {
      setTick(false);
    }
  }, [checked]);

  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event);
    }
  };
  return <IOSSwitch checked={tick} onChange={handleChange} />;
};

export default SwitchInput;
