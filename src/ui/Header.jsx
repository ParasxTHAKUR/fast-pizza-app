import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';
import UserName from '../features/user/UserName';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 p-4 font-semibold uppercase">
      <Link className="text-[20px] tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
