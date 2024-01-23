import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center gap-8 p-5 z-10 m-auto fixed">
      <div className="flex-1" />
      <img src={Logo} className="w-[56px] h-[29px]" alt="logo" />
      <div className="flex-1" />
      <div>
        <Link to={""} className="text-white mx-5">
          Lorem Ipsum
        </Link>
        <Link to={""} className="text-white mx-5">
          Lorem Ipsum
        </Link>
        <Link to={""} className="text-white mx-5">
          Lorem Ipsum
        </Link>
        <Link to={""} className="text-white mx-5">
          Lorem Ipsum
        </Link>
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default Header;
