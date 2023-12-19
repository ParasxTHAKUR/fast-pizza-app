import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('IIDSAT');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-8 w-28 rounded-full bg-yellow-50 px-4 text-sm transition-all duration-100 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-100 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
