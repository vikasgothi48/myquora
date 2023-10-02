import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef, useEffect } from "react";
import QuoraNav from "./QuoraNav";
import "../style/AddQuestion.css";
import Errror from "./Error";

function AddQuestion() {
  const [userQuestion, setUserQuestion] = useState([]);
  const [loginUser, setLoginUser] = useState([]);
  // console.log(userQuestion);
  // console.log("line no 12 from addQuestion");
  // console.log("Checking userLogin", loginUser[0].name);
  // console.log("line no 14 from addQuestion");

  useEffect(() => {
    const storedQuestons = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );
    if (storedQuestons) {
      setUserQuestion(storedQuestons);
    }
  }, []);

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    if (storedLogin) {
      setLoginUser(storedLogin);
    }
  }, []);

  const qustion = useRef();
  const [inputs, setInputs] = useState([]);
  console.log(inputs);
  useEffect(() => {
    const storedQuestons = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );
    if (storedQuestons) {
      setInputs(storedQuestons);
    }
  }, []);

  // console.log(userQuestion);
  // console.log(setUserQuestion);
  // console.log(userQuestion[userQuestion.length - 1].id);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleAddQuestion = () => {
    const newQuestionId = userQuestion.length + 1;
    const newQuestion = {
      answer: "",
      answeredBy: "",
      id: newQuestionId,
      question: qustion.current.value,
      questionedBy: loginUser[0].name,
      reaction: newQuestionId * 20,
      isReacted: false,
    };

    // Update the userQuestion array by adding the new question

    // setUserQuestion([...userQuestion, newQuestion]);
    const updatedQuestions = [...userQuestion, newQuestion];
    localStorage.setItem(
      "questionAndAnswers",
      JSON.stringify(updatedQuestions)
    );
    qustion.current.value = "";
    navigate("/");
  };

  return (
    <>
      {loginUser.length === 0 ? (
        <Errror />
      ) : (
        <div className="container-add-questions">
          <QuoraNav />
          <div className="input-details">
            <h3>Add Qusetion </h3>
            <input
              placeholder="Write your question here....."
              type="text"
              ref={qustion}
            />
          </div>
          <div className="buttons">
            {" "}
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleAddQuestion}>Add Question</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddQuestion;
