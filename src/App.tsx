import { useState } from "react";
import Test from "./pages/Test";
import Root from "./pages/Root";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Error404 from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
