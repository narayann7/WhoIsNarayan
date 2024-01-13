//root model for context api
export interface ContextApiModel {
  size: ResponsiveModel;
}

//model for responsive design
export interface ResponsiveModel {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}
