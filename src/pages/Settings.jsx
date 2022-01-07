function Setting({ currentUser, users, setUsers }) {
  console.log(currentUser.email);

  function getNewAdmin(e) {
    e.preventDefault();

    const selectElement = document.querySelector("#admin");

    console.log(selectElement.value);

    const newArray = [...users];

    newArray.forEach((user) => {
      if (user.name === selectElement.value) {
        user.admin = true;
      }
    });

    setUsers(newArray);
  }

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
        </form>
      </div>
      <div>Admin Yetkisi Ver</div>
      <form onSubmit={getNewAdmin}>
        <label for="admin">Choose a new Admin:</label>

        <select name="admin" id="admin">
          {users.map((user) => {
            return user.name !== currentUser.name ? (
              <option value={user.name}>{user.name}</option>
            ) : null;
          })}
        </select>

        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Setting;
