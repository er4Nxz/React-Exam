import { Navigate } from "react-router-dom";

const withAuth = (Component, conditionFunc) => {
  return (props) => {
    if (conditionFunc()) {
      return <Component {...props} />;
    } else {
      return <Navigate to={"/"} replace />;
    }
  };
};

export default withAuth;
