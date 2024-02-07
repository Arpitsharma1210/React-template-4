import React, { useState } from "react";
import {
  StyledTypography,
  AddIcon,
  CloseIcon,
} from "./styles";

import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails } from "@mui/material";

interface CustomAccordionProps {
  title: string;
  contentComponent: React.ReactNode;
}

const Accordion: React.FC<CustomAccordionProps> = ({
  title,
  contentComponent,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <MuiAccordion>
      <AccordionSummary onClick={() => setExpanded(!expanded)} data-testid="accordion-summary">
        <StyledTypography expanded={expanded}>{title}</StyledTypography>
        {expanded ? <CloseIcon data-testid="close-icon"/> : <AddIcon />}
      </AccordionSummary>
      <AccordionDetails>{contentComponent}</AccordionDetails>
      </MuiAccordion>
  );
};

export default Accordion;
