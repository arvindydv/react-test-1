import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const generatePassword = () => {
    let str = "";
    let pass = "";

    if (upperCaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCaseAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    if (pass.length == 0) {
      alert("all fields cannot be empty");
    }
    setPassword(pass);
  };

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    alert("password copied");
  };

  return (
    <>
      <div className="w-full max-w-auto mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 w-full">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              id="numberInput"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={upperCaseAllowed}
              onChange={() => {
                setUpperCaseAllowed((prev) => !prev);
              }}
              id="characterInput"
            />
            <label htmlFor="characterInput">UpperCase</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={lowerCaseAllowed}
              onChange={() => {
                setLowerCaseAllowed((prev) => !prev);
              }}
              id="characterInput"
            />
            <label htmlFor="characterInput">LowerCase</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
              id="characterInput"
            />
            <label htmlFor="characterInput">Symbol</label>
          </div>
        </div>
        <div className="flex justify-center my-4">
          {" "}
          <button
            onClick={generatePassword}
            className=" mx-auto  bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Genrate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
