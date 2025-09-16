
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">LOGO</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-200 transition">Home</a>
          <a href="#" className="hover:text-gray-200 transition">About</a>
          <a href="#" className="hover:text-gray-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
