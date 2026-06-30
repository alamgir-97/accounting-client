
const Quiz3 = () => {
    const arr = [1112, 2, 3, 4, 5, 10];
    console.log(arr);
    arr.push(6);
    arr.push(7);
    arr.push(8);
    return (
        
        <div>
            {arr.map((item, index) => (
                <div key={index} className="bg-red-200 p-4 rounded-md flex flex-col gap-2">
                <div className="flex gap-2 border"><p>Sl. {index+1}:</p>
                <p>{item}</p></div>
                    
                </div>
            ))}
        </div>
    );
};

export default Quiz3;