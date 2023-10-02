import { RxAvatar } from "react-icons/rx";
import "../style/QuestionsAnswers.css";
import { useState, useEffect, useContext } from "react";
import { QuestionAndAnswersContext } from "../App";
import Avatar from "@mui/material/Avatar";
import { TbHeartFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

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
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function QuestionsAnswers() {
  const [userQuestion, setUserQuestion] = useState([]);
  const { searchQuestion } = useContext(QuestionAndAnswersContext);

  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestons = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );
    if (storedQuestons) {
      setUserQuestion(storedQuestons);
    }
  }, []);

  const handleReact = (id) => {
    // Fetch the latest data from local storage
    const storedQuestions = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );

    // Update the userQuestion state based on the fetched data
    const newReaction = (prevUserQuestion) =>
      prevUserQuestion.map((q) =>
        q.id === id
          ? {
              ...q,
              reaction: Number(q.reaction) + (q.isReacted ? -1 : 1),
              isReacted: !q.isReacted,
            }
          : q
      );
    setUserQuestion(newReaction);

    // Find and update the corresponding question in the fetched data
    const updatedQuestions = storedQuestions.map((q) =>
      q.id === id
        ? {
            ...q,
            reaction: Number(q.reaction) + (q.isReacted ? -1 : 1),
            isReacted: !q.isReacted,
          }
        : q
    );

    // Store the updated userQuestion in local storage under the same key
    localStorage.setItem(
      "questionAndAnswers",
      JSON.stringify(updatedQuestions)
    );
  };

  const handleQuestionClick = (id) => {
    // Find the question with the matching id
    const question = userQuestion.find((q) => q.id === id);
    // console.log("again again checking", question);
    if (question) {
      // Perform the action you want when a question is clicked, e.g., displaying the answer
      // console.log(question.question);
      const questionId = {
        id: id,
        question: question.question,
        answer: question.answer,
      };

      localStorage.setItem("questionId", JSON.stringify(questionId));
      navigate("/add-answer");
    }
  };
  return (
    <>
      {userQuestion
        .filter((question) =>
          question.question.toLowerCase().includes(searchQuestion.toLowerCase())
        )
        .slice()
        .reverse()
        .map((ele) => {
          if (ele.answer.length !== 0) {
            return (
              <div key={ele.id} className="feed-container">
                <div className="name-avatar-container">
                  <div className="avatar">
                    <Avatar {...stringAvatar(ele.questionedBy)} />
                  </div>
                  <div className="both-name">
                    <div className="name">{ele.questionedBy}</div>
                    <div className="ans-name">
                      Answered by {ele.answer[ele.answer.length - 1].newAnsBy}
                    </div>
                  </div>
                </div>
                <div className="question">{ele.question}</div>
                <div className="answer">
                  {ele.answer[ele.answer.length - 1].newAns}
                </div>
                <div className="react-addAns">
                  <div className="react-container">
                    <div
                      className={
                        ele.isReacted ? "love-react active" : "love-react"
                      }
                      onClick={() => handleReact(ele.id)}
                    >
                      <TbHeartFilled />
                    </div>
                    <div className="react-count">{ele.reaction}</div>
                  </div>
                  <div>
                    <div
                      className="ansButton"
                      onClick={() => handleQuestionClick(ele.id)}
                    >
                      Add Answer
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
}

export default QuestionsAnswers;
