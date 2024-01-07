import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RootProvider from "./contexts/root_provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <RootProvider
      childrenElement={
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      }
    ></RootProvider>
  </BrowserRouter>
);
