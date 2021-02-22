import { useContext } from "react";
import { AlertMessageContext } from "../context/context";

export default function useAlertMessage() {
  const { Alert, setAlert } = useContext(AlertMessageContext);
  return {
    Alert,
    setAlert,
  };
}
