import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-2 shadow text-center">
      <Link
        to="/"
        className="text-center font-extrabold text-3xl hover:bg-slate-200 px-1 rounded-xl"
      >
        ShowMania
      </Link>
    </header>
  );
};

export default Header;
