import React from "react";
import { BsSearch } from "react-icons/bs";
import "../style/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { QuestionAndAnswersContext } from "../App";
import Avatar from "@mui/material/Avatar";
import { GiHamburgerMenu } from "react-icons/gi";

//from MUI
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

//from MUI
function stringAvatar(name) {
  return {
    sx: {
      // bgcolor: stringToColor(name),
      bgcolor: "#EF6262",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Navbar() {
  const navigate = useNavigate();
  const { searchQuestion, setSearchQuestion } = useContext(
    QuestionAndAnswersContext
  );

  const [loginUser, setLoginUser] = useState();
  // console.log("NAvbar", loginUser);

  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(menuOpen);

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    // console.log("Stored login data:", storedLogin);

    if (storedLogin) {
      setLoginUser(storedLogin[0].name);
    }
  }, []);

  // console.log("from navbar", searchQuestion);

  const handleQuestionClick = () => {
    navigate("/add-question");
  };

  // const handleAnswerClick = () => {
  //   navigate("/add-answer");
  // };

  const handleLogOutClick = () => {
    navigate("/login");
    localStorage.removeItem("user_login");
    setLoginUser(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuestion(e.target.value);
  };

  const handleQuestionList = () => {
    navigate("/questions-list");
  };

  return (
    <div className={`quora-container${menuOpen ? " openMobileMenu" : ""}`}>
      <div className="logo-hanburge">
        {/* {logo} */}
        <div className="quora-logo">
          <img className="logo" src="./logo.png" alt="logo" />
        </div>

        {/* {Avatar} */}
        <div className=" hamburgerMenu">
          <Avatar {...(loginUser ? stringAvatar(loginUser) : {})} />
        </div>

        {/* {GiHamburgerMenu} */}
        <div className="hamburgerMenu" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </div>
      </div>

      {/* {Search} */}
      <div className="search-box mobile">
        <BsSearch />
        <input
          placeholder="Search here"
          type="text"
          value={searchQuestion}
          onChange={handleSearchChange}
        />
      </div>

      <div className="questionss">
        {/* {Avatar} */}
        <div className={`${menuOpen ? " mobile-nav-avatar" : "nav-avatar"}`}>
          <Avatar {...(loginUser ? stringAvatar(loginUser) : {})} />
        </div>
        {/* {Add Question} */}
        <div className="add-qustion mobile">
          <button onClick={handleQuestionClick}>Add questions</button>
        </div>
        {/* {Ans Question} */}
        {/* <div className="ans-qustion mobile">
          <button onClick={handleAnswerClick}>Answer questions</button>
        </div> */}

        <div className="see-questions mobile">
          <button onClick={handleQuestionList}>See Questions</button>
        </div>

        {/* {Login} */}
        <div className="login mobile">
          <button onClick={handleLogOutClick}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
