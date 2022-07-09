import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SectionGrid from "./SectionGrid";
import SectionStack from "./SectionStack";
import { MenuAccordion } from "./Meal-styled";

const MealMenu = ({ children, ...props }) => {
  return (
    <div>
      <MenuAccordion>
        <AccordionSummary
          id={props.id}
          expandIcon={<ExpandMore />}
          aria-controls={`${props.id} Accordion`}
        >
          <Typography>{props.id}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <SectionStack {...props} />
          <SectionGrid {...props} />
        </AccordionDetails>
      </MenuAccordion>
    </div>
  );
};

export default MealMenu;
