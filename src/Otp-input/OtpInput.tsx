import { useEffect, useRef, useState } from "react";

type OtpProps = {
  length: number;
  onSubmit: (x: string) => void;
};

const OtpInput = (props: OtpProps) => {
  const { length: OtpSize, onSubmit } = props;
  const [otp, setOtp] = useState<string[]>(new Array(OtpSize).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  useEffect(() => {
    console.log(inputRefs.current);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === OtpSize) onSubmit(combinedOtp);

    if (value && index < OtpSize - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key == "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <>
      {otp.map((_, index) => {
        return (
          <input
            key={index}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            className="otp-input"
          />
        );
      })}
    </>
  );
};

export default OtpInput;
//Array.from({ length: OtpSize })
