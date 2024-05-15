

const ItemRateSchedule = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr className="border">
        <th>Sl. No.</th> 
        <th>Item Code</th> 
        <th className="w-1/2">Item Description</th>       
        <th>Unit</th> 
        <th>Rate</th>        
      </tr>
      <tr className="border">
        <th>1</th> 
        <th>2</th> 
        <th className="w-1/2">3</th>       
        <th>4</th> 
        <th>5</th>        
      </tr>
    </thead> 
    <tbody>
      <tr>        
        <td>1</td> 
        <td>1.1.1</td> 
        <td className="w-1/2">Littel schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort</td> 
        <td>sqm</td> 
        <td>100.00</td>       
      </tr>
      <tr>        
        <td>2</td> 
        <td>1.1.2</td> 
        <td className="w-1/2">Littel schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort</td> 
        <td>sqm</td> 
        <td>120.00</td>       
      </tr>
      <tr>        
        <td>3</td> 
        <td>1.1.3</td> 
        <td className="w-1/2">Littel schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort schaden and vandervort</td> 
        <td>sqm</td> 
        <td>160.00</td>       
      </tr>
      
    </tbody> 
    {/* <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th className="w-1/2">Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot> */}
  </table>
</div>
        </div>
    );
};

export default ItemRateSchedule;