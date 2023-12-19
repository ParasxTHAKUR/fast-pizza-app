import Button from "./Button";
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function UpdateQuantity({quantity, pizzaId}) {
  const dispatch = useDispatch()
  return (
    <div className="flex grid-3 space-x-1">
        <Button onClick={()=> dispatch(decreaseItemQuantity(pizzaId))} type="updateBtn">-</Button>
        <span>{quantity}</span>
        <Button onClick={()=> dispatch(increaseItemQuantity(pizzaId))} type="updateBtn">+</Button>
    </div>
  )
}
