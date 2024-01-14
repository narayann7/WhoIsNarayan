import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import RootProvider from "./contexts/root_provider";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <body>
    <BrowserRouter>
      <RootProvider
        childrenElement={
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        }
      ></RootProvider>
    </BrowserRouter>
  </body>
);
