import { bengaliQuestions } from "./bengaliQuestions";
import { englishQuestions } from "./Englishquestions";
import QuizTemplate from "./QuizTemplate";

/* eslint-disable react/prop-types */
const Quiz = ({questions}) => {
    const arr = [[1, 2], [3, 2], [7, 2], [4, 2]];
    arr.push([1, 2]);
const arrFilter = arr.filter((item) => item[0] > 5);

    console.log(arr);
    console.log(arrFilter);

    return (
        <div className="flex flex-col gap-8">            
            <QuizTemplate subject="English" questions={englishQuestions}></QuizTemplate>
            <QuizTemplate subject="বাংলা" questions={bengaliQuestions}></QuizTemplate>
            {arrFilter.map((item, index) => (
                <div key={index} className="bg-red-200 p-4 rounded-md flex">
                    <h1>Item {item[0]*item[1]}</h1>
                </div>
            ))}
        </div>
    );
};

export default Quiz;