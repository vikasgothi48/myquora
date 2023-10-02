import React from "react";
import "../style/Ans.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Ans({ setAllAnswer }) {
  const [userQuestion, setUserQuestion] = useState([]);
  const [questionId, setQuestionId] = useState(null);
  const [loginUser, setLoginUser] = useState();
  // console.log("Checking", questionId);

  useEffect(() => {
    const questionsId = JSON.parse(localStorage.getItem("questionId"));
    if (questionsId) {
      setQuestionId(questionsId.id);
    }
  }, []);

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    if (storedLogin) {
      setLoginUser(storedLogin);
    }
  }, []);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleAddAnswer = () => {
    const answerInput = document.querySelector('input[type="text"]');
    const answer = answerInput.value;

    const storedQuestions = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );

    const updatedQuestions = storedQuestions.map((questions) => {
      if (questions.id === questionId) {
        // Replace with the actual id of the question
        // return { ...questions, answer, answeredBy: loginUser[0].name };
        const newAnswer = { newAns: answer, newAnsBy: loginUser[0].name };
        const updatedAnswer = [...questions.answer, newAnswer];
        setAllAnswer(updatedAnswer);
        return {
          ...questions,
          answer: updatedAnswer,
          answeredBy: loginUser[0].name,
        };
      }

      return questions;
    });

    setUserQuestion(updatedQuestions);
    localStorage.setItem(
      "questionAndAnswers",
      JSON.stringify(updatedQuestions)
    );

    answerInput.value = "";
  };
  return (
    <>
      <div>
        <div className="ans">
          <h3>Add Answer </h3>
          <input type="text" placeholder="Type your answer here........" />
        </div>
        <div className="buttonss">
          {" "}
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleAddAnswer}>Add Answer</button>
        </div>
      </div>
    </>
  );
}

export default Ans;
