import React from "react";
import Pages from "./components/pages/Pages";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className=" w-[100vw] flex">
      <SideBar/>
      <Pages className='  '/>
      </div>
  );
}

export default App;
