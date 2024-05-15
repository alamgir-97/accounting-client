import WebDevLifeCycle from "./WebDevLifeCycle";
import TeachingSchedule from './TeachingSchedule';
import { useState } from "react";


const StepsOfWebDev = () => {
    {/* ======== Experimental code*/}
    const [width, setwidth] = useState('w-32 border p-4 rounded-sm hidden ');

    const handleClick = () =>{      
        setwidth('w-48 border p-4 bg-red-500 rounded-md ml-[30vw]')
    }
    {/* ======== Experimental code*/}
    return (
        <div className="w-full bg-white">         
           {/* <div className="bg-yellow-500">
          <div className="flex justify-content p-5 gap-5">
            <button onClick={handleHTML} className="btn btn-sm">
              Theory
            </button>
            <button onClick={handleBackendSetup} className="btn btn-sm">
              xyz
            </button>
            <button onClick={handleReactRouter} className="btn btn-sm">
              Load Calculation
            </button>
            <button className="btn btn-sm"></button>
          </div>        
        </div> */}
        <h1 className="text-3xl text-center font-bold" >Web Development</h1>
      
<TeachingSchedule></TeachingSchedule>              
<WebDevLifeCycle></WebDevLifeCycle>   
{/* ======== Experimental code*/}
<h1 className={width}>Added tailwind css for the heading element are: {width}.</h1>
      <button
        type="button"
        onClick={() => handleClick()}
      >CSS change experiment</button>      
{/* =========== */}

            <h1 className="font-bold text-2xl">Steps of Dynamic Website Development</h1>
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">01.</span> Install and Setup VS Code</p>
            <p>1. What is VSCode?</p>
            <p>2. Introducing VSCode User Interface.</p>
            <p>3. VSCode Keyboard Shortcuts(Ctrl+K Ctrl+S)</p>
            <p>4. VSCode Extensions</p>
            <p>5. What is Node? </p>
            <p>6. How to install Node</p>
            <p>7. What is git?</p>
            <p>8. How to install git scm?</p>
            <p>9. What is firebase?</p>
            <p>10. How to install firebase?</p>
            <p>11. Some VSCode quick code writing techniques.</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">02.</span>Create New Clientside Project Folder and Setup</p>
            <p><span className=""></span>1. What is HTML? </p>
            <p><span className=""></span>2. What is CSS? </p>
            <p><span className=""></span>3. What is Tailwind? </p>
            <p><span className=""></span>4. What is DaisyUI? </p>
            <p><span className=""></span>5. What is JavaScript? </p>
            <p><span className=""></span>6. What is React? </p>
            <p><span className=""></span>7. What is React Router? </p>
            <p><span className=""></span>8. What is React Components? </p>
            <p><span className=""></span>9. What is JSX? </p>
            <p><span className=""></span>10. What is Type Script? </p>
            <p><span className=""></span>11. What is module? </p>
            <p><span className=""></span>12. What is Tailwind Post Processor? </p>
            <p><span className=""></span>13. What is React Components? </p>
            <p><span className=""></span>14. What is React Component? </p>
            <p><span className=""></span>15. How to create components (shortcut: rsc + Enter)</p>
            <p><span className=""></span>16. Website Development Monitoring</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">03.</span>Install Git and Create GitHub Accounts and use them</p>
            <p>1. What is Git 2. What is Github 3. Git init 4. GitHub Signup and sign in 5. Create Github repository 6. Git push 7.Git ...username, Git ...email</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">04.</span>React Router Setup to make the website Single Page Application(SPA)</p>
            <p>1. What is SPA 2. What is routes 3.Children and outlets 4. Error Page</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
              <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">05.</span>Responsive Navbar and Footer Creation</p>
            <p>1.Logo, 2. Link, 3. Navlink 4. Button, 5. Flex, 6. Grid, 7. Position, 8. Width, 9. Height,</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">06.</span>Web Site Content/Body Developments (UI)</p>
            <p>6.1 HTML & CSS (Stucture, Content, Style and Theme)</p>
            <p>-6.1.1 HTML: tag, attribute, value, block element, inline element  </p>
            <p>--6.1.2.1 CSS: Selectors, property, value  </p>
            <p>--6.1.2.2 CSS: Typography (Font Family, Font size, Leading, Carning) Colors(Primary Colors, Secondary Colors, Tartiary Colors, Hue, Tint, Shade, Contrast), icons </p>
            <p>--6.1.2.3 CSS framework (tailwind)</p>
            <p>--6.1.2.4 Component Library (daisyUI)</p>
            <p>6.2 JavaScriot (Functionality)</p>
            <p>-6.2.1 JS: data type, varibales, constant, function, array, object, chining, conditionals, </p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
              <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">07.</span>Web Site Content/Body Developments (Admin Panel)</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">08.</span>Make website Responsive</p>
            <p>--8.1. Units, grid, flex, width, height</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">09.</span>Serverside Project Folder Creation and Setup</p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">10.</span>Connect with Database </p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">11.</span>CRUD Operation (Serverside & Clientside)</p>          
            <p className="mb-2 font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">11.1</span> Collect Data from Client Side and Store in the DB and Show in the UI</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-01</span> Create a Form: to collect data [HTML&CSS] [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-02</span> Collect Form Data: from the Form and keep the data creating an JS Object[JS] [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-03</span> Create an api Endpoint: in the server side + need middleware to get the body, otherwise will show undefined[post operation in the Backend] [Backend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-04</span> Use Fetch: (with api end point, method, headers and body. api endpoint must be same as backend api end point) to send data from client side to server side [post operation in the Backend] [Backend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-05</span> Create a mongoDB connection: [signup + login, ..., Choose Package, Create cluster, Network Access, Database Access, Database&gt;Browser Collections, .... , client, uri, run function] [MongoDB/Database]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-06</span> Create a database(DB) and a collection + send the data to DB: using insertOne and check in the DB[Backend + Database]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-07</span> Create an api end point: to get data from the db [get operation in the Backend]  [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-08</span> Use Fetch: to load data from the db through serverside [use the link of api endpoint of get]  [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-09</span> Use loaderData: to load the data inside the component  [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-10</span> map the loaded data: and display in the UI [Frontend]</p>
            <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">___11.2 Minimum Knowledge Requierement that are not mentioned above:</span> 1. Clientside/Frontend Project Creation 2. Serverside Project Creation 3. JSON 4. JSX 5. function 6. async/await function 7. Object(property:value) 8. array 9. variable 10. middleware 11. api 12. useLoader 13. map 14. params</p>
            </div>    
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">12.</span>Authentication</p>
            <p>1. Registration 2. Login 3. Logout 4. Private Route]</p>  
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">13.</span>Authorization</p>
            <p>Admin Route</p>
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">14.</span>Payment System Integration??</p>
            </div> 

            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">15.</span>E-mail Notification</p>
            </div>            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">16.</span>Pagination</p>
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">17.</span>Serverside Project Deployment (vercel)</p>
            <p>How to deploy in vercel? 1. requied a configuration in the vercel.json file 2.vercel + enter in the terminal 3. vercel login 4. enviromental variable 5. require(&apos;dotenv&apos;).config(); and make uri ...text and replace user id and password with process.env.USER_DB and process.env.USER_PASS</p>
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">18.</span> Clientside Project Deployment (firebase)</p>
            <p className=""><span className="rounded-lg bg-rose-500 p-2 mr-2">18.1</span> Domain</p>
            <p className=""><span className="rounded-lg bg-rose-500 p-2 mr-2">18.2</span> SSL Certificate</p>
            <p className=""><span className="rounded-lg bg-rose-500 p-2 mr-2">18.3</span> Hosting</p>
            <p className=""><span className="rounded-lg bg-rose-500 p-2 mr-2">18.4</span> C Panel</p>
            <p className=""><span className="rounded-lg bg-rose-500 p-2 mr-2">18.5</span> i. Deploy in Firebase, ii. Deploy in Netlify, iii. Deploy in Github, iv. Deploy in Vercel</p>
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">19.</span> Google Analytics and SEO</p>
            </div>            
            
            <div className="my-4 p-4 rounded-xl bg-rose-200 text-rose-700 text-sm md:text-lg lg:text-lg">
            <p className="font-bold"><span className="rounded-lg bg-rose-500 p-2 mr-2">20.</span> Maintenance (Release Note+)</p>
            </div>       

          
            <h1 className="font-bold pl-2">Steps of Web Development:</h1>
            <ul>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 1. Install and setup VS Code</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 2. Create New Clientside Project Folder and Setup</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 3. Install Git and Create GitHub Accounts and use them (install git, git init, login github, create github repository, git add, git commit, git push) </li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 4. React Router Setup to make the website Single Page Application (SPA) (Relative Path, Absolute Path, Outlet, Children, dynamic route)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 5. Responsive Navbar and Footer Creation</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 6. Web Site Content/Body Developments (UI)/Create Components and add contents</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 7. Web Site Content/Body Developments (Admin Panel)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 8. Make website Responsive (Page Layout & etc)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 9. Serverside Project Folder Creation and Setup</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 10. Connect with Database</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 11. CRUD Operation (Serverside & Clientside)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 12. Authentication</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 13. Authorization</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 14. Payment System Integration</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 15. E-mail Notification</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 16. Pagination</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 17. Deploy Serverside/Backend Project (vercel)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 18. Deploy Clientside/Frontend Project (Github, Netlify, Firebase, Vercel firebase:npm run build; firebase deploy --only hosting)</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 19. Google Analytics and SEO</li>
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'> 20.  Maintenance (Release Note+)</li>    
            <li className='bg-red-600 text-white border m-1 text-lg pl-2'>- JWT</li>   
          </ul>



</div>
      
    );
};

export default StepsOfWebDev;