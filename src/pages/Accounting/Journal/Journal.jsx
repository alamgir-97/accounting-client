import { useLoaderData } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Journal = () => {
  const submitInput = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const description = e.target.description.value; 
    const account1 = e.target.account1.value;
    const account2 = e.target.account2.value;
    const drCr1 = e.target.drCr1.value;
    const drCr2 = e.target.drCr2.value;
    const amount1 = e.target.amount1.value;
    const amount2 = e.target.amount2.value;
    const transactionData = {date, description, account1, account2, drCr1, drCr2, amount1, amount2}
    console.log(transactionData);
    // const Total = parseFloat(amount1) + " Tk";
    // console.log(Total);

    fetch('https://accounting-server-dun.vercel.app/transactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(transactionData)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
    if(data.insertedId){
      alert("Transaction added successfully.")
    }
  })
  };



  const loadedTransactions = useLoaderData();
  const [transactions, setTransactions] = useState(loadedTransactions);

  const handleDeleteTransaction = (_id, description)=>{
    console.log("delete", _id);


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {    

         fetch(`https://accounting-server-dun.vercel.app/transactions/${_id}`,{
      method: 'DELETE'
    })
  .then(res => res.json())
  .then(data =>
    {console.log(data);
    if(data.deletedCount > 0){
            // alert('Deleted successfully');
             Swal.fire({
          title: "Deleted!",
          text: `Your Transaction has been deleted: ${description}.`,
          icon: "success"
        });
            const remainingTransactions = transactions.filter(transaction => transaction._id !== _id);
            setTransactions(remainingTransactions);
        }
    })

      }
    });
    
   
  }
  return (
    <div className="w-11/12 mx-auto bg-white">
     <h1 className="text-center font-bold text-2xl p-4 underline">Transaction Recording</h1>
      <form onSubmit={submitInput} className="flex flex-col w-[90vw] mx-auto text-xs md:text-base">
        <div className="flex w-full gap-3 justify-end">
        <div className="flex flex-col">
          <label htmlFor="date" className="font-bold mx-2">
            Date:
          </label>
          <input
            className="border mx-2 py-3 pl-3"
            type="date"
            name="date"
            placeholder="Transaction Date"
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
          />
        </div>
        </div>


    <div className="flex w-full gap-3 justify-end">
    <div className="flex flex-col">
          <label htmlFor="width" className="font-bold mx-2">
            Account:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="account1"
            placeholder="Account Name"
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
          />
        </div>
    </div>

    <div className="flex w-full gap-3 justify-end">
    <div className="flex flex-col">
          <label htmlFor="width" className="font-bold mx-2">
            Account:
          </label>
          <input
            className="border mx-2 py-3 pl-3 w-[25vw]"
            type="text"
            name="account2"
            placeholder="Account Name"
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
          />
        </div>
    </div>

        <div className="flex flex-col">
          <label htmlFor="item Numbers" className="invisible font-bold mx-2">
            Submit:
          </label>
          <input
            className="border btn btn-primary font-bold text-2xl py-2"
            type="submit"
            name="submit"
            value="Add Transaction"
            
          />
        </div>
      </form>

<div>
  <h1 className="text-center font-bold text-2xl p-4 underline text-rose-700">Journal</h1>
  <h1 className="text-right text-xl pr-12"><span className="font-semibold">Total Recorded Transactions:</span><span className="bg-gray-100 px-3 rounded-md">{transactions.length}</span></h1>
  <h1 className="text-right text-base pr-12"><span className="font-semibold">Debit Total: </span><span className="bg-gray-100 px-3 rounded-md">{transactions.length}</span><span className="font-semibold">Credit Total: </span> <span className="bg-gray-100 px-3 rounded-md">{transactions.length}</span></h1>
  <div>{transactions.map((transaction, index)=><div key={transaction._id} className="flex border-2 border-blue-600 w-[90vw] mx-auto text-xs md:text-base">
  
  <div className="flex flex-col w-[75vw]">
  <div className="flex"><p className="border px-2 w-[7vw] text-right font-semibold">{index+1}</p><p className="border px-2 w-[15vw] text-center font-semibold">{transaction.date}</p><p className="border px-2 w-[60vw] text-right font-semibold">{transaction.description}</p></div>
  <div className="flex justify-end bg-amber-100 text-end"><p className="border px-2 w-[30vw]">{transaction.account1}</p><p className="border px-2 w-[10vw]">{transaction.drCr1}</p><p className="border px-2 w-[20vw] text-end">{transaction.amount1}</p></div>
  <div className="flex justify-end bg-blue-100 text-end"><p className="border px-2 w-[30vw]">{transaction.account2}</p><p className="border px-2 w-[10vw]">{transaction.drCr2}</p><p className="border px-2 w-[20vw]">{transaction.amount2}</p></div>
  </div>
  
 <div className="flex flex-col md:flex md:flex-row justify-center items-center w-[15vw] gap-1 m-2">  
 <Link to={`/update/${transaction._id}`}  className="bg-blue-400 px-2 md:px-5 py-1 rounded-lg w-full text-center">
  <button className="btn-ghost text-center">Edit</button>
 </Link>
 <button onClick={()=>handleDeleteTransaction(transaction._id, transaction.description)} className="btn-ghost bg-red-400 px-2 md:px-5 py-1 rounded-lg w-full">X</button>
 </div>
 
  </div>)}</div>
</div>
    </div>
  );
};

export default Journal;
