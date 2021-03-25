import { useContext } from "react";
import { AlertMessageContext } from "../context/context";

export default function useAlertMessage() {
  const { alert, setAlert, alertText, setAlertText } = useContext(
    AlertMessageContext
  );

  return {
    alert,
    setAlert,
    alertText,
    setAlertText,
  };
}
