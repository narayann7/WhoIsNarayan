import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/404";
import Root from "./pages/Root";
import Test from "./pages/Test";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}></Route>
      <Route path="/test" element={<Root />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
