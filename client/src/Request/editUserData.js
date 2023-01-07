//Create user data using token and phone no.

const editUserData = async (Userdata, token) => {
  try {
    const userResponse = await fetch(`/user`, {
      method: "PUT",
      body: JSON.stringify(Userdata),
      headers: {
        token: token,
      },
    });
    if (userResponse.status === 200) {
      return true;
    } else {
      alert("Invalid FirstName / LastName/ Password");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default editUserData;
