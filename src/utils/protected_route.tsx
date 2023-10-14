import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useStore from "../store";

interface AuxProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: AuxProps) => {
  const [user] = useStore((state) => [state.setUser]);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
