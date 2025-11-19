import ClockImpl from "./ClockImpl";
import "./styles.css";
import useCurrentDate from "./useCurrentDate";

const ClockComponent = () => {
  const date = useCurrentDate();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return <ClockImpl hours={hours} minutes={minutes} seconds={seconds} />;
};

export default ClockComponent;
