import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Error from "./Error.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" render={() => <redirect to="about"/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects/*" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route component={Error} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}