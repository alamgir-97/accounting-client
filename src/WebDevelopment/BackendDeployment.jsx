const BackendDeployment = () => {
    return (
      <>
        <div className="bg-blue-500">
          <div className="p-5 mb-[50vh]">
            <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Backend Project Deployment
            </h5>
  
            <div className="flex justify-left bg-sky-600 gap-4">
              <p className="w-[35vw] mb-3 font-normal text-gray-700 dark:text-gray-400 text-center border">
                কাজ
              </p>
              <p className="w-[35vw] mb-3 font-normal text-gray-700 dark:text-gray-400  text-center">
                ব্যাখ্যা
              </p>
            </div>
  
            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-1/2 h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                Projects/my-backend-app
                </code>
                {/* <pre data-prefix="$"> */}
                <pre>
                  <code>
                    cd <span className="text-red-400">\Projects</span>
                  </code>
                </pre>
              </div>
              <div className="w-1/2 h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  app.ts এবং ‍server.ts ফাইলকে ‍src/app ফোল্ডারের বাইরে এবং সরাসরি ‍src ফোল্ডারের ভিতরে রাখতে হবে।
                </p>
              </div>
            </div>
              {/* ===========000========= */}

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    npm run lint
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                এই কমান্ডটি রান করার জন্য package.json ফাইলে &quot;lint&quot;: &quot;npx eslint .&quot;, নামে একটি script আগে তৈরী করতে হবে এবং eslint install করতে হবে। এই কমান্ড ব্যবহার করলে prjoject-এ কোন error এবং warning থাকলে বের হয়ে আসবে। error-গুলো অবশ্যই fix করতে হবে; warning-গুলো ignoreও করা যায় তবে fix করে ফেলতে পারলে ভাল হয়।   
                </p>
              </div>
            </div>
                {/* ===========000========= */}

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    npm run lint:fix
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                এই কমান্ডটি রান করার জন্য package.json ফাইলে &quot;lint:fix&quot;: &quot;npx eslint . --fix&quot;, নামে একটি script আগে তৈরী করতে হবে। এই কমান্ড ব্যবহার করলে eslint যেসকল error এবং warning অটো fix করতে পারে সেগুলো অটোমেটিক্যালি fix হয়ে যাবে। অবশিষ্ট error এবং warning-গুলো ম্যানুয়ালি fix করতে হবে।    
                </p>
              </div>
            </div>
                {/* ===========000========= */}

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    npm run build
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                এই কমান্ডটি রান করার জন্য package.json ফাইলে &quot;build&quot;: &quot;tsc&quot;, নামে একটি script আগে তৈরী করতে হবে। এই কমান্ড ব্যবহার করার পর দেখতে হবে কোন error দিচ্ছে কিনা, দিলে error-গুলো আগে fix করতে হবে এবং npm run build কমান্ডটি আবার দিতে হবে, প্রজেক্ট ফোল্ডারের ভিতর dist নামে একটি নতুন ফোল্ডার তৈরী হবে এবং project-টি deployment-এর জন্য পুরোপুরি প্রস্তুত হবে।    
                </p>
              </div>
            </div>
                {/* ===========000========= */}

            <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Deploy with Vercel CLI</h2>
            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  root folder
                </code>
                <pre>
                  <code>
                    vercel.json
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                root ফোল্ডার, যেখানে package.json ফাইল আছে, সেখানে vercel.json নামে ফোল্ডার তৈরী করতে হবে। এই কমান্ড ব্যবহার করার পর দেখতে হবে কোন error দিচ্ছে কিনা, দিলে error-গুলো আগে fix করতে হবে এবং npm run build কমান্ডটি আবার দিতে হবে, প্রজেক্ট ফোল্ডারের ভিতর dist নামে একটি নতুন ফোল্ডার তৈরী হবে এবং project-টি deployment-এর জন্য পুরোপুরি প্রস্তুত।    
                </p>
              </div>
            </div>
                {/* ===========000========= */}

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  www.vercel.com
                </code>
                <pre>
                  <code>
                    login
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                vercel.com-এ login করতে হবে। 
                </p>
              </div>
            </div>
                {/* ===========000========= */}

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[80vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  vercel.json
                </code>
                <pre>
                  <code>
                    <p>&#123;</p>
                    <p>&quot;version&quot;: 2,</p>
                    <p>&quot;builds&quot;: [</p>
                    <p>&#123;</p>
                    <p>&quot;src&quot;: &quot;dist/server.js&quot;</p>
                    <p>&quot;use&quot;: &quot;@vercel/node&quot;</p>
                    <p>&#125;</p>
                    <p>],</p>
                    <p>&quot;routes&quot;: [</p>
                    <p>&#123;</p>
                    <p>&quot;src&quot;: &quot;/(.*)&quot;</p>
                    <p>&quot;dest&quot;: &quot;dist/server.js&quot;</p>
                    <p>&quot;methods&quot;: [&quot;GET&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;PATCH&quot;, &quot;DELETE&quot;, &quot;OPTIONS&quot;]</p>
                    <p>&#125;</p>
                    <p>]</p>
                    <p>&#125;</p>
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[80vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                vercel.json-এই configuration টুকু লিখতে হবে। 
                </p>
              </div>
            </div>
                {/* ===========000========= */}
  
                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    npm i -g vercel
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                vercel CLI install করার জন্য এই command দিতে হবে। এই কমান্ড pc বা device-এ vercel globally install হবে। তাই একটি ডিভাইসে এটি একবারই ব্যবহার করতে হবে।   
                </p>
              </div>
            </div>
                {/* ===========000========= */}

                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    vercel -v
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                vercel install হয়েছে কিনা চেক করে দেখার জন্য এই command দিতে হবে।
                </p>
              </div>
            </div>
                {/* ===========000========= */}

                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                    vercel login
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                vercel login করার জন্য এই command দিতে হবে।
                </p>
              </div>
            </div>
                {/* ===========000========= */}

                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                  <p><span className="text-green-500">? Log in to Vercel(Use arrow keys)</span><span>Continue with GitHub</span></p>
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                কিছু প্রশ্ন আসবে সঠিক প্রশ্নটি সিলেক্ট করে Enter দিতে হবে।
                </p>
              </div>
            </div>
                {/* ===========000========= */}

                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                  <p><span className="text-green-500">vercel</span><span>Enter ???</span></p>
                  <p><span className="text-green-500">? Log in to Vercel?</span><span></span></p>
                  <p><span className="text-green-500">? Set up and deploy ......?</span><span>yes</span></p>
                  <p><span className="text-green-500">? Which scope do you want to deploy to?</span><span> Alamgir&apos;s projects</span></p>
                  <p><span className="text-green-500">? Link to existing project?</span><span>no</span></p>
                  <p><span className="text-green-500">? What&apos;s your project&apos;s name?</span><span>my-backennd-project</span></p>
                  <p><span className="text-green-500">? In which directory is your code located?</span><span>/projects/my-backennd-project?</span></p> 
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                এবার কিছু প্রশ্ন একটার পর একটা আসবে এবং প্রয়োজন অনুযায়ী সেগুলোর উত্তর দিতে হবে।
                </p>
              </div>
            </div>
                {/* ===========000========= */}
                

                <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre>
                  <code>
                  <p><span className="text-green-500">vercel --prod</span><span></span></p>
                  
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                project-কে vercel এ deploy করার জন্য এই কমান্ডটি দিতে হবে।
                </p>
              </div>
            </div>
                {/* ===========000========= */}
            
          </div>
        </div>
      </>
    );
  };
  
  export default BackendDeployment;
  