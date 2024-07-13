import { MdKeyboardCommandKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../services/context_provider";
import SizedBox from "./commons/SizedBox";

export default function Footer() {
  const nav = useNavigate();
  const { palette } = useRootContext();
  const paths = ["root", "about", "work", "connect"];

  const pathItems = paths.map((path) => {
    return (
      <>
        <div
          className="hover-underline-animation base-text text-[14px] tracking-[2px] cursor-pointer pb-[5px]"
          onClick={() => {
            if (path === "root") nav("/");
            else nav("/" + path);
          }}
        >
          {path}
        </div>
        <SizedBox width={"50px"} />
      </>
    );
  });

  return (
    <div className="row fixed bottom-0 flex justify-end items-center w-[100vw] h-[100px] bg-background pb-[80px] pt-[40px] px-root">
      {pathItems}
      <div
        className="hover-underline-animation items-center"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        onClick={() => {
          palette.toggle();
        }}
      >
        <MdKeyboardCommandKey className="cursor-pointer text-[16px] text-white mr-[5px] mb-[5px]" />
        <div className="base-text text-[14px] tracking-[2px] cursor-pointer pb-[3px]">
          + k
        </div>
      </div>
    </div>
  );
}
