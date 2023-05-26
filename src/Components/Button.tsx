import { useState } from "react";
import Alert from "./Alert";

interface Props {
  buttonName: string;
}

const Button = (props: Props) => {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={() => setAlert(!alert)}
      >
        {props.buttonName}
      </button>
      <div></div>
      {alert ? <Alert /> : ""}
    </>
  );
};

export default Button;
