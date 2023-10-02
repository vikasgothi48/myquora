import React from "react";
import { useNavigate } from "react-router-dom";

const Errror = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className=" d-flex flex-column justify-content-lg-center align-items-center">
          <h4>404 Error ! Page Not Found </h4>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Redirect Login Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Errror;
