/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import { axios } from "axios";
// import { axios } from "axios";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  // const { signIn } = useContext(AuthContext);
  const{ signIn }  = useAuth();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password);

        signIn(email,password)
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          const user = { email };
          
          // get access token
          // axios.post('http://localhost:5000/jwt', uSer)
          // .then((res) => {
          //   console.log(res.data)
          // })
          axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
          .then(res=>{
            console.log(res.data);
            if(res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
          })
          
          
        }).catch((err) => {
          console.log(err);
        });
        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-20 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button >Login</button> */}
                <input
                  className="btn btn-outline btn-warning"
                  type="submit"
                  value="Login"
                />
              </div>
            
          </form>
          <p className="m-3 p-3">New to Car Doctor? <Link to='/signUp'><button className="btn btn-ghost" >Sign Up</button></Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
