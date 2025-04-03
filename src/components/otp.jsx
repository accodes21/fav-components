"use client";
import { useEffect, useRef, useState } from "react";

export default function Otp() {
  const otpDigits = 6;
  const refArray = useRef([]);
  const [inputArray, setInputArray] = useState(new Array(otpDigits).fill(""));

  useEffect(() => {
    // Focus the first input field on component mount
    refArray.current[0]?.focus();

    // Cleanup function to avoid memory leaks
    return () => {
      refArray.current = [];
    };
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d$/.test(value)) return;

    const newArray = [...inputArray];
    newArray[index] = value.trim().slice(-1);
    setInputArray(newArray);

    if (value) refArray.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newArray = [...inputArray];

      // Clear the current input
      newArray[index] = "";
      setInputArray(newArray);

      // If already empty, move to the previous input
      if (index > 0 && !inputArray[index]) {
        refArray.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4 text-xl">OTP Example</h1>
      {inputArray.map((input, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={inputArray[index]}
          ref={(e) => (refArray.current[index] = e)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 ml-4 text-black text-center border-4 border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
}
