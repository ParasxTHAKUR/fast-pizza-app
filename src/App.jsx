import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Home from '/home/dt/Documents/my-projects/PizzaApp/fast-pizza-app/src/ui/Home.jsx';
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader } from './features/order/Order';
import {action as updateOrderAction} from './features/order/UpdateOrder'
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: '/cart', element: <Cart /> },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
