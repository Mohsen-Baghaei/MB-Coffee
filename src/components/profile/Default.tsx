import { ReactElement } from "react";
import coffeeDefault from "../../assets/profile/coffeeDefault.png";

const Default = (): ReactElement => {
  return (
    <div className="w-full min-h-screen-small min-h-screen-big flex justify-center items-center">
      <img src={coffeeDefault} alt="coffeeDefault" />
    </div>
  );
};

export default Default;
