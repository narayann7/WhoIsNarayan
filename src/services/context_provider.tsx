import { AppProps } from "@/models/app_props_model";
import { createContext, useContext, useState } from "react";
import {
  ContextApiModel,
  PaletteModel,
  ResponsiveModel,
} from "../models/context_api_models";

export const RootContext = createContext(null as any);

const RootProvider = (props: AppProps) => {
  const [isPaletteOpen, setOpenPalette] = useState<boolean>(false);
  const size: ResponsiveModel = {
    mobile: true,
    tablet: true,
    desktop: true,
  };
  const palette: PaletteModel = {
    isOpen: isPaletteOpen,
    set: setOpenPalette,
    toggle: () => {
      setOpenPalette((isOpen) => !isOpen);
    },
  };
  const data = {
    size,
    palette,
  };
  return (
    <RootContext.Provider value={data}>
      {props.childrenElement}
    </RootContext.Provider>
  );
};

export default RootProvider;
export const useRootContext = (): ContextApiModel => useContext(RootContext);
