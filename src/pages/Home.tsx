import MyTypeAnimation from "@/components/MyTypeAnimation";
import { HiExternalLink } from "react-icons/hi";
import Socials from "../components/Socials";
import SizedBox from "../components/commons/SizedBox";
import userData from "../data/user_data";

export default function Home() {
  return (
    <div className="max-size flex flex-row justify-between items-center px-root">
      <div>
        <div className="base-text pl-[6px]">{"hey 👋🏻, I’m"}</div>

        <SizedBox height="15px" />

        <div className="base-text font-bold text-[120px] text-primary">
          {userData.name}
        </div>

        <SizedBox height="20px" />

        <MyTypeAnimation />

        <SizedBox height="20px" />

        <div className="flex flex-row items-center pl-[5px]">
          <div
            className="h-[42px] w-[120px]  base-center bg-secondaryBackground rounded-md cursor-pointer transition-all duration-300 ease-in-out border-none hover:duration-500 hover:bg-background hover:border-solid hover:border-2 hover:border-secondaryBackground border-secondaryBackground"
            onClick={() => {
              window.open(userData.links.resume, "_blank");
            }}
          >
            <div className="base-text text-[14px] tracking-[1px]">
              {"Resume"}
            </div>

            <SizedBox width="5px" />

            <HiExternalLink size={"14px"} color={"white"} />
          </div>

          <SizedBox width="25px" />

          <Socials />
        </div>
      </div>
    </div>
  );
}
