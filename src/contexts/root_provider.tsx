import { useMediaQuery } from "@mui/material";
import React, { ReactNode, createContext, useContext, useState } from "react";
import AppProps from "../models/app_props";

export const RootContext = createContext({});
export const useRootContext = () => useContext(RootContext);

const RootProvider = (props: AppProps) => {
  const Mq = {
    esm: useMediaQuery("(min-width:400px)"),
    sm: useMediaQuery("(max-width:600px)"),
    bsm: useMediaQuery("(max-width:730px)"),
    md: useMediaQuery("(max-width:1000px)"),
    lg: useMediaQuery("(min-width:900px)"),
  };
  const value = {
    Mq,
  };
  return (
    <RootContext.Provider value={value}>
      {props.childrenElement}
    </RootContext.Provider>
  );
};

export default RootProvider;
