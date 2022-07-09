import styled, { css } from "styled-components";
import {
  Accordion,
  AccordianSummary,
  AccordionDetails,
  Stack,
  Grid,
} from "@mui/material";

export const MenuAccordion = styled(Accordion)`
  border: 1px solid black;
  &.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
    color: white;
  }

  &.css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    background-color: black;
    color: white;
  }
  & p.css-ahj2mt-MuiTypography-root {
    margin: auto;
  }
  &.css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded,
  .css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: white;
  }

  &.MuiCollapse-wrapperInner,
  .MuiCollapse-vertical,
  .css-9l5vo-MuiCollapse-wrapperInner {
    background-color: white;
    justify-content: center;
  }

  .css-11lq3yg-MuiGrid-root {
    justify-content: center;
  }
`;
