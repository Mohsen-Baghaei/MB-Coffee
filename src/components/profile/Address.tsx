import { ChangeEvent, ReactElement, useState } from "react";
import {
  stateOptions,
  StateOptionsType,
} from "../../app/register/registerSlice";

const Address = (): ReactElement => {
  const [state, setState] = useState<string>(stateOptions[7].name);
  const [city, setCity] = useState<string>("");
  const [addressPath, setAddressPath] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const onStateChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setState(e.target.value);

  const onCityChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAddressPath(e.target.value);

  const onZipCodeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setZipCode(e.target.value);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-7">
      <div className="flex flex-col sm:flex-row w-full gap-2 ">
        <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
          <label htmlFor="state" className="text-xl font-semibold mb-1">
            Province
          </label>
          <select
            id="state"
            name="state"
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
            placeholder="Tehran"
            pattern="([A-Z])[\w\s.]{1,}"
            className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
            value={city}
            onChange={onCityChange}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-2 ">
        <div className="w-full sm:w-1/2  flex flex-col justify-center items-start gap-1">
          <label htmlFor="zipCode" className="text-xl font-semibold mb-1">
            Postal code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="12345"
            pattern="[0-9]{5}"
            maxLength={5}
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
            pattern="[\w\d\s.#]{2,}"
            className="block w-full rounded-md bg-white  text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6 p-3"
            value={addressPath}
            onChange={onAddressChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Address;
