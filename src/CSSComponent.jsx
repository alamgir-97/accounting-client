import CSS from "./WebDevelopment/CSS";
import { NavLink } from "react-router-dom";


const CSSComponent = () => {
    return (
        <> 
        <div className="flex gap-4 bg-lime-400 p-4 m-4 font-bold border">
          <NavLink to="cssProperties" classname="border border-lime-600 rounded-md m-4">CSS Properties</NavLink>
          <NavLink to="cssRelated" classname="border border-lime-600 rounded-md m-4">CSS Related</NavLink>
          <NavLink to="cssDesignSystem" classname="border border-lime-600 rounded-md m-4">Design System</NavLink>
        </div>
        <CSS></CSS>

        <div>  
               {/*  ==========UI and UX related topics and links==========*/}
          <div className="border p-4 flex flex-wrap justify-evenly gap-4">
            <div className="bg-green-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Color</h3>
             <p>1. Color Palette</p>
            </div>
            <div className="bg-rose-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Font</h3>
             <p>1. Font Family</p>
             <p>2. Font size</p>
             <p>3. Spacing/Line Height</p>
             <p>-<a href="https://fonts.google.com/" target='_blank' rel='noreferrer'>googlefonts</a></p>
            </div>
            <div className="bg-sky-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Button</h3>
             <p>1. Button Size</p>
             <p>2. Button Shape</p>
             <p>3. Button Text</p>
             <p>4. Button Color</p>
             <p>5. Button Blur Color</p>
             <p>6. Button Background Color</p>
             <p>-<a href="https://www.flaticon.com/" target='_blank' rel='noreferrer'>flaticon</a></p>
             <p>-<a href="https://heroicons.com/" target='_blank' rel='noreferrer'>heroicons</a></p>
             <p>-<a href="https://feathericons.com/" target='_blank' rel='noreferrer'>feathericons</a></p>
             <p>-<a href="https://fonts.google.com/" target='_blank' rel='noreferrer'>googlefonts</a></p>
            </div>
            <div className="bg-yellow-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Layout</h3>
             <p>1. Break Points</p>             
            </div>
            <div className="bg-emerald-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Image</h3>
             <p>-<a href="https://www.freepik.com/" target='_blank' rel='noreferrer'>freepik</a></p>         
             <p>-<a href="https://www.pexels.com/" target='_blank' rel='noreferrer'>pexels</a></p>         
             <p>-<a href="https://pixabay.com/" target='_blank' rel='noreferrer'>pixabay</a></p>         
             <p>-<a href="https://unsplash.com/" target='_blank' rel='noreferrer'>unsplash</a></p>         
            </div>
            <div className="bg-violet-400 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Link</h3>
             <p>-Cursor</p>     
             <p>-Link Style</p>     
             <p>-Link States: focus</p>     
             <p>-hover, active, visited, focus</p>     
            </div>
            <div className="bg-violet-400 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Logo</h3> 
            </div>
            <div className="bg-fuchsia-500 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">UX Library</h3>
             <a href="https://www.uxlibrary.org/" target="_blank" rel="noreferrer">link:UX Library</a>  
            </div>
            <div className="bg-sky-600 border p-4 w-1/3">
             <h3 className="text-3xl text-center font-bold">Website Samples</h3>
             <div className="bg-blue-500 border m-4 py-auto rounded-md"><a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">www.awwards.com</a></div>
             <div className="bg-green-500 border m-4 py-auto rounded-md"><a href="https://dribbble.com/" target="_blank" rel="noreferrer">www.dribbble.com</a></div>
             <div className="bg-blue-500 border m-4 py-auto rounded-md"><a href="https://themeforest.net/" target="_blank" rel="noreferrer">www.themeforest.com</a></div>
             <div className="bg-green-500 border m-4 py-auto rounded-md"><a href="https://www.behance.net/" target="_blank" rel="noreferrer">www.behance.com</a></div> 
             <div className="bg-green-500 border m-4 py-auto rounded-md"><a href="https://www.producthunt.com/" target="_blank" rel="noreferrer">www.producthunt.com</a></div> 
            </div>
          </div>
            
          </div>

      {/* ==========Color Palette========== */}
  <div className="w-full z-20 bg-transparent">
      <h3 className="font-bold text-2xl">Color Palette</h3>
      <div className="flex flex-wrap">
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is accent color</p>
      </div>
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is  a text</p>
      </div>
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is  a text</p>
      </div>
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is  a text</p>
      </div>
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is  a text</p>
      </div>
      <div className="w-1/3 h-1/4 border rounded-lg m-4 bg-red-400 text-xl flex justify-center items-center">
          <p className="text-red-800 m-8 text-center">This is  a text</p>
      </div>
    </div>
  </div>
         
         {/*=============Test=============  */}
         <div className="circlePosition w-[360px] h-[200px] bg-[#eb26fd] rounded-[100%] z-10  translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
         <div className="w-[360px] h-[300px] bg-[#f13b3b] rounded-[70%] z-10  translate-x-[-50%] translate-y-[-50%] blur-[70px]"></div>

        <div>
            <h1 className="text-4xl text-center font-bold pt-2 pb-10">CSS</h1> 
            <div className="border mx-2">
            <h1 className="text-4xl text-center font-bold pt-2 pb-10">BASIC CSS</h1> 
                <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">CSS Syntax</h3>
                <p className="pl-4 py-2 bg-emerald-500 border">{`tagSelector {property1: value; property2: value; ...;}`}</p>
                <p className="pl-4 py-2 bg-emerald-500 border">{`#idSelector {property1: value; property2: value; ...;}`}</p>
                <p className="pl-4 py-2 bg-emerald-500 border">{`.classSelector {property1: value; property2: value; ...;}`}</p>
                
                <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">What is CSS Slector</h3>
                <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Comment</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">CSS Properties</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">CSS Values</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Class Selector</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Id Selector</h3>              
              <h3 className="pl-4 py-2 text-lg bg-emerald-500 border">CSS Box Model (Content, padding, border, outline-offset, outline, margin) ( box-sizing, height, width, max-height, max-width, padding, border, outline, margin)</h3>              
              <div className="border p-4 m-4"><p className="bg-pink-500">min-width, width, max-width, min-height, height, max-height,</p></div>
              <div className="border p-4 m-4"><p className="bg-pink-500">padding, padding-top, padding-left, padding-bottom, padding-right</p>
              <p>padding-block, padding-block-start, padding-block-end,</p>
              <p>padding-inline, padding-inline-start, padding-inline-end,</p></div>
              <div className="border p-4 m-4"><p className="bg-pink-500">border, border-top, border-left, border-bottom, border-right,</p>
              <p>border-style, border-top-style, border-left-style, border-bottom-style, border-right-style,</p>
              <p>border-width, border-top-width, border-left-width, border-bottom-width, border-right-width,</p>
              <p>border-color, border-top-color, border-left-color, border-bottom-color, border-right-color,</p>
              <p>border-radius, border-top-left-radius, border-bottom-left-radius, border-bottom-right-radius,border-top-right-radius, border-right-radius, border-start-start-radius, border-start-end-radius, border-end-start-radius, border-end-end-radius,</p>
              <p>border-spacing,</p>
              <p>border-collapse,</p>          
              <p>border-image, border-image-outset, border-image-repeat, border-image-slice, border-image-source, border-image-width,</p>     
              <p>border-block, border-block-color, border-block-end, border-block-end-color, border-block-end-style, 
              border-block-end-width, border-block-start, border-block-start-style, border-block-start-width, 
              border-block-style, border-block-width, </p>     
              <p>border-inline, border-inline-color, border-inline-end, border-inline-end-color, border-inline-end-style, border-inline-end-width,
              border-inline-start, border-inline-start-color, border-inline-start-style, border-inline-start-width, 
              border-inline-style, border-inline-width,</p>  </div>
              <div className="border p-4 m-4"><p  className="bg-pink-500"> margin, margin-top, margin-left, margin-bottom, margin-right, </p>
              <p>margin-block, margin-block-start, margin-block-end,  </p>  
              <p>margin-inline, margin-inline-start, margin-inline-end</p></div>
              <div className="border p-4 m-4"><p>outline, outline-color, outline-style, outline-width,</p>
              <p>outline-offset,</p> </div>
              
               
              
                            

               <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">
               color, style, width/height/radius/offset units
              </h3>              
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Units <span className="font-normal">cm, mm, in=inches (1in = 96px = 2.54cm), <span className="text-rose-600">em</span>, <span className="text-rose-600">rem</span>, <span className="text-rose-600">px</span>=pixels (1px = 1/96th of 1in), pt=points (1pt = 1/72 of 1in), pc=picas (1pc = 12 pt), %, <span className="text-rose-600">vw</span>, <span className="text-rose-600">vh</span>, ch, ex, vmin, vmax  absolute vs relative unit, static vs dynamic units </span></h3>              
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Display: (flex, grid, block, inline, inline-block)</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Position: (static, fixed, absolute, relative, sticky) (top, bottom, left, right) </h3> 
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Image related CSS</h3>      
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Color <span className="font-normal">Hexadecimal colors, Hexadecimal colors with transparency; RGB colors; RGBA colors; HSL colors; HSLA colors; Predefined/Cross-browser color names; With the current color keyword;</span></h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Button Styling: background-color; background-image, background-gradient, button shape, button-color change on state change, button-text change, button-icon, button icon change on event change, button-size change, button responsiveness, </h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Font related css (Typography): font, font-style, font-variant, font-weight, font-size, line-height, font-family, 
              font-feature-settings, font-kerning, font-language-override,  font-size-adjust, font-stretch,  font-synthesis,
              text-combine-upright, text-emphasis-style, text-indent, text-justify, text-orientation, text-overflow, text-shadow, text-transform,
              font-variant-alternates, font-variant-caps, font-variant-east-asian, font-variant-ligatures, font-variant-numeric, font-variant-position,
              text-align, text-align-last, 
              text-decoration-color, text-decoration-line, text-decoration-style, text-decoration-thickness, text-emphasis, text-emphasis-color, text-emphasis-position,  text-underline-position, letter-spacing, line-break,  word-break, word-spacing, word-wrap, 
              page-break-after, page-break-before, page-break-inside    </h3>
              
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">List Style:  list-style, list-style-image, list-style-position, list-style-type</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Flex 
              <span className="font-normal">display: flex; flex-direction: row; gap: 10px;</span> flex, flex-basis, 
              flex-direction, flex-flow, flex-grow, flex-shrink, flex-wrap,
              gap, column-gap, row-gap, align-content, align-items, align-self, justify-content, justify-items, justify-self,
              </h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Grid: grid, grid-area, grid-auto-columns, grid-auto-flow, grid-auto-rows, 
              grid-column, grid-column-end, grid-column-gap, grid-column-start, grid-gap, grid-row, grid-row-end, grid-row-gap, 
              grid-row-start, grid-template, grid-template-areas, grid-template-columns, grid-emplate-rows,
              <span className="text-yellow-200">gap, column-gap, row-gap, align-content, align-items, align-self, justify-content, justify-items, justify-self,</span>
              </h3>
              </div>
            <div>
            <h1 className="text-4xl text-center font-bold pt-2 pb-10">Advanced CSS</h1>                
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Pseudo Class</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Pseudo Element</h3>              
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Page Layout</h3>             
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Responsiveness: </h3>           
              <p className="pl-4 py-2  bg-emerald-500 border">Media Query</p>           
              <p className="pl-4 py-2  bg-emerald-500 border">break-points</p>           
              <p className="pl-4 py-2  bg-emerald-500 border">layout change on screen size change, grid, flex</p>           
              <p className="pl-4 py-2  bg-emerald-500 border">relative units, </p>           
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Sidebar</h3>             
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Animation: animation, animation-delay, 
              animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, 
              animation-play-state, animation-timing-function, @keyframes,</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Gradient</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Box Shadow</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Drop Shadow</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">Theme and Dynamic Theme</h3>
              <h3 className="pl-4 py-2 font-bold text-lg bg-emerald-500 border">CSS Function</h3>
              <p>Display: block, inline-block, </p>         
              <p>Page Layout/Website Layout</p>
              <p>Logo</p>          
              <p>Add icons</p>
             
              
              </div>
              <div className="border p-4 my-8">
                <h2 className="font-bold text-xl">Typography</h2>
                <h3 className="font-bold text-lg">Typography related HTML tags</h3>
                <p><span className='font-bold leading-10'>Formatting:</span>
          
          <input type="checkbox" className="checkbox"/>&lt;b&gt;          
          <input type="checkbox" className="checkbox"/>&lt;strong&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;i&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;u&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;center&gt;,          
          <input type="checkbox" className="checkbox"/>&lt;del&gt;,
          <input type="checkbox" className="checkbox"/>&lt;dfn&gt;,
          <input type="checkbox" className="checkbox"/>&lt;em&gt;,
          <input type="checkbox" className="checkbox"/>&lt;font&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;ins&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;kbd&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;mark&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;meter&gt;, 
          <input type="checkbox" className="checkbox"/>&lt;q&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;rp&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;rt&gt;, 
          <input type="checkbox" className="checkbox"/>&lt;s&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;samp&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;big&gt;,          
          <input type="checkbox" className="checkbox"/>&lt;small&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;strike&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;samp&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;sub&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;sup&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;template&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;time&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;tt&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;var&gt;,      
          <input type="checkbox" className="checkbox"/>&lt;wbr&gt;,      
          </p>
                <h3 className="font-bold text-lg">Typography related CSS Properties</h3>
                </div>
                 {/* ===============Font=============== */}
                 <div className="border m-8">
              <h2>Font Type</h2>
              <h2>Font Family</h2>
              <h2>Fallback font</h2>
              <h2>Google Font</h2>
              <h2>Custom Font</h2>
              <h2>How to create new font/custom font</h2>              
              </div>
             
              {/* =========Color=============== */}
              <div className="border p-4 m-4">
                <h2 className="font-bold text-2xl">Color</h2>
                <h3 className="font-semibold text-lg">Primary Colors (Red Green Yellow)</h3>
                <h3 className="font-semibold text-lg">Secondary Color</h3>
                <h3 className="font-semibold text-lg">Tertiary Color</h3>
                <h3 className="font-semibold text-lg">hue, tint, shadow, transparency</h3>
                <h3 className="font-semibold text-lg">accent color</h3>
                <h3 className="font-semibold text-lg">wave length of color</h3>
                <h3 className="font-semibold text-lg">named color, hex-color, rgb color, rgba-color</h3>
                <h3 className="font-semibold text-lg">gradient</h3>
                <h3 className="font-semibold text-lg">mash color</h3>
                <h3 className="font-semibold text-lg">transparency</h3>
                <h2 className="font-semibold text-2xl">Colors Related CSS:</h2>
                <h3 className="font-semibold text-lg">accent-color, border-block-color, border-botom-color, border-color, 
                border-block-end-color, border-left-color, border-right-color,, border-inline-color, border-inline-end-color, 
                border-inline-start-color, border-top-color, caret-color,color, column-rule-color, outline-color, scrollbar-color, text-decoration-color, text-emphasis-color, </h3>
              </div>
              
                   {/* =========Image=============== */}
              <div className="m-8 border">
                <h2 className="text-4xl">Image Related CSS:</h2>
                <h2>Image size</h2>
                <h2>Image optimaztion</h2>
                <h2>Image Format</h2>
                <h2>Image Type: vector, raster</h2>
                <h2>css supported Image type</h2>
                <h2>Image releted website: </h2>
                <h2>Image overlay</h2>
                <h2>Image filter</h2>
                <h2>Image overflow</h2>
              </div>

               
                {/* ===============Button=============== */}
              <div className="border m-8">
              <h2>Button</h2>
              </div>

              <div className="border p-4 m-4">
                <p className="text-lg">Background: background, background-attachment, background-blend-mode, 
              background-clip, background-color, background-image, background-origin, background-position, 
              background-position-x, background-position-y, background-repeat, background-size,</p> 
              </div>               


              <div className="border p-4 m-4">
                <p className="text-lg">Shadow: text-shadow, box-shaodow</p> 
                <a className='text-blue-800' href="https://www.youtube.com/watch?v=IglKvPNXxdQ&list=PLgH5QX0i9K3qjCBXjTmv7Xeh8MDUUVJDO&index=36">css full course bangla tutorial 33 : text-shadow and box-shadow</a>
              </div>    

                   

                            

              <div className="border p-4 m-4">              
                <p>accent-color, all, aspect-ratio, backdrop-filter, backface-visibility,  
              block-size, box-decoration-break, box-reflect, box-shadow, break-after, break-before,  
              break-inside, caption-side, caret-color, float, clear, clip, clip-path,  
              color, content, counter-increment, counter-reset, counter-set, cursor,   
              direction, empty-cells, filter, hanging-punctuation, hyphens, hypenate-character,  
              image-rendering, inline-size, inset, inset-block, inset-block-end, inset-block-start, isolation,
              max-block-size, max-inline-size, min-block-size, mix-blend-mode,  
              object-fit, object-position,  order</p>  
              orphans, paint-order, perspective, perspective-origin, place-content, place-items, place-self, pointer-events,  <br></br> 
              quotes, resize, tab-size, table-layout, unicode-bidi, user-select,  <br></br> 
              vertical-align, opacity, visibility, whitespace, widows, writing-mode, z-index  
              <p>column-count, column-fill, column-rule, column-rule-color, column-rule-style, column-rule-width,  <br></br> 
              column-span, column-width, columns,</p>
              <br />
              <p>mask, mask-clip, mask-composite, mask-image, mask-mode, mask-origin, mask-position, mask-repeat, mask-size,   
              mask-type,</p>
              <br></br>
              <p>offset, offset-anchor, offset-distance, offset-path, offset-rotate</p>
              <br></br>
              <p>transform, transform-origin, transform-style,</p>
              <br></br>
              <p>rotate, scale, translate,</p>
                <br></br>
              <p>transition, transition-delay, transition-duration, transition-property, transition-timing-function,</p>
                <br></br>           
            <p> @charset, @font-face, @font-feature-values, @import, @media,  </p>           
              </div>import app from &apos;./firebase/firebase.config&apos;;
 


              <div className="border p-4 m-4">
              <p>overflow, overflow-anchor, overflow-wrap, overflow-x, overflow-y <br></br>
              overscroll-behavior, overscroll-behavior-block, overscroll-behavior-inline,
              overscroll-behavior-x, overscroll-behavior-y,</p>
                 <br></br>
              </div> 

              <div className="border p-4 m-4">
              <p>scroll-behavior, scroll-margin, scroll-margin-block,   <br></br>
              scroll-margin-block-end, scroll-margin-block-start, scroll-margin-bottom, scroll-margin-inline,   <br></br>
              scroll-margin-inline-end, scroll-margin-inline-start, scroll-margin-left, scroll-margin-right, scroll-margin-top,   <br></br>
              scroll-padding, scroll-padding-block, scroll-padding-block-end, scroll-padding-block-start, scroll-padding-bottom,   <br></br>
              scroll-padding-inline, scroll-padding-inline-end, scroll-padding-inline-start, scroll-padding-left,   <br></br>
              scroll-padding-right, scroll-padding-top, scroll-snap-align, scroll-snap-stop, scroll-snap-type, scrollbar-color</p>
              </div> 



              {/* =================Design Principles================= */}
              <div className="border p-8 m-4">
              <h1 className="text-4xl font-bold">Basic Design Principles</h1>
          <ul className="">
            <h2 className="text-3xl font-semibold pl-4">1. Visual Hierarchy</h2>            
                <h3 className="text-3xl font-semibold pl-10">Principles of Visual Hierarchy</h3>
                <ul className="pl-12 text-xl">
                <li className="font-semibold text-xl">--Size</li>
                <li className="font-semibold text-xl">--Color: <a className='text-blue-700 px-8 border-r-2' href="https://worldvectorlogo.com/" target="_blank" rel='noreferrer'>worldvectorlogo.com</a> <a className='text-blue-700' href='https://brandcolors.net/' target="_blank" rel='noreferrer'>Brand Colors</a> </li>
                <li className="font-semibold text-xl">--Contrast: : <a className='text-blue-700 px-8 border-r-2' href="https://coolors.co/" target="_blank" rel='noreferrer'>coolors.co</a> <a className='text-blue-700 px-8 border-r-2' href='https://accessibleweb.com/color-contrast-checker/' target="_blank" rel='noreferrer'>accessibleweb.com</a><a className='text-blue-700 px-8 border-r-2' href='https://colourcontrast.cc' target="_blank" rel='noreferrer'>colourcontrast.cc</a><a className='text-blue-700 px-8 border-r-2' href='https://webaim.org/resources/contrastchecker/' target="_blank" rel='noreferrer'>webaim.org</a> <span className="">google search: web accessibility checker</span></li>
                <li className="font-semibold text-xl">--Alignment</li>
                <li className="font-semibold text-xl">--Repetition</li>
                <li className="font-semibold text-xl">--Proximity: Need to keep some breathing space</li>
                <li className="font-semibold text-xl">--Whitespace</li>
                <li className="font-semibold text-xl">--Style: </li>
                  <ul className="font-semibold text-xl">
                    <li className="text-lg pl-4">---Flat</li>
                    <li className="text-lg pl-4">---Neumorphism</li>
                    <li className="text-lg pl-4">---Hybrid</li>
                    <li className="text-lg pl-4">---Gradient/mash color</li>
                    <li className="text-lg pl-4">---Grassmorphism</li>
                    <li className="text-lg pl-4">---3d</li>
                  </ul>                         
                <li className="font-semibold text-xl">--Visual Noise</li>
              </ul>   
            <h3 className='text-3xl font-semibold pl-10'>-Emphasis</h3>
            <h3 className='text-3xl font-semibold pl-10'>-Pattern: F pattern, Z pattern</h3>
            <h3 className='text-3xl font-semibold pl-10'>-Unity</h3>
            <h3 className='text-3xl font-semibold pl-10'>-Balance</h3>
            <h3 className='text-3xl font-semibold pl-10'>-Typography</h3>
            <h3 className='text-3xl font-semibold pl-10'>-Design Rythm</h3>            
          </ul>
              </div>
               
               {/* ===============000============= */}
               <h1 className='text-4xl font-bold'>The Basic of UI Design</h1>
               <h3 className='text-3xl font-semibold pl-10'>-Basic Color Theory</h3>  
               <li className='text-2xl font-semibold pl-10'>--Color Palette</li>  
               <h3 className='text-3xl font-semibold pl-10'>-Typography in UI design</h3>  
               <li className='text-3xl font-semibold pl-10'>--Spacing</li>  
               <h3 className='text-3xl font-semibold pl-10'>-Balance content and design</h3>  
               <h3 className='text-3xl font-semibold pl-10'>-Design Inspiration</h3>  
               <h3 className='text-3xl font-semibold pl-10'>-Demo UI design</h3>  
          
          {/* ==============Responsiveness=============== */}
          <div className="border p-4 m-4">
                <h3 className="text-4xl font-bold">Responsiveness:</h3>              
                <p className="text-lg">page width</p> 
                <p className="text-lg">page margin</p> 
                <p className="text-lg">page padding</p>                 
                <p className="text-lg">page layout</p>                 
                <p className="text-lg">text size + heading size + button text size</p>  
                <p className="text-lg">button size</p> 
                <p className="text-lg">button shape</p>                
                <p className="text-lg">background color</p> 
                <p className="text-lg">background image</p> 
                <p className="text-lg">image size</p> 
                <p className="text-lg">audio size</p> 
                <p className="text-lg">video size</p> 
                <p className="text-lg">background image</p> 
                <p className="text-lg">navbar buttonsdisplay or show hamburger menu</p> 
              </div>   
     
          {/* =================CSS Practice Tasks================= */}
          <div className="border p-4 m-4">
            <h2 className="text-4xl text-center font-bold">CSS Practice Tasks</h2>
            <li className="text-xl">Responsive Navbar</li>
            <li className="text-xl">Responsive Footer</li>
            <li className="text-xl">Responsive Card</li>
            <li className="text-xl">Responsive Column</li>
            <li className="text-xl">Responsive Page Layout</li>
            <li className="text-xl">Responsive Form</li>
            <li className="text-xl">Responsive Table</li>
            <li className="text-xl">Changing Width or Height by clicking a button</li>
            <li className="text-xl">Color, Image, Font, Button</li>
          </div>
        </div>







        <div className="flex gap-8">
          <NavLink
      to="/your-path"
      className="bg-blue-500 hover:bg-fuchsia-700 focus:bg-orange-400 focus:outline-none text-white font-bold py-2 px-4 rounded 
                sm:text-sm sm:w-24 sm:px-3 md:text-base md:w-32 md:px-6 lg:text-lg lg:w-40 lg:px-8 xl:text-xl xl:w-48 xl:px-10 2xl:text-2xl 2xl:w-56 2xl:px-12
                transition duration-300 ease-in-out"
    >
      Button
    </NavLink>

    <button className="bg-blue-500 hover:bg-fuchsia-700 md:hover:bg-fuchsia-300 hover:border-b-8 hover:border-b-red-500 focus:bg-green-700 focus:outline-none activ:bg-yellow-500 text-white font-bold py-2 px-4 rounded 
                sm:text-sm sm:w-24 sm:px-3 md:text-base md:w-32 md:px-6 lg:text-lg lg:w-40 lg:px-8 xl:text-xl xl:w-48 xl:px-10 2xl:text-2xl 2xl:w-56 2xl:px-12
                transition duration-300 ease-in-out">
  Button
</button>

<button className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none text-white font-bold py-2 px-4 rounded-full
                sm:text-sm sm:w-24 sm:h-24 sm:px-3 md:text-base md:w-32 md:h-32 md:px-6 lg:text-lg lg:w-40 lg:h-40 lg:px-8 xl:text-xl xl:w-48 xl:h-48 xl:px-10 2xl:text-2xl 2xl:w-56 2xl:px-12
                flex items-center justify-center space-x-2 transition duration-300 ease-in-out">
  {/* <i class="fas fa-icon"></i> <!-- Replace "fa-icon" with the desired Font Awesome icon class --> */}
  Button
</button>
</div>



<div className="flex flex-col gap-16">
<div>
{/* ========Embed PDF file using HTML Option:01========== */}
<object className="pdf w-full h-96" 
            data=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            width=""
            height="" >
    </object>
</div>

<div>
{/* ========Embed PDF file using HTML Option:02========== */}

<iframe className="pdf w-full h-96" 
                src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            width="800" height="">
        </iframe>
</div>
<div>
{/* ========Embed PDF file using HTML Option:03========== */}

<embed className="pdf w-full h-96" 
               src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
            width="" height=""></embed>
            </div>
</div>

<div className="m-4 p-8">          
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=wKfAk5jfYzM" target="_blank" rel="noreferrer">Free Architecture Apps for Beginner (and Professionals)</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=rjrENtOf_Kk" target="_blank" rel="noreferrer">10 FREE Home Design Software For Every New Civil Engineer & Architect</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=VPaeZWgt4TI&t=40s" target="_blank" rel="noreferrer">Generative floor plan design using AI- Maket.ai #ai #architecture</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=AyiLQ-ElZx4" target="_blank" rel="noreferrer">Ai Design Floor Plan | One Click Floor plan | How to Render Architectural Floor plan</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=SevOxzFXMGY&t=58s" target="_blank" rel="noreferrer">AI tools for Architecture, Analysis, and Real Estate</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=V-XMcYdVHRI&t=1s" target="_blank" rel="noreferrer">Only 1% of ARCHITECTS know these MIDJOURNEY SECRETS</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=Qe2bJXkZn4U" target="_blank" rel="noreferrer">Sun Path Theory | Sun Movement Theory | B.Arch Important Topic | Sun Path Diagram.</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=OR8EQ0DWpPw" target="_blank" rel="noreferrer">Intro to Solar Orientation [Solar Schoolhouse]</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=SQEdUCYGF5g" target="_blank" rel="noreferrer">How to design sun shading devices for your home</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=gcnlYd1naAU" target="_blank" rel="noreferrer">Shading Design- How to design sunshade based on solar geometry</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=iroOewwWe_k" target="_blank" rel="noreferrer">How to position your house properly || home orientation Tips</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=mgWFf5v4Ybk" target="_blank" rel="noreferrer">8 IMPORTANCE OF SHADING DEVICES</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=UnBYXR_r1JU" target="_blank" rel="noreferrer">Architecture Site Analysis - A quick and powerful method!</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=Kwa8dLOQgwE&list=PL0-qk_g5v1BygTTDWsCOO1-SAxSKfoHEp" target="_blank" rel="noreferrer">Architectural design Site Analysis | Adobe Photoshop</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=ly8orBNiNQM" target="_blank" rel="noreferrer">Architectural Design Process | Form, Orientation and Sunlight</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=WHt2pHW5RmY" target="_blank" rel="noreferrer">Site Analysis Architecture BIGGEST MISTAKES – Site Analysis Tips for Architecture Students</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=6_xs6ZSlN4w" target="_blank" rel="noreferrer">3 Architecture Presentation Boards Layouts + FREE Templates</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=r2DituCuBgE" target="_blank" rel="noreferrer">Complete Beginner&apos;s Guide to Architecture Site Analysis Using Alcohol Makers</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=ZhU11qUjKS4" target="_blank" rel="noreferrer">How to Create an Architect/Interior Design Website in WordPress 2022? [No Coding Elementor Tutorial]</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=t7GpYvyQoEs" target="_blank" rel="noreferrer">30 Minute Study Model - Here&apos;s How</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=k4dVgbuxBAw" target="_blank" rel="noreferrer">Architecture Short Course: How to Develop a Design Concept</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=epdyq2khPEQ" target="_blank" rel="noreferrer">Architecture Site Analysis Presentation Guide | Photoshop Tutorial</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=NVaBFVqT4do" target="_blank" rel="noreferrer">Architecture Site Analysis and Mapping Templates</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=lHQfKLHoaFs" target="_blank" rel="noreferrer">Architecture Site Analysis for Presentation - Photoshop Tutorial (Phân hiện trạng tích khu đất)</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=wdcLi55Rdr8" target="_blank" rel="noreferrer">Full Architecture Site Analysis Guide for Beginners! | My Architecture life |</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=Lgp7EtSSugM" target="_blank" rel="noreferrer">A Complete Beginner&apos;s Guide to Architecture Site Analysis Urbanism</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=UbjzVp7xu5I" target="_blank" rel="noreferrer">A Complete Beginner&apos;s Guide to Architecture Site Analysis</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=Y-oqz-cTAbU" target="_blank" rel="noreferrer">Architecture Diagrams Crash Course - 6 Types of Diagrams You Should Be Using</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=vHDRY7kHtYw" target="_blank" rel="noreferrer">Architectural Design 06 I Campus Design Walkthrough I Students Work</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=7VozgQz53os" target="_blank" rel="noreferrer">5 Best Architecture Portfolios to get Inspired! w/ @ShowItBetter</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=B_hf4QbtOno" target="_blank" rel="noreferrer">How to Render Minimal & Professional Site Plan Architecture</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=ba4lk2CeZjY" target="_blank" rel="noreferrer">Vali Architects: Setting up a Project in Sketchup - Part 1 Site Design</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=h2K92fMhCdI" target="_blank" rel="noreferrer">How to Architect - Case Studies | Architectural Design</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=b59rmytlTBQ" target="_blank" rel="noreferrer">My Sketchbook, Site Diagrams + Contractor Interviews</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=KUjomyjbdQU&t=13s" target="_blank" rel="noreferrer">Architectural Design Process Explained</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=vmHoGicPQQQ" target="_blank" rel="noreferrer">How To Think Like An Architect: The Design Process</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=o_F5xTFb4Fc" target="_blank" rel="noreferrer">Site Selection for Architecture</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=ZiTuKjB1bP4" target="_blank" rel="noreferrer">How to make an award winning architecture project.</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=77etKxRyRB0" target="_blank" rel="noreferrer">[Updated] How to Render Master Plan/Site Plan Architecture in Photoshop</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=M1TiUa7cpm0" target="_blank" rel="noreferrer">MY ARCHITECTURE THESIS PROJECT</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=xE0dKG2aMws" target="_blank" rel="noreferrer">7 Best Sites to Help us be Better Architects (topography and line drawings)</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=4-EB8PEgfLI" target="_blank" rel="noreferrer">Architecture Portfolio InDesign Tutorial & Free Template -Give Away</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=So151d6OS3U" target="_blank" rel="noreferrer">Best Fonts for Architects and Designers + Typography Tips</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=YevnOCi1xh8" target="_blank" rel="noreferrer">Ten fonts every architect should be using</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=4oVIF8lODdY" target="_blank" rel="noreferrer">ARCHITECTURE SCHOOL | CONTOUR SITE | OVERHANGED APCES | COLOUMNS | WALKTHROUGH | LUMION | DESIGN</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=QoLsfijE90M" target="_blank" rel="noreferrer">SITE ANALYSIS - CHECK THESE 11 INFORMATION ON THE SITE</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=rGSHaea8jNk" target="_blank" rel="noreferrer">7 FREE Websites for Better Site Analysis in Architecture</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=tVCT-M4XhJs" target="_blank" rel="noreferrer">How to create Architecture Diagrams #1</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=lz5tCXCGvpE" target="_blank" rel="noreferrer">We Chose the BEST Architecture Portfolios of the Year.</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=OgvpFb0a8Vg" target="_blank" rel="noreferrer">nterior Modeling 3ds Max | Beginner Friendly | DWG</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=2f-PJYo9Vng" target="_blank" rel="noreferrer">How to get a 3D sun path analysis diagram</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=uLlDXCak48A&t=10s" target="_blank" rel="noreferrer">Typographic Systems</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=aoWlS_2Hr10" target="_blank" rel="noreferrer">EP 2 | ArchiTech Office Tours | Zaha Hadid Architects</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/shorts/frowKVxHfNk" target="_blank" rel="noreferrer">The AI Venger|The Future ATN AI MasterClass</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=WjZ3fmOdmvo" target="_blank" rel="noreferrer">খোলামেলা বাসার গল্প! ।। নন্দিত নির্মাণ ।। Nexus Television</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="" target="_blank" rel="noreferrer"></a></button>
          
          </div>

          
          <div className="m-4 p-8">
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=LVGN33eXOSA" target="_blank" rel="noreferrer">How a Landscape Architect Grades a Site</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=wjYZBDvdmpE" target="_blank" rel="noreferrer">How To Generate More Concept - Landscape Architecture Tutorial</a></button>
          <button className="h-max-[35vw] border rounded-lg bg-orange-300 p-4 md:p-6 m-4 text-base md:text-lg lg:text-2xl text-left"><a className='text-blue-800' href="https://www.youtube.com/watch?v=D_sqswQMsRc" target="_blank" rel="noreferrer">How Do Landscape Architects Create A Design? - Breaking Down The Design Process</a></button>
          </div>
        </>
    );
};

export default CSSComponent;