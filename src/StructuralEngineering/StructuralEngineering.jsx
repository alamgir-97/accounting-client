const StructuralEngineering = () => {
    return (
        <div>
                       <div className="hidden">
            <h2>This portion is only for educational purposes. To use in design it must need designer&apos;s through evaluations of all factors, so it must be done with this own resposibility.</h2>
           <p className="mb-2 text-center"><span className="rounded-lg text-3xl font-bold bg-rose-500 px-2 py-1 mr-2 text-center">Two Way Solid Slab Design</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">What is Two Way Solid Slab? Ly/Lx&lt;=2</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">What is simply supported Two Way Solid Slab?</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">What is end restrained Two Way Solid Slab?</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">What is Short Span (Lx?)</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">What is Long Span (Ly?)</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Moment in Short Direction</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Computation of Bending Moments in two-way slab</span> </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Short Span Moments</span>1. Positive Moment (mid span): Mx </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Short Span Moments</span>2. Negative Moments (supports): M3 and M4 </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Long Span Moments</span>1. Positive Moment (mid span): My </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Long Span Moments</span>2. Negative Moments (supports): M1 and M2 </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Short Direction Moments</span>m<sub>x</sub> = B<sub>sx</sub>nLx<sup>2</sup>(Eq. 14)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Long Direction Moments</span>m<sub>y</sub> = B<sub>sx</sub>nLx<sup>2</sup> (Eq. 15)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>where: B<sub>sx</sub>and B<sub>sy</sub> are co-efficients given in Table 3.14 of BS8110 (page 221)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Computation of Bending Moments</span></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Shear Forces</span></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Short Direction Shear Forces</span>v<sub>sx</sub> = B<sub>vx</sub>nLx(Eq. 19)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Long Direction Shear Forces</span>v<sub>sy</sub>  = B<sub>vx</sub>nLx(Eq. 20)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>where: B<sub>vx</sub>and B<sub>vy</sub> are obtained from in Table 3.15 of BS8110 (page 22)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Note:</span>No shear reinforcement is to be provided in slabs with thickness&lt;00mm. For other slabs, if shear reinforcement is needed, it should be provided according to Table 3.16 BS8110</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Torsional Reinforcement in Restrained Slabs</span>There are three types of corners: C1, C2 and C3, have three different requirements of torsion steel as mentioned below:</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">At corner C1:</span>slab is discontinuous at both sides:</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">At corner C2:</span>contained one continuous edge:</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">At corner C3:</span>contained by continuous edges:</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2 text-center text-xl">Design Steps of Two way solid slabs (Sec. 3.5.1-BS8110)</span></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-1</span>Designed as beams of width=1 m, i.e. b=1000mm</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-2</span>Initial Proportioning: Slab Thickness (h of h<sub>f</sub>) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>- Estimate the Effective depth (d): Table 3.9 (page 215)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>* The short span governs the effective depth</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>- minimum effective depth, d=span/(Basic Ratio X Modification Factor) assume Modification Factor=1.3</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>- Estimation of cover to steel: The larger from:</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">a. Durability</span>- Table3.3 (Page 206)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">b. Fire resistance</span>- Table3.4 (Page 207)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Total Depth (h)</span> h = d + cover + bar dia/2 (bar dia to be assumed as 10mm)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-3</span>Final Proportining (Ultimate Limit State) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Loading</span> Obtaining the ultimate design load by combining </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Dead load</span>=weight of slab + weight of finishes + weight of partitions + weight of ceiling & service utilities </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">& Live load</span>(Taken from BS6399: Part 1, and depends on the function of the building floor) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Determine the bending moment (3.13 or Table 3.14)</span>and shearing forces (Table 3.15) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Calculation of Reinforcement: K-&lt;z-&lt;A<sub>s-req</sub>-&lt;(phi@??mm)-&lt;A<sub>s-prov</sub></span>and shearing forces (Table 3.15) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Deflection: </span>(Table 3.10) </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Check Shear Stress:</span>(Table 3.18) (No shear reinforcement in slabs should be provided if h&lt;=200mm)</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">-Check Cracking:</span>(Table 3.25 and sec.1.12.11.2.7) </p>
           <p className="mb-4 pb-2 text-4xl text-center font-bold"><span className="rounded-lg bg-rose-500 text-black md:text-white md:bg-rose-500 px-2 py-1 mr-2"> <a href="https://www.youtube.com/watch?v=FaL5oV8v3GA" target="_blank" rel="noreferrer">Two-Way Design (Waqas Malik) </a></span></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Design Methods:</span><br></br>1. Moment Co-efficient Method <br></br>2. Direct Design Method <br></br> 3. Equivalent Frame Method <br></br> 4. Finite Element Method</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Slab Cases:</span></p>
           <table className="border w-[100vw]"><th>Case-1</th><th>Case-2</th><th>Case-3</th><th>Case-4</th><th>Case-5</th><th>Case-6</th><th>Case-7</th><th>Case-8</th><th>Case-9</th>
           <tr><td>Case-1</td><td>Case-2</td><td>Case-3</td><td>Case-4</td><td>Case-5</td><td>Case-6</td><td>Case-7</td><td>Case-8</td><td>Case-9</td></tr></table>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Steps of co-efficient design methods</span></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-1:</span>Aspect Ratio</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>m=lx/ly=la/lb=A/B = shorter span length/longer span length&gt;0.5</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-2: </span>Thickness of Slab</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>h=perimeter/180</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-3: </span>Factored Loads</p>           
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>Self Weight=bh/122*0.15 =... kg/ft</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"> </span>Factored Dead Load (D.L) = 1.2*DL</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>Factored Live Load (L.L) = 1.6*LL</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2"></span>Wu = D.L+L.L</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-4: </span>Decide the case of slab and find coefficients </p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-5: </span>Calculate Moments</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-5: </span>M=C*w<sub>u</sub>*Ln<sup>2</sup> C=co-efficient w<sub>u</sub>=factored load Ln=clear span</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-6: </span>Calculating Reinforcement and Spacing</p>
           <p className="mb-2">Mu/thita=Asfy(d-a/2)=Asfyd-(As<sup>2</sup>y<sup>2</sup>)/(1.7*f&apos;c*b)</p>
           <p className="mb-2">Mu=<br></br>thita=<br></br>As =<br></br>fy =<br></br>d =<br></br>a =<br></br>f&apos;c =<br></br>b =<br></br></p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-7: </span>Temperature and Shrinkage Reinforcement</p>
           <p className="mb-2"><span className="rounded-lg bg-rose-500 px-2 py-1 mr-2">Step-6: </span>Reinforcement Detailing</p>
          </div>  
        </div>
    );
};

export default StructuralEngineering;