import HomePage from "../components/pages/HomePage";
import { constructMetadata } from "../lib/utils";

export const metadata = constructMetadata();

const Acasa = () => {
  return <HomePage />;
};

export default Acasa;
