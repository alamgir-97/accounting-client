const ItemRateAnalysisInput = () => {
const handleSubmit = () => {
          const L = 1, W = 2, H = 3, N = 4;
          alert(L*W*H*N)
          }

    return (
        <div>
            <div draggable className="p-4 z-20  resize overflow-auto bg-white outline -outline-offset-[24px] outline-lime-600 mx-24" >
    
    <table className="table table-xs w-11/12 mx-auto">
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
              <th className="w-4/12"><input type="text" name="serial" disabled className="bg-white py-2 w-full m-0 rounded-md"></input></th> 
              <th className="w-4/12"><input type="text" name="itemCode" className="bg-white py-2 w-full m-0 rounded-md"></input></th> 
              <th className="w-4/12"><input type="text" name="itemHeading" className="bg-white py-2 w-full m-0 rounded-md"></input></th>
              </th>       
              <th className="w-7/12 border text-wrap">
              <th className="w-4/12"><textarea type="text" name="itemDescription" className="bg-white py-2 w-full m-0 h-24 rounded-md resize-y"></textarea></th>
              </th>       
              <th className="w-4/12"><input type="text" name="unit" className="bg-white py-2 w-full m-0 rounded-md"></input></th>
              <th className="w-4/12"><input type="number" name="rate" className="bg-white py-2 w-full m-0 rounded-md"></input></th>                  
            </tr>
            </thead> 
            <tr className="border">
            <td className="w-3/12 border">
              <td className="w-4/12"></td> 
              <td className="w-4/12"></td> 
              <td className="w-4/12"><input type="text" name="subItemCode" placeholder='subItemCode' className="bg-white py-2 rounded-md w-full"/></td>  
              </td>            
              <td className="w-3/12  text-wrap"><textarea type="text" name="subItemName" placeholder='subItemName' className="bg-white w-full rounded-md"></textarea></td>       
              <td className="w-1/12 "><td className="w-1/12 text-right"><input type="text" name="unit" placeholder='unit' className="bg-white py-2 w-full m-0 rounded-md"></input></td>  
              <td className="w-1/12 text-right"><input type="number" name="rate" placeholder='rate' className="bg-white py-2 w-full m-0 rounded-md"></input></td> </td>        
              <td className="w-1/12 "><input type="number" name="qty" placeholder='result' className="bg-white py-2 w-full m-0 rounded-md"></input></td> 
            </tr>
            <tr className="border">
            <td className="flex justify-end">M:02</td>
                    
              <td className="w-3/12  text-wrap">Sand (FM - 1.8)</td>       
              <td className="w-1/12 ">m3</td> 
              <td className="w-1/12 "><td className="w-1/12 text-right" >4400.00</td>  
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
           <div className="flex justify-center items-center"><button className="text-bold text-2xl mx-auto my-4 bg-fuchsia-600 text-white rounded-md py-3 px-4 flex-1" onClick={handleSubmit}>Submit</button></div>
           
            
            </table>


            
    
    </div>
        </div>
    );
};

export default ItemRateAnalysisInput;