import Profile from "../components/Profile";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SizedBox from "../components/commons/SizedBox";
import userData from "../data/user_data";

export default function About() {
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    var hash = location.hash;
    if (hash !== "") {
      const element = document.getElementById(hash.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="col justify-start px-root">
      <div>
        <SizedBox height="25vh" />
        <Profile />
        <SizedBox height="40px" />
        <div className="text-des pl-[10px] text-justify">
          {userData.descriptions.aboutMe[0]}
        </div>
      </div>
    </div>
  );
}
