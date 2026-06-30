const BackendProjectSetupAdvanced = () => {
  return (
    <>
      <div className="bg-blue-500">
        <div className="p-5 mb-[50vh]">
          <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Backend Project Setup Advanced
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
              {/* <pre data-prefix="$"> */}
              <pre>
                <code>
                  cd <span className="text-red-400">\Projects</span>
                </code>
              </pre>
            </div>
            <div className="w-1/2 h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                প্রজেক্ট ফোল্ডারে ঢুকার জন্য terminal/cmd-তে এই কমান্ডটি ব্যবহার
                করতে হবে। আপনি যে ফোল্ডারে আপনার নতুন প্রজেক্টটি ক্রিয়েট করতে
                চান এটি সে ফোল্ডার।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>
                  mkdir {<span className="text-rose-800">my-backend-app</span>}
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                terminal-এ mkdir দিয়ে folder create করা যায়। my-backend-app হল
                folder-এর নাম। আপনি নতুন যে backend project তৈরী করতে চাচ্ছেন এই
                কমান্ড ব্যবহার করে সেটি তৈরী করুন। আপনার প্রয়োজন অনুযায়ী আপনি যে
                কোন valid নাম দিতে পারেন।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>
                  cd /{<span className="text-rose-800">my-backend-app</span>}{" "}
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
              <pre>
                <code>code .</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                নতুন যে server-side প্রজেক্ট ফোল্ডারটি তৈরী করা হয়েছে সেটি vs
                code ব্যবহার করে খোলার জন্য এই কমান্ড কাজ করে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========initiate node.js============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm init -y</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Node JS ইন্সটল করার জন্য এই কমান্ডটি ব্যবহার করতে হয়। Node JS
                ইন্সটল করার সময় বেশ কিছু প্রশ্ন terminal-এ দেখায়, সেগুলোর উত্তর
                নিজে ম্যানুয়ালি না দিতে হয় এবং auto নিয়ে নেয় সেজন্য -y ফ্ল্যাগ অংশটুকু দিতে
                হয়। এই কমান্ডটি দিলে root ফোল্ডারে একটি package.json ফাইল
                initialize হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                package.json
              </code>
              <code>&ldquo;main&rdquo;: &#123;</code>
              <pre>
                <code>./dist</code>
                <br></br>

                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[25vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install --save-dev @types/node</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[25vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে @types/node ইন্সটল করার জন্য এই
                লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install express, cors============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install express</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                express ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে
                হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install --save-dev @types/express</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে @types/express ইন্সটল করার জন্য
                এই লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm i cors</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                cors ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে
                হবে। এখানে i = install, i না দিয়ে install দিলেও একই কাজ হবে।
                <br></br>
                cors কেন ইন্সটল করতে হয়?
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install --save-dev @types/cors</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে @types/cors ইন্সটল করার জন্য এই
                লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install typescript and initiate tsconfig.json============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install typescript --save-dev</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে typescript ইন্সটল করার জন্য এই
                লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে। ডেভেলপমেন্ট
                ডিপেন্ডেন্সি হিসাবে ইন্সটল করলে এ্যাপটি শুধু মাত্র এই প্রজেক্টে
                কাজ করবে কিন্তু অন্য কোন প্রজেক্টে কাজ করবে না।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>tsc -init</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                টার্মিনালে tsc -init কমান্ডটি দিলে root ফোল্ডারে একটি
                tsconfig.json ফাইল initialize হবে। হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[70vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                tsconfig.json
              </code>
              <code>&#123;</code>
              <pre>
                <code>&ldquo;include&rdquo;: &#91;&ldquo;src&rdquo;&#93;,</code>
                <br></br>
                <code>
                  &ldquo;exclude&rdquo;: &#91;&ldquo;node_modules&rdquo;&#93;,
                </code>
                <br></br>
                <code>&ldquo;compilerOptions&rdquo;: &#123;</code>
                <br></br>
                <code>&ldquo;target&rdquo;: &ldquo;ES6&rdquo;,</code>
                <br></br>
                <code>&ldquo;module&rdquo;: &ldquo;commonjs&rdquo;,</code>
                <br></br>
                <code>&ldquo;rootDir&rdquo;: &ldquo;./src&rdquo;,</code>
                <br></br>
                <code>&ldquo;outDir&rdquo;: &ldquo;./dist&rdquo;,</code>
                <br></br>
                <code>&ldquo;esModuleInterop&rdquo;: true,</code>
                <br></br>
                <code>
                  &ldquo;forceConsistentCasingInFileNames&rdquo;: true,
                </code>
                <br></br>
                <code>&ldquo;strict&rdquo;: true,</code>
                <br></br>
                <code>&ldquo;skipLibCheck&rdquo;: true,</code>
                <br></br>

                <code>&#125;</code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[70vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                tsconfig.json ফাইলে অনেকগুলো rules দেওয়া আছে এবং এর অনেকগুলো
                আবার কমেন্ট করা আছে। সেখান হতে এখানে দেওয়া rule গুলোই যেন কমেন্ট
                করা না থাকে তা নিশ্চিত করতে হবে।
                <br></br>
                কোন রুল কী কাজ করে? ব্যাখ্যা দরকার।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========coding for basic server ============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code  w-[35vw] h-[60vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                src/app.ts
              </code>
              <pre>
                <code>import cors from &apos;cors&apos;;</code>
                <br></br>
                <code>import express from &apos;express&apos;;</code>
                <br></br>
                <br></br>
                <code>const app = express();</code>
                <br></br>
                <br></br>
                <code className="text-zinc-500">{`//middleware`}</code>
                <br></br>
                <code>app.use(cors());</code>
                <br></br>
                <code>app.use(express.json());</code>
                <br></br>
                <br></br>
                <code>
                  app.get(&apos;/&apos;, (req, res) =&gt; &#123;
                  <br></br>
                  res.send(&lsquo;Hello World&rsquo;) &#125;);
                </code>
                <br></br>
                <br></br>
                <code>export default app;</code>
              </pre>
            </div>

            <div className="w-[35vw] h-[60vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                -middleware হিসাবে cors middleware-কে import করার জন্য app.ts
                ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে cors policy এরর দেখাবে।
                <br></br>
                -middleware হিসাবে express.json কে call করার জন্য index.js
                ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে server-এ data যাবে না।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[40vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                src/server.ts
              </code>
              <pre>
                <code>import app from &apos;./app&apos;;</code>
                <br></br>
                <br></br>
                <code>
                  app.listen(port, () =&gt; &#123;
                  <br></br>
                  console.log(&apos;Example app listening on port
                  $&#123;port&#125;&apos;)&#125;;
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[40vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify : middleware হিসাবে express.json কে call
                করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে
                server-এ data যাবে না।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                package.json
              </code>
              <code>&ldquo;script&rdquo;: &#123;</code>
              <pre>
                <code>&ldquo;build&rdquo;: &ldquo;tsc&rdquo;,</code>
                <br></br>
                <code>
                  &ldquo;start:prod&rdquo;: &ldquo;node ./dist/server.js
                  &rdquo;,
                </code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install mongodb and mongoose and create connection with
            mongodb ============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install mongodb</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                mongodb ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে
                হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install mongoose --save</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                mongoose ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে
                হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[80vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                src/server.ts
              </code>
              <pre>
                <code>import config from &apos;./app/config&apos;;</code>
                <br></br>
                <code>import mongoose from &apos;mongoose&apos;;</code>
                <br></br>
                <code>import app from &apos;./app&apos;;</code>
                <br></br>
                <br></br>
                <code>async function main() &#123;</code>
                <br></br>
                <code>try &#123;</code>
                <br></br>
                <code>
                  await mongoose.connect(config.database_url as string);
                </code>
                <br></br>
                <code>
                  app.listen(config.port, () =&gt; &#123;
                  <br></br>
                  console.log(&apos;Example app listening on port
                  $&#123;config.port&#125;&apos;)&#125;;
                </code>
                <br></br>
                <code>)&#125;;</code>
                <br></br>
                <code>&#125;</code>
                <br></br>
                <code>catch(err) &#123;</code>
                <br></br>
                <code>console.log(err);</code>
                <br></br>
                <code>&#125;</code>
                <br></br>
                <code>&#125;</code>
                <br></br>
                <br></br>
                <code>main();</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[80vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify : middleware হিসাবে express.json কে call
                করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে হবে। এটা না থাকলে
                server-এ data যাবে না।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install dotenv, configure and secure database ============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm i dotenv</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                dotenv ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার করতে
                হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[30vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                my-backend-app/src
              </code>
              <pre>
                <code>/app/config/index.ts</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[30vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to change: my-backend-app অর্থাৎ root ফোল্ডার-এ .env
                ফাইল ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[70vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                my-backend-app/src/app/config/index.ts
              </code>
              <pre>
                <br></br>
                <br></br>
                <br></br>
                <code>import dotenv from &lsquo;dotenv&rsquo;;</code>
                <br></br>
                <code>import path from &lsquo;path&rsquo;;</code>
                <br></br>
                <code className="flex flex-wrap w-[32vw]">
                  dotenv.config(&#123; path: path.join((process.cwd(),
                  &lsquo;.env&rsquo;)) &#125;);
                </code>
                <br></br>
                <code className="flex flex-wrap">
                  export default &#123; port: process.env.PORT, database_url:
                  process.env.DATABASE_URL, &#125;;
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[70vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to change: my-backend-app অর্থাৎ root ফোল্ডার-এ .env
                ফাইল ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                my-backend-app/root folder
              </code>
              <pre>
                <code>.env</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                my-backend-app অর্থাৎ root ফোল্ডার-এ .env ফাইল ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[40vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                my-backend-app&gt;.env
              </code>
              <pre>
                <code>PORT: 5000</code>
                <br></br>
                <code className="overflow-x-auto">
                  <br></br>
                  DATABASE_URL:
                  mongodb+srv://admin-ecommerce:admin12345@cluster0.w7a1joi.mongodb.net/ecommerce-project?retryWrites=true&w=majority&appName=Cluster0
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[40vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                my-backend-app অর্থাৎ root ফোল্ডার-এ .env ফাইল ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========istall eslint and set rules for eslint============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>
                  npm install eslint @typescript -eslint/parser @typescript
                  -eslint/eslint -plugin --save-dev
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে eslint @typescript
                -eslint/parser এবং @typescript -eslint/eslint -plugin ইন্সটল
                করার জন্য এই লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                eslintconfig.mjs
              </code>
              <code>&ldquo;script&rdquo;: &#123;</code>
              <pre>
                <code>
                  &ldquo;start:dev&rdquo;: &ldquo;ts-node-dev --respawn
                  --transpile-only ./src/server.ts&rdquo;,
                </code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                package.json
              </code>
              <code>&ldquo;script&rdquo;: &#123;</code>
              <pre>
                <code>
                  &ldquo;start:dev&rdquo;: &ldquo;ts-node-dev --respawn
                  --transpile-only ./src/server.ts&rdquo;,
                </code>
                <br></br>
                <code>
                  &ldquo;start:prod&rdquo;: &ldquo;node ./dist/server.js
                  &rdquo;,
                </code>
                <br></br>
                <code>&ldquo;build&rdquo;: &ldquo;tsc&rdquo;,</code>
                <br></br>
                <code>&ldquo;lint&rdquo;: &ldquo;npx eslint .&rdquo;,</code>
                <br></br>
                <code>
                  &ldquo;lint:fix&rdquo;: &ldquo;npx eslint src --fix&rdquo;,
                </code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                {<span className="text-rose-800">my-backend-app</span>}/root
                folder
              </code>
              <pre>
                <code>.eslintignore</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                .eslintignore ফাইল ক্রিয়েট করার জন্য root folder-এ এই ফাইলটি
                ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                .eslintignore
              </code>
              <pre>
                <code>dist</code>
                <br></br>
                <code>node_modules</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify, node_modules ফোল্ডারটি যেন github -এ কপি
                না হয় সেজন্য .gitignoreফাইলে node_modules অংশটুকু লিখতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install prettier and set rules for prettier============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install --save-dev prettier</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ডেভেলপমেন্ট ডিপেন্ডেন্সি হিসেবে prettier ইন্সটল করার জন্য এই
                লাইনটি terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                package.json
              </code>
              <code>&ldquo;script&rdquo;: &#123;</code>
              <pre>
                <code>
                  &ldquo;start:dev&rdquo;: &ldquo;ts-node-dev --respawn
                  --transpile-only ./src/server.ts&rdquo;,
                </code>
                <br></br>
                <code>
                  &ldquo;start:prod&rdquo;: &ldquo;node ./dist/server.js
                  &rdquo;,
                </code>
                <br></br>
                <code>&ldquo;build&rdquo;: &ldquo;tsc&rdquo;,</code>
                <br></br>
                <code>&ldquo;lint&rdquo;: &ldquo;npx eslint .&rdquo;,</code>
                <br></br>
                <code>
                  &ldquo;lint:fix&rdquo;: &ldquo;npx eslint src --fix&rdquo;,
                </code>
                <br></br>
                <code>
                  &ldquo;prettier&rdquo;: &ldquo;prettier --ignore-path
                  .gitignore --write
                  \&ldquo;./src/*.+(js|ts|json)\&rdquo;&rdquo;,
                </code>
                <br></br>
                <code>
                  &ldquo;prettier:fix&rdquo;: &ldquo;npx prettier --write
                  src&rdquo;,
                </code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install extra app to prevent conflict between eslint and
            prettier============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install --save-dev eslint-config-prettier</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                eslint-config-prettier ইন্সটল করার জন্য এই লাইনটি
                terminal/cmd-তে লিখে Enter চাপতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[40vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                .prettierrc.json
              </code>
              <code>&#123;</code>
              <pre>
                <code>&ldquo;semi&rdquo;: true,</code>
                <br></br>
                <code>&ldquo;singleQuote&rdquo;: true,</code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[40vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install nodemon============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code> npm install -g nodemon</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                nodemon server side প্রজেক্টের development continuously মনিটর
                করার জন্য ব্যবহৃত হয়। terminal/cmd-তে এই command-টি ব্যবহার করা
                হয় nodemon ইন্সটল করার জন্য। পুরো computer-এর জন্য এই command-টি
                একবার ব্যবহার করতে হয়। তাই একবার ইন্সটল করলে server-side project
                create করার জন্য এটি আর ব্যবহারের দরকার হয় না।
                <br></br>
                nodemon js file-এর জন্য কাজ করে, ts ফাইলের জন্য কাজ করে না।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code> nodemon ./dist/server.js</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                server side প্রজেক্টের development continuously মনিটরিং শুরু
                করার জন্য terminal/cmd-তে এই command-টি ব্যবহার করতে হবে। এটা
                ব্যবহারের পর প্রতিটি update-এর সাথে সাথে terminal ও browser-এ
                দেখা যাবে।
              </p>
            </div>
          </div>

          <div className="text-center">=========tsc -w============</div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>tsc -w</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                tsc -w দিয়ে typescript file-এর যে কোন পরিবর্তনকে মনিটর করা যায়।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========install node-dev============
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>npm install ts-node-dev --save-dev</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                ts-node-dev ইন্সটল করার জন্য এই লাইনটি terminal/cmd-তে ব্যবহার
                করতে হবে।
              </p>
            </div>
          </div>
          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[50vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                package.json
              </code>
              <code>&ldquo;script&rdquo;: &#123;</code>
              <pre>
                <code>
                  &ldquo;start:dev&rdquo;: &ldquo;ts-node-dev --respawn
                  --transpile-only ./src/server.ts&rdquo;,
                </code>
                <br></br>
                <code>
                  &ldquo;start:prod&rdquo;: &ldquo;node ./dist/server.js
                  &rdquo;,
                </code>
                <br></br>
                <code>&ldquo;build&rdquo;: &ldquo;tsc&rdquo;,</code>
                <br></br>
                <code>&ldquo;lint&rdquo;: &ldquo;npx eslint .&rdquo;,</code>
                <br></br>
                <code>
                  &ldquo;lint:fix&rdquo;: &ldquo;npx eslint src --fix&rdquo;,
                </code>
                <br></br>
                <code>&#125;</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[50vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify :package.json ফাইলের মধ্যে script: এর ভিতরে
                &quot;start&ldquo;: nodemon index.js, অংশটুকু টাইপ করতে হবে। এর
                অর্থ হল backend-এর কোডগুলো index.js ফাইলে রাখা হবে এবং nodemon
                দিয়ে development গুলো monitor করা হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[40vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                my-backend-app&gt;.env
              </code>
              <pre>
                <code>NODE_ENV: development</code>
                <br></br>
                <code>PORT: 5000</code>
                <br></br>
                <code className="overflow-x-auto">
                  DATABASE_URL:
                  mongodb+srv://admin-ecommerce:admin12345@cluster0.w7a1joi.mongodb.net/ecommerce-project?retryWrites=true&w=majority&appName=Cluster0
                </code>
              </pre>
            </div>
            <div className="w-[35vw] h-[40vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                NODE_ENV: development এর মাধ্যমে explicitly বলে দেওয়া হচ্ছে node
                -এর enviornment হলো ডেভেলপমেন্ট। কিন্তু production এর আগে একে
                অবশ্যই পরিবর্তন করে NODE_ENV: production লিখে দিতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========git initialization and git ignore============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>git init</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                git -কে এই প্রজেক্টের জন্য চালু করার জন্য এই command টি
                termianl-এ ব্যবহার করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                {<span className="text-rose-800">my-backend-app</span>}/root
                folder
              </code>
              <pre>
                <code>.gitignore</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                .gitignore ফাইল ক্রিয়েট করার জন্য root folder-এ এই ফাইলটি
                ক্রিয়েট করতে হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                .gitignore
              </code>
              <pre>
                <code>dist</code>
                <br></br>
                <code>node_modules</code>
                <br></br>
                <code>.env</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: need to modify: node_modules ফোল্ডারটি যেন github -এ কপি
                না হয় সেজন্য .gitignoreফাইলে node_modules অংশটুকু লিখতে হবে।
              </p>
            </div>
          </div>

          <div className="text-center">
            =========github initialization ============
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                {<span className="text-rose-800">my-backend-app</span>}/root
                folder
              </code>
              <pre>
                <code>index.js</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                Todo: Need to modify. root folder-এ index.js নামে একটি ফাইল
                create করতে হবে। এই ফাইলে ‍server-side কোডগুলো থাকবে।
              </p>
            </div>
          </div>

          <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
              to see the continuous update to install nodemon in the computer/pc
              and it needs only once for a pc but not for each project{" "}
            </p>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4 ">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6 hidden">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                src/app.ts
              </code>
              <pre>
                <code>app.use(cors())</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                cors ফাংশন-কে call করার জন্য index.js ফাইল-এ এই লাইনটি লিখতে
                হবে।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6 hidden">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                src/app.ts
              </code>
              <pre>
                <code>app.use(express.json())</code>
              </pre>
            </div>
            <div className="w-[35vw] h-[20vh] border -ml-4 pl-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                middleware হিসাবে express.json কে call করার জন্য index.js ফাইল-এ
                এই লাইনটি লিখতে হবে। এটা না থাকলে server-এ data যাবে না।
              </p>
            </div>
          </div>

          <div className="flex justify-left relative p-4 bg-sky-300 mb-4">
            <div className="mockup-code w-[35vw] h-[20vh] border -ml-4 pl-6">
              <code className="w-42 absolute -top-2 left-0 bg-gray-800 pl-3 pr-20 py-2 border-b-2 border-sky-400 text-lg">
                terminal
              </code>
              <pre>
                <code>
                  <p>
                    some computer/cmd/power shall may show this kind of error:
                    nodemon : File
                    C:\Users\lenovo\AppData\Roaming\npm\nodemon.ps1 cannot be
                    loaded because running scripts is disabled on this system.
                    For more information, see about_Execution_Policies at
                    https:/go.microsoft.com/fwlink/?LinkID=135170.
                  </p>
                  <p>
                    then just the copy the line and paste in the cmd/powersehll:
                    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
                  </p>
                </code>
              </pre>
            </div>
          </div>
          <div>================</div>
          <div>1. package.json for entry folder name after initialization</div>
          <div>
            2. show mongodb connection and mongoose connection seperately
          </div>
          <div>3. config package installation</div>
          <div>2. 2 lines in vs code settings for prettier</div>
          <div>4. install eslint and prettier extentions</div>
          <div>5. git hub repositiory creation and git commit</div>
        </div>
      </div>
    </>
  );
};

export default BackendProjectSetupAdvanced;
