import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading1 = React.createElement(
//     "h1",
//     {
//       id: "heading1",
//       key:"h1"
//     },
//     "this is heading one"
//   );
//   console.log(heading1);

//   // const heading2 = React.createElement(
//   //   "h2", // tagname
//   //   {
//   //     id: "heading2", // attribute
//   //     hellow : "hello" //props 
//   //   },
//   //   "this is from parcel"  //children
//   // );

//  const heading2 = <h2 id="h2" key="h2">this from jsx</h2>

//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },[heading1,heading2] 
//   ); // want to put multiple elements inside

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(container);

//   console.log("hello world");


const Heading1 = ()=>(
  <h1 id="h1" key="1">This is heading1</h1> //react element
)
const heading2 = (
<h1 id="h1" key="1">This is heading2</h1>
)
let xyz =10;
//function base component
const ParaComponent1 = ()=>{
  return(
  <div>
    {heading2}
    {Heading1()}
    {<Heading1/>}
    {console.log(xyz)}
    <h2>this is para1</h2>
    <h2>this is para2</h2>
  </div>
  );
}

const ParaComponent2 = ()=>{
  <div>
    <h2>this is para1</h2>
    <h2>this is para2</h2>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParaComponent1/>)
