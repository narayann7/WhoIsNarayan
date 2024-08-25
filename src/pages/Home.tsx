import AppButton from "@/components/AppButton";
import MyTypeAnimation from "@/components/MyTypeAnimation";
import { renderCanvas } from "@/services/render_pointer_canvas";
import { useEffect } from "react";
import { HiExternalLink } from "react-icons/hi";
import Socials from "../components/Socials";
import SizedBox from "../components/commons/SizedBox";
import userData from "../data/user_data";

export default function Home() {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <div className="max-size flex flex-row justify-between items-center px-root">
      <div>
        <div className="base-text pl-[6px]">{"hey 👋🏻, I’m"}</div>

        <SizedBox height="15px" />

        <div className="base-text font-bold text-[120px] text-cyan-green text-5xl">
          {userData.name}
        </div>

        <SizedBox height="20px" />

        <MyTypeAnimation />

        <SizedBox height="20px" />

        <div className="flex flex-row items-center pl-[5px]">
          <AppButton
            text="Resume"
            onClick={() => {
              window.open(userData.links.resume, "_blank");
            }}
            trailingIcon={<HiExternalLink size={"14px"} color={"white"} />}
          ></AppButton>

          <SizedBox width="15px" />

          <Socials />

          <SizedBox width="25px" />
        </div>
        <SizedBox height="25px" />
      </div>

      <canvas
        className="pointer-events-none absolute inset-0 z-[-1]"
        id="pointer_canvas"
      ></canvas>
    </div>
  );
}
