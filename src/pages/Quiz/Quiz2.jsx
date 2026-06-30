import { useState } from 'react';

const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            questionText: 'বাংলাদেশের রাজধানীর নাম কী?',
            answerOptions: [
                { answerText: 'বার্লিন', isCorrect: false },
                { answerText: 'দিল্লী', isCorrect: false },
                { answerText: 'ঢাকা', isCorrect: true },
                { answerText: 'মস্কো', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is the CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many continents are there?',
            answerOptions: [
                { answerText: '5', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
                { answerText: '8', isCorrect: false },
            ],
        },
    ];

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
        <div className="quiz-container bg-white w-full h-88vh flex flex-col items-center justify-center">
            {showScore? (
                <div className="score-section">                  
                   
                        <div className="completion-message flex flex-col items-center justify-center border rounded-md py-4 px-8 text-xl font-bold">
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
                                }
                            }} className='bg-blue-500 text-white px-4 py-2 rounded-md m-4 '>
                                Start Over only wrong answers
                            </button>
                        </div> 
                </div>
            ) : (
                <div className="question-section border p-8 rounded-md flex flex-col">
                    <div className="question-count bg-orange-500 px-4 py-2 mb-6 flex justify-between">
                    <div><span>Question {currentQuestion + 1}</span>/{questions.length}</div>
                    <div><span>Score {score}</span>/{currentQuestion}</div>                      
                        
                    </div>
                    <div className="question-text bg-green-500 px-4 py-2 mb-2 font-semibold">
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
                    <button
                        onClick={handleAnswerOptionClick}
                        disabled={selectedAnswer === null}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md mt-5 justify-end'
                    >
                        Submit
                    </button>
                    {currentQuestion === questions.length - 1 && (
                                                                <button
                                                                    onClick={() => setShowScore(true)}
                                                                    className='bg-green-500 text-white px-4 py-2 rounded-md'
                                                                >
                                                                    Final Submit
                                                                </button>
                                                            )}
                    {/* {showScore && (
                        <div className="completion-message bg-emerald-500">
                            <p>Congratulations on completing the quiz!</p>
                            <button onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                                setSelectedAnswer(null);
                            }}>
                                Start Over
                            </button>
                        </div>
                    )} */}
                </div>
            )}
        </div>
    );
};

export default Quiz2;