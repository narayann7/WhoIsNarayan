import { useRootContext } from "@/services/context_provider";
import Footer from "../Footer";

function AppWrapper({ component }: { component: JSX.Element }) {
  const { size } = useRootContext();
  return (
    <>
      {component}
      {size.mobile ? null : <Footer />}
    </>
  );
}

export default AppWrapper;
