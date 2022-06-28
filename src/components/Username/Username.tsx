import React, { useContext, useState } from "react";
import { GRPCContext } from "../../context/GRPCContext";
import { GRPCContextType } from "../../react-app-env";
import "./Username.css";

const Username: React.FC = () => {
  const { onUsernameEnter } = useContext(GRPCContext) as GRPCContextType;

  const [input, setInput] = useState("");

  const onAddSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username: ", input);
    if (input === "") return;
    await onUsernameEnter(input);
    setInput("");
  };

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="form-container-Username">
      <form onSubmit={onAddSubmit}>
        <div className="form-group-Username">
          <label htmlFor="IP" className="label">
            Username
          </label>
          <input
            type="text"
            name="ip"
            id="IP"
            value={input}
            onChange={(e) => {
              onUsernameChange(e);
            }}
          />
        </div>
        <button type="submit" className="btn-Username">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Username;
