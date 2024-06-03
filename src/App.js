import React from "react";
import Pages from "./components/pages/Pages";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App flex">
      <SideBar/>
      <Pages/>
      </div>
  );
}

export default App;
