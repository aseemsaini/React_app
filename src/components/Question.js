import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = ({questions}) => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    console.log("Question",quizState);
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer,index) => (
                    <Answer answerText = {answer} 
                    key={index} 
                    onSelectAnswer = {(answerText) => 
                    dispatch({type: "SELECT_ANSWER", payload: answerText})
                }/>
                ))}
            </div>
        </div>)
};

export default Question;