import { Link } from "react-router-dom";
import AccountingNavbar from "../../Components/AccountingNavbar";
import Footer from "../../Components/Footer";
import AppName from "../../Components/AppName";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser } = useContext(AuthContext);

  console.log(createUser)

const handleSignup = e => {
  e.preventDefault();
  const  form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  const user = {email, password};
  const user2 = {email, password, confirmPassword};

  console.log(user, user2);

  //create user in firebase
  createUser(email, password)
  .then(result =>{
    console.log(result.user);
    const createdAt = result.user?.metadata?.creationTime;
    const user = {email, password, createdAt};
   
    fetch('https://accounting-server-dun.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data =>
      {console.log(data);
      if(data.insertedId){              
               Swal.fire({
            title: "Added!",
            text: `user successfully added to the database.`,
            icon: "success"
          });
          
          }
          
      })
  }

  )
  .catch(error=>{console.error(error)})
 
}
    return (
        <div className="w-11/12 mx-auto bg-white">
          <AppName></AppName>
          <AccountingNavbar></AccountingNavbar>
            <h1 className="text-center font-bold text-4xl p-1 text-fuchsia-600">Register</h1>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required disabled/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required disabled/>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required disabled/>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-fuchsia-600">Register</button>
        </div>
        <div>Already registered? <Link to='/login' className="text-fuchsia-600 font-semibold">Login</Link></div>
      </form>
    </div>
  </div>
</div>
        <Footer></Footer>
        </div>
    );
};

export default Register;