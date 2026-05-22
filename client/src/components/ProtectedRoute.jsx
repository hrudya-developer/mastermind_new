import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  // const token =
  //   localStorage.getItem("token") ||
  //   sessionStorage.getItem("token");

  // if (!token) {
  //   return <Navigate to="/" replace />;
  // }


  const token =
  localStorage.getItem("token") ||
  sessionStorage.getItem("token");

if (!token || token === "undefined") {
  return <Navigate to="/" replace />;
}

  return children;
};

export default ProtectedRoute;