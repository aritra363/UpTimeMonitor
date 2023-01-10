//delete link using id and token

const deleteLink = async (linkId, token) => {
  try {
    const userResponse = await fetch(`/check?id=${linkId}`, {
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

export default deleteLink;
