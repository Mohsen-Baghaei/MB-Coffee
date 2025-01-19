import { ReactElement } from "react";
import coffee from "../assets/coffee.gif";

const Loading = (): ReactElement => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={coffee} alt="Loading..." />
    </div>
  );
};

export default Loading;
