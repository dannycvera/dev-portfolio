import React from "react";
import Layout from "./layout/Layout";
import Master from "./screens/Master";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
// import { Switch, Route } from "react-router-dom"
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Master />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
