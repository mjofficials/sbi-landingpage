import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Container } from "@material-ui/core";
import Tabsection from "./components/TabSection/TabSection";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Container  >
        <Tabsection />
      </Container>
      <Footer />
    </>
  );
};

export default App;
