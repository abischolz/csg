import React, { useState } from "react";

import { Card, CardHeader, CardMedia, CardAction } from "@mui/material";

const SandwichCard = (props) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <Card>
      <CardHeader>{props.sandwich.name}</CardHeader>
    </Card>
  );
};

export default SandwichCard;
