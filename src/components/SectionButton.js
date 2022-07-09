import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const SectionButton = ({ children, ...props }) => {
  // bool value to set if button is part of layout grid or expanded

  const onClick = (e) => {};

  return (
    props.section.show && (
      <Button
        onClick={onClick}
        //   disabled={!props.section.show}
      >
        {props.section.name}
      </Button>
    )
  );
};

export default SectionButton;
