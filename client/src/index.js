import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
   return (
      <div>
         <Header />
         <HomePage />
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("root"));
