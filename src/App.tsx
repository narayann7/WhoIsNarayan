import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Error404 from "./pages/404";
import Root from "./pages/Root";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Root />
            <Footer />
          </>
        }
      />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
