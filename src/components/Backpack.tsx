import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import baseAssets from "../assets/base_assets";
import coreTheme from "../data/theme_data";
import commonMui from "./commons/CustomMui";
import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";
const { Text } = commonMui;

export default function Backpack() {
  return (
    <div style={styles.pageContent}>
      <Text style={styles.pageHeading}>My Backpack</Text>
      <SizedBox height={"20px"} />
      {/* <Text style={styles.pageDescription}>
        {userData.descriptions.backPackDetails[0]}
      </Text> */}

      <div
        style={{
          width: "100%",
          height: "max-content",
        }}
      >
        {/* <SampleSlider />
         */}

        {SampleSlider()}
      </div>
    </div>
  );
}

function BackpackItem({ image, name }: { image: string; name: string }) {
  name = name.toLowerCase();
  return (
    <div style={backpackItemStyle}>
      <img style={{ width: "18px", height: "18px" }} src={image} alt={name} />
      <SizedBox width={"10px"} />
      <Text style={{ fontSize: "15px", letterSpacing: "1px" }}>{name}</Text>
    </div>
  );
}

const backpackItemStyle: React.CSSProperties = {
  ...styles.row,
  display: "flex",
  alignItems: "center",
  backgroundColor: coreTheme.colors.secondaryBackground,
  height: "38px",
  width: "max-content",
  padding: "0px 18px",
  borderRadius: "50px",
  border: `1.5px solid ${coreTheme.colors.borderColor}`,
};

function SampleSlider() {
  return (
    <Swiper
      className="sample-slider"
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 0 }}
      slidesPerView={5}
      speed={3000}
    >
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
    </Swiper>
  );
}
