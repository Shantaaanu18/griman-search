import { createContext, useContext, useEffect, useState } from "react";
import usersData from "../data/users.json";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <AppContext.Provider value={{ users, loading }}>
      {children}
    </AppContext.Provider>
  );
};
