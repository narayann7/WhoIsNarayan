import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Palette from "./components/Palette";
import "./index.css";
import RootProvider from "./services/context_provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <RootProvider
      childrenElement={
        <>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
          <Palette />
        </>
      }
    ></RootProvider>
  </BrowserRouter>
);
