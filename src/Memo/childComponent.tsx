import React, { useEffect } from "react";

const ChildComponent = React.memo(
  (props: { details: { name: string; profession: string } }) => {
    const { name, profession } = props.details;
    useEffect(() => {
      alert(`Child component re-rendered! ${name}-${profession}`);
    });

    return <div>Child component content</div>;
  }
);

export default ChildComponent;
