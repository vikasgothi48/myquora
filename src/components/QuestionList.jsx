import "../style/QuestionList.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuestionList() {
  const [userQuestion, setUserQuestion] = useState([]);
  // console.log(userQuestion);

  useEffect(() => {
    const storedQuestons = JSON.parse(
      localStorage.getItem("questionAndAnswers")
    );
    if (storedQuestons) {
      setUserQuestion(storedQuestons);
    }
  }, []);

  const handleQuestionClick = (id) => {
    // Find the question with the matching id
    const question = userQuestion.find((q) => q.id === id);
    // console.log("again checking", question);
    if (question) {
      // Perform the action you want when a question is clicked, e.g., displaying the answer
      // console.log(question.question);
      const questionId = {
        id: id,
        question: question.question,
        answer: question.answer,
      };

      localStorage.setItem("questionId", JSON.stringify(questionId));
    }
  };

  return (
    <div className="question-list-container">
      <h2 className="question-heading">Questions List</h2>
      {userQuestion
        .slice()
        .reverse()
        .map((ele) => (
          <div key={ele.id} onClick={() => handleQuestionClick(ele.id)}>
            <div className="questions">
              <Link to={"/add-answer"}>{ele.question}</Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default QuestionList;
