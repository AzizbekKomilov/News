import React from "react";
import Header from "./companents/Header/header";
import Footer from "./companents/Footer/Footer";
import Main from "./companents/Main/Main";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <div className="App container">
      <Header />
          <Main />
      <Footer />
    </div>
    </BrowserRouter>
 
  );
}

export default App;
