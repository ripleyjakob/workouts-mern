import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import SearchBar from "../components/Searchbar";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch]);
  console.log(workouts, "HOMEPAGE");

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <WorkoutDetails workout={workout} />)}
      </div>

      <WorkoutForm />
      <SearchBar />
    </div>
  );
};

// const PopulateSearch = (workout) => {
//   <WorkoutDetails workout={workout} />;
// };

export default Home;
