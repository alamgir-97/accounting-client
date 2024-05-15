const UIStyleGuide = () => {
    return (
        <div>
            
{/* UI Style Guide */}
<div className="border rounded-xl">
<h1 className="m-4 border rounded-lg text-center my-2 py-1 font-bold text-2xl bg-amber-400">UI Style Guide</h1>

{/* Color Palette */}
<div className="m-4 border rounded-lg p-4">
<h2 className="text-center rounded-md border my-2 py-1 font-bold text-2xl bg-amber-300">Color Palette</h2>
<div className='flex flex-wrap gap-5 justify-center'>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg my-auto" >
       <div> 

            <p className="text-center">Brand Color: </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg" >
        <div> 
            <p className="text-center">Supporting Color1:Success Messages/Green </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg" >
        <div> 
            <p className="text-center">Supporting Color2:Warning/Orange or Yellow </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg" >
        <div> 
            <p className="text-center">Supporting Color3:Dangerous Situation/Red </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg" >
        <div> 
            <p className="text-center">Supporting Color4:Nutral Informational Messages/Blue </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>
</div>
    <div className="bg-emarald-500 w-[18vw] h-[7vw] border rounded-lg" >
    
        <div> 
            <p className="text-center">Neutrals: </p>
            <p className="text-center">Font Color: </p>
            <p className="text-center">Background Color: </p>
        </div>
    </div>     
</div>

{/* Buttons Style */}
<div className="m-4 border rounded-lg p-4">
<h2 className="text-center rounded-md border my-2 py-1 font-bold text-2xl  bg-amber-300">Button Style</h2>
<h3 className="text-left rounded-md border my-2 py-1 font-bold text-xl  bg-amber-300">1. button link will not be refreshed after click 2. will change style after state change (hover, active, clicked, not-clicked). 3.   </h3>
<div className='flex flex-wrap gap-5'>

<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn">Button</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-active">Default</button>
<button className="btn btn-active btn-neutral">Neutral</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-ghost">Ghost</button>
<button className="btn btn-active btn-link">Link</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-lg">Large</button>
<button className="btn">Normal</button>
<button className="btn btn-sm">Small</button>
<button className="btn btn-xs">Tiny</button>
</div>
<h2>Responsive Button:</h2>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>

</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-wide">Wide</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<a role="button" className="btn">Link</a>
<button type="submit" className="btn">Button</button>
<input type="button" value="Input" className="btn" />
<input type="submit" value="Submit" className="btn" />
<input type="radio" aria-label="Radio" className="btn" />
<input type="checkbox" aria-label="Checkbox" className="btn" />
<input type="reset" value="Reset" className="btn" />
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn" disabled="disabled">Disabled using attribute</button>
<button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">Disabled using class name</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>
<button className="btn">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button>
</div>
<div className='flex flex-wrap gap-5 m-4 border'>

</div>
</div>

</div>
</div>
<div className="border m-4 rounded-lg">
<p className="border rounded-md p-2 text-blue-600 m-4 bg-sky-300"><a href="https://www.youtube.com/@Cognition-Labs" target="_blank" rel="noreferrer">Link: Cognition Lab</a></p>
<p className="border rounded-md p-2 text-blue-600 m-4 bg-sky-300"><a href="https://www.youtube.com/watch?v=-DT3qgU9hfI" target="_blank" rel="noreferrer">Link: Devin AI - Software Security Nightmare</a></p>
</div>
<div className="border m-4 rounded-lg">
<p className="border rounded-md p-2 text-blue-600 m-4 bg-sky-300"><a href="https://www.youtube.com/watch?v=yYwEnLYT55c" target="_blank" rel="noreferrer">Link: How I make UI color palettes</a></p>
<p className="border rounded-md p-2 text-blue-600 m-4 bg-sky-300"><a href="https://www.youtube.com/watch?v=eEWRbpDu6CU" target="_blank" rel="noreferrer">Link: 5 laws of design layout & composition *golden rules*</a></p>
<p className="border rounded-md p-2 text-blue-600 m-4 bg-sky-300"><a href="https://www.youtube.com/watch?v=w1kITFbUU1U" target="_blank" rel="noreferrer">Link: UI Design Trend 2024: Plasticity</a></p>
</div>

</div>
    );
};

export default UIStyleGuide;