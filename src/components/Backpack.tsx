import userData from "@/data/user_data";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import baseAssets from "../assets/base_assets";
import commonMui from "./commons/CustomMui";
import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";
const { Text } = commonMui;

export default function Backpack() {
  return (
    <div className="max-size flex col justify-center px-root">
      <Text style={styles.pageHeading}>My Backpack</Text>
      <SizedBox height={"20px"} />
      <div className="text-des">{userData.descriptions.backPackDetails[0]}</div>

      <div className="w-full h-max-content">{SampleSlider()}</div>
    </div>
  );
}

function BackpackItem({ image, name }: { image: string; name: string }) {
  name = name.toLowerCase();
  return (
    <div className=" h-[38px] max-w-fit row items-center justify-center bg-secondaryBackground px-[18px] rounded-[50px]  border-solid border-[1.5px] border-borderColor">
      <img className="w-[18px] h-[18px]" src={image} alt={name} />
      <SizedBox width={"10px"} />
      <div className="base-text text-[15px] tracking-[1px]">{name}</div>
    </div>
  );
}

function SampleSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
      }}
      slidesPerView={8}
      freeMode={true}
      speed={1000}
      spaceBetween={10}
    >
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
    </Swiper>
  );
}
