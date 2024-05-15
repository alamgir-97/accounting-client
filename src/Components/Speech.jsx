
const Speech = () => {
    const handleSpeech = (e) => {
        e.preventDefault();
        var textInput = e.target.inputField.value;
        console.log(textInput)
        const utterance = new SpeechSynthesisUtterance(textInput);
        window.speechSynthesis.speak(utterance);
      }
  
      const handleReset = () => {
        const innerText = document.getElementById('txt').value ='';
        // const innerText = e.target.inputField.value;
        console.log(innerText)
     
      
      }
    
    return (
        <>
        <div className="my-1 bg-orange-400 px-8 py-2 sticky top-0">
            <label className="flex justify-center text-xs lg:text-base">ইংরেজীতে কোন কিছু পড়তে অসুবিধা হলে এখানে টাইপ অথবা কপি পেস্ট করুন, তারপর Read বাটন চাপুন। আপনাকে পড়ে দিবে।</label>
            <form className='flex gap-2 text-lg h-10 justify-center' onSubmit={handleSpeech}>
            <textarea id='txt' type='text' name='inputField' className='border rounded-md p-2 w-5/6 bg-[#ffffff88] text-base' placeholder="Type or copy-paste here to make you read aloud in English"></textarea>
        <button type='submit' name='submit' className='bg-fuchsia-600 text-white p-2 w-1/6 rounded-md text-xs md:text-base'>Read</button>
        <button type='button' name='button' className='border text-white p-2 w-1/6 rounded-md text-xs md:text-base' onClick={handleReset}>Reset</button>
        </form>
        </div>



        </>
    );
};

export default Speech;