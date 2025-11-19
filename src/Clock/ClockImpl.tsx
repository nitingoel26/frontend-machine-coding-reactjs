import Hand from "./Hand";
const ClockImpl = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  function padTwoDigit(number: number) {
    return number >= 10 ? String(number) : `0${number}`;
  }
  const FULL_ROTATION_DEGREES = 360;
  const secondsPercentage = seconds / 60;
  // To have second-level precision in the minute hand angle.
  const minutesPercentage = (minutes + secondsPercentage) / 60;
  // To have minute-level precision in the hour hand angle.
  const hoursPercentage = ((hours % 12) + minutesPercentage) / 12;

  const hourAngle = hoursPercentage * FULL_ROTATION_DEGREES;
  const minutesAngle = minutesPercentage * FULL_ROTATION_DEGREES;
  const secondsAngle = secondsPercentage * FULL_ROTATION_DEGREES;

  const dateTimeDisplay = `${padTwoDigit(hours)}:${padTwoDigit(
    minutes
  )}:${padTwoDigit(seconds)}`;
  return (
    <div className="wrapper">
      <div>{dateTimeDisplay}</div>
      <div className="clock">
        <Hand height={0.5} angle={hourAngle} width={3} />
        <Hand height={0.9} angle={minutesAngle} width={2} />
        <Hand height={0.8} angle={secondsAngle} width={1} />
      </div>
    </div>
  );
};

export default ClockImpl;
