import "./App.css";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <h1>Catering Menu</h1>
      <Container>
        <Breakfast />
        <Lunch />
      </Container>
    </Box>
  );
}

export default App;
