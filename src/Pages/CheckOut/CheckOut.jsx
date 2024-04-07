// import { connectStorageEmulator } from "firebase/storage";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h2>Booking Services of {title}</h2>
      
        
            <form className="card-body">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
             </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input className="btn btn-warning btn-outline" type="submit" value="Confirm Order" />
              </div>
            </form>
          
        </div>
      
  );
};

export default CheckOut;
