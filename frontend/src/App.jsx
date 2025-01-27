import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import Numbers from "./pages/contactUs/numbers/numbers";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route index element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ContactUs/numbers" element={<Numbers />} />
      </Routes>
    </>
  );
}

export default App;
