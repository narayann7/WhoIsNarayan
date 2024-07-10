import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type LinkTooltipProps = {
  children: JSX.Element;
  text: string;
  open?: boolean;
  onChanges?: (v: boolean) => void;
};

export default function LinkTooltip({
  children,
  text,
  open = false,
  onChanges,
}: LinkTooltipProps) {
  return (
    <TooltipProvider delayDuration={0} key={"op"}>
      <Tooltip open={open ? open : undefined} onOpenChange={onChanges}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="bg-secondaryBackground text-[12px] rounded-[4px] px-[8px] py-[2px] mt-[10px]">
            {text}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
