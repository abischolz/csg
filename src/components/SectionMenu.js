import React from "react";
import { Box } from "@mui/material";
import SandwichCard from "./SandwichCard";

const SectionMenu = (props) => {
  return (
    <Box>
      {props.sandwiches.map((sandwich) => {
        return <SandwichCard sandwich={sandwich} />;
      })}
    </Box>
  );
};

export default SectionMenu;
