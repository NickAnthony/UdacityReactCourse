import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    var isMounted = true;

    setTimeout(() => {
      if (isMounted) {
        setColor("green")
      }
    }, 3000);

    return function cleanup() {
      isMounted = false;
    };
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
