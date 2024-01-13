import { useMediaQuery } from "@mui/material";
import React, { ReactNode, createContext, useContext, useState } from "react";
import AppProps from "../models/app_props_model";
import { ContextApiModel, ResponsiveModel } from "../models/context_api_models";

export const RootContext = createContext(null as any);

const RootProvider = (props: AppProps) => {
  const size: ResponsiveModel = {
    mobile: useMediaQuery("(max-width:425px)"),
    tablet: useMediaQuery("(max-width:768px)"),
    desktop: useMediaQuery("(max-width:1440px)"),
  };
  const data = {
    size,
  };
  return (
    <RootContext.Provider value={data}>
      {props.childrenElement}
    </RootContext.Provider>
  );
};

export default RootProvider;
export const useRootContext = (): ContextApiModel => useContext(RootContext);
