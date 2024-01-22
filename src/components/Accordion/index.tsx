import React, { useState } from "react";
import {
  StyledTypography,
  AddIcon,
  CloseIcon,
} from "./styles";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

interface CustomAccordionProps {
  title: string;
  contentComponent: React.ReactNode;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  contentComponent,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <Accordion>
      <AccordionSummary onClick={() => setExpanded(!expanded)}>
        <StyledTypography expanded={expanded}>{title}</StyledTypography>
        {expanded ? <CloseIcon /> : <AddIcon />}
      </AccordionSummary>
      <AccordionDetails>{contentComponent}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
