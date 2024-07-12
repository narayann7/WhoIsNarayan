import baseAssets from "../assets/base_assets";
import userData from "../data/user_data";
import SizedBox from "./commons/SizedBox";

export default function Profile() {
  return (
    <div className="row items-center">
      <div>
        <img
          className="rounded-full w-[200px] h-[200px] object-cover"
          draggable="false"
          src={baseAssets.images.dp}
          alt="profile pic"
        />
      </div>
      <SizedBox width="30px" />
      <div>
        <div className="base-text text-3xl font-bold">{userData.fullName}</div>
        <SizedBox height="10px" />
        <div className="row">
          <div className="base-text">{userData.work[0].shortNameRole}</div>
          <SizedBox width="8px" />
          <div className="base-text">at @</div>
          <div
            className="base-text cursor-pointer hover:transition-all 0.3s ease-in-out hover:text-primary"
            onClick={() => {
              window.open(userData.work[0].url, "_blank");
            }}
          >
            {userData.work[0].companyName}
          </div>
        </div>
      </div>
    </div>
  );
}
