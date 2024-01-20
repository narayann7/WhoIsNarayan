//root model for context api
export interface ContextApiModel {
  size: ResponsiveModel;
  palette: PaletteModel;
}

//model for responsive design
export interface ResponsiveModel {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

//palette model
export interface PaletteModel {
  isOpen: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
}
