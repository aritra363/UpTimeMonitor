//Create link data using token and phone no.

const addLink = async (linkData, token) => {
  try {
    const userResponse = await fetch(`/check`, {
      method: "POST",
      body: JSON.stringify(linkData),
      headers: {
        token: token,
      },
    });
    if (userResponse.status === 200) {
      const result = await userResponse.json();
      return result["checkObj"].id;
    } else {
      alert("Invalid Link details");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default addLink;
