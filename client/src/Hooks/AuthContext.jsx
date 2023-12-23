import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE } from "./axios/axios";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await BASE.get("users/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };
    const fetchTransac = async () => {
      try {
        const response = await BASE.get("/transaction/transaction", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransaction(response.data.transaction);
        console.log(response);
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchUserProfile();
    fetchTransac();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, transaction, setTransaction, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
