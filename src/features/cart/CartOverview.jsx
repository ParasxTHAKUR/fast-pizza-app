import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalQuantity } from './cartSlice';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  
  const totalQuantity = useSelector(getTotalQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
  if(totalQuantity===0) return null
  return (
    <div className="item-center flex justify-between bg-stone-900 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
