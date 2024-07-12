interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: React.JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
}

type LinkTooltipProps = {
  children: JSX.Element;
  text: string;
  open?: boolean;
  onChanges?: (v: boolean) => void;
};

export type { AppProps, LinkTooltipProps };


