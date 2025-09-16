import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <div className="max-w-6xl mx-auto h-[90vh] ">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default MainLayout;