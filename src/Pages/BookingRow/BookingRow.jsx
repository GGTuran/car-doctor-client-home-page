/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const BookingRow = ({ booking, handleDelete, handleConfirm  }) => {
  const { _id , date, service, price, img, status } = booking;




  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>${price}</td>
      <td>${date}</td>
      <th>
       {
        status === 'Confirm' ? <span className="font-bold text-primary">Confirmed</span> :
         <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm please </button>
       }
      </th>
    </tr>
  );
};

export default BookingRow;
