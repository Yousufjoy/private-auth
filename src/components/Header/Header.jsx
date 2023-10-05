import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User Logged Out");
      })
      .then((error) => {
        console.log(error);
      });
  };

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
              <NavLink to="/orders">
                <a className="text-blue-700">Orders</a>
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

            <li>
              {user ? (
                <>
                  <span className="mx-4">{user.email}</span>
                  <button
                    className=" bg-blue-400 text-white"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link to="/login"></Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
