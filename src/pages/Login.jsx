import { Link } from "react-router-dom";

function Login({ users, setCurrentUser }) {


  function loginControl(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");

    const email = inputEmail.value;
    const password = inputPassword.value;

    const gettingUser = users.filter((user) => {
      return user.email === email && parseInt(password) === user.password;
    });


    setCurrentUser(
      gettingUser.length > 0 ? { ...gettingUser[0], active: true } : {}
    );
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-gray-300 bg-cover ">
      <span className="text-[50px]">Login</span>
      <form onSubmit={loginControl} className=" mt-5 flex flex-col">
        <label className="my-[10px] mx-0">Email</label>
        <input
          id="email"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your email..."
          required
        />
        <label className="my-[10px] mx-0">Password</label>
        <input
          id="password"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="password"
          placeholder="Enter your password..."
          required
        />

        <button className="mt-5 cursor-pointer bg-red-400 hover:bg-red-500 text-white p-[10px] border-none rounded-[10px] text-center ">
          Login
        </button>
      </form>
      <button className="absolute top-[100px] right-[20px] bg-teal-700 hover:bg-teal-500 cursor-pointer p-[10px] border-none text-white rounded-[10px]">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
