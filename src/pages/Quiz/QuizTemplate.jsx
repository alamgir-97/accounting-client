import { useState } from 'react';

const QuizTemplate = ({subject, questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

   


    const handleAnswerOptionClick = () => {
        if (selectedAnswer !== null && questions[currentQuestion].answerOptions[selectedAnswer].isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container bg-white h-88vh flex flex-col items-center justify-center w-full border rounded-md py-4 px-8">
        <h1 className='text-4xl py-3 text-center font-bold'>{subject}</h1>
            {showScore? (
                <div className="score-section w-8/12">                  
                   
                        <div className="completion-message flex flex-col items-center justify-center  text-xl font-bold">
                            <p className='bg-orange-500 rounded-md py-4 px-8 text-xl font-bold'>Congratulations! You have completed the quiz!</p>
                            <p className='text-lg py-6'> You scored {score} out of {questions.length}</p>
                            <button onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                                setSelectedAnswer(null);
                            }} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                                Start Over
                            </button>
                            <button onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                                const wrongQuestions = questions.filter((_, index) => {
                                    const isCorrect = questions[index].answerOptions.some(
                                        (option, i) => option.isCorrect && selectedAnswer === i
                                    );
                                    return !isCorrect;
                                });
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                                setSelectedAnswer(null);
                                // Replace the questions array with only wrong questions
                                if (wrongQuestions.length > 0) {
                                    questions.splice(0, questions.length, ...wrongQuestions);
                                }}} className='bg-blue-500 text-white px-4 py-2 rounded-md m-4 '>
                                    Start Over only wrong answers
                                </button>
                            </div> 
                    </div>
                ) : (
                    <div className="question-section border p-8 rounded-md flex flex-col w-8/12">
                        <div className="question-count bg-orange-500 px-4 py-2 mb-6 flex justify-between">
                        <div><span>Question {currentQuestion + 1}</span>/{questions.length}</div>
                        <div><span>Score {score}</span>/{currentQuestion}</div>                      
                            
                        </div>
                        <div className="question-text bg-green-500 px-4 py-2 mb-2">

                            {questions[currentQuestion].answerText}
                        </div>
                        <div className="question-text bg-yellow-400 px-4 py-2 mb-2 font-semibold ">
                            {questions[currentQuestion].questionText}
                        </div>
                        <div className="answer-section   rounded-md flex flex-col gap-2 ">
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <div key={index} className='bg-green-200 px-4 py-2'>
                                    <input
                                        type="radio"
                                        id={`option-${index}`}
                                        name="answer"
                                        onChange={() => setSelectedAnswer(index)}
                                        checked={selectedAnswer === index} 
                                         
                                    />
                                    <label htmlFor={`option-${index}`} className='ml-1'>
                                        {answerOption.answerText}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="button-group flex justify-between mt-5">
                            <button
                                onClick={() => {
                                    if (currentQuestion > 0) {
                                        setCurrentQuestion(currentQuestion - 1);
                                        setSelectedAnswer(null);
                                    }
                                }}
                                disabled={currentQuestion === 0}
                                className='bg-gray-500 text-white px-4 py-2 rounded-md'
                            >
                                Previous
                            </button>
                            
                            <button
                                                                onClick={() => {
                                                                    const nextQuestion = currentQuestion + 1;
                                                                    if (nextQuestion < questions.length) {
                                                                        setCurrentQuestion(nextQuestion);
                                                                        setSelectedAnswer(null);
                                                                    }
                                                                }}
                                                                disabled={currentQuestion === questions.length - 1}
                                                                className='bg-green-500 text-white px-4 py-2 rounded-md'
                                                            >
                                                                Next
                                                            </button>
                                                            <button
                                onClick={handleAnswerOptionClick}
                                disabled={selectedAnswer === null}
                                className={`bg-blue-500 text-white px-4 py-2 rounded-md ${currentQuestion === questions.length - 1 && 'hidden'}`}
                            >
                                Submit
                            </button>
                            {currentQuestion === questions.length - 1 && (
                                                                <button
                                                                    onClick={handleAnswerOptionClick}
                                                                    // onClick={() => setShowScore(true)}
                                                                    className='bg-green-500 text-white px-4 py-2 rounded-md'
                                                                >
                                                                    Final Submit
                                                                </button>
                                                            )}
                            
                        </div>
                    </div>
                )}
               
            
        </div>
    );
};

export default QuizTemplate;