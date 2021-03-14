import { useContext } from "react";
import { AlertMessageContext } from "../context/context";

export default function useAlertMessage() {
  const { alert, setAlert } = useContext(AlertMessageContext);
  return {
    alert,
    setAlert,
  };
}
