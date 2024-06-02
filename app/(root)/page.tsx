import React from "react";
import Sidebar from "../component/SideBar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">{/* Your main content here */}</div>
    </div>
  );
};

export default Home;
