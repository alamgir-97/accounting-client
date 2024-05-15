import { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { FormulaContext } from "../formulaProvider/formulaProvider";

const LearningBoard = () => {
    const  {readContent, copyContent}= useContext(FormulaContext);    
    const [video, setVideo] = useState()

    const handleVideo = () => {
        setVideo(
        <>
        <video src="/public/title-artist.mp4" width="400px" controls className="resize"></video>
        <div className="flex gap-4">
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handlePhoto}><button>Handle Photo</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleNote}><button>Handle Note</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleQuiz}><button>Handle Quiz</button></div>
        </div>        
        </>)      
    }
    const handlePhoto = () => {
        setVideo(
        <>
       <Marquee pauseOnHover={true} speed={250}>
       <img src="/public/blue-car.webp" width="400px" className="scale-50 hover:scale-150"></img><img src="/public/green-car.jpg" width="400px" className="scale-50 hover:scale-150"></img><img src="/public/red-car.jpg" width="400px" className="hover:scale-150"></img></Marquee>        
       <div className="flex gap-4 overflow-x-scroll overflow-y-scroll">
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handlePhoto}><button>Handle Photo</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleNote}><button>Handle Note</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleQuiz}><button>Handle Quiz</button></div>
        </div> 
        </>)      
    }
    const handleNote = () => {
        setVideo(
        <>
       <div id="001" onClick={()=>readContent('001')} onDoubleClickCapture={()=>copyContent('001')}>
        <h1 className="font-bold text-xl">What is UX design?</h1>
        <p>UX is the quick brown fox jumps over the lazy dog</p>
        <p>UX is Jackdaws love my big sphinx of quartz.</p>
        <p>UX is the quick brown fox jumps over the lazy dog</p>
        <p>UX is the quick brown fox jumps over the lazy dog</p>
       </div>
       <a href="https://samatharavinda.lk/img/books/UX%20for%20Beginners%20%20A%20Crash%20Course%20in%20100%20Short%20Lessons%20(%20samatharavindalk%20)%20copy.pdf" download className="border border-fuchsia-400"><p>UX for Beginners A CrashCourse in Short Lessons samatha ravinda lk copy.pdf</p></a>   
        <div className="flex gap-6"><button id="001" onClick={()=>readContent('001')} className="border bg-fuchsia-600 text-white px-4 py-1 text-xs">Read Content</button>
        <button id="001" onClick={()=>copyContent('001')} className="border px-4 py-1 text-xs border-fuchsia-600 text-black">Copy Content</button></div>
       <div className="flex gap-4">
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handlePhoto}><button>Handle Photo</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleNote}><button>Handle Note</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleQuiz}><button>Handle Quiz</button></div>
        </div> 
        </>)      
    }
    const handleQuiz = () => {
        setVideo(
        <>
       <h1 className="font-bold text-xl">What is UX design?</h1>
       <form>
  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label htmlFor="html">HTML</label><br></br>
  <input type="radio" id="css" name="fav_language" value="CSS"></input>
  <babel htmlFor="css">CSS</babel><br></br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
  <babel htmlFor="javascript">JavaScript</babel><br></br><br></br>
  <input type="submit" value="Submit" className="border bg-fuchsia-600 rounded-md px-4 py-2 text-white"></input>
</form> 
    <div className="flex gap-4">
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handlePhoto}><button>Handle Photo</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleNote}><button>Handle Note</button></div>
        <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleQuiz}><button>Handle Quiz</button></div>
    </div>     
        </>)      
    }
    return (
        <div>
        <div className="flex p-4 m-8 border rounded-md">
            <div className="flex flex-col gap-4 w-2/12 m-2 text-white border-2">
                <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleVideo}><button>Typography Tutorial</button></div>
                <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handlePhoto}><button>Handle Photo</button></div>
                <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleNote}><button>Handle Note</button></div>
                <div className="border font-bold rounded-sm bg-fuchsia-600" onClick={handleQuiz}><button>Handle Quiz</button></div>
            </div>
            <div className="w-10/12 border">{video}</div>
        </div>
        </div>
    );
};

export default LearningBoard;