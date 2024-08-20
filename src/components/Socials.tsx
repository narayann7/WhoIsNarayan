import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoStackoverflow } from "react-icons/io5";
import { SiMaildotru } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { useRootContext } from "../context_api/root_context";
import userData from "../data/user_data";
import LinkTooltip from "./commons/LinkTooltip";

export default function Socials() {
  const [isCopied, setIsCopied] = useState(false);
  const { size } = useRootContext();
  const iconStyle =
    "base-center text-white cursor-pointer h-[35px] w-[35px] text-[20px]";

  //open url in new tab
  const onUrl = (url: string) => {
    window.open(url, "_blank");
  };

  //on mail click
  const onMailClick = () => {
    if (size.mobile) {
      onUrl(userData.links.mailTo);
      return;
    }
    if (isCopied) {
      onUrl(userData.links.mailTo);
      return;
    } else {
      navigator.clipboard.writeText(userData.email);
      setIsCopied(true);
      //delay for 3 seconds and reset isCopied
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  //get user name from url path
  const getUserName = (url: string): string => {
    const urlArr = url.split("/");
    return urlArr[urlArr.length - 1];
  };

  //get tool tip text
  const getToolTipText = (url: string, domain: string): string => {
    const userName = getUserName(url);
    return domain + "/" + userName;
  };

  const socials: {
    icon: JSX.Element;
    url: string;
    tooltip: string;
  }[] = [
    {
      icon: <VscGithubInverted />,
      url: userData.links.github,
      tooltip: "github",
    },
    {
      icon: <FaLinkedin />,
      url: userData.links.linkedIn,
      tooltip: "linkedin",
    },
    {
      icon: <IoLogoStackoverflow />,
      url: userData.links.stackOverflow,
      tooltip: "stackoverflow",
    },
  ];

  return (
    <div className="row">
      <LinkTooltip
        text={isCopied ? "Copied! click again to open" : userData.email}
        open={isCopied}
      >
        <div className={iconStyle} onClick={() => onMailClick()}>
          <SiMaildotru />
        </div>
      </LinkTooltip>
      {socials.map((social, index) => (
        <LinkTooltip
          key={index}
          text={getToolTipText(social.url, social.tooltip)}
        >
          <div className={iconStyle} onClick={() => onUrl(social.url)}>
            {social.icon}
          </div>
        </LinkTooltip>
      ))}
    </div>
  );
}
