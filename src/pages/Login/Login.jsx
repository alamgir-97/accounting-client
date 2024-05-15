// import AppName from "../../Components/AppName";
// import AccountingNavbar from "../../Components/AccountingNavbar";
import Footer from "../../Components/Footer";
import { Link, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from 'react-router';


const Login = () => {
  // const [user, setUser] = useState();
  const { signInUser, user, setUser, handleSignOut, googleSignIn } = useContext(AuthContext);
  // console.log(auth);
  // console.log(provider);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page', location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);        
        setUser(loggedInUser);
        form.reset;
        //navigate after login
        navigate(location?.state ? location.state : '/home')
        
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {   
    googleSignIn()   
      .then((result) => {      
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser)
      })
      .catch((error) => {
        console.log("error", error.message);
      });   

      
  };

//   const handleSignOut = () =>{  
//   signOutUser(auth)
// .then(() => {
//   console.log("Sign-out successful")
//   setUser(null)
// }).catch((error) => {
//   console.error(error)
// });
//   }

  return (
    <div className="w-11/12 mx-auto bg-white h-[50vh]]">
     
     
      <div className="flex flex-col justify-center md:flex md:flex-row md:gap-20 my-5">
      {!user ?      
        //sign in portion
        <div>
      <h1 className="text-center font-bold text-xl md:text-4xl p-2 md:p-4 text-fuchsia-600">Login</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">            
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* required */}
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-black bg-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* required */}
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black bg-white"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-fuchsia-600">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="flex flex-col mx-7 hidden">
              <div
                onClick={handleGoogleSignIn}
                className="flex w-full border items-center flex-end bg-red-700 btn my-1"
              >
                <FcGoogle className="text-2xl" />
                <button className="text-yellow-400 mx-auto w-3/4">
                  Login with Google
                </button>
              </div>
              <div className="flex w-full border items-center flex-end bg-blue-500 btn my-1">
                <FaFacebook className="text-2xl text-white " />
                <button className="text-white mx-auto w-3/4">
                  Login with Facebook
                </button>
              </div>
              <div className="flex w-full border items-center flex-end bg-gray-400 btn my-1">
                <FaGithub className="text-2xl" />
                <button className="text-white mx-auto w-3/4">
                  Login with Github
                </button>
              </div>
            </div>
            <div className="divider">OR</div>

            <div>
              New here?{" "}
              <Link to="/register" className="text-fuchsia-600 font-semibold">
                Register
              </Link>
            </div>


          </div>
        </div>
      </div>
      </div>:


        //sign out portion
      <div className="">      {user && 
      <div className="my-20 border rounded-lg p-20">   
        <p className="flex justify-center"><img src={user.photoURL} alt={user.displayName} className="rounded-full border-8 border-green-300"/></p>
        <h3 className="text-center">User: {user.displayName}</h3>
        <p className="text-center">Email: {user.email}</p>
        <p className="flex justify-center"><button onClick={handleSignOut} className="btn bg-green-400 mt-5" >SignOut</button> </p>
          
      </div>
      }
      </div>}
</div>
     
      <Footer></Footer>
    </div>
  );
};

export default Login;
