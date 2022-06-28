import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const LunchMenu = ({ children, ...props }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="Lunch"
          expandIcon={<ExpandMore />}
          aria-controls="lunch-content"
        >
          <Typography>Lunch</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>The most important meal of the day</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LunchMenu;
