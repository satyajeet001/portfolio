import React, { useRef } from "react";
import Navbar from "./assets/Navbar";
import Banner from "./assets/Banner";
import Skills from "./assets/Skills";
import Projects from "./assets/Projects";
import Experience from "./assets/ExpnRes";
import ConnectForm from "./assets/Connect";
import Footer from "./assets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <ConnectForm />
      <Footer />
    </>
  );
}

export default App;
