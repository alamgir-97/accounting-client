import CSS from "./CSS";

const TeachingSchedule = () => {

    return (
        <div className="border rounded-xl md:m-4">
        <h1 className="font-bold text-2xl text-center border py-1 m-4 rounded-md bg-teal-400">Basic Web Development Learning Schedule</h1>
       {/* ==========Session-1========== */}
        <div className="flex gap-10 justify-center m-4"><div className="p-4 border rounded-md font-bold">VS Code</div><div className="p-4 border rounded-md font-bold">HTML</div><div className="p-4 border rounded-md font-bold"><a href={CSS}>CSS</a></div></div>
            <div className="flex flex-col md:flex-row md:overflow-x-scroll bg-teal-500 md:bg-teal-200 gap-5 border rounded-lg p-4">
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                  <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">1</h2>
                  <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    Web Development Life Cycle
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>1. Analysis</b></div>
                    <div className="flex pl-6">[i. client requirements ii. competitors iii. target audience]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>2. Planning</b></div>
                    <div className="flex pl-6">[i. sitemap ii.wireframe  iii. tech stack selection]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>3. Design</b></div>
                    <div className="flex pl-6">[i. layout ii.theme]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>4. Development</b></div>
                    <div className="flex pl-6">[i. frontend ii.backend]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>5. Testing</b></div>
                    <div className="flex pl-6">[i. code review ii. bug fixing]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>6. Deployment</b></div>
                    <div className="flex pl-6">[i. domain name ii. ssl certificate iii. hosting iv. backend deployment v. frontend deployment]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>7. Maintenance</b></div>
                    <div className="flex pl-6">[i. fix bugs ii. add new contents iii. remove old contents  vi. change Tech Stack v.etc.]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><a className="text-blue-600" href="https://www.youtube.com/watch?v=C4AbNhICMVc" target="_blank" rel="noreferrer"> 10. SDLC - Software Development Lifecycle | Development Essentials - Bangla Tutorial</a></div>
                </div>
                  {/* ==========Session-2========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">2</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 60min</h2>
                    SetUp VS Code
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Install <a className="text-blue-600" href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer"> VS Code</a></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Install<a className="text-blue-600" href="https://nodejs.org/en" target="_blank" rel="noreferrer"> Node.js</a></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Install<a className="text-blue-600" href="https://git-scm.com/download/win" target="_blank" rel="noreferrer"> git scm</a></div>                                        
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Install firebase</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>Install VS Code Extensions:</b></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Auto Close Tag</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Auto Complete Tag</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Auto Import</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Auto Import -ES6, TS, JSX, TSX</div>                    
                    <div className="flex"><input type="checkbox" className="mr-2"></input>React Extension Pack by Rajbir Jawanda [Reactjs code snippets, ES Lint, JavaScript (ES6) Snippets, Search node_modules, NPM IntelliSense, Path IntelliSense]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>React-Toolkit by p-rk [exports autocomplete, npm intellisense, ESLint, ES7+ React/Redux/React-Native snippets v4.4.3, Babel ES6/ES7, Prettier - Code formatter, Babel JavaScript, Import Cost]</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Reactjs code snippets</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>React PropTypes Intellisense</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Tailwind CSS Intellisense</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Node.js Modules Intellisense</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Search node_modules</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Vite</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>VSCode React Refactor</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Dracula Official</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Material Icon Theme</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Learn with Sumit Theme</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Browse Lite</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Console Ninja</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Quakka</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Color me</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Live Server</div>                    
                    <div className="flex"><input type="checkbox" className="mr-2"></input><b>VS Code Theme Setup</b></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><p><b>Introducing VS Code Interface</b>: i. explorer, ii. editor, iii. terminal</p></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><p><b>Some VS Code Shortcuts</b>: Alt+Up/Down Arrow = Move a line up/downword; Alt+Shift+Down Arrow = Copy element; Ctrl+/ = Add Comment; Ctrl+j = Toggle terminal open and close; Lorem10+Tab=Dummy Text (10 words) </p></div>                    
                </div>

                 {/* ==========Session-3========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">3</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    Understand what is Terminal or Command Line?
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Some basic Command Line commands:</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>D: =&gt;to change drive, to access to D drive</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>mkdir folderName =&gt;to create a new folder</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>cd\ =&gt;to back to the drive</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>cd .. =&gt;to come out from the folder</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>dir =&gt;to see the content of the folder</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>cd folderName =&gt;to access into a specific folder</div>
                </div>

                  {/* ==========Session-4========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">4</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 60min</h2>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Create Front End Project</div>
                    <div className="flex flex-col gap-1">
                    <code className="bg-black border rounded-md p-2 text-white"><span className="text-gray-400">C:&gt;</span> </code>
                    <code className="bg-black border rounded-xl p-2 text-white"><span className="text-gray-400">C:&gt;</span>cd \Projects</code>
                    <code className="bg-black border rounded-xl p-2"><a className="text-blue-600" href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noreferrer"><span className="text-gray-400">C:/Projects&gt;</span>npm create vite@latest <span className="text-red-400">project-name</span> -- --template react</a></code>                   
                    <code className="bg-black border rounded-xl p-2 text-white"><span className="text-gray-400">C:/Projects&gt;</span>cd <span className="text-red-400">project-name</span> </code>                  
                    <code className="bg-black border rounded-xl p-2 text-white"><span className="text-gray-400">C:/Projects/<span className="text-red-200">project-name</span>&gt;</span>code . </code>
                    <br></br>
                    <code className="bg-black border rounded-xl p-2 text-white"><span className="text-gray-400">C:/Projects/<span className="text-red-200">project-name</span>&gt;</span>npm install </code>
                    <code className="bg-black border rounded-xl p-2 text-white"><span className="text-gray-400">C:/Projects/<span className="text-red-200">project-name</span>&gt;</span>npm run dev </code>
                    </div>                    
                </div>
                
{/* ==========Session-5========== */}
<div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">5</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 90min</h2>
                    Develop a landing page: 
                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input>Create a frontend project</b>: 7 steps</p></div> 

                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input>Change Page Title and Favicon</b>: HTML tags: &lt;title&gt;,&lt;link&gt;</p></div> 
                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input><a className="text-blue-600" href='https://nodejs.org/en' target='_blank' rel='noreferrer'>Develop Navbar</a></b>: <br></br>=&gt;HTML tags: &lt;nav&gt;,&lt;button&gt;,&lt;a&gt;,&lt;hr&gt;</p></div> 
                    <div className="flex"><li className="pl-8">&lt;button&gt;Home&lt;/button&gt;</li></div> 
                    <div className="flex"><li className="pl-8">{`<a href='www.google.com' target='_blank' rel='noreferrer'>Google</a>`}</li></div> 
                    <div className="flex"><li className="pl-8">{`<a href='www.google.com' target='_blank' rel='noreferrer'><button>Home</button></a>`}</li></div> 
                    <div className="flex"><p>=&gt;CSS:  
                        <li className="pl-8">Create a css file, it&apos;s name could be style.css</li>
                        <li className="pl-8">import the css file into the .jsx file</li>
                        <li className="pl-8">{`.navbar  {background-color: red; display: flex; gap: 10px; padding-left: 200px; padding-top: 10px; padding-bottom: 15px;}`} </li></p></div> 
                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input>Develop red-car Section</b>:  <br></br>=&gt;HTML tags: &lt;section&gt;,&lt;h2&gt;,&lt;img&gt;,&lt;p&gt;</p></div> 
                    <div className="flex"><li className="pl-8">&lt;h2&gt;Heading is here&lt;/p&gt;</li></div> 
                    <div className="flex"><li className="pl-8">&lt;p&gt;Paragraph texts are here.&lt;/p&gt;</li></div> 
                    <div className="flex"><li className="pl-8">{`<img src='/red-car.jpg' alt='red-car' width='300px'></img>`}</li></div> 
                    <div className="flex"><li className="flex gap-2">
                            <a href='/red-car.jpg' alt='payment' download><img className='border p-1 max-w-[100px] h-[70px] flex-1' src='/red-car.jpg' alt='red-car'></img></a>
                            <a href='/blue-car.webp' alt='payment' download><img className='border p-1 max-w-[100px] h-[70px] flex-1' src='/blue-car.webp' alt='blue-car'></img></a>
                            <a href='/yellow-car.webp' alt='payment' download><img className='border p-1 max-w-[100px] h-[70px] flex-1' src='/yellow-car.webp' alt='yellow-car'></img></a>
                            <a href='/green-car.jpg' alt='payment' download><img className='border p-1 max-w-[100px] h-[70px] flex-1' src='/green-car.jpg' alt='green-car'></img></a>
                        </li></div> 
                    <div className="flex"><p>=&gt;CSS:  {`.section-red-car  {background-color: blue; margin: 10px; padding: 10px;}`} </p></div> 

                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input>Develop blue-car Section</b>:  <br></br>=&gt;HTML tags: &lt;section&gt;,&lt;h2&gt;,&lt;img&gt;,&lt;p&gt;    <br></br>=&gt;CSS (selector, property: border, padding; value)</p></div> 
                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input>Develop yellow-car Section</b>:  <br></br>=&gt;HTML tags: &lt;section&gt;,&lt;h2&gt;,&lt;img&gt;,&lt;p&gt;    <br></br>=&gt;CSS (selector, property: border, padding; value)</p></div> 
                    <div className="flex"><p><b><input type="checkbox" className="mr-2"></input><a className="text-blue-600" href='https://nodejs.org/en' target='_blank' rel='noreferrer'>Develop Footer</a></b>: <br></br>=&gt;HTML tags: &lt;footer&gt;,&lt;button&gt;,&lt;a&gt;,&lt;hr&gt;    <br></br>=&gt;CSS (selector, property: border, padding; value)</p></div>                     
                </div>
                 {/* ==========Session-6========== */}
                <div className="min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">6</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>                    
                <div className="flex"><input type="checkbox" className="mr-2"></input>What is *.html file? <b>Hints: </b> Hyper Text Markup Language</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is *.css file? <b>Hints: </b> Cascading Style Sheet</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is *.jsx file? <b>Hints: </b> JavaScript XML</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is react? <b>Hints: </b> A JavaScript Library</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is react fragment? <b>Hints:</b> &lt;&gt;&lt;\&gt;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What does import work for in a  *.jsx file?</div>
                    </div>

            

                 {/* ==========Session-7========== */}
                <div className="min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">7</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>                    
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is HTML?</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is HTML element? <span className="font-bold text-base">Hints:</span> Opening tag+content+closing tag</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>tag: opening tag, closing tag, empty tag,</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>attribute</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>value</div>
                    <h3><span className="font-bold text-base">HTML Syntax1:</span>{`<tag>content</tag>`}: opening tag + content + closing tag</h3>  
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<title>Learning Code</title>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<p>p tag is used to create a paragraph</p>`}</div>  
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<span>span tag is used to separate some texts inside a tag</span>`}</div>  
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h1>This is heading one.</h1>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h2>This is heading two.</h2>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h3>This is heading three.</h3>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h4>This is heading four.</h4>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h5>This is heading five.</h5>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h6>This is heading six.</h6>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<div className="flex"><input type="checkbox" className="mr-2"></input>li tag is used to create a list</div>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<button>Home</button>`}</div>              
                    <h3><span className="font-bold text-base">HTML Syntax2:</span>{`<tag attribute='value' attribute='value'>content</tag>`} : opening tag & attribute(s) + content + closing tag</h3>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<p id='01'>p tag is used to create a paragraph</p>`}</div>                     
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<h1 class='heading'>This is heading one.</h1>`}</div>                     
                    <h3><span className="font-bold text-base">HTML Syntax3:</span>{`<tag attribute='value' attribute='value'></tag>`} : opening tag & attribute(s) + closing tag</h3>  
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<img src='/car.jpg' alt='car' width='400px'></img>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<audio src='/car.mp4' width='400px' controls autoplay></audio>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<video src='/car.mp4' width='400px' controls muted autoplay></video>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<a href='https://www.google.com' target='_blank' rel='noreferrer'>Google</a>`}</div>                  
                    <h3><span className="font-bold text-base">HTML Syntax4:</span>{`<tag></tag>`}: opening tag + closing tag: empty tag</h3>    
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<br></br>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<hr></hr>`}</div>                
                    <h3><span className="font-bold text-base">HTML Syntax5:</span> {`<tag/>`}: opening+closing tag together: empty tag</h3> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<br/>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<hr/>`}</div>                   
                    
                    <br></br>
                    <div className="flex">Practice tasks: </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>1. Show an image.</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>2. Create a heading using one of the heading tags</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>3. Create a button </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>4. Create a button which takes to another page when clicked</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><a className="text-blue-600" href="https://www.youtube.com/watch?v=NX7YoHFll6s&list=PLgH5QX0i9K3oHBr5dsumGwjUxByN5Lnw3&index=10" target="_blank" rel="noreferrer">Some important video links for Learning HTML</a></div>
                    </div>


                      {/* ==========Session-8========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] max-h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">8</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 60min</h2>                                                 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is wrapper tag and nested element?</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><span className="font-bold text-base">Some examples of HTML nested elements:</span></div>                    
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<p><span>span</span> tag is speparte a text inside a paragraph or heading</p>`}</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<div><h2>This is heading </h2><p>This is a paragraph. This is a paragraph. This is a paragraph.</p></div>`}</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><code><span className="font-bold text-base">Some HTML semantic tags:</span>{`<nav></nav><section></section><footer></footer>`} </code></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><code><span className="font-bold text-base">block element, inline element:</span>{`<nav></nav><section></section><footer></footer>`} </code></div>
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Practice tasks</div>                    
                </div>

                 

  {/* ==========Session-9========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">9</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is file paths? : There are 4 types of file paths. </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>entities: &lt; = less then = {`&lt;`}, &gt; = greater then = {`&lt;`}, &apos; = apostraphe = {`&apos;`} </div>
                </div>





  {/* ==========Session-9========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">9</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>What is CSS?</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>selector: element selector, class selector, id selector</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>property: color, background-color, font-size, text-align, font-weight</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>value: red, green, 10px, bold, semi-bold</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><p><b>CSS Syntax1: </b>elementSelector {`{ property: value;  property: value;  property: value; ...;}`}</p></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><p><b>CSS Syntax2: </b>.classSelector {`{ property: value;  property: value;  property: value; ...;}`}</p></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><p><b>CSS Syntax3: </b>#idSelector {`{ property: value;  property: value;  property: value; ...;}`}</p></div>                    
                    <div className="flex"><input type="checkbox" className="mr-2"></input>How to link CSS with HTML in react project? <span className="font-bold text-base">Hints:</span> <code>{`import './App.css';`}</code></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Some Common CSS Properties and Values: display:flex; gap:5px; justify-content:center; padding:5px;  padding-top:5px; padding-left:5px; padding-bottom:5px;  padding-right:5px;</div>
                    <br></br>
                    <div className="flex">Practice tasks</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>1. Create a jsx file</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>2. Create a css file</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>3. Import a css file into a jsx file</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input><a className="text-blue-600" href="https://www.youtube.com/watch?v=_5TU7eXKeyk&list=PLgH5QX0i9K3qjCBXjTmv7Xeh8MDUUVJDO&index=3" target="_blank" rel="noreferrer">Some important video links for Learning CSS</a></div>
                </div>


                 {/* ==========Session-10========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">10</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                   
                    <div className="flex"><p><input type="checkbox" className="mr-2"></input><b> CSS Box Model</b>width, height, padding, margin, border, box-sizing</p></div>
                    <div className="flex"><p><b>CSS Units:</b> </p></div>
                    <div className="flex"><p><input type="checkbox" className="mr-2"></input><b>Absolute Units:</b> px = 1/96 inch, pt = 1/72 inch, in, mm, cm, </p></div>
                    <div className="flex"><p><input type="checkbox" className="mr-2"></input><b>Relative Units:</b> em, ex, ch, rem, vw, vh, vmax, vmin, %,   cap, rcap, cqb, cqi, cqw, cqh, cqmax, cqmin, dvb, dvh, lvb, lvw, lvh, pc, q, rex, ic, ric, lh, rlh, vb, svb, vi, dvi, lvi, svi, svw, svh, </p></div>
                    <br></br>
                    <div className="flex"><b>Practice tasks:</b> </div>
                </div>
                 {/* ==========Session-11========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">11</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    <h2 className="font-bold">Six CSS Properties:</h2> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>postion: static|fixed|absolute|relative|sticky;</div>                    
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>top: 10px; </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>left: 10px; </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>bottom: 10px; </div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>right: 10px; </div>
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>inset: auto|value|inherit|initial;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>inset: 10px;  <span className="pl-2">[all four distances]</span></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>inset: 10px 20px;  <span className="pl-2">[top bottom] [left right]</span></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>inset: 10px 20px 30px;  <span className="pl-2">[top] [bottom right] [bottom]</span></div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>inset: 10px 20px 30px 40px; <span className="pl-0">[top] [right] [bottom] [left]</span></div>

                    <br></br>
                    <div className="flex">Practice tasks</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>1. Locate a picture at the top right corner of a page and keep it fixed there</div>
                </div>
                 {/* ==========Session-12========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">12</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                <h2 className="font-bold">CSS Display Property:</h2> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>display: block;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>display: inline;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>display: inline-block;</div>
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>display: flex;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>gap: 10px;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>flex-direction: column;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit;;</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>align-items: normal|stretch|start|end|center|flex-start|flex-end|baseline|initial|inherit;</div>
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>display: grid;</div>
                    <br></br>
                    <div className="flex">Practice tasks</div>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>1. Create a simple Navbar</div>
                </div>
                 {/* ==========Session-13========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 rounded-md mx-8">13</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                <h2 className="font-bold">CSS Color Property:</h2>       
                    <div className="flex"><input type="checkbox" className="mr-2"></input>color: red|green|blue|yellow</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>color: rgb color (0-255,0-255,0-255)</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>color: rgba color (0-255,0-255,0-255, )</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>color: hex color(#0A0F9F]</div>
                    <br></br>
                    <div className="flex"><input type="checkbox" className="mr-2"></input>Practice tasks</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<input type='email' name='email' placeholder='email address' id='' required></input>`}</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<input type='password' name='password' placeholder='password' id='' required></input>`}</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<input type='checkbox' checked></input>`}</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<input type='submit' value='Register' id=''></input>`}</div>           
                    <div className="flex"><input type="checkbox" className="mr-2"></input>{`<label htmlFor='terms'>Accept out terms and condition</label>`}</div>           
                </div>

                

                 {/* ==========Session-14========== */}
                <div className="min-w-[30vw] hover:min-w-[40vw] h-fit md:h-[80vh] overflow-y-scroll border p-4 bg-teal-100 rounded-md">
                <h2 className="text-xl text-center py-1 bg-teal-300 r  ounded-md mx-8">14</h2>
                <h2 className="text-xl text-center py-1 bg-teal-500 rounded-md">Duration: 30min</h2>
                    Deployment: 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>npm install -g firebase-tools</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>firebase login</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>firebase init</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>npm run build</div> 
                    <div className="flex"><input type="checkbox" className="mr-2"></input>firebase deploy</div> 
                </div>
            </div>
            </div>
       
    );
};

export default TeachingSchedule;