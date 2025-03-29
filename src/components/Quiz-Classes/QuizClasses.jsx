import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../Provider/QuizProvider";
import QuizResult from "./QuizResult";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const QuizClasses = () => {
  const axios = useAxiosPublic();
  const {user} = useContext(AuthContext);
  console.log('firebase uid', user?.uid);
  const { quizQuestions } = useContext(QuizContext);

  const [studentQuizData, setStudentQuizData] = useState([]);
  console.log("student data", studentQuizData);
  const questionsSet = new Set(studentQuizData?.map(q => q));
  const allQuizQuestions = quizQuestions?.filter(q => !questionsSet.has(q.question));
 
  const tenQuestions = allQuizQuestions?.slice(0, 10);
  const [questionNo, setQuestionNo] = useState(0);
  const singleQuestion = tenQuestions[questionNo];
  const numberOfQuestions = 10;
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalScore, setTotalScore] = useState(JSON.parse(sessionStorage.getItem("score")) || 0);

  const optionLabels = ["A", "B", "C", "D"];

  

  

  console.log(questionsSet);

  const onNext = async () => {
    if (!selectedOption) return; 

    let score = parseInt(sessionStorage.getItem('score')) || 0;

    if (selectedOption === singleQuestion.correct_answer) {
        score++
    }

    sessionStorage.setItem('score', score.toString());
    setTotalScore(sessionStorage.getItem('score'));

    setQuestionNo((prev) => prev + 1);
};

  useEffect(()=>{
      if (!user?.uid) return;
      const fetchStudentDetail = async() => {
          try {
              const response = await axios(`/api/get-single-student/${user?.uid}`)
              if(response){
                  setStudentQuizData(response?.data?.students?.quizScore?.questionsAnswered);
                  console.log("response data",response?.data?.students);
              }
          } catch (error) {
              console.log(error.message);
          }
      }
      fetchStudentDetail();
  }, [user?.uid])

  useEffect(() => {
      sessionStorage.removeItem("score");
      setTotalScore(0);
  }, []);

  return (
    <div className="w-full h-screen pt-28">
      <div className="container mx-auto py-16 flex flex-col justify-center items-center border rounded-md shadow-md">
        {questionNo < numberOfQuestions && tenQuestions.length === numberOfQuestions ? (
          <>
            
            <h1 className="text-3xl font-bold px-6 py-2 rounded-md">
              {singleQuestion?.question}
            </h1>
            <div className="grid grid-cols-2 gap-12 mt-8">
              {singleQuestion?.options?.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(option)}
                  className={`ring-2 ring-green-600 rounded-md text-lg text-left pl-4 pr-28 py-3 transition duration-300 ${
                    selectedOption === option
                      ? "bg-green-600 text-white"
                      : "bg-none"
                  }`}
                >
                  <span className="mr-2">{optionLabels[i]}.</span>{" "}
                  
                  <span>{option}</span>
                </button>
              ))}
            </div>
            <div className="w-1/2 h-full mt-12 text-right">
              {questionNo < 10 && (
                <button
                  onClick={onNext}
                  className="bg-blue-600 px-10 py-2 rounded text-white"
                >
                  Next
                </button>
              )}
            </div>
            <div className="h-full w-full mt-12  flex justify-around">
              <span>{questionNo}/10 Completed</span>
              <spaan>Points : {totalScore}</spaan>
            </div>
           
          </>
        ) : questionNo > tenQuestions.length - 1 ? (
          <>
            <QuizResult tenQuestions={tenQuestions} totalScore={totalScore} totalCorrectAnswer={totalScore}/>
          </>
        ): <><h2>No quiz available</h2></>}
      </div>
    </div>
  );
};

export default QuizClasses;
