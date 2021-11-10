import React from "react";

function Value(props) {
  return (
    <body>
      <p
        style={{
          fontWeight: "bold",
          left: "40%",
          top: "60%",
          color: "black",
          position: "absolute",
        }}
      >
        counter value
      </p>
      <p
        style={{
          left: "40%",
          top: "65%",
          color: "black",
          position: "absolute",
        }}
      >
        {props.v}
      </p>
    </body>
  );
}

export default Value;
