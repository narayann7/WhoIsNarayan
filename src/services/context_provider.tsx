import { AppProps } from "@/models/app_props_model";
import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ContextApiModel,
  PaletteModel,
  ResponsiveModel,
} from "../models/context_api_models";

export const RootContext = createContext(null as any);

const RootProvider = (props: AppProps) => {
  const [isPaletteOpen, setOpenPalette] = useState<boolean>(false);

  const size: ResponsiveModel = {
    mobile: useMediaQuery({ query: "(max-width: 640px)" }),
    tablet: useMediaQuery({ query: "(max-width: 768px)" }),
    desktop: useMediaQuery({ query: "(min-width: 1024px)" }),
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
