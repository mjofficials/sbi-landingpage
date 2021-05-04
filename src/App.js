import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Container } from "@material-ui/core";
import Tabsection from "./components/TabSection/TabSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Tabsection />
      </Container>
    </>
  );
};

export default App;
