import CameraApp from "../Components/CameraApp";
import Npm from "./Npm";
import "./CSS.css";
import Banner1 from "../Components/Banners/Banner1";
import Banner2 from "../Components/Banners/Banner2";
import Banner3 from "../Components/Banners/Banner3";
// import Logo from '../../public/red-car.jpg'

const CSS = () => {
  function readContent(id) {
    const content = document.getElementById(id).innerText;
    console.log(content);

    navigator.clipboard
      .writeText(content)

      .then(() => {
        const utterance = new SpeechSynthesisUtterance(content);
        window.speechSynthesis.speak(utterance);
        console.log("Content read aloud:", content);
      })
      .catch((error) => {
        console.error("Failed to read aloud:", error);
        alert("Failed to read aloud");
      });
  }
  return (
    <>
    <Banner1></Banner1>
    <Banner2></Banner2>
    <Banner3></Banner3>

      <div id="animation">
        <section className="border p-8 rounded-md m-8">
          <p className="flex gap-2">
            <span className="tooltip" onClick={() => readContent("w1")} id="w1">
              My<span className="tooltiptext">: আমার</span>
            </span>
            <span className="tooltip" onClick={() => readContent("w2")} id="w2">
              name<span className="tooltiptext">: নাম</span>
            </span>
            <span className="tooltip" onClick={() => readContent("w3")} id="w3">
              is<span className="tooltiptext">: হয়</span>
            </span>
            <span className="tooltip" onClick={() => readContent("w4")} id="w4">
              Alamgir<span className="tooltiptext">: আলমগীর</span>
            </span>
          </p>
        </section>

        <section>
          <p>What is Micro service?</p>
          <p>How to backup data of a website?</p>
          <p>What is Google Cloud</p>
          <p>What is Azure?</p>
          <p>What is AWS?</p>
          <p>What is Prompt Engineering?</p>
          <p>What is Augmented Reality?</p>
          <p>What is VR headset?</p>
          <p>What is AGI= Artificial General Intelligence?</p>
          <p>What is AQ= Action Quetiened?</p>
          <p>What is YARN?</p>
          <p>Who developed YARN?</p>
          <p>What are the advantages and disadvantages of using YARN?</p>
          <p>What is BlockChain?</p>
          <p>What is LangChain?</p>
          <p>What is JSR?</p>
          <p>What is Colab?</p>
          <p>What is Panda_CUDF?</p>
          <p>What is AI Generator: Token, parameter, GPU, Thruput, ?</p>
          <p>What is Kubernates?</p>
          <p>What is Docker?</p>
          <p>What is LLMA?</p>
          <p>What is RTX GPU?</p>
          <p>What is Code base?</p>
          <p>What is Tokenization?</p>
          <p>What is User Persona?</p>
          <p>What is Machine Learning?</p>
          <p>What is shorthand?</p>
          <p>What is XMLHttpRequest? callback-based api</p>
          <p>What is fetch api? promise-based api</p>
          <p>What is Service Worker API?</p>
          <p>What is aka? aka=also known as</p>
          <p>What is invoice?</p>
          <p>What is API end point?</p>
          <p>What is API gateway?</p>
        </section>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #:I have some data in a paragraph. I need to show them in elsewhere.
          How can I show them?
        </h1>
        <p className="py-2 px-4">
          state, event handler, element in the front end
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #:I have some data in backend. I need to show them in front-end. How
          can I show them?
        </h1>
        <p className="py-2 px-4">create get api in the server side</p>
        <p className="py-2 px-4">useEffect to load the data</p>
        <p className="py-2 px-4">useState to show the data</p>
        <p className="py-2 px-4">
          map to loop the array and display data in the front end
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: I can create data using form in in front-end. I need to show them in
          front-end. How can I show them?
        </h1>
        <p className="py-2 px-4">create post api in the server side</p>
        <p className="py-2 px-4">send data via post from the client side</p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to auto refresh data after a crud operation in frontend?
        </h1>
        <p className="py-2 px-4">create post api in the server side</p>
        <p className="py-2 px-4">send data via post from the client side</p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to integrate dark and light theme toggling feature using JS and tailwind?
        </h1>
        <p className="py-2 px-4"></p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to make font size dynamic?
        </h1>
        <p className="py-2 px-4"></p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to create Private Route?
        </h1>
        <p className="py-2 px-4"></p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to create Admin Route?
        </h1>
        <p className="py-2 px-4"></p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to integrate Payment System?
        </h1>
        <p className="py-2 px-4"></p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to conditionally disable a button?
        </h1>
        <code className="py-2 px-4">
        {`<button disabled={!cart.length}>Pay</button>`}
        </code>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to conditionally disable a linked button?
        </h1>
        <code className="py-2 px-4">
        {`{cart.length ? <Link to="/dashboard/payment"<button className="btn btn-primary">Pay</button></Link> : <Link to="/payment"<button disabled className="btn btn-primary">Pay</button></Link>}`}
        </code>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to integrate MongoDB in backend?
        </h1>
        <div className="flex flex-wrap border rounded-md">
        <p className="py-2 pl-8">https://www.mongodb.com/   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Sign In   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Google Login   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">mongo-db atlas   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Choose an account   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Accept Privacy Policy&gt;<span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Welcome to Atlas!&gt;<span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Deploy your database&gt;<span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Security QuickStart&gt;<span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Congratulations!&gt;<span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Introducing Backup Compliance Policy!&gt; .../Close   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Network Access   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Database Access   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Database&gt;Connect&gt;Drivers&gt;   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Copy code and paste in backend index.js file   <span className="text-green-500 font-bold text-2xl">&gt;</span></p>
        <p className="py-2 pl-8">Change username and password</p>

        </div>

        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
          #: How to add CSS Styles in React Projects
        </h1>
        <p className="py-2 px-4"><b>Option-1:</b>Tailwind class</p>
        <p className="py-2 px-4"><b>Option-2:</b>Seperate .css file and import the file</p>
        <p className="py-2 px-4"><b>Option-3:</b>inline css in tailwind ???</p>
        <p className="py-2 px-4"><b>Option-4:</b>Conditional CSS + tailwind class</p>
        <p className="py-2 px-4"><b>Option-5:</b>Declare tailwind css class in a js variable and call it dynamically</p>
        <p className="py-2 px-4"></p>
        

        {/* ==============most-important CSS Properties=================== */}
        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>UI/UX Related Websites</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.toools.design/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.toools.design/_ Design Resources_Very Very Important
              and Exclusive
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.blobmaker.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.blobmaker.app/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://getwaves.io/"
              target="_blank"
              rel="noreferrer"
            >
              https://getwaves.io/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://palettemaker.com/app"
              target="_blank"
              rel="noreferrer"
            >
              https://palettemaker.com/app
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://angrytools.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://angrytools.com/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://app.haikei.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://app.haikei.app/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.blobs.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.blobs.app/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://superdesigner.co/"
              target="_blank"
              rel="noreferrer"
            >
              https://superdesigner.co/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.magicpattern.design/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.magicpattern.design/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://wordmark.it/"
              target="_blank"
              rel="noreferrer"
            >
              https://wordmark.it/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://svg-path.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://svg-path.com/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://svg-path-visualizer.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://svg-path-visualizer.netlify.app/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://getcssscan.com/css-buttons-examples"
              target="_blank"
              rel="noreferrer"
            >
              getcssscan.com/css-buttons-examples
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.lazyfelix.com"
              target="_blank"
              rel="noreferrer"
            >
              www.lazyfelix.com
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>UI/UX</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=BU_afT-aIn0"
              target="_blank"
              rel="noreferrer"
            >
              UI UX Design Full Course | UI UX Course | UI UX Training |
              Intellipaat
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ELFsZqp_tZY"
              target="_blank"
              rel="noreferrer"
            >
              Benjamin Evans: How Airbnb uses inclusive design to create a
              successful business
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=9048hecq_-U"
              target="_blank"
              rel="noreferrer"
            >
              Boost Your UI Game: Essential Gestalt Principles Every Designer
              Must Know | Explained in Bangla
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=IlJo7c3J2Io"
              target="_blank"
              rel="noreferrer"
            >
              How to Use Color in UI Design (UI Principles Series)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=8gu4lFtVcyY"
              target="_blank"
              rel="noreferrer"
            >
              How to Use White Space in UI Design (UI Principles Series)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=8gu4lFtVcyY&t=1s"
              target="_blank"
              rel="noreferrer"
            >
              How to Use White Space in UI Design (UI Principles Series)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=f1Jecbpu2RE&t=2s"
              target="_blank"
              rel="noreferrer"
            >
              Working with UI Style Guides
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=JiY9ZroekRk"
              target="_blank"
              rel="noreferrer"
            >
              50 Website Design Mistakes (And Why)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=hyuchNQcVVg&t=18s"
              target="_blank"
              rel="noreferrer"
            >
              The 5 Levels of Web Design - Worst to BEST UI/UX
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=wIuVvCuiJhU"
              target="_blank"
              rel="noreferrer"
            >
              World&apos;s shortest UI/UX design course
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=UWwNIMHFdW4"
              target="_blank"
              rel="noreferrer"
            >
              60-30-10 Color Rule
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/@UXTalkswithAtiq"
              target="_blank"
              rel="noreferrer"
            >
              UX Talks with Atiq
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=f1Jecbpu2RE&t=3s"
              target="_blank"
              rel="noreferrer"
            >
              Working with UI Style Guides
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=7yS5OybxvXM"
              target="_blank"
              rel="noreferrer"
            >
              What is UI/UX Design? | Clear Explanation in Bangla
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=SdKSpj4c2H4"
              target="_blank"
              rel="noreferrer"
            >
              Mastering website structure from A to Z: Improve UX and boost SEO
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=oM2kI_VM7h0&t=10s"
              target="_blank"
              rel="noreferrer"
            >
              Write, Design & Publish a UX Case Study | UI/UX Portfolio
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ofJe6gP7Wpc"
              target="_blank"
              rel="noreferrer"
            >
              Everything about Selection controls in UI design components or
              elements #2
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=9048hecq_-U"
              target="_blank"
              rel="noreferrer"
            >
              Boost Your UI Game: Essential Gestalt Principles Every Designer
              Must Know | Explained in Bangla
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=EsHA6k0x8wA"
              target="_blank"
              rel="noreferrer"
            >
              Discover 27 Essential UI Elements that Will Transform Your UX
              Design Process | Free UX course
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=HouMHuNYTc8"
              target="_blank"
              rel="noreferrer"
            >
              Design UI with me LIVE! UI Design #8
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=5gdYHlYAKDY&list=PLDVpvW8ghDr9tasku_YvuTy_l0xPUtOHE"
              target="_blank"
              rel="noreferrer"
            >
              Refactoring UI: WP Pusher Checkout Page
            </a>
          </ol>
        </section>

        {/* ==============most-important CSS Properties=================== */}
        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>CSS_Facebook</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122186384408006869&set=pcb.122186384762006869"
              target="_blank"
              rel="noreferrer"
            >
              CSS Cheat Sheet
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122186589590006869&set=pcb.122186590028006869"
              target="_blank"
              rel="noreferrer"
            >
              Advanced CSS Cheat Sheet
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122173568012006869&set=pcb.2543455302528161"
              target="_blank"
              rel="noreferrer"
            >
              Must read the Cheat Sheet CSS
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122144278058085092&set=pcb.2560364884170536"
              target="_blank"
              rel="noreferrer"
            >
              Tips for using CSS Modules
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo?fbid=820997383377189&set=pcb.2559936107546747"
              target="_blank"
              rel="noreferrer"
            >
              CSS Pro Tips for your big brain
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122131949690100427&set=gm.2553558861517805&idorvanity=555118421361869"
              target="_blank"
              rel="noreferrer"
            >
              Best CSS shortcuts
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=307373219029097&set=pcb.2563599913847033"
              target="_blank"
              rel="noreferrer"
            >
              CSS tools
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/reel/753391726562607"
              target="_blank"
              rel="noreferrer"
            >
              Hover effects
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122173378616006869&set=pcb.122173378880006869"
              target="_blank"
              rel="noreferrer"
            >
              How CSS works
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>CSS</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/@OptimisticWeb/videos"
              target="_blank"
              rel="noreferrer"
            >
              Optimistic Web
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/@TheWebSchool"
              target="_blank"
              rel="noreferrer"
            >
              The Web School
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=7hgIzaifLN4"
              target="_blank"
              rel="noreferrer"
            >
              Best Web Design Resources 2024 Worth Bookmarking
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=GTNgiTK-ic8"
              target="_blank"
              rel="noreferrer"
            >
              Perfect Landing Page Design Explained (in 5 minutes)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=lPJVi797Uy0"
              target="_blank"
              rel="noreferrer"
            >
              Build a Curvaceous Homepage // Wavy Background Tutorial with SVG &
              CSS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=El9GfDqHdxI"
              target="_blank"
              rel="noreferrer"
            >
              The web design trend that will dominate 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Dl-L5djsZcA"
              target="_blank"
              rel="noreferrer"
            >
              How To Design A Website Homepage For SEO | Works For Product Or
              Service Pages Too | SEO Course #4
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=j1pa36PK14E"
              target="_blank"
              rel="noreferrer"
            >
              Web Design: The Complete guide to getting started in 2022
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=fAK9NxsR3es"
              target="_blank"
              rel="noreferrer"
            >
              Best design resource websites every developer should bookmark
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ToJiXPTNnLY"
              target="_blank"
              rel="noreferrer"
            >
              Professional Portfolio Breakdown — Why Is Theirs So Much Better?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=-ewzot5Ys5g"
              target="_blank"
              rel="noreferrer"
            >
              Web Design Pricing Guide: How Should You Charge Your Customers?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=EDRkUcjzAuY"
              target="_blank"
              rel="noreferrer"
            >
              Image Error Handling in HTML aind Javascript | Set broken images |
              HTML Tip | JS Tip
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=OTKnhVTeN4w"
              target="_blank"
              rel="noreferrer"
            >
              Awesome SVG Text Masking with Video - Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=lTuYkrKe8os"
              target="_blank"
              rel="noreferrer"
            >
              Shapes in CSS (4min)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=91A4-iYK1zY"
              target="_blank"
              rel="noreferrer"
            >
              Crafting Dynamic Text Paths with HTML, SVG, and CSS: A Guide to
              Responsive and Accessible Graphics
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=F4kJXbaunUg"
              target="_blank"
              rel="noreferrer"
            >
              Awesome UI Interactions with the CSS Clip Path Property
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=OIyY1yHyyQ8"
              target="_blank"
              rel="noreferrer"
            >
              Fixed Header on Scroll with Dynamic Background
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=mjDek0d1kak"
              target="_blank"
              rel="noreferrer"
            >
              CSS Tricks: How to Create Horizontal Lines on the Sides with a
              Shape in Between
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=t1HLpmGh4Is"
              target="_blank"
              rel="noreferrer"
            >
              Before and After Pseudo Selectors explained | Pseudo Elements |
              CSS Tutorials
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=OV8yOlOLooM"
              target="_blank"
              rel="noreferrer"
            >
              Customizing Radio Buttons in CSS: Step-by-Step Tutorial | HTML
              Custom Radio Buttons | Form Design
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=3owx2vJHkv4"
              target="_blank"
              rel="noreferrer"
            >
              Curved/Custom DIV Shape Tutorial - CSS & SVG
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4E6ZpX5vVDs"
              target="_blank"
              rel="noreferrer"
            >
              Aurora effect in design - style breakdown
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=fdLh5pg0nG0"
              target="_blank"
              rel="noreferrer"
            >
              TailwindCSS Animated Border Gradient (MIND BLOWING!)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=gLkAeBvqBv8"
              target="_blank"
              rel="noreferrer"
            >
              Toggle Button Text with JavaScript - [HowToCodeSchool.com]
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ZW5_ObNKTmI"
              target="_blank"
              rel="noreferrer"
            >
              Get Input Value Length OnClick in JavaScript [HowToCodeSchool.com]
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=wuUSVEcK-kM"
              target="_blank"
              rel="noreferrer"
            >
              CSS Only Animated Background Effects | Html CSS Animation
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Gradients</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TYHFe4L9bfo"
              target="_blank"
              rel="noreferrer"
            >
              #29 CSS Gradients - CSS Full Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/nQfRo6WzFOU"
              target="_blank"
              rel="noreferrer"
            >
              Level Up Your Web Design with Realistic Gradient Shadows in CSS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TYHFe4L9bfo"
              target="_blank"
              rel="noreferrer"
            >
              #29 CSS Gradients - CSS Full Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ZuEM9n-UDzM"
              target="_blank"
              rel="noreferrer"
            >
              Creating & Using Mesh Gradients like a PRO
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>User Persona</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=l8sFTbi0etE"
              target="_blank"
              rel="noreferrer"
            >
              User Persona
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Layouts</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=SHqJWDlxECo"
              target="_blank"
              rel="noreferrer"
            >
              Responsive Mosaic Layouts Made Easy with CSS Grid
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=P2ksReDwWkE"
              target="_blank"
              rel="noreferrer"
            >
              Website Layouts To Make A Professional Website Design in 2024
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <ol className="list-decimal flex flex-col flex-1">
            <h1>Using Blob</h1>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=-ycK7oZfzJY&t=198s"
              target="_blank"
              rel="noreferrer"
            >
              Using Blobs & Waves in your UI Designs
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4ALLynsZ0u0"
              target="_blank"
              rel="noreferrer"
            >
              Create interesting blob shapes with CSS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=liW6bDLnuuk&t=28s"
              target="_blank"
              rel="noreferrer"
            >
              Smooth Animated Blob using CSS & SVG | Html CSS Blobs Animation
              Effects
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/results?search_query=using+Blobs+%26+Waves+in+your+UI+Designs"
              target="_blank"
              rel="noreferrer"
            >
              Using Blobs & Waves in UI Designs
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300">Theme Setup</h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=rm-XI9W0Mts"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS Theme Setup Develop an App from Scratch (Part 7)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=T48EpjE5bHI"
              target="_blank"
              rel="noreferrer"
            >
              Create Responsive Website with Light and Dark Mode using React &
              Sass Beginner Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=oMOe_32M6ss"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS | Dark & Light Theme Switcher
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <ol className="list-decimal flex flex-col flex-1">
            <h1>Animation</h1>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=LqRfQVcn3FY"
              target="_blank"
              rel="noreferrer"
            >
              Animated Gradient Background with Pure CSS | HTML & CSS Tutorials
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=cwtn1-GRxIQ"
              target="_blank"
              rel="noreferrer"
            >
              12 Cool CSS Button Animation | HTML CSS JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=H-BKTz8QNyQ"
              target="_blank"
              rel="noreferrer"
            >
              CSS Border Animation.CSS Animation.
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=QTtIYQJHekE"
              target="_blank"
              rel="noreferrer"
            >
              Spinning Circular Text | HTML & CSS (SVG Elements) Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=xIkVRBq4Tsc&t=179s"
              target="_blank"
              rel="noreferrer"
            >
              Build A Responsive Team Page with Card Flip Effect | CSS Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/8QOVn8n_uYg"
              target="_blank"
              rel="noreferrer"
            >
              Stylish CSS Button with Hover Animation
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/HUkZxON7t1I"
              target="_blank"
              rel="noreferrer"
            >
              Creating stunning gradient text animation in css
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=828Qsr7-I0g"
              target="_blank"
              rel="noreferrer"
            >
              CSS Glowing Border animation
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4ZF_KZR3Ov4"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS animation : Tailwind CSS Animated Underline Hover
              Effect | The Tailwind Project.
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=yefgBA1CecI"
              target="_blank"
              rel="noreferrer"
            >
              Typewriter Animation in CSS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=kpJzsTCdZO4"
              target="_blank"
              rel="noreferrer"
            >
              Animate React APP like a PRO with Framer Motion | React.jS |
              Framer-Motion
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=A4g4pGJy5eY"
              target="_blank"
              rel="noreferrer"
            >
              Motion One - A Lightweight JavaScript Animation Library
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>SignIn </h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Ra0Bl87EpbM"
              target="_blank"
              rel="noreferrer"
            >
              Creating a Stunning Responsive Login/Register Form with CSS
              Flexbox | Web Development Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=VOdKapRpu7k"
              target="_blank"
              rel="noreferrer"
            >
              Create Sign-Up & Sign-In Form with CSS Transitions | Complete
              Guide | Html Css Javascript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/5q4_CrQ6Oeg"
              target="_blank"
              rel="noreferrer"
            >
              Create Sign-Up & Sign-In Form with CSS Transitions| Complete Guide
              | Html Css Javascript #happycode_shorts
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Page Speed</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=PU10N-uTFmg"
              target="_blank"
              rel="noreferrer"
            >
              PageSpeed Insights Tutorial- Page Speed
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4Y6sNWStDXM"
              target="_blank"
              rel="noreferrer"
            >
              Analyzing Core Web Vitals of Your Websites | How To Solve Core Web
              Vitals | Page Speed Insights
            </a>
          </ol>
        </section>

        <a
          className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
          href="https://www.youtube.com/watch?v=VjiWpGR82t0"
          target="_blank"
          rel="noreferrer"
        >
          Web Developer Portfolio - 9.5/10 (Front End, React)
        </a>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300 ">
            Miscelleneous Topics
          </h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=-jix4KyxLuQ"
              target="_blank"
              rel="noreferrer"
            >
              Building a command palette with Tailwind CSS, React, and Headless
              UI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=8zcfIu3tyw4"
              target="_blank"
              rel="noreferrer"
            >
              Draggable Div Element in HTML CSS & JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ogyTyL0SEko"
              target="_blank"
              rel="noreferrer"
            >
              Create A Draggable Div Element in JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/ogyTyL0SEko"
              target="_blank"
              rel="noreferrer"
            >
              Create a draggable div element is JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Ac9Z6UtHdZ0"
              target="_blank"
              rel="noreferrer"
            >
              Create A Draggable Bottom Sheet Modal in HTML CSS & JavaScript |
              Bottom Sheet Modal in JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=5Fws9daTtIs"
              target="_blank"
              rel="noreferrer"
            >
              How To Create Drag And Drop Image Uploader Using HTML CSS and
              JavaScript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Y2z5aR_szHg"
              target="_blank"
              rel="noreferrer"
            >
              Create a Modal Using Tailwind CSS | Popup Modal Tailwind
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=1CN7C6u31zA"
              target="_blank"
              rel="noreferrer"
            >
              React Modal (Pop-Up) with Tailwind CSS and Typescript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TKO9ylBddss"
              target="_blank"
              rel="noreferrer"
            >
              Ionic 7 - Change Bottom-Sheet Modal Size Dynamically
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=We-Og5peS3Y"
              target="_blank"
              rel="noreferrer"
            >
              Pure JS | Resizable div using html
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=lrx5Mj3WJCY"
              target="_blank"
              rel="noreferrer"
            >
              Curvy Sidebar Navigation Menu Items | curve outside html css
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=1TZjgQ0Osic"
              target="_blank"
              rel="noreferrer"
            >
              Sidebar Navigation Menu With Animated Toggle Bar Using HTML And
              CSS | CSS Side Navbar Menu
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=dlj_QL-ENJM"
              target="_blank"
              rel="noreferrer"
            >
              What is Web Scraping? (And Why Everyone Should Learn It) |
              Explained in 3 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Yn-8s7Y3WNo"
              target="_blank"
              rel="noreferrer"
            >
              Responsive Navigation Sidebar In HTML And CSS | Side Navbar
              @WebKitCoding
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=VylXkPy-MIc"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS Dark Mode | React App Theme Switcher
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=NMTq5HIxMa8"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS Dark/Light/System Base Change Theme With Local
              Storage | React js dark mode
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=DWio4NCIdeQ"
              target="_blank"
              rel="noreferrer"
            >
              2 Ways to Make a Scroll Parallax in React
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=6ZIBTPkaDVI"
              target="_blank"
              rel="noreferrer"
            >
              Learn React and Tailwind CSS - One Color Website With a Theme
              Switcher
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ISi34BX47TY"
              target="_blank"
              rel="noreferrer"
            >
              Image Hover Effect | HTML CSS Javascript
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=rTq_8DxZyFY"
              target="_blank"
              rel="noreferrer"
            >
              Best Web Design Resources 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/Eaip2EyaWrQ"
              target="_blank"
              rel="noreferrer"
            >
              Custom Cursor
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=vYnk_SxVJKE"
              target="_blank"
              rel="noreferrer"
            >
              Learn react-admin in 30 minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=RaeXdPsSvfM"
              target="_blank"
              rel="noreferrer"
            >
              Custom Scrollbar Using Tailwind CSS | Tailwind css Scrollbar
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=a5KYlHNKQB8"
              target="_blank"
              rel="noreferrer"
            >
              Beginning Graphic Design: Layout & Composition
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=5_iyM9Z0s1Q"
              target="_blank"
              rel="noreferrer"
            >
              How to Disable Background Scrolling When Popup Modal Is Open
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=h74e18-Z-yA"
              target="_blank"
              rel="noreferrer"
            >
              Base Components with Component Properties in Figma!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=u65Y-vqYNAk"
              target="_blank"
              rel="noreferrer"
            >
              Drag and drop in react was a lot easier than I thought
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=wIyHSOugGGw"
              target="_blank"
              rel="noreferrer"
            >
              Every React Concept Explained in 12 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=fsUeJgSvqfI"
              target="_blank"
              rel="noreferrer"
            >
              디자인완성도 높이는 초간단한 방법 3가지!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=jWSCvYwOL4c&t=35s"
              target="_blank"
              rel="noreferrer"
            >
              디자이너가 디자인하기 전에 하는 일 2
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=cVKsAEI71Yg"
              target="_blank"
              rel="noreferrer"
            >
              How to Better Present Design Work for Portfolios, Clients,
              Products, Dribbble, and More (Guide)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ub7ciOOcqC0"
              target="_blank"
              rel="noreferrer"
            >
              Mastering Knockout Text Effects in CSS | Step-by-Step Tutorial
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=6ZIBTPkaDVI"
              target="_blank"
              rel="noreferrer"
            >
              Learn React and Tailwind CSS - One Color Website With a Theme
              Switcher
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=EsHA6k0x8wA"
              target="_blank"
              rel="noreferrer"
            >
              Discover 27 Essential UI Elements that Will Transform Your UX
              Design Process | Free UX course
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=0mQsperItfA"
              target="_blank"
              rel="noreferrer"
            >
              Designer Adda with Sashoto Seeam | Current Job Market for UX/UI &
              Product Designers 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=6plCwL8UpKQ"
              target="_blank"
              rel="noreferrer"
            >
              Figma Tutorial: Present Multiple App Screen For Dribbble
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=DyxxZ_WgBFw&t=16s"
              target="_blank"
              rel="noreferrer"
            >
              টেক ক্যারিয়ারে Grow করতে হলে এই ব্যাসিক বিষয়গুলো জানতেই হবে:Shah
              Ali Newaj Topu | Programming Hero
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=XxHv0OD7ea8"
              target="_blank"
              rel="noreferrer"
            >
              React Router v6 tutorial in Hindi #4 dynamic Routing with params
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://github.com/brillout/awesome-react-components"
              target="_blank"
              rel="noreferrer"
            >
              awesome-react-components
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=pI28N5wMoiE"
              target="_blank"
              rel="noreferrer"
            >
              Build your own copilot! New Microsoft Copilot extensions
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=PE89NysJEUY"
              target="_blank"
              rel="noreferrer"
            >
              Google I/O 2024: Everything Revealed in 12 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=2Ucrv7Nffec"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft AutoDev is Here! Fully Autonomous SOFTWARE DEVELOPERS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4sLUfUGLEp0"
              target="_blank"
              rel="noreferrer"
            >
              Build a CAMERA APP in REACT JS! | Easy Tutorial!
            </a>

            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=O3j73J_LKE0"
              target="_blank"
              rel="noreferrer"
            >
              Sign in with Javascript Passkeys | Web Authentication
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=dai76rBJThM"
              target="_blank"
              rel="noreferrer"
            >
              Why Google&apos;s IDX Is Not a VS Code Killer
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=MFCn4ce5dVc"
              target="_blank"
              rel="noreferrer"
            >
              Ryan Dahl introduces JSR at DevWorld 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=hzXabRASYs8"
              target="_blank"
              rel="noreferrer"
            >
              Are your coping mechanisms healthy? | Dr. Andrew Miki | TEDxSurrey
            </a>

            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.airtable.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.airtable.com/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>

            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=GWYhtksrmhE"
              target="_blank"
              rel="noreferrer"
            >
              how NASA writes space-proof code
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=b3XSIN-qmg4"
              target="_blank"
              rel="noreferrer"
            >
              Next.js 15 is here-Vercel Ship || PH Weekly tech || Programming
              Hero
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ejofP2VKu-4"
              target="_blank"
              rel="noreferrer"
            >
              System Design: Scale System From Zero To Million Users |
              #systemdesign
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=rFYQCBZcTU8&t=990s"
              target="_blank"
              rel="noreferrer"
            >
              Day 1: Big Picture of Backend | Career in Backend Workshop | Stack
              Learner | HM Nayem
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=H-idooje-0g"
              target="_blank"
              rel="noreferrer"
            >
              Day 3.2: Application Scalability - Replication | System Design and
              Application Architecture Workshop
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=OPTKlycwIkM"
              target="_blank"
              rel="noreferrer"
            >
              How Google Translate Turns 134 Languages Into Math | WSJ Tech
              Behind
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300 ">Others</h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=iCDfAC4f25w&t=11s"
              target="_blank"
              rel="noreferrer"
            >
              VS Code Day 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=_gQaygjm_hg"
              target="_blank"
              rel="noreferrer"
            >
              Good APIs Vs Bad APIs: 7 Tips for API Design
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ANBqFUrUfOY"
              target="_blank"
              rel="noreferrer"
            >
              PRODUCT DESIGN in India (HONEST INFO BY A DESIGNER)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=tvE6C9OVisc"
              target="_blank"
              rel="noreferrer"
            >
              How To Clone Any Website Free | Copy Full Website
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/reel/465883202535880"
              target="_blank"
              rel="noreferrer"
            >
              jS code to Speak{" "}
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/reel/822882383009353"
              target="_blank"
              rel="noreferrer"
            >
              Set the maximum length of input
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=835972318546362&set=pcb.2579455628928128"
              target="_blank"
              rel="noreferrer"
            >
              Json web token (JWT)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=p9taQkF24Fs"
              target="_blank"
              rel="noreferrer"
            >
              Understand the Next Phase of Web Development - Steve Sanderson -
              NDC London 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=yVuyh95kqXk"
              target="_blank"
              rel="noreferrer"
            >
              Should you use a VPS instead of Vercel, Netlify & co?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=SdKSpj4c2H4"
              target="_blank"
              rel="noreferrer"
            >
              Mastering website structure from A to Z: Improve UX and boost SEO
            </a>
            <a
              className="font-xl border rounded-md bg-blue-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://web.facebook.com/photo/?fbid=122172582116028884&set=pcb.1161435758349278"
              target="_blank"
              rel="noreferrer"
            >
              Hidden Design Gems
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300 ">AI</h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=pHiMN_gy9mk"
              target="_blank"
              rel="noreferrer"
            >
              2020 Machine Learning Roadmap (87% valid for 2024)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=0zi-CG_iB6w"
              target="_blank"
              rel="noreferrer"
            >
              How To Self Study AI FAST _Important
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=h2FDq3agImI"
              target="_blank"
              rel="noreferrer"
            >
              How I&apos;d Learn AI in 2024 (if I could start over) _Important
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=nv9WwHpOKEg"
              target="_blank"
              rel="noreferrer"
            >
              With AI, Anyone Can Be a Coder Now | Thomas Dohmke | TED
              _Important
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=yN7ypxC7838"
              target="_blank"
              rel="noreferrer"
            >
              All Machine Learning Models Explained in 5 Minutes | Types of ML
              Models Basics _very important
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ukzFI9rgwfU"
              target="_blank"
              rel="noreferrer"
            >
              Machine Learning | What Is Machine Learning? | Introduction To
              Machine Learning | 2024 | Simplilearn
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TBNFiMGYaAY"
              target="_blank"
              rel="noreferrer"
            >
              NVIDIA NIM: Easily Deploy and Integrate Generative AI Models In
              App
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=q6kJ71tEYqM"
              target="_blank"
              rel="noreferrer"
            >
              Machine Learning vs Deep Learning
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=BLXZsBd1cDs"
              target="_blank"
              rel="noreferrer"
            >
              How to learn Machine Learning (ML/AI Roadmap 2024)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=KKNCiRWd_j0&t=21s"
              target="_blank"
              rel="noreferrer"
            >
              What Is an AI Anyway? | Mustafa Suleyman | TED
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=wdWYgrTae3A"
              target="_blank"
              rel="noreferrer"
            >
              01 Why use AI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=1aM1KYvl4Dw&t=14s"
              target="_blank"
              rel="noreferrer"
            >
              You Don&apos;t Understand AI Until You Watch THIS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=JuPu5xjjhms"
              target="_blank"
              rel="noreferrer"
            >
              How To Break Into Data Science and AI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/shorts/5wgyFXQLHlE"
              target="_blank"
              rel="noreferrer"
            >
              5 AI Tools to build entire websites
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=D5qxlu3A9D4"
              target="_blank"
              rel="noreferrer"
            >
              Generative AI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ZWUbZ76yRUk"
              target="_blank"
              rel="noreferrer"
            >
              How Smart Will AI Be In 2050?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=1dEIX9vQheM"
              target="_blank"
              rel="noreferrer"
            >
              Build a Stunning Website in 20 Seconds Using AI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=_DphpzGlxv8&t=16s"
              target="_blank"
              rel="noreferrer"
            >
              Using 7 AI Tools to Design a Website... (Relume AI, MidJourney,
              ChatGPT & More)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=LUgFgBnR67Y"
              target="_blank"
              rel="noreferrer"
            >
              Many workers are &apos;bringing their own AI&apos; into their
              workplaces
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=o64Mv-ArFDI"
              target="_blank"
              rel="noreferrer"
            >
              Google’s NEW Prompting Guide is Incredible!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ftqlZ02nLjs"
              target="_blank"
              rel="noreferrer"
            >
              Did Google Gemini Just Kill ChatGPT? Complete Breakdown
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=fMffxenRJR4"
              target="_blank"
              rel="noreferrer"
            >
              Meet AI Expert from Silicon Valley! Tech Jobs, Layoffs,
              Cybersecurity! Ft. Prof. Ahmed Banafa!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=spc56idbO0I"
              target="_blank"
              rel="noreferrer"
            >
              Will Devin replace Programmers and Software Engineers?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=JFpMbLmaGYs"
              target="_blank"
              rel="noreferrer"
            >
              AI&apos;s Education Revolution: What will it take? Live Webcast
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=6lPYBfPI7nU"
              target="_blank"
              rel="noreferrer"
            >
              NotebookLM - A new AI note app from Google
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Q8tw6YTD3ac"
              target="_blank"
              rel="noreferrer"
            >
              Pulumi in Three Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=zP-I1PfovyQ"
              target="_blank"
              rel="noreferrer"
            >
              Getting Started With Relume Library
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TkwXa7Cvfr8"
              target="_blank"
              rel="noreferrer"
            >
              Watching Neural Networks Learn
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=C0RjMAWhvh8"
              target="_blank"
              rel="noreferrer"
            >
              The SCARY different stages between AI + AGI + ASI + SINGULARITY
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=E5Z7FQp7AQQ"
              target="_blank"
              rel="noreferrer"
            >
              What is CNN in deep learning? Convolutional Neural Network
              Explained_ Computer vision_ 6min
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=bnp-y3XMRH8"
              target="_blank"
              rel="noreferrer"
            >
              Classification of Artificial Intelligence
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ZLbVdvOoTKM"
              target="_blank"
              rel="noreferrer"
            >
              How to Build an LLM from Scratch | An Overview
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=_DphpzGlxv8&t=16s"
              target="_blank"
              rel="noreferrer"
            >
              Using 7 AI Tools to Design a Website... (Relume AI, MidJourney,
              ChatGPT & More)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=1DUHIj47Pd8"
              target="_blank"
              rel="noreferrer"
            >
              Artificial Intelligence A-Z Course Review - (2024) Kirill Eremenko
              - Best Online AI Course
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=yfs1tPc2NBU"
              target="_blank"
              rel="noreferrer"
            >
              Generative Artificial Intelligence: Question Answering
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TR7AGmey1C8"
              target="_blank"
              rel="noreferrer"
            >
              How I&apos;d Learn AI (If I Had to Start Over)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=sJBO7rMR8ks"
              target="_blank"
              rel="noreferrer"
            >
              ML Was Hard Until I Learned These 5 Secrets!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=MhCHrvfAXlc"
              target="_blank"
              rel="noreferrer"
            >
              AI Engineer Roadmap | How I&apos;d Learn AI in 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=x1TqLcz_ug0"
              target="_blank"
              rel="noreferrer"
            >
              You need to learn AI in 2024! (And here is your roadmap)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=ksrLR9IcFUY"
              target="_blank"
              rel="noreferrer"
            >
              AI & Machine Learning: The Future is Now!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TBNFiMGYaAY"
              target="_blank"
              rel="noreferrer"
            >
              NVIDIA NIM: Easily Deploy and Integrate Generative AI Models In
              App
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=_wQJDYloTVU"
              target="_blank"
              rel="noreferrer"
            >
              BanglaTYPE - Develop a Bangla Chat Bot with Distributed Computing
              Systems
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=9bzgMtHdOh8"
              target="_blank"
              rel="noreferrer"
            >
              The Future of AI and How It Will Transform Our World (Special
              Keynote)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=xDOm_G7Cyac"
              target="_blank"
              rel="noreferrer"
            >
              Hugging Face + Langchain+ Upwork | How to Solve Real World AI Job
              in UPWORK
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=-3S36NPWuQY"
              target="_blank"
              rel="noreferrer"
            >
              Tips & tricks for using IDX: Building with Gemini in IDX
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=sb9zj5ZTKLU"
              target="_blank"
              rel="noreferrer"
            >
              How to Use the Free Microsoft Copilot - Complete Tutorial
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Misc</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4gX44uyGSHo&t=11s"
              target="_blank"
              rel="noreferrer"
            >
              Is Coding Still Worth Learning in 2024?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=aZbHd4suAnQ"
              target="_blank"
              rel="noreferrer"
            >
              Full Keynote: Introducing Copilot+ PCs
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=vnzknq-6z1s"
              target="_blank"
              rel="noreferrer"
            >
              শূন্য থেকে ধাপে ধাপে Blockchain Developer হওয়ার রোডম্যাপ
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=d5aIx79OTps"
              target="_blank"
              rel="noreferrer"
            >
              2024 IBM Quantum Roadmap Update
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=iVy0qGqmKFU"
              target="_blank"
              rel="noreferrer"
            >
              How To Sketch Like A Product Designer
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=7_3zynQKe1Y"
              target="_blank"
              rel="noreferrer"
            >
              Download and Install Office 2024 From Microsoft | Free | Genuine
              Version
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=CLG0ha_a0q8"
              target="_blank"
              rel="noreferrer"
            >
              Postman API Testing Tutorial | Postman Tutorial For Beginners 2022
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=QdnxjYj1pS0"
              target="_blank"
              rel="noreferrer"
            >
              Compilers, How They Work, And Writing Them From Scratch
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300">Hosting</h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=LhExRU_tnfA"
              target="_blank"
              rel="noreferrer"
            >
              কিভাবে সঠিক ওয়েব হোস্টিং কোম্পানি বাছাই করবেন?
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300 ">Bangla</h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=oVYZ9ltnoQk"
              target="_blank"
              rel="noreferrer"
            >
              আর্টিফিসিয়াল ইন্টেলিজেন্সকে বাংলা ভাষা শেখাচ্ছে বেঙ্গলি এআই |
              Artificial Intelligence Translation
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.shothik.ai/paraphrase/"
              target="_blank"
              rel="noreferrer"
            >
              shothik.ai
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://spell.bangla.gov.bd/#"
              target="_blank"
              rel="noreferrer"
            >
              https://spell.bangla.gov.bd/#
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://bengali.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Bangla AI
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://smodin.io/bn"
              target="_blank"
              rel="noreferrer"
            >
              https://smodin.io
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Voice</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://voicescribe-ai.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://voicescribe-ai.com/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://revoicer.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://revoicer.com/
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://lh6.googleusercontent.com/proxy/1i2qsn2VRgoLb1Cd6EXtCyLMlipChLqYgs2wuU-h1bZqk46STpu8PJ1QpSwC3jsCINT7-TNgsa5Fs2rQhqt-Osq_6EPL-6w2dMVSfg57Hv3aAI_gH4Sh-ZLWq3fRbG0uhpumk6vNixT_"
              target="_blank"
              rel="noreferrer"
            >
              speechelo
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>CI/CD</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=jZYrxk2WMbY"
              target="_blank"
              rel="noreferrer"
            >
              CI CD Pipeline Explained in 2 minutes With Animation!
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=scEDHsr3APg"
              target="_blank"
              rel="noreferrer"
            >
              DevOps CI/CD Explained in 100 Seconds
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=42UP1fxi2SY"
              target="_blank"
              rel="noreferrer"
            >
              CI/CD In 5 Minutes | Is It Worth The Hassle: Crash Course System
              Design #2
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=M4CXOocovZ4"
              target="_blank"
              rel="noreferrer"
            >
              CI/CD Explained | How DevOps Use Pipelines for Automation
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=G1u4WBdlWgU"
              target="_blank"
              rel="noreferrer"
            >
              What is CICD Pipeline? CICD process explained with Hands On
              Project
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Code Base</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=E_bRXJ-rHxw"
              target="_blank"
              rel="noreferrer"
            >
              What is Codebase? | Learn Blockchain Terms | Blockchain Glossary |
              Blockchain Dictionary
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=7xaGRxiN75o"
              target="_blank"
              rel="noreferrer"
            >
              What is a code base?
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=6qyx05KoCAw"
              target="_blank"
              rel="noreferrer"
            >
              How To Understand a Large Codebase
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h1>Create VS Code Extension</h1>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=q5V4T3o3CXE&t=846s"
              target="_blank"
              rel="noreferrer"
            >
              How To Create And Deploy A VSCode Extension
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=xgkDVUL0MxM"
              target="_blank"
              rel="noreferrer"
            >
              Creating a VS Code Extension - Crash Course (Developing Visual
              Studio Code Extensions)
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=srwsnNhiqv8"
              target="_blank"
              rel="noreferrer"
            >
              Creating A Simple VSCode Extension
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Nf4BNuRvWO8"
              target="_blank"
              rel="noreferrer"
            >
              Build And Publish A VS Code Extension In 20 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=TGh2NpCIDlc"
              target="_blank"
              rel="noreferrer"
            >
              How To Create Custom VSCode Snippets
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=i5wK7_E9SWo"
              target="_blank"
              rel="noreferrer"
            >
              Building Your First Extension in VS Code
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=4WblV-wbih8"
              target="_blank"
              rel="noreferrer"
            >
              VS Code Extension: Beyond “Hello World”
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=a5DX5pQ9p5M&t=611s"
              target="_blank"
              rel="noreferrer"
            >
              How to Code a VSCode Extension
            </a>
          </ol>
        </section>

        <section className="border p-1 md:p-4 rounded-md my-2 m-2">
          <h2 className="font-bold text-2xl bg-lime-300 ">
            Architecture and Construction
          </h2>
          <ol className="list-decimal flex flex-col flex-1">
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Y7WY5mOwfiU"
              target="_blank"
              rel="noreferrer"
            >
              Nusantara: Indonesia&apos;s $33BN Future Capital City
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Iz6loll9YKQ"
              target="_blank"
              rel="noreferrer"
            >
              A Tale of Civil Engineering and Global Pursuits with Pei Huang |
              CEA 235
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=Vm-b2AVwARw"
              target="_blank"
              rel="noreferrer"
            >
              The Evil Design of Mercedes Tower
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=N8Hjhng42kM"
              target="_blank"
              rel="noreferrer"
            >
              This Is Unbelievable Rwanda Is Going To Build world Biggest Mega
              Projects
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=_0Lkk7g6iNo"
              target="_blank"
              rel="noreferrer"
            >
              complete cost estimate of building | full course day 15
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=YhAwPFIUF_4"
              target="_blank"
              rel="noreferrer"
            >
              Why 3D Printing Buildings Leads to Problems
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=letCe6dE3gY"
              target="_blank"
              rel="noreferrer"
            >
              Experts Explain Saudi Arabia&apos;s 2KM Skyscraper
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=V-XMcYdVHRI"
              target="_blank"
              rel="noreferrer"
            >
              Only 1% of ARCHITECTS know these MIDJOURNEY SECRETS
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=2VEkNUm8GZg"
              target="_blank"
              rel="noreferrer"
            >
              এই অসাধারণ কমপ্লেক্সটি জলাধার ও গাছ বাঁচিয়ে যেভাবে নির্মিত হচ্ছে |
              Nirman Roshayon | June 01, 2024
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=DX_zkaK5PaI"
              target="_blank"
              rel="noreferrer"
            >
              Every Kind of Bridge Explained in 15 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=36ognUVBdho"
              target="_blank"
              rel="noreferrer"
            >
              Free Plant Library and Free Tree Generator for all 3D Programs
              Unreal, Blender, Unity, Maya, 3dsMax
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href="https://www.youtube.com/watch?v=dXUX6dv2_Yo"
              target="_blank"
              rel="noreferrer"
            >
              3D printing homes on Earth, someday the moon | 60 Minutes
            </a>
            <a
              className="font-xl border rounded-md bg-orange-300 px-8 py-4 m-2 text-blue-700 cursor-pointer font-semibold"
              href=""
              target="_blank"
              rel="noreferrer"
            ></a>
          </ol>
        </section>
      </div>

      <Npm></Npm>

      <div className="m-4">
        <CameraApp></CameraApp>
      </div>


{/* Data Type */}
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="border">
        Data Type (JavaScript, TypeScript, MongoDB)
      </tr>
      <tr className="border">
        <th></th>
        <th>JavaScript</th>
        <th>TypeScript</th>
        <th>MongoDB</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border">
        <th>1</th>
        <td>String</td>
        <td>String</td>
        <td>String</td>
      </tr>
      {/* row 2 */}
      <tr className="border">
        <th>2</th>
        <td>Number</td>
        <td>Number</td>
        <td>Number</td>
      </tr>
      {/* row 3 */}
      <tr className="border">
        <th>3</th>
        <td>Boolean</td>
        <td>Boolean</td>
        <td>Boolean</td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  );
};

export default CSS;
