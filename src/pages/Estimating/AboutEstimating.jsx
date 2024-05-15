
import Modal from "../../Components/Modal";
// import ResizableAndDraggableModal from "../../Components/ResizableandDraggableModal";

const AboutEstimating = () => {
    return (
        <div>
        <Modal></Modal>
   
       
            <div className="m-6 p-4 leading-8 bg-white">
            <h2 className='text-2xl font-bold'>Steps of Estimating</h2>
            <li className='list-decimal'>1. Make details qty estimate</li>
            <li className='list-decimal'>2. Select Unique Items</li>
            <li className='list-decimal'>3. Make BoQ gathering all line quatities for each unique items</li>
            <li className='list-decimal'>4. Make analysis for each unique items</li>
            <li className='list-decimal'>5. Create Sub-Item list from the anlysis sheets</li>
            <li className='list-decimal'>6. Collect market price for each sub-items</li>
            <li className='list-decimal'>6. Clearly state all item descriptions</li>
            <li className='list-decimal'>7. Double check the details quantity estimate specially the conversion factors</li>
        Lorem
        </div>  
        </div>
    );
};

export default AboutEstimating;