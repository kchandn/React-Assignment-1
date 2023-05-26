import React from "react";

interface Props {
  buttonName: string;
}

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      id="liveAlertBtn"
      onClick={() => console.log("Button clicked")}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
