import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Error404 from "./pages/404";
import Root from "./pages/Root";
function App() {
  return (
    <Routes>
      {/* <Routes>
        <Route path="/" element={}></Route>
      </Routes>
      <Footer /> */}
      <Route
        path="/"
        element={
          <>
            <Root />
            <Footer />
          </>
        }
      ></Route>
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
