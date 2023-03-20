// import { useState, useEffect, useContext } from "react";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const UpdateForm = ({ workout }) => {
//   const { dispatch } = useWorkoutsContext();
//   const [title, setTitle] = useState("");
//   const [load, setLoad] = useState("");
//   const [reps, setReps] = useState("");
//   const [error, setError] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const workouts = { title, load, reps };

//     const response = await fetch("/api/workouts/" + workout._id, {
//       method: "PATCH",
//       body: JSON.stringify(workouts),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const json = await response.json();

//     console.log(workouts, "workout is here");
//     console.log(json, "this is the json brah");

//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setError(null);
//       dispatch({ type: "UPDATE_WORKOUT", payload: json });
//     }
//     window.location.reload();
//   };

//   const togglePopup = (e) => {
//     e.preventDefault();
//     setOpen(true);
//   };

//   return (
//     <div>
//       <button className="material-symbols-outlined" onClick={togglePopup}>
//         update
//       </button>

//       {open && (
//         <form className="create" onSubmit={handleUpdate}>
//           <h3>UPDATE</h3>

//           <label>Excersize Title:</label>
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />

//           <label>Load (in kg):</label>
//           <input
//             type="number"
//             onChange={(e) => setLoad(e.target.value)}
//             value={load}
//           />

//           <label>Number of Reps:</label>
//           <input
//             type="number"
//             onChange={(e) => setReps(e.target.value)}
//             value={reps}
//           />

//           <button>update</button>
//           {error && <div className="error">{error}</div>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default UpdateForm;
