import Sidebar from "../components/Sidebar";

function Setting({ currentUser }) {
  return (
    <div className="settings flex justify-center items-center flex-col">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP flex justify-center">
            <img style={{ height: "20vh" }} src={currentUser.image} alt="" />
          </div>
          <label>Username:</label>
          <input type="text" placeholder={currentUser.name} />
          <label>E-mail:</label>
          <input type="email" placeholder={currentUser.email} />
          <label>Password</label>
          <input type="password" placeholder={currentUser.password} />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
