import userData from "@/data/user_data";
import { TypeAnimation } from "react-type-animation";

export default function MyTypeAnimation() {
  return (
    <>
      {userData.iAM.length != 0 && (
        <TypeAnimation
          sequence={userData.iAM
            .map((item) => {
              return [item, 1000];
            })
            .flat()}
          wrapper="h1"
          speed={10}
          deletionSpeed={10}
          className="base-text text-[60px] font-bold tracking-[2px] pl-[5px]"
          repeat={Infinity}
        />
      )}
    </>
  );
}
