//Create user data using token and phone no.

const createUserData = async (Userdata) => {
  try {
    const userResponse = await fetch(`/user`, {
      method: "POST",
      body: JSON.stringify(Userdata),
    });
    if (userResponse.status === 200) {
      return true;
    } else {
      alert("Invalid User Details");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default createUserData;
