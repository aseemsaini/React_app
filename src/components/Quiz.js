import { QuizContext } from "../contexts/quiz";
import Question from "./Question";
import { useContext, useEffect} from "react";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiURL = "https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple&encode=url3986";

    useEffect(() => {
        if (quizState.questions.length > 0) {
            return;
        }
        console.log("on initialise");
        fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            console.log("data",data);
            dispatch({type: "LOADED_QUESTIONS", payload: data.results});
        })
    });

    if (!quizState) {
        return <div>Loading...</div>;
      }

    return (
    <div className = "quiz">
        {quizState.showResults && (
        <div className="results">
            <div className="congratulations">Congratulations</div>
            <div className="results-info">
                <div>You have completed the quiz.</div>
                <div>You have got {quizState.correctAnswerCount} out of {quizState.questions.length} correct!</div>
            </div>
            <div className="next-button" 
            onClick={() => dispatch({type: "RESTART"})}>Restart</div>
        </div>)}

        {!quizState.showResults && quizState.questions.length > 0 &&(<div>
            <div className="score">Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}</div>
            <Question />
            <div className="next-button" 
            onClick={() => dispatch({type: "NEXT_QUESTION"})}>
                Next</div>
        </div>
        )}
    </div>)
};

export default Quiz;