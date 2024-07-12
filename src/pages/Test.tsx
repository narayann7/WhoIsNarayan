import { useNavigate } from "react-router-dom";
import SizedBox from "../components/commons/SizedBox";

export default function Test() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen w-screen col">
      <h1 className="base-text">🛠️ under development | check out v1 👇</h1>
      <br />
      <div className="row">
        <h1
          className="cursor-pointer underline text-4xl font-extrabold"
          onClick={() => {
            window.open("https://narayann.dev", "_self");
          }}
        >
          narayann.dev
        </h1>
        <SizedBox width="10px" />
        <h1>🚀</h1>
      </div>
      <SizedBox height="20px" />

      <div className="row">
        <h2
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/test");
          }}
        >
          still want to checkout?
        </h2>
        <SizedBox width="10px" />
        <h2>👀</h2>
      </div>
    </div>
  );
}
