import { Link } from "react-router-dom";
import Logo from "./Logo";
import HeaderToggle from "./Toggle";

const Header: React.FC = () => {
  return (
    <div className="w-full h-36 bg-violet lg:rounded-bl-[100px]">
      <div className="max-w-screen-2xl mx-auto px-10">
        <header className="flex items-center justify-between">
          <Link to="/">
            <div className="mt-12">
              <Logo />
            </div>
          </Link>
          <div className="mt-12">
            <HeaderToggle />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
