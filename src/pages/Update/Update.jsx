import { useLoaderData } from "react-router";


const Update = () => {

    const loadedTransaction = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const description = e.target.description.value; 
        const account1 = e.target.account1.value;
        const account2 = e.target.account2.value;
        const drCr1 = e.target.drCr1.value;
        const drCr2 = e.target.drCr2.value;
        const amount1 = e.target.amount1.value;
        const amount2 = e.target.amount2.value;
        const updatedTransactionData = {date, description, account1, account2, drCr1, drCr2, amount1, amount2}
        console.log(updatedTransactionData);
        // const Total = parseFloat(amount1) + " Tk";
        // console.log(Total);
    
        fetch(`https://accounting-server-dun.vercel.app/transactions/${loadedTransaction._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedTransactionData)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.modifiedCount>0){
          alert("Updated successfully.")
          
        
        }
      })
      };

    return (
        <div className="w-11/12 mx-auto bg-white">
            <h3>Update information of {loadedTransaction.description}</h3>
            <form className="flex mx-8 flex-col" onSubmit={handleUpdate}>
        <div className="flex w-[80vw] gap-3">
        <div className="flex flex-col">
          <label htmlFor="date" className="font-bold mx-2">
            Date:
          </label>
          <input
            className="border mx-2 py-3 pl-3"
            type="date"
            name="date"
            placeholder="Transaction Date"
            defaultValue={loadedTransaction?.date}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="font-bold mx-2 ">
            Transaction Description:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[70vw]"
            type="text"
            name="description"
            id=""
            placeholder="Transaction Description"
            defaultValue={loadedTransaction?.description}
          />
        </div>
        </div>


    <div className="flex w-[80vw] gap-3 justify-end">
    <div className="flex flex-col">
          <label htmlFor="width" className="font-bold mx-2">
            Account:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="account1"
            placeholder="Account Name"
            defaultValue={loadedTransaction?.account1}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="dr/cr" className="font-bold mx-2">
            Dr/Cr:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[8vw]"
            type="text"
            name="drCr1"
            placeholder="Dr/Cr"
            defaultValue={loadedTransaction?.drCr1}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="font-bold mx-2">
            Amount:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="amount1"
            placeholder="Amount"
            defaultValue={loadedTransaction?.amount1}
          />
        </div>
    </div>

    <div className="flex w-[80vw] gap-3 justify-end">
    <div className="flex flex-col">
          <label htmlFor="width" className="font-bold mx-2">
            Account:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="account2"
            placeholder="Account Name"
            defaultValue={loadedTransaction?.account2}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="height" className="font-bold mx-2">
            Dr/Cr:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[8vw]"
            type="text"
            name="drCr2"
            placeholder="Dr/Cr"
            defaultValue={loadedTransaction?.drCr2}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="itemNumbers" className="font-bold mx-2">
            Amount:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="amount2"
            placeholder="Amount"
            defaultValue={loadedTransaction?.amount2}
          />
        </div>
    </div>
    

        <div className="flex flex-col">
          <label htmlFor="item Numbers" className="invisible font-bold mx-2">
            Submit:
          </label>
          <input
            className="border btn btn-primary"
            type="submit"
            name="submit"
            value="Update"
          />
        </div>
      </form>
        </div>
    );
};

export default Update;