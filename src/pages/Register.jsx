import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const users = await fetch("/users.json");
    const userJSON = await users.json();

    setUsers(userJSON);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function registerPerson(e) {
    e.preventDefault();

    const inputUserName = document.querySelector("#userName");
    const inputEmail = document.querySelector("#email");
    const inputPassword = document.querySelector("#password");
    const warning = document.querySelector("#warning");

    const userName = inputUserName.value;
    const userEmail = inputEmail.value;
    const userPassword = inputPassword.value;

    const bulunanKisi = users.filter((user, index) => {
      return (
        user.name === userName &&
        user.email === userEmail &&
        user.password === parseInt(userPassword)
      );
    });

    if (bulunanKisi.length > 0) {
      console.log(warning);
      warning.setAttribute("class", "text-black block");
    } else {
      async function jsonVeriEkle() {
        const response = await fetch("/users.json", {
          method: "POST",
          body: JSON.stringify({
            title: "Fatih",
            body: "Yanik",
            userId: 5,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const sonuc = await response.json();
        console.log(sonuc);
      }

      jsonVeriEkle();
    }
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-gray-300 bg-cover">
      <span className="mt-[80px] text-[50px]">Register</span>
      <form onSubmit={registerPerson} className="mt-5 flex flex-col">
        <label className="my-[10px] mx-0">Username</label>
        <input
          id="userName"
          className="p-[10px] bg-white border-none rounded-[10px] focus:outline-none"
          type="text"
          placeholder="Enter your username..."
          required
        />
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
        <button className="mt-5 cursor-pointer bg-teal-700 text-white p-[10px] border-none rounded-[10px] text-center">
          Register
        </button>
      </form>
      <button className="absolute top-[60px] right-[20px] bg-red-400 cursor-pointer p-[10px] border-none text-white rounded-[10px]">
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
