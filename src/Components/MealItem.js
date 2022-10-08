
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../Features/mealSlice";
import { useDispatch } from "react-redux";

const MealItem = ({ idCategory, strCategory, strCategoryDescription, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
    
      <div>
        <h4>{idCategory+ " "}{strCategory}</h4>
        <h4 className="item-price">{strCategoryDescription}</h4>
      
      </div>
      <div>
        
      </div>
    </article>
  );
};
export default MealItem;
