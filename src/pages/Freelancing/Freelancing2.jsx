import AccountingNavbar from "../../Components/AccountingNavbar";
import AppName from "../../Components/AppName";
import Footer from "../../Components/Footer";
import WebDevCoursePlan from "../../WebDevelopment/WebDevCoursePlan";


const Freelancing = () => {
   
   
 

    // const handlePopUpCard = () => {
    //     <div className="border rounded-lg mx-auto w-4/12 px-4 bg-emerald-600">
    //         <h1 className="font-bold">This is a heading</h1>
    //         <p>This is a paragraph</p>
    //     </div>
    // }
    return (
        <div  className="bg-white">
            <AppName></AppName>
            <AccountingNavbar></AccountingNavbar>
           {/* <h2 className="text-center text-4xl font-bold py-2 my-4">Freelancing and Job Search</h2>          */}
           
           {/* <div className="">           
           <h1 className="font-bold text-3xl">Freelancing Sites</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">          
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.fiverr.com/" target="_blank" rel="noreferrer">Fiverr</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.upwork.com/" target="_blank" rel="noreferrer">Upwork</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="http://www.freelancer.com.bd/" target="_blank" rel="noreferrer">Freelancer</a></button>
           </div>

           <h1 className="font-bold text-2xl">Jobs and Remote Jobs</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">            
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl text-pink-700"><a href="https://www.bdjobs.com/" target="_blank" rel="noreferrer">BdJobs</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.linkedin.com/jobs/remote-developer-jobs/?currentJobId=3831473557&originalSubdomain=bd" target="_blank" rel="noreferrer">Linked In</a></button>           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.indeed.com/" target="_blank" rel="noreferrer">Indeed</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.glassdoor.com/" target="_blank" rel="noreferrer">glassdoor.com</a></button>           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.toptal.com/" target="_blank" rel="noreferrer">Toptal</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.ziprecruiter.com/" target="_blank" rel="noreferrer">ZipRecruiter</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.naukri.com/" target="_blank" rel="noreferrer">Naukri.com</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.peopleperhour.com/" target="_blank" rel="noreferrer">Peopleperhour</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.guru.com/" target="_blank" rel="noreferrer">Guru</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://contra.com/" target="_blank" rel="noreferrer">Contra</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://remote.co/" target="_blank" rel="noreferrer">remote.co</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://remote.com/" target="_blank" rel="noreferrer">remote.com</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.angel.com/" target="_blank" rel="noreferrer">Angel</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.flexjobs.com/" target="_blank" rel="noreferrer">Flexjobs</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://weworkremotely.com/" target="_blank" rel="noreferrer">weworkremotely.com</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.skipthedrive.com/" target="_blank" rel="noreferrer">Skipthedrive.com</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.workingnomads.com/jobs" target="_blank" rel="noreferrer">workingnomads</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://euremotejobs.com/" target="_blank" rel="noreferrer">EuRemoteJobs.com</a></button>
           <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://remoteok.com/" target="_blank" rel="noreferrer">Remoteok.com</a></button>
           </div>

           <h1 className="font-bold text-2xl">Digital Product Selling</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://themeforest.net/" target="_blank" rel="noreferrer">themeforest</a></button>
           </div>

           <h1 className="font-bold text-2xl">Personal Profile Samples</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://rafiuzzaman.com/" target="_blank" rel="noreferrer">rafiuzzaman.com</a></button>
            </div>
           <h1 className="font-bold text-2xl">রিমোট জব সম্পর্কিত ভিডিও</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=FuI4A7D5pAw" target="_blank" rel="noreferrer">বাংলাদেশে বসে পৃথিবীর যে কোন জায়গায় $50,000/Year বেতনে ওয়ার্ক পাওয়ার উপায় - Remote Job Websites</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=-ujA4J7nZVQ" target="_blank" rel="noreferrer">Remote Job করার আগে একবার হলেও দেখুন। Remote Job & My Experience.</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=L379y6ASwmc" target="_blank" rel="noreferrer">রিমোট জব পেতে চাইলে এই ভিডিও আপনার জন্য 😊</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=-ujA4J7nZVQ" target="_blank" rel="noreferrer">Remote Job করার আগে একবার হলেও দেখুন। Remote Job & My Experience.</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=RmkOk8wml9s" target="_blank" rel="noreferrer">Harsh Reality of Remote Work for &ldquo;Freshers&rdquo; in 2024 - Tech Jobs</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=Zs5xzQvmgl8" target="_blank" rel="noreferrer">Step By Step Roadmap To Get A Remote Software Developer Job In 2024</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=mxpnk6F2EXc" target="_blank" rel="noreferrer">TV Report: Is The Golden Age Of Remote Work Over?</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=PfLjZPMFVHY" target="_blank" rel="noreferrer">Complete Roadmap To Get A Remote Job In 2024 | Earn In Dollars</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/shorts/cAnHS2zbuPU" target="_blank" rel="noreferrer">Google shorts: How to find remote and WFH jobs</a></button>           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://github.com/shovoalways/Remote-First-Companies" target="_blank" rel="noreferrer">GitHubRepo: Remote-First-Companies</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=X0r4VJhqBm8" target="_blank" rel="noreferrer">Remote Job Secrets at Web Development : Insights from Non-CSE Students</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=fwqHrWFuSr4" target="_blank" rel="noreferrer">Inside Story of Getting a Remote Job - From Web Dev Course Batch 5</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=RmkOk8wml9s" target="_blank" rel="noreferrer">Harsh Reality of Remote Work for &ldquo;Freshers&rdquo; in 2024 - Tech Jobs</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://www.youtube.com/watch?v=X0r4VJhqBm8" target="_blank" rel="noreferrer"></a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://github.com/shovoalways/Remote-First-Companies" target="_blank" rel="noreferrer">Remote-First-Companies</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://github.com/shovoalways/Remote-First-Companies" target="_blank" rel="noreferrer">Remote-First-Companies</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="https://github.com/shovoalways/Remote-First-Companies" target="_blank" rel="noreferrer">Remote-First-Companies</a></button>
            </div>
           <h1 className="font-bold text-2xl">রিমোট জব করার জন্য দরকারী বিষয়াদির তালিকা</h1>
           <div className="border p-4 m-4 rounded-xl grid grid-cols-1 md:grid-cols-3">           
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-১: কোন একটি বিষয়ে সলিড স্কিল অর্জন করা (ফ্রন্টএন্ড ডেভেলপার)</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-২: পোর্টফলিও তৈরি করা (পোর্টফোলিও ওয়েবসাইট, গিটহাব প্রোফাইল) </a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">অভিজ্ঞতা অর্জন করা, ওপেনসোর্সে কন্ট্রিবিউট করা, নিজস্ব ইউনিক প্রজেক্ট করা </a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-৩: প্রফেশনাল রেজিমেই/সিভি করা</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-৪: পারসোনাল ব্র্যান্ডিং (লিংকডইন প্রোফাইল, ফেসবুক প্রোফাইল)</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-৫: জব সার্চিং স্কিল অর্জন করা</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">স্টেপ-৪: ইন্টারভিউ স্কিল অর্জন করা</a></button>
            <button className="btn rounded-lg border m-4 bg-orange-300 w-[80vw] h-[25vw] md:w-[25vw] md:h-[8vw] text-2xl"><a href="#" target="_blank" rel="noreferrer">(data structure algorithm, object oriented, full-stack project, advanced things in the project, design in front-end, functionality, Docker Container, Deployment, Linux, CI/CD Pipeline, database, modeling, cross-platform front-end tooling, tauri js vs electron, Read documenation,  )</a></button>
            </div>
            
            
            
          
           </div> */}
           <WebDevCoursePlan></WebDevCoursePlan>
           <Footer></Footer>
        </div>
    );
};

export default Freelancing;