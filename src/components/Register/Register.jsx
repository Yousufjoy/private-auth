import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  const { createUser } = authInfo;
  const handleRegSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(userName, email, password);

    // create user in fireBase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <body className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Register
            </span>
            <form onSubmit={handleRegSubmit} className="mb-4">
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username "
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Email
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                Register
              </button>
            </form>
            <a className="text-blue-700 text-center text-sm" href="/login">
              Forgot password?
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Register;
