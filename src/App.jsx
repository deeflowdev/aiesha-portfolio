import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import Studio from "./pages/Studio";
import Laboratory from "./pages/Laboratory";
import Archive from "./pages/Archive";
import Connect from "./pages/Connect";
import Layout from "./components/Layout";
import Cursor from "./components/Cursor";
import Test from "./Test";

const App = () => {
  return (
    <>
    {/* <Test /> */}
      {/* <Cursor /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/about" element={<Studio />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Connect />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
