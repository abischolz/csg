import React from "react";
import { Grid, Item, Box } from "@mui/material";
import SectionButton from "./SectionButton";

const SectionGrid = ({ children, ...props }) => {
  return (
    <Grid container>
      {props.sections.map((section) => {
        return (
          <Grid item>
            <SectionButton section={section} onClick />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SectionGrid;
