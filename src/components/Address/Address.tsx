import React, { useContext, useState } from "react";
import { GRPCContext } from "../../context/GRPCContext";
import { GRPCContextType } from "../../react-app-env";
import "./Address.css";

const Address: React.FC = () => {
  const { onAddressEnter } = useContext(GRPCContext) as GRPCContextType;

  const [input, setInput] = useState("");

  const onAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("address: ", input);
    if (input === "") return;
    onAddressEnter(input);
    setInput("");
  };

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="form-container-Address">
      <form onSubmit={onAddSubmit}>
        <div className="form-group-Address">
          <label htmlFor="IP" className="label">
            IP Address
          </label>
          <input
            type="text"
            name="ip"
            id="IP"
            value={input}
            onChange={(e) => {
              onAddressChange(e);
            }}
          />
        </div>
        <button type="submit" className="btn-Address">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Address;
