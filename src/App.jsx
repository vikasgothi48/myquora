import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quora from "./components/Quora";
import AddQuestion from "./components/AddQuestion";
import AnsQuestion from "./components/AnsQuestion";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import QuestionsListMobile from "./components/QuestionsListMobile";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Errror from "./components/Error";
export const QuestionAndAnswersContext = createContext();

function App() {
  const [searchQuestion, setSearchQuestion] = useState("");
  return (
    <>
      <QuestionAndAnswersContext.Provider
        value={{ searchQuestion, setSearchQuestion }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Quora />} />
            <Route path="/add-question" element={<AddQuestion />} />
            <Route path="/add-answer" element={<AnsQuestion />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/questions-list" element={<QuestionsListMobile />} />

            <Route path="*" element={<Errror />} />
          </Routes>
        </BrowserRouter>
      </QuestionAndAnswersContext.Provider>
    </>
  );
}

export default App;
