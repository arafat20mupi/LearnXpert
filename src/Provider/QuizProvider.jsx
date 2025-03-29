import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const QuizContext = createContext(null);

const QuizProvider = ({children}) => {
    const axios = useAxiosPublic();
    const [answeredQuestions, setAnsWeredQuestions] = useState([]);
    const [quizQuestions, setQuizQuestions] = useState([]);

    const allQuestions = answeredQuestions.map((q) => {
        const filteredQuestions = quizQuestions.filter((question) => {

            return question.question !== q.question
        });
        return filteredQuestions;
    })

    
    const fetchQuizQuestions = async() => {
        try {
            const response = await axios("/api/get-quiz-questions");
            console.log(response.data);
            if (response) {
                setQuizQuestions(response.data.quizQuestions);
            } else {
                console.log("No quiz questions found");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchQuizQuestions();
    },[]);

  return (
        <QuizContext.Provider value={{quizQuestions, fetchQuizQuestions, setAnsWeredQuestions}}>
            {children}
        </QuizContext.Provider>
  )
}

export default QuizProvider