
const Footer= () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} components app. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
