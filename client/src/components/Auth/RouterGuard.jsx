import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RouterGuard = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (!token) navigate("/");
  }, []);

  return <>{children}</>;
};
