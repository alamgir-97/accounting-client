import { useState } from "react";

const FrontEndProjectSetup = () => {
  const handleCopy = () =>{
    alert('Copy on Click functionality is not added yet.');
    console.
    log('Copy on Click functionality is not added yet.')
  }
const [width, setWidth] = useState("w-20")
  const handleWidthExpand =() => {
    setWidth("w-96 bg-amber-300 flex justify-center h-[50vh]")
  }

  const handleWidthShrink =() => {
    setWidth("w-24 bg-amber-300 flex justify-center h-[50vh]")
  }
    return (
      <>
        <div className="mb-96 bg-white">
          {/* sample portion */}

<div className={width} >
  <button onClick={handleWidthExpand} onDoubleClickCapture={handleWidthShrink} className="border">Expand</button>
  <button onClick={handleWidthShrink}>Shrink</button>
  <p>The quick brown fox jumps over he lazy dog.The quick brown fox jumps 
  over he lazy dog.The quick brown fox jumps over he lazy dog.The quick 
  brown fox jumps over he lazy dog.The quick brown fox jumps over he lazy 
  dog.The quick brown fox jumps over he lazy dog.</p>
</div>


    {/* <div className="absolute -top-2 left-0 py-1 bg-gray-800 pl-3 pr-20 w-32 border-b-2 border-sky-400 text-lg"><code>terminal</code></div>
        <pre data-prefix="$"><code>cd <span className="text-red-400">\Projects</span></code></pre> 
        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre> */}

          <div className="">
            <h5 className="mb-2 text-lg md:text-xl lg:text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-500">
              Frontend Project Setup
            </h5>

            <div className="flex flex-col md:flex-col lg:flex-row justify-left items-center bg-sky-600 md:bg-emerald-500 lg:bg-amber-400 gap-4 py-4 md:p-6 font-bold text-gray-700 dark:text-gray-100 text-center">
              <p className="min-w-24 w-full md:w-full lg:w-7/12 border-b md:border-b lg:border-b-0 lg:border-r-2">
                কাজ
              </p>
              <p className="w-full md:w-full lg:w-5/12">
                ব্যাখ্যা
              </p>
            </div>

            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
              {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code className='text-warp'>
                  <span className="text-gray-400">$ C:/&gt;</span> 
                  </code>
                </pre>               
              </div>     
              </div>      
              
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  আপনার terminal-টি এই অবস্থায় থাকলে শুরু পরবর্তী অংশ থেকে শুরু করুন। না থাকলে cd . দিতে দিতে এই অবস্থায় নিয়ে আসুন। এছাড়া C ড্রাইভে Projects নামে একটি ফোল্ডার আগে হতে খোলা থাকতে হবে, না থাকলে Projects নামে একটি নতুন ফোল্ডার খুলতে হবে।
                </p>
              </div>
            </div>

            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
              {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code className='text-warp'>
                  <span className="text-gray-400">$ C:/&gt;</span> cd<span className="text-red-400"> \Projects</span>
                  </code>
                </pre>               
              </div>     
              </div>      
              
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  প্রজেক্ট ফোল্ডারে ঢুকার জন্য terminal/cmd-তে এই কমান্ডটি
                  ব্যবহার করতে হবে। আপনি যে ফোল্ডারে আপনার নতুন প্রজেক্টটি
                  ক্রিয়েট করতে চান এটি সে ফোল্ডার।
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6">
              <pre>                
                  <code className='text-wrap'><span className="text-gray-400">$ C:/Projects&gt;</span>npm create vite@latest<span className="text-red-400" title='project-name কথাটি মুছে আপনার নতুন website project-টির জন্য একটি উপযুক্ত নাম দিন।'> project-name</span> -- --template react
                  </code>
              </pre>
                  </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  vite-এর সর্বশেষ ভার্সন ব্যবহার করে প্রজেক্ট ফোল্ডার তৈরী করার
                  জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে হবে। লাল চিহ্নিত অংশটুকু
                  ফোল্ডারের নাম, এটি একেক প্রজেক্টের জন্য একেক রকম হবে, সবসময়
                  একই রকম হবে না।
                </p>
              </div>
            </div>


          {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
                </div>
             
                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6">             
                  <pre>
                    <code className='text-warp'><span className="text-gray-400">$ C:/Projects&gt;</span>cd<span className="text-red-400"> project-name</span>
                  </code>
                </pre>
                <div>
                </div>
                </div>
                
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  নতুন ক্রিয়েট করা প্রজেক্ট ফোল্ডারে ঢুকার জন্য এই কমান্ডটি
                  terminal/cmd-তে ব্যবহার করতে হয়ে। 
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                 {/* ============= Terminal Line ============= */}
                 <div className='mb-2'>
              <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
              <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>

              {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code  className='flex flex-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;code .</code>
                </pre>
                </div>
                </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  VS Code-এ নতুন project folder টি খোলার জন্য কমান্ডটি
                  terminal-এ ব্যবহার করতে হয়। তবে এ কমান্ডটি ব্যবহার না করে My
                  Computer-এ Explore করে ও এই ফোল্ডার টি খোলা যায়। এখন হতে আমাদের নতুন প্রজেক্টে code এ্যাড করা যাবে এবং website develop করা শুরু করা যাবে।
                </p>
              </div>
            </div>


            {/* ================= section_ npm install ================= */}  
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                 {/* ============= Terminal Line ============= */}
                 <div className='mb-2'>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>

                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6">
                  <pre>
                    <code  className='flex flex-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm install</code>
                  </pre>
                </div>

              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  node_modules folder-টি project-এ install করার জন্য এই command টি দিতে হয়। এই ফোল্ডারটি install করা থাকলে নতুন তৈরি (প্রজেক্ট) ওয়েবসাইটটি Vite ব্যবহার করে Browser-এ খোলা যাবে।
                </p>
              </div>
            </div>


            {/* ================= section_npm run dev ================= */}           
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                 {/* ============= Terminal Line ============= */}
                 <div>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
               {/* ============= Terminal Content =============   */}
               <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code  className='flex flex-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm run dev</code>
                </pre>
                </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                এই command -টি দিলে পোর্ট নাম্বারসহ একটি আইপি এ্যাড্রেস দেখাবে; এটি দেখতে অনেকটা http://localhost:<span className="text-red-500">5173</span>-এর মত। তবে পোর্ট নম্বর 5173 ছাড়া অন্য কোন নাম্বারও হতে পারে। এটি কপি করে কোন ব্রাউজারের এড্রেস বারে paste করলে ওই ব্রাউজারে project-টি website আকারে খুলবে। কোন Project-এ নতুন কোড এ্যাড করার সঙ্গে সঙ্গে যে পরিবর্তন হবে তা সাথে সাথে ব্রাউজারে দেখার (Render হওয়ার) জন্য
                  এই command-টি terminal/cmd-তে ব্যবহার করতে হয়।
                </p>
              </div>
            </div>


            {/* completed for new learners*/} 
            {/* ================= section ================= */}          
            <div className="flex flex-col justify center p-4 m-6">
              <p>নতুনদের জন্য এতটুকু যথেষ্ট</p>
              <p>================0000===================</p>
              <p>অভিজ্ঞরা পরবর্তী অংশটুকুর কাজও সম্পন্ন করে নিবে</p>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                 {/* ============= Terminal Line ============= */}
                 <div className='mb-2'>
                    <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                    <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>

              {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code  className='text-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm install -D tailwindcss postcss autoprefixer</code>
                </pre>
                </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  tailwindcss setup করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে হবে।
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
                  <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
                  <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
                </div>
               
                  {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">                
                  <pre >
                    <code  className='text-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npx tailwindcss init -p</code>
                  </pre>
                  </div>
                </div>
                {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  tailwindcss setup করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে হবে।
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                project-name/tailwind.config.js
                </code>
                {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">  
                <pre data-prefix="">
                  <code  className='flex flex-wrap'>
                    {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: `}
                    [
                      <br></br>                      
                      <p className='text-wrap'><span className='text-gray-400'>$</span><span className="bg-rose-400 ml-20">{`"./index.html","./src/**/*.{js,ts,jsx,tsx}",`}</span></p> 
                    ],
                    {`
  theme: {
    extend: {},
  },
  plugins: [],
  }`}
                  </code>
                </pre>
                </div>
              </div>


              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  tilwindcss setup করার জন্য rose color-এ হাইলাইট করা অংশটুকু tailwind.config.js ফাইলের content: [ ] এর ভিতর টাইপ অথবা
                   পেস্ট করতে হবে।
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                  src/index.css
                </code>
                    {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">  
                <pre data-prefix="$" className='flex flex-wrap'>{`@tailwind base;`}</pre>
                <pre data-prefix="$"  className='flex flex-wrap'>{`@tailwind components;`}</pre>
                <pre data-prefix="$"  className='flex flex-wrap'>{`@tailwind utilities;`}</pre>
              </div>
              </div>

              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  tailwindcss setup করার জন্য src ফোল্ডারের এর ভিতর index.css ফাইলে                  
                <pre data-prefix="$" className="m-2">{`@tailwind base;`}</pre>
                <pre data-prefix="$" className="m-2">{`@tailwind components;`}</pre>
                <pre data-prefix="$" className="m-2">{`@tailwind utilities;`}</pre> অংশটুকু পেস্ট করতে হবে।  ‍./src/index.css ফাইলে বাই ডিফল্ট কিছু style থাকে। সেগুলো মুছে তারপর পেস্ট করতে হবে।
                এগুলো মূলত tailwind হতে ‍style ইমপোর্ট করার জন্য ব্যবহৃত হয়।
                </p>
                
              </div>
            </div>


{/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
              <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
              <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
                  {/* ============= Terminal Content =============   */}
                  <div className="m-2 md:m-4 lg:m-6">
                <pre  className='text-wrap'>
                  <code><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm i -D daisyui@latest</code>
                </pre>
                </div>  
              </div>
                            {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  daisyui setup করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে হবে। লাল
                  চিহ্নিত অংশটুকু ফোল্ডারের নাম, এটি একেক প্রজেক্টের জন্য একেক
                  রকম হবে, সবসময় একই রকম হবে না।
                </p>
              </div>
            </div>


{/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                project-name/tailwind.config.js
                </code>
                     {/* ============= Terminal Content =============   */}
                     <div className="m-2 md:m-4 lg:m-6">                               
                <pre  className='text-warp'>
                  <code>{`module.exports = {   
          //...
  plugins: [   `}<span className="bg-rose-400">{`require("daisyui")`}</span>{`   ],
}`    }</code>
                </pre>
                </div>
              </div>
                            {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  daisyui setup করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে হবে। লাল
                  চিহ্নিত অংশটুকু ফোল্ডারের নাম, এটি একেক প্রজেক্টের জন্য একেক
                  রকম হবে, সবসময় একই রকম হবে না।
                </p>
              </div>
            </div>


{/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                project-name/.eslintrc.cjs
                </code>
                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6"> 
                <pre  className='text-warp'>
                <code>
                    {`
module.exports = {`}{`
  root: true,`}<br></br>
  {`env: {browser: true, es2020: true,`} <span className="bg-rose-400">{`node: true`}</span>{`},`}<br></br>
  {`extends: [
  `}                  </code>                
                </pre>
                </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  daisyui setup এর সময় যে এরর দেখায় সেটা দূর করার জন্য rose color হাইলাইট করা অংশটি
                  .eslintrc.cjs ফাইলে past করতে হবে। এটা ছাড়াও কাজ হয় কিন্তু
                  সবসময় error show করবে।
                  <br></br> 
                  এছাড়া যে লাইনে error-টি দেখাচ্ছে  সেটির উপর {`//eslint-disable-next-line`} এই লাইনটি paste করলে eslint এটির
                  ক্ষেত্রে আর কাজ করবে না। তবে এটি ব্যবহার না করলেই ভাল।
                </p>
              </div>
            </div>

            
          {/* ================= section ================= */}
          <div className="flex flex-col justify center p-4 m-6">
              <p>মধ্যম মানের ডেভেলপারদের জন্য এতটুকু যথেষ্ট</p>
              <p>==================0000==================</p>
              <p>পরবর্তী অংশটুকু এ্যাডভান্সড ডেভেলেপরদের জন্য।</p>
          </div>
            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
              <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
              <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
              {/* ============= Terminal Line ============= */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code className='text-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm install react-router-dom localforage match-sorter
                    sort-by
                  </code>
                </pre>
                </div>
              </div>
               {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  react-router-dom localforage match-sorter sort-by ইনন্সটল করার
                  জন্য ব্যবহৃত হয়।
                </p>
              </div>
            </div>


              {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                {/* ============= Terminal Line ============= */}
                <div className='mb-2'>
              <p className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">terminal</p>
              <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-800 border px-1 border-sky-400 text-normal">copy</button>
              </div>
                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code className='text-wrap'><span className="text-gray-400">$ C:/Projects/</span><span className="text-red-300">project-name</span>&gt;npm install react-router</code>
                </pre>
                </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                  react router ব্যবহার করার জন্য terminal/cmd -তে লিখতে হবে।
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                  src/main.jsx
                </code>
              {/* ============= Terminal Content =============   */}
              <div className="m-2 md:m-4 lg:m-6">
                <pre data-prefix="$">
                  <code  className='text-wrap'>{`import { createBrowserRouter, RouterProvider, } from "react-router-dom";`}</code>
                </pre>
              </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                createBrowserRouter এবং RouterProvider ./src/main.jsx ফাইলে ইমপোর্ট করতে হবে। 
                </p>
              </div>
            </div>


            {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4 rounded-t-xl">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 ">
                  src/main.jsx
                </code>
                {/* ============= Terminal Content =============   */}
                <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code  className='text-warp'><span className='text-gray-400'>$</span>{`  const`} <span className='text-red-400'> router </span> {`= createBrowserRouter([
          {
            path: "/",
            element: <div>Hello world!</div>,
          },
        ]);`}</code>
                </pre>
              </div>
              </div>

              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                ./src/main.jsx ফাইলে path তৈরী করতে হবে। এখানে যতগুলো প্রয়োজন component অ্যাড করা যাবে এবং পরবর্তীতে করতে হবে।
                </p>
              </div>
            </div>


          {/* ================= section ================= */}
            <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3 justify-left md:justify-center text-xs md:text-sm lg:text-base relative p-4 md:p-6 lg:p-8 bg-sky-300 mb-4">
              <div className="mockup-code min-w-24 w-full md:w-full lg:w-7/12 h-fit border">
                <code className="absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400">
                  src/main.jsx
                </code>
                    {/* ============= Terminal Content =============   */}
                    <div className="m-2 md:m-4 lg:m-6">
                <pre>
                  <code  className='text-wrap'>{`ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>`}</code>
                  <br></br>
                    <code><span className='text-gray-400'>$</span> <span className="bg-gray-100 text-black">{`<RouterProvider router={`} <span className='text-red-400'> router </span>{`} />`}</span></code>
                    <br></br>
                    <code>{`</code></React.StrictMode>);`}</code>
                </pre>
                </div>
              </div>
              {/* ============= Expalnation Content ============= */}
              <div className="w-full md:w-full lg:w-5/12 h-fit border">
                <p className="font-normal text-gray-700 dark:text-gray-400 p-4">
                ./src/main.jsx ফাইলে {`<RouterProvide/> <App/>`}` এর পরিবর্তে ব্যবহার করতে হবে।
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </>      
    );
};

export default FrontEndProjectSetup;