import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    {
      id: "heading1",
      key:"h1"
    },
    "this is heading one"
  );
  console.log(heading1);

  // const heading2 = React.createElement(
  //   "h2", // tagname
  //   {
  //     id: "heading2", // attribute
  //     hellow : "hello" //props 
  //   },
  //   "this is from parcel"  //children
  // );

 const heading2 = <h2 id="h2" key="h2">this from jsx</h2>

  const container = React.createElement(
    "div",
    {
      id: "container",
    },[heading1,heading2] 
  ); // want to put multiple elements inside

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);

  console.log("hello world");