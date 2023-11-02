import { useContext } from "react"
import { LightDarkContext } from "./LightDark";

export const useLightDark = () => {
  const context = useContext(LightDarkContext);
  if (context === undefined) {
    throw new Error("useLightDark must be inside LightDarkProvider");
  }
  return context;
}