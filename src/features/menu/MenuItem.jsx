import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantity } from '../cart/cartSlice';
import DeleteButton from '../../ui/DeleteButton';
import UpdateQuantity from '../../ui/UpdateQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl} = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id))
  const quantity = 1
  const isInCart = currentQuantity>0
function handleClick(){
    const item = {
      pizzaId: id,
      name,
      quantity,
      unitPrice,
      totalPrice: unitPrice*quantity
    }
    dispatch(addItem(item))
}
console.log(currentQuantity)
  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${
          soldOut ? 'opacity-70 grayscale-[70%]' : 'text-stone-500'
        }`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="text-m font-semibold">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
            
          )}
     {isInCart && <div className='flex items-center space-x-1'>
      <UpdateQuantity pizzaId={id} quantity={currentQuantity} />
     <DeleteButton pizzaId={id} type="small">Delete</DeleteButton>
     </div>}

{!soldOut && !isInCart && <Button onClick={handleClick} type="small">Add to Card</Button> }
        
         
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
