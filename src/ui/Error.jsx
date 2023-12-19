import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const error = useRouteError();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-2xl bg-orange-200 p-[200px]">
        <h1 className="mb-3 text-xl font-medium">Something went wrong ❌</h1>
        <p>{error.data || error.message}</p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default NotFound;
