import React from "react";
import Sidebar from "./Components/LeftPanel/Sidebar";
import Feed from "./Components/MidPanel/Feed";
import Widgets from "./Components/RightPanel/Widgets";
import "./App.css";


function App() {
  return (

    <div className="app">

      {/* LeftPane */}
      <Sidebar />

      {/* MidPane */}
      <Feed />

      {/* RightPane */}
      <Widgets />

    </div>
  );
}

export default App;
