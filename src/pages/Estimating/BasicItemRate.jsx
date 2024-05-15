import LearningBoard from "../../Components/LearningBoard";


const BasicItemRate = () => {
    return (
        <div>
        <LearningBoard></LearningBoard>
            <div className="flex flex-col border m-8 p-4 rounded-md justify-center">
                <h1 className="font-bold">Basic Item</h1><br></br>
                <form className="flex">
                <input type='text' placeholder="Basic Name" className="w-6/12 border border-fuchsia-600 p-2 accent-purple-400"></input>
                <input type="text" placeholder="Unit" className="w-2/12 border-y border-fuchsia-600 p-2"></input>
                <input type='number' placeholder="Rate" className="w-2/12 border border-fuchsia-600 p-2"></input>
                <input type='submit' name='Submit' className="w-1/12 border bg-fuchsia-600 p-2 text-white font-bold rounded-md"></input>
                </form>
               
            </div>
                <div className="flex mx-8 border-y text-left w-11/12 p-1">
                <p className="w-1/12  px-2 text-right">Sl. No.</p>
                <p className="w-6/12 px-2">Basic Item Name</p>
                <p className="w-1/12  px-2 text-right">Unit</p>
                <p className="w-3/12  px-2 text-right">Rate</p>                
                </div>

                <div className="flex mx-8 border-y text-left w-11/12 p-1">
                <p className="w-1/12  px-2 text-right">1.</p>
                <p className="w-6/12 px-2 ">1st class Bricks</p>
                <p className="w-1/12  px-2 text-right">each</p>
                <p className="w-3/12  px-2 text-right">9.00</p>                
                </div>
                <div className="flex mx-8 border-y text-left w-11/12 p-1">
                <p className="w-1/12  px-2 text-right">2.</p>
                <p className="w-6/12 px-2 ">12mm downgraded 1st class Brick Chips</p>
                <p className="w-1/12  px-2 text-right">m3</p>
                <p className="w-3/12  px-2 text-right">3700.00</p>                
                </div>
                <div className="flex mx-8 border-y text-left w-11/12 p-1">
                <p className="w-1/12  px-2 text-right">3.</p>
                <p className="w-6/12 px-2 ">20mm downgraded 1st class Brick Chips</p>
                <p className="w-1/12  px-2 text-right">m3</p>
                <p className="w-3/12  px-2 text-right">3700.00</p>                
                </div>
        </div>
    );
};

export default BasicItemRate;