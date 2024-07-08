// import Cookies from "js-cookie";

// const generateAxiosConfig = () => {
//   const userToken = Cookies.get("auth_token");
//   return {
//     headers: {
//       "Content-Type": "application/json",
//       ...(userToken ? { Authorization: `Token ${userToken}` } : {}),
//     },
//   };
// };

// export default generateAxiosConfig;

import Cookies from "js-cookie";

const generateAxiosConfig = () => {
  const userToken = Cookies.get("auth_token");
  console.log(userToken);
  return {
    headers: {
      "Content-Type": "application/json",
      ...(userToken ? { Authorization: `Token ${userToken}` } : {}),
    },
  };
};

export default generateAxiosConfig;
