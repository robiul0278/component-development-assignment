import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className=" flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/one")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go to Component One
        </button>

        <button
          onClick={() => navigate("/two")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go to Component Two
        </button>
      </div>
    </main>
  );
}

export default HomePage;
