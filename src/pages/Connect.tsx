import BackgroundAnimation from "@/components/RootAnimation";

export default function Connect() {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen ">
      <div className="h-[500px] w-[500px]">
        <BackgroundAnimation />
      </div>
    </div>
  );
}
