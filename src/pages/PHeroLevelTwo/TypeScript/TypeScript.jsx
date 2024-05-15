
const TypeScript = () => {
    return (
        <>
        <div className="border rounded-md bg-white m-4 p-4">
            <h2>What is typeScript?</h2>
            <h2>Who developed it?</h2>
            <h2>When is it first introduced?</h2>
            <h2>The TypeScript Technocrat mission</h2>
            <ol>
            <li className="list-decimal">Introducing TypeScript</li>
            <p className="list-decimal">What TypeScript Is, </p>
            <p className="list-decimal">Why We Use It, </p>
            <p className="list-decimal">The Benefits Of Using TypeScript, </p>
            <p className="list-decimal">How It Builds Upon Existing JavaScript Knowledge</p>
            <li className="list-decimal">Install Typescript And Node Version Manager</li>
            <li className="list-decimal">Writing First TypeScript Program</li>
            <li className="list-decimal">Mastering Basic Data Types</li>            
            <p className="list-decimal">Numbers</p>
            <p className="list-decimal">Strings</p>
            <p className="list-decimal">Booleans</p>
            <p className="list-decimal">Other Data Types</p>
            <li className="list-decimal">Object Power, Optional And Literal Types</li>
            <p className="list-decimal">The World Of Objects In TypeScript </p>
            <p className="list-decimal">How To Structure Objects</p>
            <p className="list-decimal">Define Optional Properties</p>
            <p className="list-decimal">Use Literal Types (For Greater Control)</p>
            <li className="list-decimal">Function In TypeScript</li>
            <p className="list-decimal">How To Write Functions In TypeScript!</p>
            <p className="list-decimal">Parameter Typing</p>
            <p className="list-decimal">Return Type Definition</p>
            <li className="list-decimal">Destructuring In TypeScript</li>
            <p className="list-decimal">Working With Complex Objects Using Destructuring_ A Powerful Technique That Allows To Extract Specific Data With Ease</p>
            <li className="list-decimal">Type Aliases In TypeScript</li>            
            <p className="list-decimal">How To Create Type Aliases_ Type Aliases Are Like Nicknames For Complex Types. This Will Make Your Code Cleaner, 
            <br></br>More Readable, And Easier To Maintain.</p>
            <li className="list-decimal">Union And Intersection Types</li>            
            <p className="list-decimal">Define Variables That Can Hold Different Types Of Data.</p>            
            <li className="list-decimal">Ternary, Optional Chaining & Nullish Coalescing</li>            
            <p className="list-decimal">Ternary Operators</p>            
            <p className="list-decimal">Optional Chaining</p>            
            <p className="list-decimal">Nullish Coalescing</p>            
            <li className="list-decimal">Never, Unknown & Nullable Types</li>            
            <p className="list-decimal"> &quot;Never&ldquot; Types</p>            
            <p className="list-decimal"> &quot;Unknown&ldquot; Types</p>            
            <p className="list-decimal"> Nullable Types</p>            
            <li className="list-decimal">Generic and Interface</li>            
            <li className="list-decimal">Generic and Interface</li>            
            </ol>

          <div className="border rounded-md m-4 p-4 bg-lime-300 "> {`
          const add =(a: number, b: number): number => a+b; 
          <br></br>
          const result: number = add();
          console.log(result);
          `}</div>
          <div className="border rounded-md m-4 p-12 leading-8 bg-amber-300 "> 
          <h1 className="text-xl font-bold">Video: 1-4 Basic Data Type</h1>
          <h2 className="text-lg font-bold">Primitive Types and non Primitive Types</h2>
          <div className="flex gap-16">
            <div>
            <h3 className="text-md font-bold">Primitive</h3>
            <li>number</li>
            <li>string</li>
            <li>boolean</li>
            <li>null</li>
            <li>undefined</li>
            <li>symbol</li>
            </div>
            <div>
            <h3 className="text-md font-bold">Non Primitive Types</h3>
            <li>Array</li>
            <li>Tuple</li>
            <li>Object</li>
            <p></p>
            </div>
          </div>
          </div>



            </div>
        </>
    );
};

export default TypeScript;