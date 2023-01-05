//Create user data using token and phone no.

const deleteAccount = async (phone, token) => {
  try {
    const userResponse = await fetch(`/user?phone=${phone}`, {
      method: "DELETE",
      headers: {
        token: token,
      },
    });
    if (userResponse.status === 200) {
      return true;
    } else {
      alert("Auth Error");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default deleteAccount;
