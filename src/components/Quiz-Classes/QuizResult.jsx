import { useContext, useEffect } from "react"
import { QuizContext } from "../../Provider/QuizProvider"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";



const QuizResult = ({tenQuestions, totalScore, totalCorrectAnswer}) => {
 const {fetchQuizQuestions, setAnsWeredQuestions} = useContext(QuizContext);
 const {user} = useContext(AuthContext);
 console.log("user details", user);
 const axios = useAxiosPublic();

 useEffect(()=>{
    const updateStudentQuizScore = async() => {
        try {
            const response = await axios.post('/api/add-quiz-score', {firebaseUid: user.uid, totalScore, tenQuestions});
            if(response){
                fetchQuizQuestions();
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    updateStudentQuizScore();
    console.log("Hello World");
 }, [])


  return (
    <>
      
         
              <h2>Quiz Result</h2>

              <div className="flex flex-col items-center">
                  <p>Congratulations!</p>
                  <p className="border-2 border-green-400 rounded-full size-20 flex items-center justify-center p-2 text-center">{totalCorrectAnswer}/10</p>
              </div>
         
      
    </>
  )
}

export default QuizResult