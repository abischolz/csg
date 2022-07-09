import React, { createContext, useContext } from "react";

export const MenuContext = createContext();

function Menu() {
  const value = useContext(MenuContext);
  return <h1>{value}</h1>;
}
