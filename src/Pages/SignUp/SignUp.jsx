// import React from 'react';

import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const SignUp = () => {

  const { createUser } = useContext(AuthContext);

    const handleSignUP = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then((result) => {
          const user = result.user;
          console.log(user);
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
          <form onSubmit={handleSignUP} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
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
                {/* <input
                  className="btn btn-outline btn-warning"
                  type="Submit"
                  value="Sign Up"
                /> */}
                <input type="submit" className="btn btn-outline btn-warning" value="SignUp" />
              </div>
            
          </form>
          <p className="m-3 p-3">
            Already have an Account?
            <Link to="/logIn">
              <button className="btn btn-ghost">Log In</button>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
