//extend user token

const extendToken = async (token) => {
  if (token) {
    const tokenExtend = {
      id: token,
      extend: true,
    };
    const response = await fetch("http://localhost:4000/token", {
      method: "PUT",
      body: JSON.stringify(tokenExtend),
      mode: "cors",
    });
    let data = await response.json();
    if (response.status === 200) {
      return data.TokenValidUpto;
    } else {
      //alert("Server Error Please logout and login again");
      return data;
    }
  }
};
export default extendToken;
