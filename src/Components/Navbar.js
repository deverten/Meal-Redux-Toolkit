// import { CartIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { clearMeals } from "../Features/mealSlice";
// import { store } from "../store";

const Navbar = () => {
  const { meals } = useSelector((store) => store.meal);
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="nav-center">
        {/* <h1>Hello</h1> */}
        <h3>Meal App</h3>
        <div className="nav-container">
          <button onClick={() => dispatch(clearMeals())}>CLEAR DATA</button>
          <h4 className="clear"></h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
