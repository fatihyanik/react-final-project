function Setting({ currentUser, setCurrentUser, users, setUsers }) {
  function getNewAdmin(e) {
    e.preventDefault();

    const selectElement = document.querySelector("#admin");


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

  }

  return (
    <div className="flex items-center flex-col mt-10">
      <div className="p-5">
        <form className="flex flex-col">
          
          <label className="text-[20px] mt-12">Username</label>
          <input type="text" placeholder={currentUser.name} />
          <label className="text-[20px] mt-5">E-mail</label>
          <input type="email" placeholder={currentUser.email} />
          <label className="text-[20px] mt-5">Password</label>
          <input type="password" placeholder={currentUser.password} />
        </form>
        <form onSubmit={changeFoto}>
          <input />
        
          <div className="settingsPP flex justify-center items-center mt-10 mb-10">
            <img style={{ height: "20vh" }} src={currentUser.image} alt="" />
          </div>
          <input
            id="input-image"
            name="name"
            className="p-[10px] bg-white border rounded-[10px] focus:outline-none"
            type="text"
            placeholder="Image URL"
          />
          <button className="m-3 right-[20px] bg-red-400 hover:bg-red-500 cursor-pointer p-[10px] border-none text-white rounded-[10px]">CHANGE IMAGE</button>
        </form>
      </div>
      <div style={{ display: `${styleForm()}` }}>
        <div className="text-[20px] mt-5 mb-5">Admin Permission</div>
        <form onSubmit={getNewAdmin}>
          <label className="text-[20px]" htmlFor="admin">Choose a new Admin: </label>

          <select className="m-3" name="admin" id="admin">
            {users.map((user) => {
              return user.name !== currentUser.name && user.admin === false ? (
                <option value={user.name}>{user.name}</option>
              ) : null;
            })}
          </select>

          <input className="m-3 right-[20px] bg-teal-400 hover:bg-teal-600 cursor-pointer p-[10px] border-none text-white rounded-[10px]" id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Setting;
