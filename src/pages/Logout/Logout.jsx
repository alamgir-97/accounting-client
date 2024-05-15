import AccountingNavbar from "../../Components/AccountingNavbar";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import app from "../../firebase/firebase.init";

import AppName from "../../Components/AppName";

import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Logout = () => {
  const { auth, provider } = useContext(AuthContext);
  
console.log(auth);
console.log(provider);


const handleLogout = e =>{
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error.message);
});

}


    return (
        <div className="w-11/12 mx-auto bg-white">
            <AppName></AppName>
            <AccountingNavbar></AccountingNavbar>
            <div className="flex justify-center m-16 md:m-4">
            <button onClick={handleLogout} className="btn btn-primary w-[20vw]">Logout</button></div>                               
            
           
        </div>
       
    );
};

export default Logout;