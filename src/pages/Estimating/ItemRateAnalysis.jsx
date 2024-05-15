import { useState } from "react";
import ItemRateAnalysisInput from "./ItemRateAnalysisInput";


const ItemRateAnalysis = () => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return (
        <>

<div className="flex justify-start mx-12">
<button onClick={handleModal} className="z-0 border rounded-xl px-8 py-1 bg-gray-400 text-black font-bold">Add New Item Rate Analysis</button>
</div>

{modal && (
  <div className="flex flex-col  bg-zinc-200">
<div className="flex justify-end mr-0">
  <button onClick={handleModal} className="bg-fuchsia-700 text-white rounded-md p-2 font-bold z-40">Close</button>
</div>
  <ItemRateAnalysisInput></ItemRateAnalysisInput>
  </div>
    )






}
        <div className="">
            <table className="z-0 table table-xs w-11/12 mx-auto">
          <thead>
            <tr className="border bg-green-600 text-white">
              <th className="w-3/12 border">
              <th className="w-4/12">Sl. No.</th> 
              <th className="w-4/12">Item Code</th> 
              <th className="w-4/12">Item Heading</th>  
              </th>                   
              <th className="w-7/12 border">Item Description</th>       
              <th className="w-1/12 border">Unit</th> 
              <th className="w-1/12 border">Rate</th>        
            </tr>
            <tr className="border">
              <th className="w-3/12 border">
              <th className="w-4/12">1</th> 
              <th className="w-4/12">06.03.02</th> 
              <th className="w-4/12">CC:1:2:4</th>
              </th>       
              <th className="w-7/12 border text-wrap">Cement Concrete work (1:2:4) in blinding/ centering layer below RCC 
works, RCC pipes, pipe collar joint, pump house and bottom of sump well in connection with Rubber Dam construction with Portland cement, sand (minimum FM1.8) and 20mm down graded gravel (LAA value not exceeding 35) including mixing by concrete mixer machine, laying, casting, compacting by concrete vibrator, curing for the requisite period etc. all complete as per direction of the Engineer in charge. Cylinder crushing strength of concrete should be as specified in the design. </th>       
              <th className="w-1/12 border">cum</th> 
              <th className="w-1/12 border">9437.33</th>        
            </tr>
            </thead> 
            <tr className="border">
            <td className="flex justify-end">M:01</td>    
              <td className="w-3/12  text-wrap">Stone Shingles (20mm down graded)</td>       
              <td className="w-1/12 ">m3</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
            <td className="flex justify-end">M:02</td>
                    
              <td className="w-3/12  text-wrap">Sand (FM - 1.8)</td>       
              <td className="w-1/12 ">m3</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
            <td className="flex justify-end">M:03</td>
                 
              <td className="w-3/12  text-wrap">Portland Composite Cement (CEM-II/A-L/M/V/W 42.5N)</td>       
              <td className="w-1/12 ">bag</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
            <td className="flex justify-end">W:01</td>
                
              <td className="w-3/12  text-wrap">Mason</td>       
              <td className="w-1/12 ">day</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
            <td className="flex justify-end">W:01</td>
                 
              <td className="w-3/12  text-wrap">Skilled Labour</td>       
              <td className="w-1/12 ">day</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
            <td className="flex justify-end">W:01</td>
                
              <td className="w-3/12  text-wrap">Ordinary Labour</td>       
              <td className="w-1/12 ">day</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
                <td className="flex justify-end">E:01</td>                  
              <td className="w-3/12  text-wrap">H.C. of Concrete Mixture Machine (Capacity 0.40/ 0.28 cum)</td>       
              <td className="w-1/12 ">day</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>
            <tr className="border">
              <td className="flex justify-end">E:02</td>    
              
                
              <td className="w-3/12  text-wrap">Hire and running charges of Concrete Vibrator</td>       
              <td className="w-1/12 ">day</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right">4400.00</td>  
              <td className="w-1/12 text-right">3590.00</td> </td>        
            </tr>          
            <tr >       
            <td className="w-3/12 ">
              <td className="w-4/12 text-nowrap font-bold">Subtotal-A:</td> 
              <td className="w-4/12 text-right"></td>       
              <td className="w-4/12 text-right"></td>    
              </td>                     
              <td className="w-3/12  text-wrap"></td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">754.30</td> </td>                
            </tr> 
            <tr >
            <td className="w-3/12 ">
              <td className="w-6/12"></td> 
                  
              <td className="w-6/12 text-right">Form work</td>    
              </td> 


                     
              <td className="w-3/12  text-wrap">(+5.00% on Subtotal A)</td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">387.71</td> </td>                
            </tr> 
            <tr > 
            <td className="w-3/12">
              <td className="w-4/12 text-nowrap font-bold">Subtotal-A1:</td> 
              <td className="w-4/12 text-right"></td>       
              <td className="w-4/12 text-right"></td>    
              </td> 


                    
              <td className="w-3/12  text-wrap"></td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">8142.01</td> </td>                
            </tr> 
            <tr >  
            <td className="w-3/12 ">
              <td className="w-4/12 text-nowrap font-bold">Subtotal-B:</td> 
              <td className="w-8/12 text-right"></td>       
              
              </td>      
              <td className="w-3/12 text-wrap">Lab Test Fees, Incedental Charges & Overhead (Add 2% on Subtotal-A/A1):</td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">4304.85</td> </td>                
            </tr> 
            
            <tr >   
            <td className="w-3/12 ">
              <td className="w-4/12 text-right">VAT</td> 
              <td className="w-8/12 text-center">2% of Total</td>     
             
              </td> 


                    
              <td className="w-3/12  text-wrap"></td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">660.61</td> </td>                
            </tr> 
            <tr >   
            <td className="w-3/12 ">
              <td className="w-4/12 text-right">IT</td> 
              <td className="w-8/12 text-center ">7.5% of Total</td>       
                
              </td> 


                     
              <td className="w-3/12  text-wrap"></td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 "><td className="w-1/12 text-right"></td>  
              <td className="w-1/12 text-right">471.87</td> </td>                
            </tr> 
            <tr >       
            <td className="w-3/12 ">
              <td className="w-4/12"></td> 
              <td className="w-4/12 text-right"></td>       
              <td className="w-4/12 text-right"></td>    
              </td> 


                     
              <td className="w-3/12  text-wrap"></td>       
              <td className="w-1/12 "></td> 
              <td className="w-1/12 text-right  font-bold">
              <td className="w-1/12 font-bold bg-gray-300 border">Total</td>  
              <td className="w-1/12 text-right font-bold bg-gray-300 border">9437.33</td> 
              </td>                
            </tr> 
           
           
            
            </table>


      </div>

        </>
    );
};

export default ItemRateAnalysis;