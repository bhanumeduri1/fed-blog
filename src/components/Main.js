import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
   <h1>CSS COLORS AND BACKGROUND</h1>
   <ol>
    <li id="bg-color">background-color</li>
    <li id="bg-image">background-image</li>
    <li id="bg-repeat">background-repeat</li>
    <li id="bg-attach">background-attachment : <br></br>The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).<p>The background-image is fixed. Try to scroll down the page.</p>
  </li>
  <li id="bg-position">background-position</li>
   </ol>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
