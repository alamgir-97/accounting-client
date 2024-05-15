import { useState } from "react";
import StepsOfWebDev from "./StepsOfWebDev";
import FrontEndProjectSetup from "./FrontEndProjectSetup";
import AccountingNavbar from "../Components/AccountingNavbar";
import AppName from "../Components/AppName";
import VSCodeSetup from "./VSCodeSetup";
import HTMLComponent from "./HTMLComponent";
import CSSComponent from './../CSSComponent';
import BackendProjectSetup from "./BackendProjectSetup";
import TailwindCSSComponent from "./TailwindCSSComponent";
import DaisyUIComponent from "./DaisyUIComponent";
import JavaScriptComponent from "./JavaScriptComponent";
import ReactRelatedComponent from "./ReactRelatedComponent";
import WebDevCoursePlan from "./WebDevCoursePlan";


const WebDevelopment = () => {
  const [video, setVideo] = useState();
  // const [img, setImg] = useState();
  const [width, setWidth] = useState('w-4/12 md:4/12 lg:3/12 border flex flex-col justify-left')

  const handleWidth = () => {
      setWidth('w-1/12 md:4/12 lg:3/12 border flex flex-col justify-left')
  }
  const handleWidth2 = () => {
      setWidth('w-4/12 md:4/12 lg:3/12 border flex flex-col justify-left')
  }

  const handleVideo1 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/cabbage.mp4"></video>
      </>
    );
  };

  const handleVideo2 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/eggplant.mp4"></video>
      </>
    );
  };

  const handleVideo3 = () => {
    setVideo(
      <>
        <video src="./public/vegetables/audio/carrot.mp4"></video>
      </>
    );
  };

  // WebDevelopment
  const handleWebDevelopment = () => {
    setVideo(      
      <>
      <StepsOfWebDev></StepsOfWebDev>   
      <WebDevCoursePlan></WebDevCoursePlan> 
      <div className='flex flex-col m-8'>
    <h2 className='font-bold text-2xl bg-lime-300'>Domain Name</h2>
    <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold" href="https://bdia.btcl.com.bd/" target="_blank" rel="noreferrer">BTCL</a>
    <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold" href="https://www.namecheap.com/" target="_blank" rel="noreferrer">Namecheap.com</a>
    </div>


      <div className='flex flex-col m-8'>
        <h2 className='font-bold text-2xl bg-lime-300'>Fahmid Al Nayem</h2>
        <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold" href="https://www.youtube.com/watch?v=hoJmwEb92oc" target="_blank" rel="noreferrer">১০ দিনে ২৫ লাখ টাকা সেল চ্যালেঞ্জ - ক্লাস ০১ | Advanced eCommerce Digital Marketing Course 2024</a>
        <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold" href="" target="_blank" rel="noreferrer"></a>
    </div>
      </>
            
          );
  };

  // VSCode
  const handleVSCode = () => {
    setVideo(
      <VSCodeSetup></VSCodeSetup>
    );
  };

  // frontend installation/setup
  const handleFrontEndSetup = () => {
    setVideo(
      <FrontEndProjectSetup></FrontEndProjectSetup>
    );
  };

  // backend installation/setup
  const handleBackendSetup = () => {
    setVideo(      
      <BackendProjectSetup></BackendProjectSetup>    
    );
  };

  // HTML
  const handleHTML = () => {
    setVideo(
      <>
        <div className="bg-fuchsia-100 leading-5">       
        <HTMLComponent></HTMLComponent>
        </div>
      </>
    );
  };

  // CSS
  const handleCSS = () => {
    setVideo(
      <>
      <CSSComponent></CSSComponent>  
      </>
    );
  };

  // TailwindCSS
  const handleTailwindcss = () => {
    setVideo(
      <>
        <TailwindCSSComponent></TailwindCSSComponent>
      </>
    );
  };

  // DaisyUI
  const handleDaisyUI = () => {
    setVideo(
      <>
      <DaisyUIComponent></DaisyUIComponent>       
      </>
    );
  };

  // JavaScript
  const handleJS = () => {
    setVideo(
      <>
      <JavaScriptComponent></JavaScriptComponent>
      </>
    );
  };


  // React
  const handleReact = () => {    
    
    setVideo(
      <>
      <ReactRelatedComponent></ReactRelatedComponent>    
      </>
    );
  };

  // react router
  const handleReactRouter = () => {
    setVideo(
      <>
      <ReactRelatedComponent></ReactRelatedComponent>
      </>
    );
  };
  // firebase
  const handleFirebase = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">Firebase</h1>          
          <li>console.firebase.google.com</li>
          <li>Create a project</li>
          <li>Google analytics</li>
          <li>Register app (create config) </li>
          <li>Firebase&gt;firebase.init.js/firebase.config.js</li>
          <li>npm install firebase </li>
          <li>add config file to the project</li>
          <li>DANGER: Do not publish or make firebase config to public by pushing those to github  </li>
          <li>go to docs&gt;build&gt;authentication&gt;Web&gt;Get Started</li>
          <li>add config file to the project</li>
          <li className="bg-pink-700">How to set custom firebase domain name  (custom-site-id.web.app)?</li>
          <li>Solution: Register app&gt;Add set up Firebase Hosting to this app&gt;Create a new site</li>
          <li>How to add domain</li>          
        </div>
      </>
    );
  };

  // react node js
  const handleNodeJS= () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">Node JS</h1>
          <li>What is Node JS?</li>
          <li>Route, Main Layout and Outlet</li>
          <li>
            Layout: ভিউ পোর্টের কোন অংশ ফিক্সড থাকবে এবং route-পরিবর্তনের সাথে
            সাথে update হবে তা নির্দেশ করার জন্য। Outlet ভিউপোর্টের কোন অংশ
            route-পরিবর্তনের সাথে সাথে update হবে তা নির্দেশ করার জন্য
          </li>
          <li>Link and NavLink</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
        </div>
      </>
    );
    };

  // react Express JS
  const handleExpressJS = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">Express JS</h1>
          <li>What is Express JS?</li>
          <li>What is Express JS Middleware</li>
          <li>
            
          </li>
          <li>Link and NavLink</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
          <li>This is an example of Present Perfect Tense</li>
        </div>
      </>
    );
  };

  // react MongoDB
  const handleMongoDB = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">MongoDB</h1>
          <li>What is MongoDB?</li>
          <li>What is Data?</li>
          <li>What is Database?</li>
          <li>Types of Database?</li>
          <li>What is DBMS?</li>
          <li>DBMS Architecture Types?</li>
          <li>MongoDB vs MySQL</li>
          <li>Advantages of MongoDB</li>

        </div>
      </>
    );
  };
  // react MongoDB
  const handleImportantWebsites = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">Important Websites</h1>
          <li>WorldVectorLogo</li>
          <li>brandcolor</li>
          <li><a href='http://www.coolors.co'>coolors.co</a></li>
          <li>themeforest</li>
          <li>wedevs.com</li>
          <li>color contrast checker</li>
        </div>
      </>
    );
  };


  const handlePropTypes = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
       <div><a href='https://www.npmjs.com/package/prop-types' target='_blank' rel='noreferrer' className="font-bold text-xl text-bl">npm i prop-types</a></div>
       
        <p><b>Step-1: import </b>{`import PropTypes from 'prop-types';`}</p>
        <p><b>Step-2: use proptypes </b>{`MyComponent.propTypes = { children: PropTypes.node }`}</p>
       

      <div className='hidden'>
        <li className='bg-red-600 text-white border m-1 text-lg pl-2 font-bold'>List of Relatives</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Riya</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Rashed</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Saddam</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Morshed</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Miskat</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Tanbir</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Sultana Razia Apa</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Khuki</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Rebeka</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Mahua</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Manik</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Aresh</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Rafi</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Latifa</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Atika</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Miskat</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Yahia</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Shopan</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Shad</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Ziabuddin</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Emo</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Emo&apos;s Sister</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Nurul Amin</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Shafiqul Alam</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Shafiqul Islam</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Siddique-Unnayan</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Kabir Bhai_MSF</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Borhan Bhai_MSF</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Bedar_MSF</li>
        </div>









        </div>
      </>
    );
  };
  const handleVercel = () => {
    setVideo(
      <>
        <div className="h-[80vh] bg-sky-200 border p-6 m-2">
       
       

      <div className=''>
        <h1 className='bg-red-600 text-white border m-1 text-xl pl-2 font-bold'>Deploy Backend in Vercel</h1>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-1: Deploy Frontend (in Firebase) and create live link</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-2: Create vercel.json file</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-3 Frontend hosting URLs for cors if cookies are used</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-4: Vercel --prod</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-5: Set Environment Variables (vercel&gt;my-server-app&gt;settings)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>Step-6: In Frontend folder replace all localhost by newly created serverside live link</li>

        </div>
        </div>
      </>
    );
  };

  //   {/* Backend Installation in One Page*/}
  //   <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-[50vh]">
  //   <a href="#">
  //     <img
  //       className="rounded-t-lg"
  //       src="/docs/images/blog/image-1.jpg"
  //       alt=""
  //     />
  //   </a>
  //   <div className="p-5">
  //     <a href="#">
  //       <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //         Backend Installation in one page
  //       </h5>
  //     </a>
  //     {/* install node */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">cd \{<span className="text-rose-800">Projects</span>} </p> */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">mkdir {<span className="text-rose-800">myapp</span>} </p> */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">cd /{<span className="text-rose-800">myapp</span>} </p> */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">code .</p> */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">npm init -y</p>            */}
  //     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">create an index.js file in the root folder</p> */}
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       in the package.json file write &ldquo;start&rdquo;: &ldquo;node
  //       index.js&rdquo;, inside the &ldquo;script&rdquo;: object
  //     </p>
  //     {/*  install express, mongodb, cors, dotenv  */}
  //     <p>npm install express cors mongodb dotenv</p>
  //     <p>
  //       in the index.js file write const cors =
  //       require(&apos;cors&apos;)
  //     </p>
  //     <p>also in the index.js file write app.use(cors())</p>
  //     {/* middleware: express.json() */}
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       inside the index.js file paste app.use(express.json())
  //     </p>
  //     {/*  gitignore  */}
  //     {/* need to be install git beforehand */}
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       git init
  //     </p>
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       create .gitignore file in the root folder
  //     </p>
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       open the .gitinore file and write node_modules
  //     </p>
  //     {/* install nodemon */}{" "}
  //     {/* only once for all but not for each project */}
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       npm install -g nodemon
  //     </p>
  //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //       run in the terminal nodemon index.js
  //     </p>
  //     <p>
  //       some computer/cmd/power shall may show this kind of error:
  //       nodemon : File C:\Users\lenovo\AppData\Roaming\npm\nodemon.ps1
  //       cannot be loaded because running scripts is disabled on this
  //       system. For more information, see about_Execution_Policies at
  //       https:/go.microsoft.com/fwlink/?LinkID=135170.
  //     </p>
  //     <p>
  //       then just the copy the line and paste in the cmd/powersehll:
  //       Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  //     </p>
  //     <a
  //       href="#"
  //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //     >
  //       Read more
  //       <svg
  //         className="w-3.5 h-3.5 ml-2"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 14 10"
  //       >
  //         <path
  //           stroke="currentColor"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           stroke-width="2"
  //           d="M1 5h12m0 0L9 1m4 4L9 9"
  //         />
  //       </svg>
  //     </a>
  //   </div>
  // </div>

  //   {/* Frontend Installation in One Page*/}
{/* <h2 className="text-3xl font-bold text-center pb-3">
  Client Side/Frontend Project Setup
</h2>

<div className="m-3 p-6 border bg-green-400">
  <div className="w-1/2 mx-auto">
    <h2 className="text-3xl font-bold flex justify-center border rounded-lg py-3">
      Frontend Project Setup
    </h2>
  </div>

  <div className="mt-6 mx-auto">
    {/* Installation Vite */}
    // <div className="max-w-full bg-green-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       className="rounded-t-lg"
    //       src="/docs/images/blog/image-1.jpg"
    //       alt=""
    //     />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         Create Project Folder using Vite
    //       </h5>
    //     </a>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       Vite is mainly used to see the progress of the code which use
    //       hot reload technology/technique.
    //     </p>
    //     <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       - cd <span className="text-yellow-700">\Projects</span>
    //       <br></br>- npm create vite@latest{" "}
    //       <span className="text-yellow-700">name-of-your-project</span> --
    //       --template react [to create a porject folder using latest
    //       version of vite]
    //       <br></br>- cd{" "}
    //       <span className="text-yellow-700">name-of-your-project</span>{" "}
    //       [&lt;your new project directory&lt;to go/access to the project
    //       folder/directory]
    //       <br></br>- npm run dev [to start development process]
    //     </pre>

    //     <a
    //       href="#"
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Read more
    //       <svg
    //         className="w-3.5 h-3.5 ml-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>

    {/* React Router Installation */}
//     <div className="max-w-full bg-green-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img
//           className="rounded-t-lg"
//           src="/docs/images/blog/image-1.jpg"
//           alt=""
//         />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             React Router Installation
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           - npm install react-router-dom localforage match-sorter sort-by
//         </p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           - code .
//         </p>
//         <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {`              
//         import * as React from "react";
//         import * as ReactDOM from "react-dom/client";
//         import {
// createBrowserRouter,
// RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
// {
// path: "/",
// element: <div>Hello world!</div>,
// },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
// <RouterProvider router={router} />
// </React.StrictMode>
// );`}
//         </pre>

//         <a
//           href="#"
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Read more
//           <svg
//             className="w-3.5 h-3.5 ml-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>

    {/* Tailwind Installation */}
    // <div className="max-w-full bg-green-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       className="rounded-t-lg"
    //       src="/docs/images/blog/image-1.jpg"
    //       alt=""
    //     />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         Tailwind Installation
    //       </h5>
    //     </a>
    //     <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {`        
    //     npm install -D tailwindcss postcss autoprefixer
    //     npx tailwindcss init -p


    //     `}
    //     </pre>

    //     <a
    //       href="#"
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Read more
    //       <svg
    //         className="w-3.5 h-3.5 ml-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>

    {/* DaisyUI Installation */}
    // <div className="max-w-full bg-green-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img
    //       className="rounded-t-lg"
    //       src="/docs/images/blog/image-1.jpg"
    //       alt=""
    //     />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         DaisyUI Installation
    //       </h5>
    //     </a>
    //     <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {`    
    //     npm i -D daisyui@latest          
    //     `}
    //     </pre>

    //     <a
    //       href="#"
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Read more
    //       <svg
    //         className="w-3.5 h-3.5 ml-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>

    {/* React Router Installation */}
//     <div className="max-w-full bg-green-500 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img
//           className="rounded-t-lg"
//           src="/docs/images/blog/image-1.jpg"
//           alt=""
//         />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             React Router Installation
//           </h5>
//         </a>
//         <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           $
//           {`              
//         import * as React from "react";
//         import * as ReactDOM from "react-dom/client";
// import {
// createBrowserRouter,
// RouterProvider,
// } from "react-router-dom";
// import "./index.css";


// const router = createBrowserRouter([
// {
// path: "/",
// element: <div>Hello world!</div>,
// },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
// <RouterProvider router={router} />
// </React.StrictMode>
// );`}
//         </pre>

//         <a
//           href="#"
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Read more
//           <svg
//             className="w-3.5 h-3.5 ml-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
  // </div>
  // </div>
//  */}





  
  // const handleSentence1 = () => {
  //     setS1(
  //         <div>
  //         <p className="pb-6">আমি পানি পান করি।</p>
  //         <div className="flex justify-center">
  //         <img src="../../../../public/Sentence1.jpg" className="w-84 h-36"></img>
  //         <audio autoPlay src="../../../../public/IDrinkWater.mp4" className="w-84 h-36"></audio  >
  //         </div>

  //         <div>
  //         </div>

  //         </div>
  //         ) ;
  //     }

  // const handleSentence2 = () => {
  //     setS2( <>
  //         <p className="pb-6">আমি সুইমিং পুলে সাঁতার কাটি।</p>
  //         <div className="flex justify-center"> <img src="../../../../public/Sentence2.jpg" className="w-84 h-36"></img>
  //         <video autoPlay controls src="../../../../public/ISwimInTheSwimmingPool.mp4" className="w-84 h-36"></video></div>
  //         </>) ;
  //     }

  // const handleSentence1Reset = () => {
  //     setS1("") ;
  //     }
  // const handleSentence2Reset = () => {
  //     setS2("") ;
  //     }
  const handleAOS = () => {
      
      }

  return (
    <div className="mx-auto bg-white">
      <AppName></AppName>
      <AccountingNavbar></AccountingNavbar>
      <div className="flex text-xs md:text-sm lg:text-base">
      <div className={width}>
        
          
          
          <button
            onClick={handleWidth}
            onDoubleClickCapture={handleWidth2}
            className="rounded-full w-[4vh] md:w-[8vh] h-[4vh] md:h-[8vh] border px-1 md:px-1 ml-6 md:ml-8 lg:ml-12 my-2 md:my-3 bg-gray-600 md:bg-gray-500 lg:bg-gray-400  text-white font-bold"
          >
            Width
          </button>
          
          <button
            onClick={handleWebDevelopment}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Web Development
          </button>
          <button
            onClick={handleVSCode}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Visual Studio Code
          </button>
          <button
            onClick={handleFrontEndSetup}
            onDoubleClickCapture={handleVideo1}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Frontend Project Setup /Installation
          </button>
          <button
            onClick={handleBackendSetup}
            onDoubleClickCapture={handleVideo2}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Backend Project Setup /Installation
          </button>
          <button
            onClick={handleHTML}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            HTML
          </button>
          <button
            onClick={handleCSS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            CSS
          </button>
          <button
            onClick={handleTailwindcss}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Tailwindcss
          </button>
          <button
            onClick={handleDaisyUI}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            DaisyUI
          </button>
          <button
            onClick={handleJS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            JavaScript
          </button>
          <button
            onClick={handleReact}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Router
          </button>

          <button
            onClick={handleFirebase}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Firebase
          </button>

          <button
            onClick={handleNodeJS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Node JS
          </button>
          <button
            onClick={handleExpressJS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Express JS
          </button>
          <button
            onClick={handleExpressJS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Postman
          </button>
          <button
            onClick={handleMongoDB}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            MongoDB
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            JWT
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Rechart
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Helmet
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Helmet Async
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Parallax
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Parallax Component
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Parallax tilt
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Tabs
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React TabTab
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            swiperjs.com
          </button>

          <button
            onClick={handleAOS}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React AOS
          </button>
     
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Vercel
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Netlify
          </button>

      
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Vite
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Sweet Alert
          </button>
          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Sweet Alert-2
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Moment JS
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Fetch
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Axios
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            ImageBB
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            vite
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Flowebite
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Terminal
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Git
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Git Hub
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Font Awesome
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Remix
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React Icons
          </button>

          <button
            onClick={handleReactRouter}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Figma
          </button>
          
          <button
            onClick={handleImportantWebsites}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Important Websites
          </button>

          <button
            onClick={handlePropTypes}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            prop-types
          </button>

          <button
            onClick={handlePropTypes}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            React-Datepicker
          </button>
          <button
            onClick={handlePropTypes}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            react-pdf
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            Vercel
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold"
          >
            TanStack Query
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold">
            ReactMailer
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold">
            SendGrid
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold">
            SMTP.com
          </button>
          <button
            onClick={handleVercel}
            onDoubleClickCapture={handleVideo3}
            className="h-[8vh] md:h-[12vh] border px-2 md:px-3 mx-3 md:mx-4 lg:mx-6 my-2 md:my-3 bg-amber-400 md:bg-emerald-500 lg:bg-fuchsia-600 lg:focus:bg-fuchsia-700 lg:text-white font-bold">
            Mailgun
          </button>

          <button            
            className="h-[12vh] border-gray-400 bg-amber-200"
          >
            <p><span className='font-semibold w-full'>Developer:</span> Md. Alamgir</p>
            <p><span className='font-semibold w-full'>Contact:</span> 01817-796141</p>
            
          </button>  
           </div> 
           {/* ====This portion will be displayed after button click==== */}
          <div className="w-8/12 md:w-8/12 lg:w-9/12">{video}</div>  

          </div>   
    
     




    </div>
  );
};



export default WebDevelopment;
