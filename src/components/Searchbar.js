import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "./WorkoutDetails";

const SearchBar = () => {
  const { dispatch } = useWorkoutsContext();

  const [query, setQuery] = useState("");

  const { workouts } = useWorkoutsContext();

  console.log(workouts, "search bar");

  const getFilteredItems = (query, workouts) => {
    if (!query) {
      return workouts;
    }
    return workouts.filter((workout) => workout.title.includes(query));
  };

  const filteredItems = getFilteredItems(query, workouts);
  console.log(filteredItems, "FILTERED ITEMS");

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <label>Search</label>
      <div>
        {filteredItems &&
          filteredItems.map((workout) => (
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
          ))}
      </div>{" "}
    </div>
  );
};

export default SearchBar;
