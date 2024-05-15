const CompanyUpdate = () => {
    return (
        <div>
      
            <h1 className="font-bold text-center text-2xl my-4">নুরুল আমিন ভাইয়ের প্রস্তাবিত ২ বছরের পরিকল্পনা</h1>
          
          {/*====================== table-1 ====================== */}
          {/*====================== আমিন ভাইয়ের পরিকল্পনা ====================== */}
  <table className="table border w-full mx-auto">
    {/* head */}
    <thead>
      <tr className="border text-left">
        <th className="w-1/12 border">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="w-2/12 border text-center">১ম ছয় মাস</th>
        <th className="w-2/12 border text-center">২য় ছয় মাস</th>
        <th className="w-2/12 border text-center">৩য় ছয় মাস </th>
        <th className="w-2/12 border text-center">৪র্থ ছয় মাস</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>১. ওয়েব ডেভেলপিং শেখা</td>
        <td>১. ফ্রিল্যান্সিং হতে প্রত্যেকে মাসে গড়ে ১ লাখ টাকা করে আয় করা; <br></br>১,০০,০০০X৪=৪,০০,০০০</td>
        <td>১. ফ্রিল্যান্সিং হতে প্রত্যেকে মাসে গড়ে ১ লাখ টাকা করে আয় করা; + ১ম ব্যবসায় ইউনিট হতে আয়</td>
        <td>১. ফ্রিল্যান্সিং হতে প্রত্যেকে মাসে গড়ে ১ লাখ টাকা করে আয় করা; + ১ম ও ২য় ব্যবসায় ইউনিট হতে আয়</td>       
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        ২. এই সময়ে বাগানের  কবুতর ও ছাগলের খামার চলমান থাকবে। এছাড়া নিজেদের খাবারের জন্য সবজি উৎপাদন করা হবে হবে। এজন্য একজন ওয়ার্কার নিয়োগ করা হবে।
        </td>
        <td>
        ২. অর্ধেক টাকা নিজেদের জন্য ব্যয় করা (৫০,০০০x৪=২,০০,০০০/=)<br></br>
        ও অর্ধেক টাকা কোম্পানীতে বিনিয়োগ করা (৫০,০০০x৪=২,০০,০০০/=) <br></br>
        যখন বিনিয়োগ ৬লাখ টাকা হবে তখন প্রথম খামার করা হবে এবং বিনিয়োগ চলমান থাকবে।        
        </td>
        <td>২. বিনিয়োগের টাকা দিয়ে ব্যবসায়ের দ্বিতীয় ইউনিট খোলা</td>        
        <td>শুরু হতে ১৮ মাসে নিজেদের আয় হতে সর্বমোট ৩৬ লাখ টাকা বিনিয়োগ করে খামার করা হবে এবং এ বিনিয়োগ হতে প্রতিমাসে ৪ লাখ টাকা আয় হবে।</td>        
      </tr>      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>ব্যয়  ???</td>
        <td>ব্যয়  ???</td>
        <td>ব্যয়  ???</td>        
        <td>ব্যয়  ???</td>        
      </tr>     
          
           
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>---</th>
        <th>---</th>
        <th>রিস্ক ফ্যক্টরসমূহ ও সেগুলো মোকাবেলার কৌশল  ???</th>
        <th>রিস্ক ফ্যক্টরসমূহ ও সেগুলো মোকাবেলার কৌশল  ???</th>
        <th>রিস্ক ফ্যক্টরসমূহ ও সেগুলো মোকাবেলার কৌশল  ???</th>
      </tr>
    </tfoot>
    
  </table>

{/*====================== table-2 ====================== */}
  {/*====================== আলমগীরের পরিকল্পনা ====================== */}
  <div className='hidden'>
    <h1 className="font-bold hidden">আলমগীরের প্রস্তাব:</h1>
  <ol className="border p-6 rounded-lg text-xl">
  <ul className="steps steps-vertical">
  <li className="step step-primary ">আগামী ছয় মাসে প্রত্যেকে কমপক্ষে ১ লাখ টাকা করে বিনিয়োগ করবে। (ছয় মাসের বিনিয়োগ: ৪*১,০০,০০=৪,০০,০০০)</li>
  <li className="step step-primary">আগের সব বকেয়া পরিশোধ করে ফেলা হবে এবং নতুন কোন লোন করা হবে না। (দেনা: ????)</li>
  <li className="step">বাগানে কবুতর ও ছাগল প্রজেক্ট চলমান থাকবে। নতুন করে মাছ এবং পেঁপে চাষ করা হবে। ছয় মাসের বাজেট: কবুতর ১৮,০০০/=+ ছাগল ৫০,০০০/=+মাছ ৮,০০০/=বেড়া=২০০০০+ পেঁপে ১,০০,০০০/=+বিদ্যুত বিল=১২,০০০ ==&gt;১৯৮,০০০/=</li>
  <li className="step">বাগানে অভিজ্ঞ একজন লোককে পাঁচ মাসের জন্য নিয়োগ করা হবে (ছয় মাসের বাজেট: ২৫,০০০/=*৫=১,২৫,০০০/=)</li>
  <li className="step">ছয় মাসের মধ্যে সবাই ওয়েব ডেভেলমেন্ট, কোম্পানী আইন এবং এ্যাকাউন্টিং শিখে নিবে।</li>
  <li className="step step-warning">রিমোট জব বা ফ্রিল্যান্সিং করে মাসে কমপক্ষে ১ লাখ টাকা করে আয় করবে। এই আয়ের টাকা হবে যার যার ব্যক্তিগত আয়, এই আয় হতে নিজেদের জন্য অর্ধেক রেখে বাকীটা প্রতিষ্ঠানে বিনিয়োগ করবে।</li>
  <li className="step">২০২৪ সালের ডিসেম্বরের মধ্যে সবাই চাকুরী ছেড়ে দিয়ে নিজেদের প্রতিষ্ঠানের জন্য কাজ করবে।</li>
  <li className="step step-warning">রিমোট জব বা ফ্রিল্যান্সিং করে মাসে কমপক্ষে ১ লাখ টাকা করে আয় করবে। এই আয়ের টাকা হবে যার যার ব্যক্তিগত আয়, এই আয় হতে নিজেদের ব্যক্তিগত খরচ মিটিয়ে বাকীটা প্রতিষ্ঠানে বিনিয়োগ করবে।</li>
  <li className="step step-error">২০২৪ সালের ডিসেম্বরের মধ্যে প্রতিষ্ঠানের জন্য কমপক্ষে ৪ গণ্ডা রেজিস্ট্রি জমি ক্রয় করা হবে (বাজেট ১,৫০,০০০*৪=৬,০০,০০০টাকা); টাকাটা প্রতিষ্ঠানের আয় ও নিজেদের বিনিয়োগ থেকে আসবে।</li>
  <li className="step step-warning">রিমোট জব বা ফ্রিল্যান্সিং করে মাসে কমপক্ষে ১ লাখ টাকা করে আয় করবে। এই আয়ের টাকা হবে যার যার ব্যক্তিগত আয়, এই আয় হতে নিজেদের ব্যক্তিগত খরচ মিটিয়ে বাকীটা প্রতিষ্ঠানে বিনিয়োগ করবে।</li>
  <li className="step ">২০২৫ সালের শুরুতে কোম্পানী করার জন্য ২০২৪ সালে প্রস্তুতি শেষ করবে।??? কোম্পানী নতুন ও অভিনব মডেলের হাউজিং প্রজেক্টের জন্য কাজ করবে।</li>
  <li className="step">কোম্পানী গঠনের জন্য যার যার অবস্থান থেকে সম্ভাব্য শেয়ারহোল্ডারদের সাথে প্রয়োজনীয় যোগাযোগ রাখবে এবং প্রতিমাসে কমপক্ষে তাদের সাথে ১টি করে গেট-টুগেদার মিটিং-এর আয়োজন করবে।</li>
</ul>
  <br></br>
  <li>এই ছয় মাসের ১ম ২মাস সপ্তাহে ৫দিন সবাই এক সাথে বসবে (এর মধ্যে সপ্তাহে নূন্যতম ১দিন সবাই একসাথে বাগানে বসে সময় দিবে।)</li>
  <li>এই ছয় মাসের পরবর্তী ৪ মাস সবাই মিলে সপ্তাহে কমপক্ষে ৩ দিন করে একসাথে বসবে।</li>
  <li>এই ছয় মাস ব্যক্তিগত ও সামাজিক কাজগুলো সর্বনিম্ন রেখে সবাই সার্বক্ষণিক কর্মী হিসেবে প্রতিষ্ঠানের জন্য কাজ করবে। </li>
  
 </ol>
  <div className="border p-6 rounded-lg text-xl hidden">
    <h1 className="font-bold">আলমগীরের প্রস্তাব:</h1>
  <p>১. আগামী ছয় মাসে প্রতিজন কমপক্ষে ১ লাখ টাকা করে বিনিয়োগ করবে। (ছয় মাসের বিনিয়োগ: ৪*১,০০,০০=৪,০০,০০০)</p>
  <p>২. আগের সব বকেয়া পরিশোধ করে ফেলা হবে। (দেনা: ????)</p>
  <p>৩. প্রতিষ্ঠানের হাতে সবসময় নগদ ৪০,০০০ টাকা জমা থাকবে। (ছয় মাসের বাজেট: ৪০,০০০/=)</p>
  <p>৪. বাগানে কবুতর ও ছাগল প্রজেক্ট চলমান থাকবে। (ছয় মাসের বাজেট: কবুতর ১৮,০০০/=+ ছাগল ৫০,০০০/= =&gt;৬৮,০০০/=)</p>
  <p>৫. বাগানে নতুন করে মাছ ফেলা হবে এবং পেঁপে চাষ করা হবে। (ছয় মাসের বাজেট:  =&gt;১,১০,০০০/=)</p>
  <p>৬. বাগানে অভিজ্ঞ একজন লোককে পাঁচ মাসের জন্য নিয়োগ করা হবে (ছয় মাসের বাজেট: ২৫,০০০/=*৫=১,২৫,০০০/=)</p>
  <br></br>
  <p>৭. এই ছয় মাসের ১ম ২মাস সপ্তাহে ৫দিন সবাই এক সাথে বসবে (এর মধ্যে সপ্তাহে নূন্যতম ১দিন সবাই একসাথে বাগানে বসে সময় দিবে।)</p>
  <p>৮. এই ছয় মাসের পরবর্তী ৪ মাস সবাই মিলে সপ্তাহে কমপক্ষে ৩ দিন করে একসাথে বসবে।</p>
  <p>৯. এই ছয় মাস ব্যক্তিগত ও সামাজিক কাজগুলো সর্বনিম্ন রেখে সবাই সার্বক্ষণিক কর্মী হিসেবে প্রতিষ্ঠানের জন্য কাজ করবে। </p>
  <br></br>
  <p>১০. ছয় মাসের মধ্যে সবাই ওয়েব ডেভেলমেন্টিং শিখে রিমোট জব বা ফ্রিল্যান্সিং করে মাসে কমপক্ষে ১ লাখ টাকা করে আয় করবে। এই আয়ের টাকা হবে যার যার ব্যক্তিগত আয়, এই আয় হতে নিজেদের ব্যক্তিগত খরচ মিটিয়ে বাকীটা প্রতিষ্ঠানে বিনিয়োগ করবে। </p>
  <p>১১. এই ছয় মাসের ১ম মাসের মধ্যে সবাই কোম্পানী আইন শিখে নিবে।</p>     
  <p>১২. এই ছয় মাসের পরবর্তী ৫ মাসের মধ্যে সবাই এ্যাকাউন্টিং শিখে নিবে।</p>
  <br></br>
  <p>১৩. ২০২৪ সালের ডিসেম্বরের মধ্যে সবাই চাকুরী ছেড়ে দিয়ে নিজেদের প্রতিষ্ঠানের জন্য কাজ করবে।</p>
  <br></br>
  <p>১৪. ২০২৪ সালের ডিসেম্বরের মধ্যে প্রতিষ্ঠানের জন্য কমপক্ষে ৪ গণ্ডা রেজিস্ট্রি জমি ক্রয় করা হবে (বাজেট ১,৫০,০০০*৪=৬,০০,০০০টাকা); টাকাটা প্রতিষ্ঠানের আয় ও নিজেদের বিনিয়োগ হবে সংস্থান হবে।</p>
  <p>১৫. ২০২৫ সালের শুরুতে কোম্পানী করার জন্য ২০২৪ সালে প্রস্তুতি শেষ করবে। কোম্পানী নতুন ও অভিনব মডেলের হাউজিং প্রজেক্টের জন্য কাজ করবে।</p>
  <p>১৬. কোম্পানী গঠনের জন্য যার যার অবস্থান থেকে সম্ভাব্য শেয়ারহোল্ডারদের সাথে প্রয়োজনীয় যোগাযোগ রাখবে এবং প্রতিমাসে কমপক্ষে তাদের সাথে ১টি করে গেট-টুগেদার মিটিং-এর আয়োজন করবে।</p>
  </div>
  </div>

<div className="hidden">
    <p>১. ওয়েব ডেভেলপিং ও প্রোগ্রামিং শেখা হবে। 
    <br></br>* বিশ্বের যে কোন জায়গায় বসে এগুলো নিয়ে কাজ করে আয় করা যায়। 
    <br></br>* এটা নিজের জন্য সব সময়ের একটা সম্পদ অর্জন যা অন্য কেউ কেড়ে নিতে পারবে না। 
    <br></br>* আগামী ৫ থেকে ১০ বছর পর ওয়েব ডেভেলপিং-এর গুরুত্ব একই রকম নাও থাকতে পারে। 
    <br></br>* কিন্তু প্রোগ্রামিং এর গুরুত্ব সবসময় থাকবে।
    <br></br>* তাই দুইটা একসাথে শিখলে এখন যেমন আয় বেশি হবে তেমনি ভবিষ্যতটাও শঙ্কা এবং দুশ্চিন্তামুক্ত হবে।
     </p>
    <p>৪. কোম্পানী ২০২৫ সালে কন্সট্রাকশন, সমন্বিত ও আধুনিক কৃষি খামার, যেকোন ধরণের পণ্য উতপাদন, ডিজিটাল প্রোডাক্ট তৈরী, শিক্ষা ইত্যাদির জন্য কাজ করবে।</p>
    <p>৬. ৬ মাস পর্যন্ত সপ্তাহে কমপক্ষে ৩ দিন করে প্রত্যেককে বাগানে থাকতে হবে।</p>
    <p>৮. ২২ মাসের (২০২৫সালের ডিসেম্বর পর‌্ন্ত) বছরের একটি পরিকল্পনা চূড়ান্ত করতে হবে।</p>
    <p>৯. চূড়ান্ত পরিকল্পনায় যে টাইম লাইন থাকবে তা বাস্তবায়নের জন্য সবাইকে সাধ্যমত চেষ্টা করতে হবে।।</p>   
    <p>১১. আগের চু্ক্তির যে সমস্ত বিষয় ঠিকঠাক মত মানা যায়নি সেগুলো সঠিকভাবে মানা শুরু করতে হবে।</p>
    <p>১২. দুই বছরের যে পরিকল্পনা থাকবে সেটার বাইরে কোন কাজ লাভজনক হলেও নেওয়া যাবে না, 
    <br></br>তবে তিন মাস পর পর পরিকল্পনার অগ্রগতি পর্যালোচনা করে দেখতে হবে ও আপডেট করতে হবে।</p>
    
    
</div>

  <table className="table border p-4 mt-10 w-[400vw] hidden">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>মার্চ ২০২৪</th>
        <th>এপ্রিল ২০২৪</th>
        <th>মে ২০২৪</th>
        <th>জুন ২০২৪</th>
        <th>জুলাই ২০২৪</th>
        <th>আগস্ট ২০২৪</th>       
        <th>সেপ্টেম্বর ২০২৪</th>       
        <th>অক্টোবর ২০২৪</th>       
        <th>নভেম্বর ২০২৪</th>       
        <th>ডিসেম্বর ২০২৪</th> 
        <th>জানুয়ারী ২০২৫</th>       
        <th>ফেব্রুয়ারী ২০২৫</th> 
        <th>মার্চ ২০২৫</th>
        <th>এপ্রিল ২০২৫</th>
        <th>মে ২০২৫</th>
        <th>জুন ২০২৫</th>
        <th>জুলাই ২০২৫</th>
        <th>আগস্ট ২০২৫</th>       
        <th>সেপ্টেম্বর ২০২৫</th>       
        <th>অক্টোবর ২০২৫</th>       
        <th>নভেম্বর ২০২৫</th>       
        <th>ডিসেম্বর ২০২৫</th> 
      </tr>
    </thead>
    <tbody>      
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা  <br></br>২. ফ্রিল্যান্সিং/রিমোট জব সার্চ ও এ্যাপ্লাই করার প্রসেস শেখা <br></br>৩. পেঁপে চাষ করা</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা <br></br>২. পোর্টফলিও তৈরী করা শেখা <br></br>৩. পেঁপে চাষ করা</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা<br></br>২.মাছ চাষ  <br></br>৩. </td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা <br></br>২. পোর্টফলিও তৈরী করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা <br></br>২. রিমোট জব/ফ্রিল্যান্সিং কাজ সার্চ করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ওয়েব ডিজাইনিং শেখা <br></br>২. রিমোট জব/ফ্রিল্যান্সিং কাজ সার্চ করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>
        <td><span className="font-bold">কাজের তালিকা:</span> <br></br>১. ফ্রিল্যান্সিং/রিমোট জব করা<br></br>২.  <br></br>৩.</td>        
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>   

      </tr>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>        
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td>১. কবুতর পালন<br></br>২. ছাগল পালন</td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
        <td><span className="font-bold">কাজের তালিকা:</span></td>
        <td><span className="font-bold">কাজের তালিকা:</span></td>                 
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td><span className="font-bold">ব্যয়:</span><br></br>১. কবুতরের খাবার=৩০০০/-<br></br>২. বেড়া ঠিক করা=২০,০০০/-<br></br>৩. পেঁপে চাষ=১০,০০০/-<br></br>৪. নাস্তা=৬,০০০/-<br></br>৫. খাবার=৫,০০০/-</td>
        <td><span className="font-bold">ব্যয়:</span><br></br>১. কবুতরের খাবার=৩০০০/-<br></br>২. বেড়া ঠিক করা=৩০০০/-<br></br>৩. পেঁপে চাষ=১০,০০০/-<br></br>৪. নাস্তা=৬,০০০/-<br></br>৫. খাবার=৫,০০০/-</td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>
        <td><span className="font-bold">ব্যয়:</span></td>                 
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=১০,০০০/-<br></br>২. নুরুল আমিন=১০,০০০/-<br></br>৩. শফিকুল আলম=১০,০০০/-<br></br>৪. শফিকুল ইসলাম=১০,০০০/- <br></br>মোট=৪০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=১০,০০০/-<br></br>২. নুরুল আমিন=১০,০০০/-<br></br>৩. শফিকুল আলম=১০,০০০/-<br></br>৪. শফিকুল ইসলাম=১০,০০০/- <br></br>মোট=৪০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>
        <td><span className="font-bold">বিনিয়োগ:</span><br></br>১. আলমগীর=৫০০০/-<br></br>২. নুরুল আমিন=৫০০০/-<br></br>৩. শফিকুল আলম=৫০০০/-<br></br>৪. শফিকুল ইসলাম=৫০০০/- <br></br>মোট=২০,০০০/-</td>               
      </tr>
      {/* row 5 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>৫০,০০০*৪=২,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>১০০,০০০*৪=৪,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>১০০,০০০*৪=৪,০০,০০০</td>
        <td><span className="font-bold">আয়:</span><br></br>১০০,০০০*৪=৪,০০,০০০</td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>
        <td><span className="font-bold">আয়:</span></td>                 
      </tr>
          
    </tbody>
    {/* foot
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>

        </div>
    );
};

export default CompanyUpdate;