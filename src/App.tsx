import ComponentOne from "./components/layout/ComponentOne";
import ComponentTwo from "./components/layout/ComponentTwo";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="p-6 h-[90vh]">
        <ComponentOne/>
        <ComponentTwo/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
