import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
