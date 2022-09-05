import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    // greenTimer is the timer ID.  We save it so we can also clean it up
    // when the component is unmounted.
    const greenTimer = setTimeout(() => setColor("green"), 3000);

    // Return a clean up function that cancels the timer in the case the
    // component in unmounted.
    return function cleanup() {
      clearTimeout(greenTimer);
    };
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
