import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold cursor-pointer">LOGO</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
