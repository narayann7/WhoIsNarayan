import { useState } from "react";

function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <h1 className="text-3xl font-bold">
        🛠️ under development | check out v1 👇
      </h1>
      <h1
        onClick={() => {
          window.open("https://narayann.me");
        }}
        className="text-3xl font-bold p-3 cursor-pointer hover:text-teal-600"
      >
        narayann.me
      </h1>
    </div>
  );
}

export default App;
