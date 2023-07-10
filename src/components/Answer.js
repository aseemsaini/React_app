const Answer = ({answerText, onSelectAnswer}) => {
    return (
    <div className="answer" onClick={() => onSelectAnswer(answerText)}>
        <div className="answer-letter">A</div>
        <div className="answer-text">{answerText}</div>
    </div>
    )
};

export default Answer;