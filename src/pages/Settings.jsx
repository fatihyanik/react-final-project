function Setting({ currentUser, setCurrentUser, users, setUsers }) {
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

  function styleForm() {
    if (currentUser.admin) {
      return "block";
    } else {
      return "none";
    }
  }

  function changeFoto(e) {
    e.preventDefault();
    const imageInput = document.querySelector("#input-image");
    const imageURL = imageInput.value;
    const newArray = [...users];

    newArray[currentUser.id].image = imageURL;

    setUsers(newArray);
    setCurrentUser({
      ...currentUser,
      image: imageURL,
    });

    console.log(newArray);
    console.log(users);
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
        <form onSubmit={changeFoto}>
          <input />
          <input
            id="input-image"
            name="name"
            className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
            type="text"
            placeholder="Image URL"
          />
          <button>CHANGE IMAGE</button>
        </form>
      </div>
      <div style={{ display: `${styleForm()}` }}>
        <div>Admin Yetkisi Ver</div>
        <form onSubmit={getNewAdmin}>
          <label for="admin">Choose a new Admin:</label>

          <select name="admin" id="admin">
            {users.map((user) => {
              return user.name !== currentUser.name && user.admin === false ? (
                <option value={user.name}>{user.name}</option>
              ) : null;
            })}
          </select>

          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Setting;
