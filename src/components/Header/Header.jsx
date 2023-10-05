import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center ">
        <nav className="bg-gray-800 text-white p-4 w-24">
          <div className="mb-4">
            <span className="text-xl font-bold">Auth</span>
          </div>
        </nav>
        <div className="ml-auto">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/">
                <a className="text-blue-700">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <a className="text-blue-700">Login</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <a className="text-blue-700">Register</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
