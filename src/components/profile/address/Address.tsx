import { ReactElement } from "react";

const Address = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-7">
      <div className="flex justify-between items-center">
        <p className="text-2xl">Addresses</p>
        <button>Add New Address</button>
      </div>
    </div>
  );
};

export default Address;
