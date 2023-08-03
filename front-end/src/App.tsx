import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main_section">
        <Header />
        <main>
          <Project />
          <About />
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default App;
