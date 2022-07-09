import React, { useState, useEffect } from "react";
import "./App.css";
import MealMenu from "./components/Meal";
import { Box, Container } from "@mui/material";
import { menu } from "./constants";

function App(props) {
  const [breakfastSections, setBreakfastSections] = useState([]);
  const [breakfastSandwiches, setBreakfastSandwiches] = useState([]);
  const [lunchSections, setLunchSections] = useState([]);
  const [lunchSandwiches, setLunchSandwiches] = useState([]);
  const [heroFeet, setHeroFeet] = useState([]);

  useEffect(() => {
    setBreakfastSections(menu.breakfastSections);
    setBreakfastSandwiches(menu.breakfastSandwiches);
    setLunchSections(menu.lunchSections);
    setLunchSandwiches(menu.lunchSandwiches);
    setHeroFeet(menu.heroOptions);
  }, []);

  return (
    <Box className="App">
      <h1>Catering Menu</h1>
      <Container>
        <MealMenu
          id="Breakfast"
          sections={breakfastSections}
          sandwiches={breakfastSandwiches}
          setSandwiches={setBreakfastSections}
          setSections={setBreakfastSandwiches}
        />
        <MealMenu
          id="Lunch"
          sections={lunchSections}
          sandwiches={lunchSandwiches}
          setSandwiches={setLunchSandwiches}
          setSections={setLunchSections}
          setHeroFeet={setHeroFeet}
          heroFeet={heroFeet}
        />
      </Container>
    </Box>
  );
}

export default App;
