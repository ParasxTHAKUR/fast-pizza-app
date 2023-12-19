import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-5 text-sm',
    secondary:
      'text-sm border-2 px-4 py-3 md:px-6 md:py-4 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 hover:text-stone-200 transition-colors duration-300 hover:bg-stone-600 focus:text-stone-600 focus:bg-stone-300 focus:outline-none disabled:cursor-not-allowed',
    updateBtn: base + 'py-1 px-1 md:px-2 md:py-1 text-sm'
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
     {children}
    </button>
  );
}
  

