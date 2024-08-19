import { Route, Routes } from "react-router-dom";
import AppWrapper from "./components/commons/AppWrapper";
import Error404 from "./pages/404";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Work from "./pages/Work";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}></Route>

      {/* <Route path="/" element={<AppWrapper component={<Dummy />} />} /> */}
      <Route path="/test" element={<AppWrapper component={<Home />} />} />
      <Route path="about" element={<AppWrapper component={<About />} />} />
      <Route path="work" element={<AppWrapper component={<Work />} />} />
      <Route path="connect" element={<AppWrapper component={<Connect />} />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
