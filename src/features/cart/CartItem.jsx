import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteButton from '../../ui/DeleteButton';
import UpdateQuantity from '../../ui/UpdateQuantity';
import { getCurrentQuantity } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
const itemQuantity = useSelector(getCurrentQuantity(pizzaId))
console.log(itemQuantity)
  return (
  <li className="sl:flex sm:item-center py-3 sm:justify-between">
  <p className="mb-1 sm:mb-0">
   {quantity}&times; {name}
    </p>
  <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
 <div className='flex items-center space-x-3'>
   <UpdateQuantity quantity = {itemQuantity} pizzaId={pizzaId} />
  <DeleteButton pizzaId={pizzaId}/>
    </div>
   </div>
    </li>
  );
}

export default CartItem;
