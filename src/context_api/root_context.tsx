import { AppProps } from "@/models/app_props_model";
import StorageService from "@/services/local_storage_services";
import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ContextApiModel,
  PaletteModel,
  ResponsiveModel,
} from "../models/context_api_models";

export const RootContext = createContext(null as any);

const RootProvider = (props: AppProps) => {
  const [isPaletteOpen, setOpenPalette] = useState<boolean>(false);
  const [isGetStarted, setIsGetStarted] = useState<boolean>(false);

  useEffect(() => {
    const _isGetStarted = StorageService.isGetStarted();
    setIsGetStarted(_isGetStarted);
  }, []);

  function handleGetStarted() {
    StorageService.setGetStarted();
    setIsGetStarted(true);
  }

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
  const data: ContextApiModel = {
    size,
    palette,
    isGetStarted,
    handleGetStarted,
  };
  return (
    <RootContext.Provider value={data}>
      {props.childrenElement}
    </RootContext.Provider>
  );
};

export default RootProvider;
export const useRootContext = (): ContextApiModel => useContext(RootContext);
