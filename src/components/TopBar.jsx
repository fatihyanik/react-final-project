import { Link } from "react-router-dom";

function TopBar({ currentUser, setCurrentUser }) {
  function logout() {
    setCurrentUser({});
  }

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center z-[1000] font-serif">
      <div className="flex-[3] flex items-center justify-center">
        <i className="text-[20px] mr-[10px] text-blue-600 cursor-pointer fab fa-facebook-square"></i>
        <i className="text-[20px] mr-[10px] text-pink-500 cursor-pointer fab fa-instagram-square"></i>
        <i className="text-[20px] mr-[10px] text-pink-500 cursor-pointer fab fa-pinterest-square"></i>
        <i className="text-[20px] mr-[10px] text-blue-400 cursor-pointer fab fa-twitter-square"></i>
      </div>
      <div className="flex-[6]">
        <ul className="flex justify-center m-0 p-0 list-none">
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
            ABOUT
          </li>
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
            CONTACT
          </li>
          <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {currentUser.name && (
            <Link onClick={logout} to="/">
              {" "}
              <li className="mr-5 text-[18px] font-light cursor-pointer hover:text-gray-500">
                LOGOUT
              </li>
            </Link>
          )}
        </ul>
      </div>
      <div className="flex-[3] flex items-center justify-center">
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
        <i className="text-[18px] text-gray-600 cursor-pointer fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
