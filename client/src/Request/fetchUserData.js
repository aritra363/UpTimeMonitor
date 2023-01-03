//fetch user data using token and phone no.

const fetchUserData = async (phone, token) => {
  try {
    const userResponse = await fetch(
      `http://localhost:4000/user?phone=${phone}&token=${token}`,
      {
        method: "GET",
      }
    );
    const userObj = await userResponse.json();
    if (userResponse.status === 200) {
      return userObj;
    } else {
      alert("Either Wrong phone No. else Invalid token");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default fetchUserData;
