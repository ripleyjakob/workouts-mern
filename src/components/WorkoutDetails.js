import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";
//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Searchbar from "./Searchbar";

const WorkoutDetails = ({ workout }) => {
  console.log(workout, "WORKOUT SINGLE");
  const { workouts, dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [set, setSet] = useState("");
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
    console.log(json, "HELLO");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const workouts = { title, load, reps, set };

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "PATCH",
      body: JSON.stringify(workouts),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    console.log(workouts, "workout is here");
    console.log(json, "this is the json brah");

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
    }
    window.location.reload();
  };

  // const getFilteredItems = (query, workouts) => {
  //   if (!query) {
  //     return workouts;
  //   }
  //   return workouts.filter((workout) => workout.title.includes(query));
  // };
  // console.log(query, workouts, "this is it");

  // const filteredItems = getFilteredItems(query, workouts);
  // console.log(filteredItems, "FILTERED ITEMS");

  return (
    <div>
      <div className="workout-details">
        <div>
          <h4>{workout.title}</h4>
          <p>
            <strong>Load (kg): </strong>
            {workout.load}
          </p>
          <p>
            <strong>Number of reps: </strong>
            {workout.reps}
          </p>
          <p>
            <strong>Number of sets: </strong>
            {workout.set}
          </p>
        </div>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <button className="material-symbols-outlined" onClick={handleClick}>
        delete
      </button>
      <div>
        {!open ? (
          <div>
            <button
              className="material-symbols-outlined"
              onClick={() => setOpen(!false)}
            >
              update
            </button>
          </div>
        ) : (
          <div>
            <button
              className="material-symbols-outlined"
              onClick={() => setOpen(!true)}
            >
              update
            </button>
            <form className="create" onSubmit={handleUpdate}>
              <h3>UPDATE - {workout.title}</h3>

              <label>Excersize Title:</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <label>Load (in kg):</label>
              <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
              />

              <label>Number of Reps:</label>
              <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
              />

              <label>Number of Sets:</label>
              <input
                type="number"
                onChange={(e) => setSet(e.target.value)}
                value={set}
              />

              <button>update</button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutDetails;
