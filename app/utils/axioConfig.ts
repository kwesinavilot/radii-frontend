import { getServerSideToken } from "./getServerSideToken";

const generateAxiosConfig = (token: any) => ({
  headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Token ${token}` } : {}),
  },
});

export default generateAxiosConfig;
