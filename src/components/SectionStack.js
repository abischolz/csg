import React from "react";
import { Stack } from "@mui/material";

import SectionMenu from "./SectionMenu";

const SectionStack = (props) => {
  let openSections = props.sections.filter((section) => section.show === false);
  return (
    <Stack>
      {openSections.map((section, idx) => {
        return <SectionMenu key={idx} sandwiches={props.sandwiches} />;
      })}
    </Stack>
  );
};

export default SectionStack;
