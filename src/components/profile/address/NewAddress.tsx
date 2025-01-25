import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import {
  createAddress,
  stateOptions,
  StateOptionsType,
} from "../../../app/register/registerSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const NewAddress = (): ReactElement => {
  const [state, setState] = useState<string>(stateOptions[7].name);
  const [city, setCity] = useState<string>("");
  const [addressPath, setAddressPath] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useParams();

  const onStateChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setState(e.target.value);

  const onCityChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAddressPath(e.target.value);

  const onZipCodeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setZipCode(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createAddress({
        id: Number(userId),
        province: state,
        city,
        location: addressPath,
        postalCode: zipCode,
      })
    );

    setState(stateOptions[7].name);
    setCity("");
    setAddressPath("");
    setZipCode("");
    navigate("/profile/address");
  };
  return (
    <>
      <div className="flex gap-4 justify-center items-center p-5">
        <Link to="/profile/address">
          <FaArrowLeft className="size-6 cursor-pointer" />
        </Link>
        <p className="text-2xl font-bold">Create Address</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full gap-7 p-5"
      >
        <div className="flex flex-col sm:flex-row w-full gap-2 ">
          <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
            <label htmlFor="state" className="text-xl font-semibold mb-1">
              Province
            </label>
            <select
              id="state"
              name="state"
              required
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={state}
              onChange={onStateChange}
            >
              {stateOptions.map((option: StateOptionsType, i: number) => (
                <option key={i} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
            <label htmlFor="city" className="text-xl font-semibold mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              placeholder="Tehran"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={city}
              onChange={onCityChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-2 ">
          <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
            <label htmlFor="zipCode" className="text-xl font-semibold mb-1">
              Postal Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              placeholder="12345"
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={zipCode}
              onChange={onZipCodeChange}
            />
          </div>
          <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
            {" "}
            <label htmlFor="address" className="text-xl font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
              value={addressPath}
              onChange={onAddressChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end w-full gap-2 ">
          <button
            disabled={
              !state || !city || !addressPath || !zipCode ? true : false
            }
            type="submit"
            className="w-full flex justify-center items-center gap-1 tracking-wider font-semibold bg-secondary/70 text-gray-100 py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:bg-secondary/40"
          >
            Add Address
          </button>
        </div>
      </form>
    </>
  );
};

export default NewAddress;
