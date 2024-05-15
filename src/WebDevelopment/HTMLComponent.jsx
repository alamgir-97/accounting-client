import Marquee from "react-fast-marquee";


const HTMLComponent = () => {
  function handleCopyContent(id) {
    const content = document.getElementById(id).innerText;
    console.log(content)
    
    navigator.clipboard.writeText(content)
    
        .then(() => {
                console.log('Content copied to clipboard:', content);
                
                alert('Content copied to clipboard');
        })
        .catch((error) => {
            console.error('Failed to copy content:', error);
            alert('Failed to copy content');
        });
}
    return (
        <div spellCheck='true'>
        <Marquee pauseOnHover={true} speed={100}>
 <p> I can be a React component, multiple React components, or just some text.</p> <img src="/public/blue-car.webp" className="h-20"></img>
</Marquee>
            <h1 className="text-4xl text-center font-bold pt-2 pb-10 animate-pulse">HTML</h1>             
            <ol className='list-decimal border flex flex-col font-semibold mx-12'>
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo?fbid=122137860482048970&set=a.122099313944048970' target='_blank' rel="noreferrer">HTML Tags</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=834143098729284&set=pcb.2577107819162909' target='_blank' rel="noreferrer">HTML Quick Revision</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=122177084102028884&set=pcb.1169455257547328' target='_blank' rel="noreferrer">HTML Attributes</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=122173764002006869&set=pcb.2544098985797126' target='_blank' rel="noreferrer">HTML Tricks no one tell you</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=827224136087847&set=pcb.2567971476743210' target='_blank' rel="noreferrer">HTML features you don&apos;t know</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=310873942012358&set=pcb.2568170480056643' target='_blank' rel="noreferrer">HTML cheat sheet</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=825957579547836&set=pcb.2566265213580503' target='_blank' rel="noreferrer">HTML snippets</a></li>        
                <li className='text-blue-700 border m-1'><a href='https://web.facebook.com/photo/?fbid=812328294244098&set=pcb.2549186755288349' target='_blank' rel="noreferrer">HTML cheat sheet 2</a></li>        
            </ol>
            <div>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Developer of HTML: </h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">First Release: ১৯৯৩; ৩১ বছর আগে</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Current Version: HTML5</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Current Version: https://html.spec.whatwg.org/</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Last Updated: 19 March 2024</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is HTML?</h3>
            <pre>HTML stands for Hyper Text Markup Language<br></br>
              HTML is the standard markup language for creating Web pages<br></br>
              HTML describes the structure of a Web page<br></br>
              HTML consists of a series of elements<br></br>
              HTML elements tell the browser how to display the content<br></br>
              HTML elements label pieces of content such as <br></br>
              &ldquo;this is a heading&rdquo;, &ldquo;this is a paragraph&rdquo;, &ldquo;this is a link&rdquo;, etc.
              <br></br>-source: w3schools.com</pre>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is Tag in HTML?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">HTML Syntax</h3>
            <p>{`<p>There is some text content</p>`}</p><br></br>
            <p>{`<img src="/car.png" alt="audi" />`}</p><br></br>
            <p>{`<audio src="/song.mp3" autoPlay muted></audio>`}</p><br></br>
            <p>{`<video src="/video.mp4"  autoPlay muted></video>`}</p><br></br>
            <p>{`<br/>`}</p><br></br>
            <p>{`<br><br/>`}</p><br></br>
            <p>{`<tr>`}</p><br></br>
            <p>{`<tr></tr>`}</p>
            <p>{`<nav> <button>Home</button> <button>About</button></nav>`} </p>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is content inside a tag?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is Tag in element?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is Opening Tag and Closing Tag?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is attribute and attribute value: src, href, style,</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What are HTML entities?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is file path and how many kinds of file path are there?</h3>
            <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Block Element vs Inline Element?</h3>
            </div>
            <div className="border p-8 shadow-xl m-8 rounded-xl">             
            &lt;p&gt;, &lt;span&gt;, 
            &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;, 
            &lt;br&gt;, &lt;hr&gt;, &lt;!--...--&gt;, 
            &lt;button&gt;, &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;a&gt;, 
            &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;,
            &lt;header&gt;, &lt;nav&gt;, &lt;div&gt;, &lt;footer&gt;, &lt;section&gt;,

            </div>
          
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-20'>Document Outline:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line1">&lt;!DOCTYPE&gt;</p></div><button onClick={()=>handleCopyContent('line1')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line2">&lt;html&gt;&lt;/html&gt;</p></div><button onClick={()=>handleCopyContent('line2')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line3">&lt;head&gt;&lt;/head&gt;</p></div><button onClick={()=>handleCopyContent('line3')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line4">&lt;body&gt;&lt;/body&gt;</p></div><button onClick={()=>handleCopyContent('line4')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>             
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-20'>Comment:</h3>          
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line5">&lt;!--...--&gt;</p></div><button onClick={()=>handleCopyContent('line5')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-20'>Heading and Paragraph:</h3>          
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line6">&lt;h1&gt;&lt;/h1&gt;</p></div><button onClick={()=>handleCopyContent('line6')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line7">&lt;h2&gt;&lt;/h2&gt;</p></div><button onClick={()=>handleCopyContent('line7')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line8">&lt;h3&gt;&lt;/h3&gt;</p></div><button onClick={()=>handleCopyContent('line8')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line9">&lt;h4&gt;&lt;/h4&gt;</p></div><button onClick={()=>handleCopyContent('line9')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line10">&lt;h5&gt;&lt;/h5&gt;</p></div><button onClick={()=>handleCopyContent('line10')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line11">&lt;h6&gt;&lt;/h6&gt;</p></div><button onClick={()=>handleCopyContent('line11')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line12">&lt;p&gt;&lt;/p&gt;</p></div><button onClick={()=>handleCopyContent('line12')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Basic HTML:</h3>    
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line13">&lt;title&gt;&lt;/title&gt;</p></div><button onClick={()=>handleCopyContent('line13')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>        
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line14">&lt;br&gt;&lt;/br&gt;</p></div><button onClick={()=>handleCopyContent('line14')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>        
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line15">&lt;hr&gt;&lt;/hr&gt;</p></div><button onClick={()=>handleCopyContent('line15')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>        
          
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Formatting:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line16">&lt;b&gt;&lt;/b&gt;</p></div><button onClick={()=>handleCopyContent('line16')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line17">&lt;em&gt;&lt;/em&gt;</p></div><button onClick={()=>handleCopyContent('line17')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line18">&lt;big&gt;&lt;/big&gt;</p></div><button onClick={()=>handleCopyContent('line18')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line19">&lt;small&gt;&lt;/small&gt;</p></div><button onClick={()=>handleCopyContent('line19')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line20">&lt;i&gt;&lt;/i&gt;</p></div><button onClick={()=>handleCopyContent('line20')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line21">&lt;acronym&gt;&lt;/acronym&gt;</p></div><button onClick={()=>handleCopyContent('line21')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line22">&lt;abbr&gt;&lt;/abbr&gt;</p></div><button onClick={()=>handleCopyContent('line22')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line23">&lt;address&gt;&lt;/address&gt;</p></div><button onClick={()=>handleCopyContent('line23')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line24">&lt;blockquote&gt;&lt;/blockquote&gt;</p></div><button onClick={()=>handleCopyContent('line24')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line25">&lt;center&gt;&lt;/center&gt;</p></div><button onClick={()=>handleCopyContent('line25')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line26">&lt;cite&gt;&lt;/cite&gt;</p></div><button onClick={()=>handleCopyContent('line26')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line27">&lt;pre&gt;&lt;/pre&gt;</p></div><button onClick={()=>handleCopyContent('line27')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line28">&lt;code&gt;&lt;/code&gt;</p></div><button onClick={()=>handleCopyContent('line28')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line29">&lt;dfn&gt;&lt;/dfn&gt;</p></div><button onClick={()=>handleCopyContent('line29')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line30">&lt;font&gt;&lt;/font&gt;</p></div><button onClick={()=>handleCopyContent('line30')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line31">&lt;ins&gt;&lt;/ins&gt;</p></div><button onClick={()=>handleCopyContent('line31')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line32">&lt;kbd&gt;&lt;/kbd&gt;</p></div><button onClick={()=>handleCopyContent('line32')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line33">&lt;mark&gt;&lt;/mark&gt;</p></div><button onClick={()=>handleCopyContent('line33')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line34">&lt;meter&gt;&lt;/meter&gt;</p></div><button onClick={()=>handleCopyContent('line34')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line35">&lt;progress&gt;&lt;/progress&gt;</p></div><button onClick={()=>handleCopyContent('line35')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line36">&lt;q&gt;&lt;/q&gt;</p></div><button onClick={()=>handleCopyContent('line36')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line37">&lt;rp&gt;&lt;/rp&gt;</p></div><button onClick={()=>handleCopyContent('line37')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line38">&lt;rt&gt;&lt;/rt&gt;</p></div><button onClick={()=>handleCopyContent('line38')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line39">&lt;s&gt;&lt;/s&gt;</p></div><button onClick={()=>handleCopyContent('line39')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line40">&lt;samp&gt;&lt;/samp&gt;</p></div><button onClick={()=>handleCopyContent('line40')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line41">&lt;del&gt;&lt;/del&gt;</p></div><button onClick={()=>handleCopyContent('line41')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line42">&lt;strike&gt;&lt;/strike&gt;</p></div><button onClick={()=>handleCopyContent('line42')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line43">&lt;strong&gt;&lt;/strong&gt;</p></div><button onClick={()=>handleCopyContent('line43')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line44">&lt;sub&gt;&lt;/sub&gt;</p></div><button onClick={()=>handleCopyContent('line44')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line45">&lt;sup&gt;&lt;/sup&gt;</p></div><button onClick={()=>handleCopyContent('line45')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line46">&lt;template&gt;&lt;/template&gt;</p></div><button onClick={()=>handleCopyContent('line46')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line47">&lt;time&gt;&lt;/time&gt;</p></div><button onClick={()=>handleCopyContent('line47')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line48">&lt;tt&gt;&lt;/tt&gt;</p></div><button onClick={()=>handleCopyContent('line48')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line49">&lt;u&gt;&lt;/u&gt;</p></div><button onClick={()=>handleCopyContent('line49')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line50">&lt;var&gt;&lt;/var&gt;</p></div><button onClick={()=>handleCopyContent('line50')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line51">&lt;bdi&gt;&lt;/bdi&gt;</p></div><button onClick={()=>handleCopyContent('line51')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line52">&lt;bdo&gt;&lt;/bdo&gt;</p></div><button onClick={()=>handleCopyContent('line52')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line53">&lt;wbr&gt;&lt;/wbr&gt;</p></div><button onClick={()=>handleCopyContent('line53')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>             
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line54">&lt;ruby&gt;&lt;/ruby&gt;</p></div><button onClick={()=>handleCopyContent('line54')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Forms and Input:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line55">&lt;form&gt;&lt;/form&gt;</p></div><button onClick={()=>handleCopyContent('line55')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; name=&quot;text&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; name=&quot;text&ldquo; value=&quot;&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; name=&quot;text&ldquo; value=&quot;&ldquo; size=&quot;10&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; name=&quot;text&ldquo; value=&quot;&ldquo; maxlength=&quot;10&ldquo; size=&quot;10&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;number&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;number&ldquo; name=&quot;number&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;number&ldquo; name=&quot;number&ldquo; max=&quot;5&ldquo; min=&quot;4&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;email&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;email&ldquo; name=&quot;email&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;radio&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;radio&ldquo; name=&quot;radio&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;checkbox&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;checkbox&ldquo; checked &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;file&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; pattern=&quot;&ldquo; title=&quot;&ldquo; &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; placeholder=&quot;type here&ldquo; required &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line56">&lt;input type=&quot;text&ldquo; placeholder=&quot;type here&ldquo; required autofocus &gt;&lt;/input&gt;</p></div><button onClick={()=>handleCopyContent('line56')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line57">&lt;textarea&gt;&lt;/textarea&gt;</p></div><button onClick={()=>handleCopyContent('line57')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line58">&lt;button&gt;&lt;/button&gt;</p></div><button onClick={()=>handleCopyContent('line58')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line59">&lt;select&gt;&lt;/select&gt;</p></div><button onClick={()=>handleCopyContent('line59')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line60">&lt;optgroup&gt;&lt;/optgroup&gt;</p></div><button onClick={()=>handleCopyContent('line60')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line61">&lt;option&gt;&lt;/option&gt;</p></div><button onClick={()=>handleCopyContent('line61')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line62">&lt;label&gt;&lt;/label&gt;</p></div><button onClick={()=>handleCopyContent('line62')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line63">&lt;fieldset&gt;&lt;/fieldset&gt;</p></div><button onClick={()=>handleCopyContent('line63')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line64">&lt;legend&gt;&lt;/legend&gt;</p></div><button onClick={()=>handleCopyContent('line64')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line65">&lt;datalist&gt;&lt;/datalist&gt;</p></div><button onClick={()=>handleCopyContent('line65')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line66">&lt;output&gt;&lt;/output&gt;</p></div><button onClick={()=>handleCopyContent('line66')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                          
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Frames:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line67">&lt;frame&gt;&lt;/frame&gt;</p></div><button onClick={()=>handleCopyContent('line67')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line68">&lt;frameset&gt;&lt;/frameset&gt;</p></div><button onClick={()=>handleCopyContent('line68')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line69">&lt;noframes&gt;&lt;/noframes&gt;</p></div><button onClick={()=>handleCopyContent('line69')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line70">&lt;iframe&gt;&lt;/iframe&gt;</p></div><button onClick={()=>handleCopyContent('line70')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>           
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Images:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line71">&lt;img src=&quot;&ldquo; alt=&quot;&ldquo;&gt;&lt;/img&gt;</p></div><button onClick={()=>handleCopyContent('line71')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line72">&lt;img src=&quot;&ldquo; alt=&quot;&ldquo; width=&quot;&ldquo; height=&quot;&ldquo;&gt;&lt;/img&gt;</p></div><button onClick={()=>handleCopyContent('line72')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line73">&lt;map&gt;&lt;/map&gt;</p></div><button onClick={()=>handleCopyContent('line73')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line74">&lt;area&gt;&lt;/area&gt;</p></div><button onClick={()=>handleCopyContent('line74')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line75">&lt;canvas&gt;&lt;/canvas&gt;</p></div><button onClick={()=>handleCopyContent('line75')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line76">&lt;figcaption&gt;&lt;/figcaption&gt;</p></div><button onClick={()=>handleCopyContent('line76')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line77">&lt;figure&gt;&lt;/figure&gt;</p></div><button onClick={()=>handleCopyContent('line77')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line78">&lt;picture&gt;&lt;/picture&gt;</p></div><button onClick={()=>handleCopyContent('line78')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>  
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line79">&lt;svg&gt;&lt;/svg&gt;</p></div><button onClick={()=>handleCopyContent('line79')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                               
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Audio/Video:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line80">&lt;audio src=&quot;&ldquo;&gt;&lt;/audio&gt;</p></div><button onClick={()=>handleCopyContent('line80')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line81">&lt;source&gt;&lt;/source&gt;</p></div><button onClick={()=>handleCopyContent('line81')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line82">&lt;track&gt;&lt;/track&gt;</p></div><button onClick={()=>handleCopyContent('line82')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line83">&lt;video src=&quot;&ldquo;&gt;&lt;/video&gt;</p></div><button onClick={()=>handleCopyContent('line83')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
                                       
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Links:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line84">&lt;a href=&quot;&ldquo; &gt;&lt;/a&gt;</p></div><button onClick={()=>handleCopyContent('line84')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line85">&lt;link&gt;&lt;/link&gt;</p></div><button onClick={()=>handleCopyContent('line85')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line86">&lt;nav&gt;&lt;/nav&gt;</p></div><button onClick={()=>handleCopyContent('line86')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                                             
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Lists:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line87">&lt;menu&gt;&lt;/menu&gt;</p></div><button onClick={()=>handleCopyContent('line87')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line88">&lt;ul&gt;&lt;/ul&gt;</p></div><button onClick={()=>handleCopyContent('line88')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line89">&lt;ol&gt;&lt;/ol&gt;</p></div><button onClick={()=>handleCopyContent('line89')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line90">&lt;li&gt;&lt;/li&gt;</p></div><button onClick={()=>handleCopyContent('line90')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line91">&lt;dir&gt;&lt;/dir&gt;</p></div><button onClick={()=>handleCopyContent('line91')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line92">&lt;dl&gt;&lt;/dl&gt;</p></div><button onClick={()=>handleCopyContent('line92')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line93">&lt;dt&gt;&lt;/dt&gt;</p></div><button onClick={()=>handleCopyContent('line93')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div> 
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line94">&lt;dd&gt;&lt;/dd&gt;</p></div><button onClick={()=>handleCopyContent('line94')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                                                           
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Tables:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line95">&lt;table&gt;&lt;/table&gt;</p></div><button onClick={()=>handleCopyContent('line95')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line96">&lt;caption&gt;&lt;/caption&gt;</p></div><button onClick={()=>handleCopyContent('line96')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line97">&lt;th&gt;&lt;/th&gt;</p></div><button onClick={()=>handleCopyContent('line97')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line98">&lt;td&gt;&lt;/td&gt;</p></div><button onClick={()=>handleCopyContent('line98')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line99">&lt;tr&gt;&lt;/tr&gt;</p></div><button onClick={()=>handleCopyContent('line99')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line100">&lt;thead&gt;&lt;/thead&gt;</p></div><button onClick={()=>handleCopyContent('line100')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line101">&lt;tbody&gt;&lt;/tbody&gt;</p></div><button onClick={()=>handleCopyContent('line101')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line102">&lt;tfoot&gt;&lt;/tfoot&gt;</p></div><button onClick={()=>handleCopyContent('line102')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line103">&lt;col&gt;&lt;/col&gt;</p></div><button onClick={()=>handleCopyContent('line103')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line104">&lt;colgroup&gt;&lt;/colgroup&gt;</p></div><button onClick={()=>handleCopyContent('line104')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                                           
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Styles and Semantics:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line105">&lt;div&gt;&lt;/div&gt;</p></div><button onClick={()=>handleCopyContent('line105')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line106">&lt;span&gt;&lt;/span&gt;</p></div><button onClick={()=>handleCopyContent('line106')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line107">&lt;header&gt;&lt;/header&gt;</p></div><button onClick={()=>handleCopyContent('line107')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line108">&lt;hgroup&gt;&lt;/hgroup&gt;</p></div><button onClick={()=>handleCopyContent('line108')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line109">&lt;footer&gt;&lt;/footer&gt;</p></div><button onClick={()=>handleCopyContent('line109')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line110">&lt;main&gt;&lt;/main&gt;</p></div><button onClick={()=>handleCopyContent('line110')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line111">&lt;section&gt;&lt;/section&gt;</p></div><button onClick={()=>handleCopyContent('line111')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line112">&lt;aside&gt;&lt;/aside&gt;</p></div><button onClick={()=>handleCopyContent('line112')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line113">&lt;details&gt;&lt;/details&gt;</p></div><button onClick={()=>handleCopyContent('line113')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line114">&lt;dialog&gt;&lt;/dialog&gt;</p></div><button onClick={()=>handleCopyContent('line114')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line115">&lt;summary&gt;&lt;/summary&gt;</p></div><button onClick={()=>handleCopyContent('line1115')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line116">&lt;data&gt;&lt;/data&gt;</p></div><button onClick={()=>handleCopyContent('line1116')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>                                 
          </div>

          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Meta Info:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line117">&lt;meta&gt;&lt;/meta&gt;</p></div><button onClick={()=>handleCopyContent('line1117')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line118">&lt;base&gt;&lt;/base&gt;</p></div><button onClick={()=>handleCopyContent('line1118')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line119">&lt;basefont&gt;&lt;/basefont&gt;</p></div><button onClick={()=>handleCopyContent('line1119')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>          
          </div>
          <div className="flex flex-col border rounded-md p-4 m-4">
          <h3 className='font-bold leading-10'>Programming:</h3>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line120">&lt;script&gt;&lt;/script&gt;</p></div><button onClick={()=>handleCopyContent('line1120')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line121">&lt;noscript&gt;&lt;/noscript&gt;</p></div><button onClick={()=>handleCopyContent('line1121')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line122">&lt;embed&gt;&lt;/embed&gt;</p></div><button onClick={()=>handleCopyContent('line122')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line123">&lt;object&gt;&lt;/object&gt;</p></div><button onClick={()=>handleCopyContent('line123')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          <div className="flex justify-between p-1"><div className="flex"><input type="checkbox" className="checkbox" checked/><p className='pl-4' id="line124">&lt;param&gt;&lt;/param&gt;</p></div><button onClick={()=>handleCopyContent('line124')}  className="border bg-fuchsia-600 text-white hover:border-fuchsia-800 rounded-md py-2 pl-4 pr-6 font-bold">Copy</button></div>
          </div>


        {/* ===========Extra Portion_ Need to recheck=========== */}
          <div>
          <div className="mt-6 mx-auto hidden">
            {/* Node Installation */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Node Installation
                  </h5>
                </a>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  mkdir ${<span className="text-rose-800">myapp</span>}{" "}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  cd ${<span className="text-rose-800">myapp</span>}{" "}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  code .
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  npm init -y
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  open an index.js file in the root folder
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  in the package.json file write &ldquo;start&rdquo;:
                  &ldquo;node index.js&rdquo;, inside the &quot;script&ldquo;: {} object
                </p>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">type in the terminal node index.js</p> */}

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Exprss Installation */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ExprssJS instatallation
                  </h5>
                </a>
                <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  npm install express
                </pre>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* CORS Installation*/}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    CORS Installation
                  </h5>
                </a>
                <p>npm install cors</p>
                <p>
                  in the index.js file const cors = require(&apos;cors&apos;)
                </p>
                <p>in the index.js file app.use(cors())</p>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Nodemon Installation */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nodemon Installation
                  </h5>
                </a>
                <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  npm install -g nodemon
                </pre>
                <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  run in the terminal nodemon index.js
                </pre>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mongodb Installation */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MongoDB Installation
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  npm install mongoDB
                </p>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* dotenv Installation */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    npm install dotenv
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  npm install dotenv
                </p>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Gitinore  */}
            <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gitingnore
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  git init
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  create .gitignore file in the root folder
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  open the .gitinore file and write node_modules
                </p>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 mx-auto">
              {/* Remote Control*/}
              <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Remote Control
                    </h5>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Types of Remote Control
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Components of Remote Control
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Range of Remote Controls
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Software of Remote Controls
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Monitor*/}
              <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Monitor
                    </h5>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Types of Monitors
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Sizes of Monitors
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Prices of Monitors
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    How a monitor works
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Speaker*/}
              <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Speaker
                    </h5>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    How a speaker works
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Volume of Speakers
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Prices of Speakers
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Menufacturing Process of Speakers
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Components of Speakers
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Sound Quality Control of Speakers
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Microphone/Mic*/}
              <div className="max-w-full bg-green-600 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Microphone/Mic
                    </h5>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    How a Mic/Microphone works
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Volume of Mics
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Prices of Mics
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Menufacturing Process of Mics
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Components of Mics
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Sound Quality Control of Mics
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
};

export default HTMLComponent;