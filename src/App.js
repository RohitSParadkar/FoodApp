import React from "react";
import ReactDOM from "react-dom/client";
//defualt import 
import Header from "./components/Header";
//name import 
import Body from "./components/Body";
//import * as obj from "./components/Header"  obj.Title ,obj.Header
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header/>
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
