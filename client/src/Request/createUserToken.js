//create a users token

const createUserToken = async (phone, password) => {
  try {
    if (phone && password) {
      const requestObj = {
        phone,
        password,
      };
      const response = await fetch("http://localhost:4000/token", {
        method: "POST",
        body: JSON.stringify(requestObj),
      });
      let data = await response.json();
      if (response.status === 200) {
        return data.id;
      } else {
        alert("Invalid phone and password");
        return false;
      }
    }
  } catch {
    alert("Server Error! Please try again");
    return false;
  }
};

export default createUserToken;
