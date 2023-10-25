// import api of package from node_modules
import React  from "react";
import ReactDOM from "react-dom";
// react - name of package React is component in react module , ReactDOM is component in react-dom module



const root = ReactDOM.createRoot(document.getElementById("root")) ; 

const nested = React.createElement("div",{id:"grand-parent"},
   React.createElement("div", {id: "parent"},
   [React.createElement("h1" , {id:"heading", key:1} , "i am grandson") , React.createElement("h1" , {id:"heading",key:2} , "i am granddaughter")]
   )
)

root.render(nested);
