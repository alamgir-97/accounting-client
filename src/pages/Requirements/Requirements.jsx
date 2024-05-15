import { Link } from "react-router-dom";
import AccountingNavbar from "../../Components/AccountingNavbar";
import AppName from "../../Components/AppName";
import { useLoaderData } from 'react-router';


const Requirements = () => {
    return (
        <div className="w-11/12 mx-auto bg-white">
            <AppName></AppName>
            <AccountingNavbar></AccountingNavbar>
            <div className="border rounded-xl">
            <h1>SRS (Software Requirement Specifications)</h1>            
           <h2 className="font-bold"> 1. Introduction</h2>
           <p>1.1 Purpose</p>
           <p>1.2 Intended Audiences</p>
           <p>1.3 Scope <br></br>Future of Project</p>
           <p>1.4 Definition</p>
           <p>1.5 References</p>
           <h2 className="font-bold"> 2. Overall Description</h2>
           <p>2.1 User Interface</p>
           <p>2.2 System Interface</p>
           <p>2.3 Software and Hardware Requirements</p>
           <p>2.4 Constraints<br></br>Conditions</p>
           <p>2.6 User Characteristics</p>
           <h2 className="font-bold"> 3. System Features and Requirements</h2>
           <p>3.1 Functional Requirements</p>
           <p>3.2 Use cases / Sequence diagrams </p>
           <p>3.3 External Interface Requirements</p>
           <p>3.4 Database Requirements</p>
           <p>3.5 Non Functional Requirements</p>
           <p>3.6 Constraints</p>
           <h2 className="font-bold"> 4. Deliver for Approval</h2>
           <h2 className="text-3xl"><span className="font-bold">Users of SRS Documents:</span>1. Client 2. Development Team 3. Maintenance Team 4. Technical Writers</h2>
            <Link className="p-8 btn text-3xl" target="_blank" to="https://www.youtube.com/watch?v=klMyKL6luS8">Video: SRS Document</Link>
            </div>

            <div className="p-6 text-xl">
            <h1 className="font-bold">Authentication </h1>
            <p>-Login and Logout: (firebase)</p>
            <p>-User Registration: (firebase)</p>
            <h1 className="font-bold">Authorization: </h1>
            <p>Authentication with JWT: </p>
            <p>-Access control based on users: Admin, User, Paid User, Guest User, Level/Class </p>        
            <p>-Control content access based on user level: </p>
            <h1 className="font-bold">Admin Panel: </h1>
            <p>-Transaction Input: </p>
            <p>-Transaction Modificaion: </p>
            <p>-Transaction Delete: </p>            
            <h1 className="font-bold">Backend Apis: </h1>
            <p>-/v1/transactions </p>
            <p>-/v1/transactions/:id </p>
            
            <h1 className="font-bold">Frontend Technology: </h1>
            <p>-TailwindCSS</p>
            <p>-DaisyUI</p>
            <p>-React</p>
            <p>-React Router</p>
            <h1 className="font-bold">Backend Technology: </h1>
            <p>-Node </p>
            <p>-Express </p>
            <p>-MongoDB Atlas</p>
            <h1 className="font-bold">Security: </h1>
            <p>-dotenv</p>
            <h1 className="font-bold">Responsiveness: </h1>
            <p>-Mobile </p>
            <p>-Tab </p>
            <p>-Laptop </p>
            <p>-Desktop </p>
            <h1 className="font-bold">Deployment: </h1>
            <p>-firebase: (frontend code)</p>
            <p>-vercel: (backend code)</p>
            
            <h1 className="font-bold">Functionality: </h1>
            <p>-Journal</p>
            <p>-Ledger </p>
            <p>-Profit and Loss Statement</p>
            <p>-Trial Balance</p>
            <p>-Projectwise Accounts</p>
            <p>-Investment Calculation</p>
            <p>-Final Statement</p>
            <p>-Theory of Accounting</p>
            <p>-Sample Accounting Examples with Explanation</p>
            <p>-Automatically record name of the data entry person's name beside transaction</p>
            <div className="hidden">
            <p>-gamified learning</p>
            <p>-Learning through fun</p>
            <p>-Pagination funtionality:</p>
            <p>-Theme Changing functionality</p>
            <p>-Language proficiency Level Checking/Testing funtionality:</p>
            <p>-Progress Tracking funtionality:</p>
            <p>-Reward funtionality:</p>
            <p>-Video tutorial functionality:</p>
            <p>-Word search funtionality:</p>
            <p>-Auto Numbering:</p>
            <p>-Voice Typing  :</p>
            <p>-Word voice search funtionality:</p>
            <p>-User comments functionality:</p>
            <p>-Audio Recording Funtionality</p>
            <p>-Video Recording functionality</p>
            <p>-User note keeping functionality</p>
            <p>-Translation functionality</p>
            <p>-Error Page Functionality</p>
            <p>-Blog Functionality</p></div></div>
            <h1 className="font-bold">Maintenance Task:</h1>
            <p>-Version Control Strategy</p>
            <p>-New Content addition:</p>
            <p>-Device Shifting:</p>
            <h1 className="font-bold">Copywrite:</h1>
            <p>-How to copywrite?</p>
            <p>-How much will be cost:</p>                      
            
            <div className="hidden">           
            <h2 className="bg-yellow-500 text-pink-700 text-left text-2xl font-semibold px-3 py-2 my-2 border rounded-xl ">2. Morphology: Parts of Speech, Articles, Determiner, Conjugation, Inflexion, Synnonym, Anthonym, Gender, number, countable, uncountable, case Group Verb, Phrase.</h2>
            <h2 className="bg-yellow-500 text-pink-700 text-left text-2xl font-semibold px-3 py-2 my-2 border rounded-xl ">3. Syntax: Kinds of Sentence, Tense, Causative, Voice, Narration, Transformation of Sentence, Tag Question, Proverb, Clause</h2>
          </div>
          <div className="hidden">
            <h2 className="bg-yellow-500 text-pink-700 text-left text-2xl font-semibold px-3 py-2 my-2 border rounded-xl ">1. Fill in the gap sentence maker. (there will be cards of words, and gaps in the sentences. one card will be dragged to fill the gaps. A result will be shown as a popup.</h2>
            <h2 className="bg-yellow-500 text-pink-700 text-left text-2xl font-semibold px-3 py-2 my-2 border rounded-xl ">2. There will a word list arranged side by side as button like fashion. Each word will be dragagle. When dragged out of the box a new list will be created and removed from the previous list. If clicked each word will show meaning and pronunciation will be heard. Again words could be removed from the list by dragging again.</h2>
            <h2 className="bg-yellow-500 text-pink-700 text-left text-2xl font-semibold px-3 py-2 my-2 border rounded-xl ">3. There will a paragraph. If clicked on any word, each word will show meaning and the pronunciation will be heard. If double clicked on any sentence each sentence&apos;s meaning will be shown and the pronunciation will be heard.</h2>
          </div>

        </div>
    );
};

export default Requirements;