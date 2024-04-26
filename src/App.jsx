import "@fontsource/exo-2";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import React from "react";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  );
};

export default App;
