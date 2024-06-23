import React from "react";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";


//pages
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const About = lazy(() => import("./pages/About/About"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Like = lazy(() => import("./pages/Like/Like"));
const Premium = lazy(() => import("./pages/Premium/Premium"))

//microInteraction
import Load from "./microInteraction/Load/Load";

function App() {
  return (
    <>
      <Router>
      <Suspense fallback={<Load />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </Suspense>
      </Router>
    </>
  )
}

export default App
