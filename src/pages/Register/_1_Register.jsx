// import React from 'react';
// import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
// import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
// import { AuthContext } from "../../providers/AuthProvider";


// const { createUser } = useContext(AuthContext);

const Register = () => {
    const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("false");
 
 const auth = getAuth(app);
 
  const handleRegister = e => {   
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmationPassword = form.confirmationPassword.value;
    const accepted = form.terms.checked;
    console.log(name, email, password, confirmationPassword, accepted);
  
      //reset Error
      setRegisterError("");
      //reset success
      setSuccess("");
      if(password !== confirmationPassword){
        setRegisterError("Your password doesn't match with your password")
        return
      }
    // check password length
      if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;}
      //Regex uppercase test
        else if(!/[A-Z]/.test(password)){
    setRegisterError('Your character should have at least one upper case characters')
    return;}

      else if (!accepted){
    setRegisterError('Please accept our terms and conditions');
    return;}
      //Create User 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);      
      setSuccess("User created successfully.")

      //update profile
      updateProfile(result.user, {
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"        
      })
      .then(()=>{console.log("profile updated"),
      console.log(result.user)})
      .catch(error=>console.log(error))
      //send verification email
      sendEmailVerification(auth.currentUser)
  .then(() => {
    Swal.fire("Please check your email and verify account.");
    // Email verification sent!
    // ...
  });
    
    })
    .catch(error => {error
    setRegisterError(error.message)
    
    }) 
  
  




  }
    
   
   

//     //create user
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result.user);
        
//         if(result.user.emailVerified){
//             setSuccess("User registration is successful.");
//         }
//         else ("Please verify your email address")
//         // update profile
//         updateProfile(auth.currentUser, {
//             displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
//           }).then(() => {
//             console.log("Profile updated");
//             // Profile updated!
//             // ...
//           }).catch((error) => {
//             alert(error)
//           });
//         //send verification email 
//         sendEmailVerification(result.user)
//         .then( () => alert("Please check your email and verify your account"))
//       })
//       .catch((error) => {
//         console.log(error);
//         setRegisterError(error.message);
//       });
//   };






  return (
    <div  className="w-11/12 mx-auto  bg-white border">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8"> Please Register</h2>

        <form onSubmit={handleRegister}>
          <input
            className="mb-4 py-2 px-4 border w-full"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <br />
          <input
            className="mb-4 py-2 px-4 border w-full"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />

          <div className=" mb-4 relative border">   
          <input 
          className="py-2 px-4 border w-full" 
          type={showPassword ? "text" : "password"}        
          name="password" placeholder="Password" id="1" required/>
          <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>{ showPassword ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye> }</span>
          
          </div>

          <div className=" mb-4 relative border">   
          <input 
          className="py-2 px-4 border w-full" 
          type={showPassword ? "text" : "password"}         
          name="confirmationPassword" placeholder="Confirmation Password" id="2" required/>
          <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>{ showPassword ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye> }</span>
          </div>

          <br/>
           <div className="mb-2"> <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept our <a href="#" className="text-blue-700">terms and conditions</a></label></div>
          <br/>
          <input className="btn btn-secondary mb-4 py-2 px-4 border w-3/4" type="submit" value="Register"/>
          
        </form>
        {registerError && (<p className="text-red-700 border">{registerError} </p>
        )}
        {success && <p className="text-green-700 border">{success} </p>}
        <p>Already have an account? Please <Link to="/signin" className="text-sky-400">SignIn</Link></p>
      </div>
    </div>
  );
};

export default Register;



