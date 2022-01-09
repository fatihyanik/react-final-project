import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register({ users, setUsers }) {
  const [person, setPerson] = useState({
    id: users.length,
    name: "",
    email: "",
    password: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU",
    active: false,
    admin: false,
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    e.target.name === "password"
      ? setPerson({ ...person, [e.target.name]: parseInt(dataVonInput) })
      : setPerson({ ...person, [e.target.name]: dataVonInput });
  }

  function addNewPerson(e) {
    e.preventDefault();
    const newArray = [...users, person];
    setUsers(newArray);

    alert("You are registered!");
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-gray-300 bg-cover">
      <span className="mt-[80px] text-[50px]">Register</span>
      <form onSubmit={addNewPerson} className="mt-5 flex flex-col">
        <label className="my-[10px] mx-0">Username</label>
        <input
          onChange={inputChange}
          name="name"
          id="userName"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your username..."
          required
        />
        <label className="my-[10px] mx-0">Email</label>
        <input
          onChange={inputChange}
          name="email"
          id="email"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your email..."
          required
        />
        <label className="my-[10px] mx-0">Password</label>
        <input
          onChange={inputChange}
          name="password"
          id="password"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="password"
          placeholder="Enter your password..."
          required
        />
        <button className="mt-5 cursor-pointer bg-teal-700 text-white p-[10px] border-none rounded-[10px] text-center">
          Register
        </button>
      </form>
      <button className="absolute top-[100px] right-[20px] bg-red-400 cursor-pointer p-[10px] border-none text-white rounded-[10px]">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>

      <div id="warning" className="text-black hidden">
        Bu kisi sistemde zaten kayitli!
      </div>
    </div>
  );
}

export default Register;
