//check user token

const checkUserToken = async (token) => {
  if (token) {
    const response = await fetch("http://localhost:4000/token?id=" + token, {
      method: "GET",
    });
    let data = await response.json();
    if (response.status === 200 && data.tokenExp > Date.now()) {
      return data;
    } else {
      return false;
    }
  }
};
export default checkUserToken;
