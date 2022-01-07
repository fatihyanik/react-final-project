import { Link } from "react-router-dom";
import "./topbar1.css";

function TopBar1({ currentUser, setCurrentUser }) {
  function logout() {
    setCurrentUser({});
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white py-2 px-[3%] flex items-center justify-between z-[1000] shadow-[0_8px_16px_0px_rgba(0,0,0,0.1)]">
      <input type="checkbox" name="" id="toggler" className="hidden" />
      <label
        for="toggler"
        class="fas fa-bars text-[20px] text-gray-500 rounded-[8px] py-2 px-4 border-solid border-2 border-light-blue-500 hidden"
      ></label>

      <div class="icons">
        <i className="text-[20px] mr-[10px] text-blue-600 cursor-pointer fab fa-facebook-square"></i>
        <i className="text-[20px] mr-[10px] text-pink-500 cursor-pointer fab fa-instagram-square"></i>
        <i className="text-[20px] mr-[10px] text-blue-400 cursor-pointer fab fa-twitter-square"></i>
      </div>
      <nav class="navbar">
        <ul className="flex justify-center m-0 p-0 list-none">
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500 ">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
            ABOUT
          </li>
          {currentUser.admin ? (
            <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          ) : null}
          {currentUser.name && (
            <Link onClick={logout} to="/">
              <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
                LOGOUT
              </li>
            </Link>
          )}
          <div className="flex items-center justify-center">
            {currentUser.name ? (
              <Link className="link" to="/settings">
                <img
                  className="w-[40px] h-[40px] rounded-[50%] object-cover mr-[15px] cursor-pointer"
                  src={
                    currentUser.name
                      ? currentUser.image
                      : "https://www.fahrschuleaichinger-spielmann.de/wp-content/uploads/2019/03/person-icon-6.png"
                  }
                  alt=""
                />
              </Link>
            ) : (
              <ul className="flex justify-center m-0 p-0 list-none">
                <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default TopBar1;
