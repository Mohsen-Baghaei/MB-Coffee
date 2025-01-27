import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectedUsers } from "../../app/register/registerSlice";

const Favorit = (): ReactElement => {
  const user = useSelector(selectedUsers);

  return <div></div>;
};

export default Favorit;
