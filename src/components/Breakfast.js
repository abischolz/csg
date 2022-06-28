import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
const BreakFastMenu = ({ children, ...props }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="Breakfast"
          expandIcon={<ExpandMore />}
          aria-controls="breakfast-content"
        >
          <Typography>Breakfast</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>The most important meal of the day</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BreakFastMenu;
