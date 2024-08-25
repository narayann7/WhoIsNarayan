import { useState } from "react";
import { LuSearchCode } from "react-icons/lu";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GetStarted from "../assets/images/get_started.png";
import { useRootContext } from "../context_api/root_context";
import SizedBox from "./commons/SizedBox";

export default function Footer() {
  const nav = useNavigate();
  const { size, palette, isGetStarted, handleGetStarted } = useRootContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const paths = ["root", "about", "work", "connect"];

  const pathItems = paths.map((path, index) => {
    return (
      <>
        <div
          className="hover-underline-animation base-text text-[14px] tracking-[2px] cursor-pointer pb-[5px]"
          onClick={() => {
            if (path === "root") nav("/");
            else nav("/" + path);
            setCurrentIndex(index);
          }}
        >
          {path}
        </div>
        <SizedBox width={"50px"} />
      </>
    );
  });

  return (
    <div className="row fixed bottom-0 flex justify-end items-center w-[100vw] h-[100px] bg-black pb-[80px] pt-[40px] px-root">
      {size.mobile ? (
        <LuSearchCode
          size={"22px"}
          onClick={() => {
            palette.toggle();
          }}
        />
      ) : (
        <div className="row">
          {pathItems}
          <div>
            <img
              src={GetStarted}
              style={{
                display: currentIndex === 0 && !isGetStarted ? "block" : "none",
              }}
              alt="get started"
              className="cursor-pointer h-[60px] w-[140px] absolute top-[-18px]"
              onClick={() => {
                nav("/root");
              }}
            />
            <div
              className="hover-underline-animation items-center"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
              onClick={() => {
                palette.toggle();
                handleGetStarted();
              }}
            >
              <MdKeyboardCommandKey className="cursor-pointer text-[16px] text-white mr-[5px] mb-[5px]" />
              <div className="base-text text-[14px] tracking-[2px] cursor-pointer pb-[3px]">
                + k
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
