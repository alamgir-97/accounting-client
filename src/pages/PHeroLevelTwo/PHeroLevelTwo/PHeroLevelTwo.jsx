import { NavLink } from "react-router-dom";



const PHeroLevelTwo = () => {
    return (
        <>
        <div className="bg-white">
<h1 className='m-16 p-8 border rounded-md text-xl font-bold text-center bg-sky-400'><a href='https://web.facebook.com/groups/phapollo3?_rdc=1&_rdr' target='_blank' rel='noreferrer'>Apollo Level 2 Web Dev (Batch 3)</a></h1>
<section className="border p-4 w-full shadow-md">
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>TypeScript</NavLink>

<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>Express</NavLink>

<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>MongoDB</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>Mongoose</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>DBMS</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>SQL</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>Prisma</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>AWS</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>Docker</NavLink>
<NavLink to='typeScript' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "border rounded-md bg-fuchsia-600 text-white"}>Prisma</NavLink>
</section>
        </div>
        </>
    );
};

export default PHeroLevelTwo;