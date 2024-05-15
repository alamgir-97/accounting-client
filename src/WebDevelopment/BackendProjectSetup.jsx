

const BackendProjectSetup = () => {
    return (
        <>
            <div className="bg-blue-500">
          <div className="p-5 mb-[50vh]">
            <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Backend Project Setup
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
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>
                    cd <span className="text-red-400">\Projects</span>
                  </code>
                </pre>
              </div>
              <div className="w-1/2 h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  প্রজেক্ট ফোল্ডারে ঢুকার জন্য terminal/cmd-তে এই কমান্ডটি
                  ব্যবহার করতে হবে। আপনি যে ফোল্ডারে আপনার নতুন প্রজেক্টটি
                  ক্রিয়েট করতে চান এটি সে ফোল্ডার।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>
                    mkdir {<span className="text-rose-800">myapp</span>}
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  terminal-এ mkdir দিয়ে folder create করা যায়। myapp হল folder-এর নাম। আপনি নতুন যে backend project তৈরী করতে চাচ্ছেন এই কমান্ড ব্যবহার করে সেটি তৈরী করুন। আপনার প্রয়োজন অনুযায়ী আপনি যে কোন valid নাম দিতে পারেন। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>
                    cd /{<span className="text-rose-800">myapp</span>}{" "}
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  নতুন ক্রিয়েট করা প্রজেক্ট ফোল্ডারে ঢুকার জন্য এই কমান্ডটি
                  terminal/cmd-তে ব্যবহার করতে হয়। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>code .</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
              নতুন যে server-side প্রজেক্ট ফোল্ডারটি তৈরী করা হয়েছে সেটি vs code ব্যবহার করে খোলার জন্য এই কমান্ড কাজ করে।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>npm init -y</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  Node JS ইন্সটল করার জন্য এই কমান্ডটি ব্যবহার করতে হয়। Node JS ইন্সটল করার সময় বেশ কিছু প্রশ্ন terminal-এ দেখায়, সেগুলোর উত্তর নিজে না দিয়ে auto যেন নিয়ে নেয় সেজন্য -y অংশটুকু দিতে হয়।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  package.json
                </code>
                <code>
                    &ldquo;script&rdquo;: {}
                  </code>
                <pre data-prefix="$">           
                  <code>
                    &ldquo;start&rdquo;: &ldquo;nodemon index.js&rdquo;, 
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                package.json ফাইলের মধ্যে script: এর ভিতরে &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon দিয়ে development গুলো monitor করা হবে। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                {<span className="text-rose-800">myapp</span>}/root folder
                </code>
                <pre data-prefix="$">
                  <code>index.js</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                root folder-এ index.js নামে একটি ফাইল create করাতে হবে। এই ফাইলে ‍server-side কোডগুলো থাকবে। 
                </p>
              </div>
            </div>


            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code> npm install -g nodemon</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                nodemon server side প্রজেক্টের development continuously মনিটর করার জন্য ব্যবহৃত হয়।  terminal/cmd-তে এই command-টি ব্যবহার করা হয় nodemon ইন্সটল করার জন্য। পুরো computer-এর জন্য এই command-টি একবার ব্যবহার করতে হয়। তাই একবার ইন্সটল করলে server-side project create করার জন্য এটি আর ব্যবহারের দরকার হয় না।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>npm install express cors mongodb dotenv</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  install express, mongodb, cors এবং dotenv ইন্সটল করার জন্য এই
                  লাইনটি terminal/cmd-তে ব্যবহার করতে হবে। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code  [35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  index.js
                </code>
                <pre data-prefix="$">
                  <code>const cors = require(&apos;cors&apos;)</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                middleware হিসাবে cors middleware-কে import করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে cors policy এরর দেখাবে।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  index.js
                </code>
                <pre data-prefix="$">
                  <code>app.use(cors())</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  cors ফাংশন-কে call করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে হবে। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  index.js
                </code>
                <pre data-prefix="$">
                  <code>app.use(express.json())</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                middleware হিসাবে express.json কে call করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে server-এ data যাবে না।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>git init</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  git -কে এই প্রজেক্টের জন্য চালু করার জন্য এই command টি termianl-এ ব্যবহার করতে হবে।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                {<span className="text-rose-800">myapp</span>}/root folder
                </code>
                <pre data-prefix="$">
                  <code>.gitignore</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  .gitignore ফাইল ক্রিয়েট করার জন্য root folder-এ এই লাইনটি ক্রিয়েট করতে হবে। 
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  .gitignore
                </code>
                <pre data-prefix="$">
                  <code>node_modules </code>
                  <code>.env </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  node_modules ফোল্ডারটি যেন github -এ কপি না হয় সেজন্য .gitignoreফাইলে node_modules অংশটুকু লিখতে হবে।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  myapp/root folder
                </code>
                <pre data-prefix="$">
                  <code>.env</code>                  
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  myapp অর্থাৎ root ফোল্ডার-এ .env ফাইল ক্রিয়েট করতে হবে।
                </p>
              </div>
            </div>

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code> nodemon index.js</code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                server side প্রজেক্টের development continuously মনিটরিং শুরু করার জন্য terminal/cmd-তে এই command-টি ব্যবহার করতে হবে। এটা ব্যবহারের পর প্রতিটি update-এর সাথে সাথে terminal ও browser-এ দেখা যাবে।
                </p>
              </div>
            </div>
          

            

            <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
              <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
                <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                  terminal
                </code>
                <pre data-prefix="$">
                  <code>
                    {" "}
                    <p>
                      some computer/cmd/power shall may show this kind of error:
                      nodemon : File
                      C:\Users\lenovo\AppData\Roaming\npm\nodemon.ps1 cannot be
                      loaded because running scripts is disabled on this system.
                      For more information, see about_Execution_Policies at
                      https:/go.microsoft.com/fwlink/?LinkID=135170.
                    </p>
                    <p>
                      then just the copy the line and paste in the
                      cmd/powersehll: Set-ExecutionPolicy RemoteSigned -Scope
                      CurrentUser
                    </p>
                  </code>
                </pre>
              </div>
              <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                  to see the continuous update to install nodemon in the
                  computer/pc and it needs only once for a pc but not for each
                  project{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="./public/vegetables/eggplant.png"></img>
        <div className="m-3 p-6 border bg-green-700">
          <div className="w-1/2 mx-auto">
            <h2 className="text-3xl font-bold flex justify-center border rounded-lg py-3">
              Backend Project Setup
            </h2>
          </div>

        </div>
        </>
    );
};

export default BackendProjectSetup;