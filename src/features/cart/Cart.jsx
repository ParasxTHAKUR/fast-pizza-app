import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from './cartSlice';
import { getUserName } from '../user/userSlice';
import EmptyCart from './EmptyCart'
import { formatCurrency } from '../../utils/helpers';
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
const userName = useSelector(getUserName)
const totalPrice = useSelector(getTotalCartPrice)
if(cart.length===0) return <EmptyCart/>
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-15 text-xl font-semibold">Your cart, {userName}</h2>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <h1>Total: {formatCurrency(totalPrice)}</h1>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={()=>dispatch(clearCart())} type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
