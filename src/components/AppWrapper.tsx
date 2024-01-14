import Footer from "./Footer";

function AppWrapper({ component }: { component: JSX.Element }) {
  return (
    <>
      {component} <Footer />
    </>
  );
}

export default AppWrapper;
