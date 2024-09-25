import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
export const AppContext = createContext(doctors);

const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={doctors}>
    {children}
  </AppContext.Provider>
);

export default AppContextProvider;