import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignNav from "./SignNav";
import "../style/SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const userInputRef = useRef({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setData(storedUsers);
    }
  }, []);

  const getdata = (e) => {
    const { value, name } = e.target;
    userInputRef.current[name] = value;
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = userInputRef.current;

    if (name === "") {
      toast.error("Name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("Password should be greater than five characters", {
        position: "top-center",
      });
    } else {
      // console.log("Data added successfully");
      const newData = { name, email, password };
      setData((prevData) => [...prevData, newData]);
      localStorage.setItem("users", JSON.stringify([...data, newData]));
      navigate("/login");
    }
  };

  return (
    <>
      <SignNav />
      <div className="container mt-6">
        <section className="d-flex justify-content-between signUp-container">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Set Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6 submit-button button-signIn"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 ">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Sign In</NavLink>
              </span>{" "}
            </p>
          </div>
          <SignImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
