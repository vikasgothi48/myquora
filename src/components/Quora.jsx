import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../style/Quora.css";

function Quora() {
  const [loginUser, setLoginUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    // console.log("Stored login data:", storedLogin);

    if (storedLogin) {
      setLoginUser(storedLogin[0].name);
    } else {
      // If loginUser is empty, navigate to the login page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {loginUser.length === 0 ? null : (
        <div className="quora-body">
          <Navbar />
          <Feed />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}

export default Quora;
