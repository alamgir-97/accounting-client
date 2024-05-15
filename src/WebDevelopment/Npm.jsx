const Npm = () => {
    return (
        <>
            <div className="bg-lime-400 p-4 m-4 border flex flex-col gap-2">
                <p className="bg-lime-500"><span className="font-bold">Step-1:</span>Create a project</p>
                <p className="bg-lime-500"><span className="font-bold">Step-2:</span>Create a new gitHub repositiory</p>
                <p><span className="font-semibold">Sub-Step-2.1:</span>Login in GitHub </p>
                <p><span className="font-semibold">Sub-Step-2.2:</span>Create GitHub a new Repository</p>
                <p><span className="font-semibold">Sub-Step-2.3</span>Push the project into to the new repository</p>
                
                <p className="pl-4">{`echo "# npm-alamgir2" >> README.md`}</p>
                <p className="pl-4">{`git init`}</p>
                <p className="pl-4">{`git add README.md`}</p>
                <p className="pl-4">{`git add .`}</p>
                <p className="pl-4">{`git commit -m "first commit"`}</p>
                <p className="pl-4">{`git branch -M main`}</p>
                <p className="pl-4">{`git remote add origin https://github.com/alamgir-97/npm-alamgir2.git`}</p>
                <p className="pl-4">{`git push -u origin main`}</p>
                    
                <p className="bg-lime-500"><span className="font-bold">Step-3:</span>Publish in the NPMJS.com</p>
                <p><span className="font-semibold">Sub-Step-3.1:</span>npm init</p>
                <p><span className="font-semibold">Sub-Step-3.2:</span>Login to the npmjs using npm lonin</p>
                <p><span className="font-semibold">Sub-Step-3.3:</span>npm publish</p>
                <section className='border p-4 rounded-md my-2'>
      <div> 
          <ol className="m-4 list-decimal"> 
          <h1>NPM Package</h1>
          <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=Cw_faFQMoIc" target="_blank" rel='noreferrer'>Build and Publish Your Own NPM Package in 2 Minutes</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=0Shv-exwsQw" target="_blank" rel='noreferrer'>NPM (Node Package Manager) Crash Course কমপ্লিট বাংলা টিউটোরিয়াল</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=VAUfyxw-Yvk" target="_blank" rel='noreferrer'>Publish Your NPM Package & Get Job 🔥 - Here&apos;s how</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=jHDhaSSKmB0&t=45s" target="_blank" rel='noreferrer'>NPM Crash Course</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=aKTSC4D1GL8" target="_blank" rel='noreferrer'>The NPM Library Speedrun - 90 minutes to build, CI, and publish</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=GW1sY_Ipfd0" target="_blank" rel='noreferrer'>Publish to NPM using GitHub Actions | Publishing Node.js packages to NPM using GitHub Actions</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=7CNC0QBCY-Y" target="_blank" rel='noreferrer'>Private NPM Packages using GitHub Actions & Packages</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=XHQi5a0TmMc&t=63s" target="_blank" rel='noreferrer'>How to Create and Publish a React Component Library</a></li>
            <li><a className='text-blue-500' href="https://www.youtube.com/watch?v=btVwaMWuhtc" target="_blank" rel='noreferrer'>How To Build a React UI Library ep1: Setting up the build system and NPM publishing</a></li>
          </ol>
          </div>
      </section>
                
            </div>
        </>
    );
};

export default Npm;