import { getServerSideToken } from "./GetServerSideToken";

const generateAxiosConfig = (token: any) => ({
  headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Token ${token}` } : {}),
  },
});

export default generateAxiosConfig;
