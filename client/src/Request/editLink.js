//Edit Link using token

const editLink = async (id, linkData, token) => {
  try {
    const userResponse = await fetch(`/check?id=${id}`, {
      method: "PUT",
      body: JSON.stringify(linkData),
      headers: {
        token: token,
      },
    });
    if (userResponse.status === 200) {
      return true;
    } else {
      alert("Invalid edit link data");
      return false;
    }
  } catch (err) {
    alert("Server Error please try again!");
    return false;
  }
};

export default editLink;
