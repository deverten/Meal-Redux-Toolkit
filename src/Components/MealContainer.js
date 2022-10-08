import { useSelector, useDispatch } from "react-redux";
import MealItem from "./MealItem";
// import {clearCart} from '../Features/cart/cartSlice';
// import {openModal} from '../Features/modal/modalSlice'

const MealContainer = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((store) => store.meal);
  
console.log(meals);
  return (
    <section className="cart">
      <header>
        <h2>Sample meals</h2>
      </header>
      <div>
        {meals.map((item) => {
          return <MealItem key={item.idCategory} {...item} />;
        })}
      </div>
    
    </section>
  )
}

export default MealContainer;