// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import MealContainer from "./Components/MealContainer";
import { useEffect } from "react";
import { getMealItems } from "./Features/mealSlice";

function App() {
  const { meals, isLoading } = useSelector((store) => store.meal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <MealContainer />
    </>
  );
}

export default App;
