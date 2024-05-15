import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };  
  console.log(signInUser);

  // const signOutUser =  auth => {
  //   return signOut(auth)
  //  }

   const handleSignOut = () =>{
    return signOut(auth)
  .then(() => {
    console.log("Sign-out successful")
    // const [user, setUser] = useState();
    setUser(null)
  }).catch((error) => {
    console.error(error)
  });
    }

    // const handleGoogleSignIn = () => {   
    //   signInWithPopup(auth, provider)   
    //     .then((result) => {      
    //       const loggedInUser = result.user;
    //       console.log(loggedInUser);
    //       setUser(loggedInUser)
    //     })
    //     .catch((error) => {
    //       console.log("error", error.message);
    //     });
    //     // console.log(auth);
    //     // console.log(provider);
    // };
    const googleSignIn = () => {   
      return signInWithPopup(auth, provider)  
        
    };


  useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
        console.log('observing current user inside useEffect of Auth Provider', currentUser);
    })
    return() =>{
      unSubscribe();
    }
  },[])



  const provider = new GoogleAuthProvider();

  const userInfo = {
    auth,
    user,
    setUser,
    loading,
    createUser,
    provider,
    signInUser,  
    handleSignOut,    
    googleSignIn
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
