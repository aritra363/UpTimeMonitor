//fetch Linksusing token and checkid

const getLinks = async (id, token) => {
  try {
    const userResponse = await fetch(`/check?checkid=${id}`, {
      method: "GET",
      headers: {
        token: token,
      },
    });
    const checkObj = await userResponse.json();
    if (userResponse.status === 200) {
      return checkObj;
    } else {
      alert("Either Wrong Check Id else Invalid token");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default getLinks;
