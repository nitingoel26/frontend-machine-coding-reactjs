import { useState } from "react";
import OtpInput from "./OtpInput";
import "./style.css";
const OtpComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setError("");
      setPhoneNumber(value);
    } else {
      setError("Only digits are allowed");
    }
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      setError("Invalid Phone Number");
      return;
    }
    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp: string) => {
    console.log("otp", otp);
    //check otp
  };
  return (
    <div className="container">
      {!showOtpInput ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          ></input>
          <button type="submit"> Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onSubmit={onOtpSubmit} />
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default OtpComponent;
