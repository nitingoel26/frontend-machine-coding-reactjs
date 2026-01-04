import { useState } from "react";
import { type AccordionType } from "./index";
import "./style.css";
const Accordion = ({ title, content }: Partial<AccordionType>) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container">
      <div className="header" data-expanded={expanded} onClick={handleExpanded}>
        {title}
        <div> {expanded ? "-" : "+"} </div>
      </div>
      <div className="details" data-expanded={expanded}>
        <div className="details-inner">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
