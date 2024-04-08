import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
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
              <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
