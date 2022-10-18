import { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getMe() {
      const result = await fetchMe(token);
      setUser(result.data);
    }
    if (token) {
      getMe();
    } else if (token === "") {
      setUser({ username: "Guest" });
    }
    console.log(user.username);
  }, [token]);

  return {
    token,
    setToken,
    user,
    setUser,
  };
}
