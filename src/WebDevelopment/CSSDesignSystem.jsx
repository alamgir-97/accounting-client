import LearningBoard from "../Components/LearningBoard";
import AccountingNavbar from "../Components/AccountingNavbar";    
import CSSUIStyleGuide from "../WebDevelopment/CSSUIStyleGuide";

const CSSDesignSystem = () => {
   
    return (
        <div>
        <AccountingNavbar></AccountingNavbar>
        <h1>Design Checklist</h1>
        <p>We need to make a checklist to check all aspects of a website is full filled according to standard and laws</p>
        <li>alt attributes are attached with each image?</li>
        <li>Design principles are followed?</li>
        <li>Responsiveness is maintained?</li>
        
        <div className="bg-white m-8 p-8">
              <div className="p-4 bg-fuchsia-700 rounded-lg mt-4">
                        <li className="list-none cursor-pointer bg-white rounded-lg p-4  text-xl font-bold text-center"><a className='text-blue-500' href="https://www.youtube.com/watch?v=BU_afT-aIn0" target="_blank" rel='noreferrer'>UI UX Design Full Course | UI UX Course | UI UX Training | Intellipaat</a></li>
                </div>
        <div className="border rounded-md p-4">
            <h1 className="text-5xl text-red-600 font-bold text-center">Design System</h1>
            <h1 className="text-xl text-green-500 font-bold text-center"> a design system is a collection of reusable components that can be built together to create any digital product.</h1>
            <h1 className="text-3xl text-red-400 font-bold text-center">Atoms, Molecules, Organisms, Templates, Pages</h1>
            <h1 className="text-4xl text-red-600 font-bold text-left">Atoms</h1>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Logo</h2>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Color</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Color1: 60</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Color2: 30</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Color3: 10</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Typography</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading1</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading2</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading3</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading4</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading5</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Heading6</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">NormalText</h3>

            <div>
            <div className="">
            <p>Font Name</p>
            <p>Font Size</p>
            <p>Font Weight</p>
            <p>Line Height</p>
            <p>Text Color/Gradinet</p>
            <p>Background Color/Gradient</p>
            <p>Padding??</p>
            <p>Margin??</p>
            <p>Text Decoration</p>
            </div>
            
            </div>


            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Buttons</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Primary Button: padding, margin, Shape, Font, Font-Size, State, border</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Secondary</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Tertiary</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Disabled</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Links</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Navlinks</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Links</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">anchor???</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Social Icons</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">facebook, X, instagram, whatsapp, </h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Theme</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Dark</h3>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Light</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Icons</h2>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Input</h2>
            </div>
        <div className="border rounded-md p-4">
            <h1 className="text-4xl text-red-600 font-bold text-left">Molecules</h1>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Cards</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">Color1: 60</h3>
            
            </div>
        <div className="border rounded-md p-4">
            <h1 className="text-4xl text-red-600 font-bold text-left">Organism</h1>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Navbar</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Sidebar</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Footer</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">SignIn</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">SignOut</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Search Bar</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Modal</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Toast</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Animation</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            <h2 className="text-2xl text-green-500 pl-4 font-bold text-left">Map</h2>
            <h3 className="text-xl text-blue-500 pl-8 font-bold text-left">To be fixed</h3>
            </div>
            <a href="https://www.friday.ie/blog/why-design-systems-are-important-a-single-source-of-truth/">https://www.friday.ie/blog/why-design-systems-are-important-a-single-source-of-truth/</a>
            <a href="https://bootcamp.uxdesign.cc/building-design-systems-with-atomic-design-fd21e86f34c5">https://bootcamp.uxdesign.cc/building-design-systems-with-atomic-design-fd21e86f34c5</a>
        

            <section className='border m-4 p-4 rounded-xl'>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Buttons</h1>
  <div><b>Buttons:</b> We use buttons when we perform an action </div>
  <div><b>Links:</b> We use links when we nevigate to other page </div>
  
  <div><b> Button&apos;s Anatomy: </b>i. Shape ii. Icon iii. Text
  <img src='/button-anatomy.png'></img>
  </div>
  <div><b> Button Size: </b></div>
  <img src='/button-size-google-material-ui-guideline.png'></img>
  
  <div><b> Button Types: </b></div>
  <img src='/button-types.png'></img>
  <div><b> Button State: </b></div>
  <img src='/button-states.png'></img>
  <div><b> Button Priorities: </b></div>
  <img src='/button-priorities.png'></img>
  <div><b> Easy Button: </b></div>
  <img src='/easy-button.png'></img>
  <div><b> Consistent Button: </b></div>
  <img src='/consistent-priorities.png'></img>
  <div><b> Button Order: </b></div>
  <img src='/button-order.png'></img>
  
  <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-6 text-blue-700 cursor-pointer font-semibold"  href='https://www.youtube.com/watch?v=tJNR_7W_5RM' target='_blank' rel='noreferrer'>Everything about BUTTONS in UI design components or elements #1</a>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Design System</h1>
  <div>Atoms</div>
  <div>Molecules</div>
  <div>Organisms</div>
  <div>Templates</div>
  <div>Pages</div>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Style Guides</h1>
  <div>Colors</div>
  <div>Hex Code</div>
  <div>Typography</div>
  <div>Space</div>
  <div>Does and Don&apos;ts</div>
  <div>Icons</div>
  <div>Color Palettes</div>
</div>
        </section>
        <CSSUIStyleGuide></CSSUIStyleGuide>
        <section className='border m-4 p-4 rounded-xl'>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Design System</h1>
  <div>User</div>
  <div>Tools</div>
  <div>Patterns</div>
  <div>Guidelines</div>
  <div>Brand</div>
  <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-6 text-blue-700 cursor-pointer font-semibold"  href='https://www.youtube.com/watch?v=Iy5hEl1ytSU' target='_blank' rel='noreferrer'>See How Design System and Style Guide works? | How to create them?</a>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Design System</h1>
  <div>Atoms</div>
  <div>Molecules</div>
  <div>Organisms</div>
  <div>Templates</div>
  <div>Pages</div>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Style Guides</h1>
  <div>Colors</div>
  <div>Hex Code</div>
  <div>Typography</div>
  <div>Space</div>
  <div>Does and Don&apos;ts</div>
  <div>Icons</div>
  <div>Color Palettes</div>
</div>
        </section>



<section className='border m-4 p-4 rounded-xl'>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Buttons</h1>
  <div><b>Buttons:</b> We use buttons when we perform an action </div>
  <div><b>Links:</b> We use links when we nevigate to other page </div>
  
  <div><b> Button&apos;s Anatomy: </b>i. Shape ii. Icon iii. Text
  <img src='/button-anatomy.png'></img>
  </div>
  <div><b> Button Size: </b></div>
  <img src='/button-size-google-material-ui-guideline.png'></img>
  
  <div><b> Button Types: </b></div>
  <img src='/button-types.png'></img>
  <div><b> Button State: </b></div>
  <img src='/button-states.png'></img>
  <div><b> Button Priorities: </b></div>
  <img src='/button-priorities.png'></img>
  <div><b> Easy Button: </b></div>
  <img src='/easy-button.png'></img>
  <div><b> Consistent Button: </b></div>
  <img src='/consistent-priorities.png'></img>
  <div><b> Button Order: </b></div>
  <img src='/button-order.png'></img>
  
  <a className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-6 text-blue-700 cursor-pointer font-semibold"  href='https://www.youtube.com/watch?v=tJNR_7W_5RM' target='_blank' rel='noreferrer'>Everything about BUTTONS in UI design components or elements #1</a>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Design System</h1>
  <div>Atoms</div>
  <div>Molecules</div>
  <div>Organisms</div>
  <div>Templates</div>
  <div>Pages</div>
</div>
<div className="m-4 p-8 border bg-blue-400">
  <h1 className="text-xl font-bold">Style Guides</h1>
  <div>Colors</div>
  <div>Hex Code</div>
  <div>Typography</div>
  <div>Space</div>
  <div>Does and Don&apos;ts</div>
  <div>Icons</div>
  <div>Color Palettes</div>
</div>
        </section>
   <LearningBoard></LearningBoard>
        
        </div>
        </div>

    );
};

export default CSSDesignSystem;