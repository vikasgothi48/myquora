import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignNav from "./SignNav";
import "../style/SignUp.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setUserInput(() => {
      return {
        ...userInput,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("users");
    // console.log(getuserArr);

    const { email, password } = userInput;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length should greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((ele) => {
          return ele.email === email && ele.password === password;
        });

        if (userlogin.length === 0) {
          toast.error("Invalid Details", {
            position: "top-center",
          });
        } else {
          // console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          navigate("/");
        }
      }
    }
  };

  return (
    <>
      <SignNav />
      <div className="container mt-6">
        <section className="d-flex justify-content-between signUp-container">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
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
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6 button-signIn"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Sign In
              </Button>
            </Form>
            <p className="mt-3">
              Go to{" "}
              <span>
                <NavLink to="/register">Sign Up</NavLink>
              </span>{" "}
              page
            </p>
          </div>
          <SignImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignIn;
