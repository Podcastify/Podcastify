import { useContext } from "react";
import { PageStatusContext } from "../context/context";

export default function usePageStatus() {
  const { isLoading, setIsLoading } = useContext(PageStatusContext);
  return {
    isLoading,
    setIsLoading
  }
}