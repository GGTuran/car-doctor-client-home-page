/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you wanna delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted!!");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({status:'Confirm'})
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            // update status
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status= 'Confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
  }

  return (
    <div>
      <h1>{bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id}
               booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
                
                ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
