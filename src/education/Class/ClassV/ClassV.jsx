import { useState } from "react"
import LessonsVBangla from "../../LessonsVBangla/LessonsVBangla"
import LessonsVEnglish from "../../LessonsVBangla/LessonsVEnglish"
import LessonsVMath from "../../LessonsVBangla/LessonsVMath"
import LessonsVScience from "../../LessonsVBangla/LessonsVScience"
import LessonsVBGS from "../../LessonsVBangla/LessonsVBGS"
import LessonsVIslam from "../../LessonsVBangla/LessonsVIslam"
import DraggableModal from "../../DraggableModal/DraggableModal"
import DraggableModalBN from "../../DraggableModal/DraggableModalBN"
import OuterModal from "../../DraggableModal/OuterModal"

const ClassV = () => {
  const [isOpen5, setIsOpen5] = useState(true);
    
  return (
    <div className="flex flex-col gap-4 mx-4">
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    {/* <div><DraggableModalBN headerTitle="আমার বাংলা বই" onSetIsOpen={() => setIsOpen5(false)}><LessonsVBangla></LessonsVBangla></DraggableModalBN></div> */}
    <div><OuterModal title="আমার বাংলা বই"><LessonsVBangla></LessonsVBangla></OuterModal></div>
    </div>
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    <LessonsVEnglish></LessonsVEnglish>
    {/* <div><DraggableModal topic="English for Today" headerTitle="English for Today">
    </DraggableModal></div> */}
    </div>
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    <div><DraggableModal topic="গণিত" headerTitle="গণিত"><LessonsVMath></LessonsVMath></DraggableModal></div>
    </div>
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    <div><DraggableModal topic="বিজ্ঞান" headerTitle="বিজ্ঞান"><LessonsVScience></LessonsVScience></DraggableModal></div>
    </div>
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    <div><DraggableModal topic="বাংলাদেশ ও বিশ্ব পরিচয়" headerTitle="বাংলাদেশ ও বিশ্ব পরিচয়"><LessonsVBGS></LessonsVBGS></DraggableModal></div>
    </div>
    <div className="h-[20vh] rounded-md w-full bg-blue-500">
    <div><DraggableModal topic="ইসলাম শিক্ষা" headerTitle="ইসলাম শিক্ষা"><LessonsVIslam></LessonsVIslam></DraggableModal></div>
    </div>
    
    
    </div>
  )
}

export default ClassV