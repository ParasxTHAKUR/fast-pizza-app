import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-700 hover:underline';
  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
