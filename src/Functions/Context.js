import { createContext } from "react";

export const weakTypescontext = createContext();
export const typeSelectcontext = createContext();
export const hiddencontext = createContext({
  hidden: "visible",
  setHidden: () => {},
});
