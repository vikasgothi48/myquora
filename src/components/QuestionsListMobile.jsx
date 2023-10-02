import QuestionList from "./QuestionList";
import QuoraNav from "./QuoraNav";
import "../style/QuestionListMobile.css";

function QuestionsListMobile() {
  return (
    <div className="mobile-all-question">
      <QuoraNav />
      <QuestionList />
    </div>
  );
}

export default QuestionsListMobile;
