const heading = React.createElement("h2",{},"hello world from react js  js file ...");

// heading is react element (not a real html element) which is a object has all data in it as a value of key
console.log(heading,"heading");

const root = ReactDOM.createRoot(document.getElementById("root")) ; 
// root is a react dom container created from real dom container where we will going to inject
// react element in future
console.log(root , "root");

// render is dom method used to convert selectiveley changed react element to html element
root.render(heading);


{/* <div>
    <div>
        <h1>

        </h1>
    </div>
</div> */}

const nested = React.createElement("div",{id:"grand-parent"},
   React.createElement("div", {id: "parent"},
   [React.createElement("h1" , {id:"heading", key:1} , "i am grandson") , React.createElement("h1" , {id:"heading",key:2} , "i am granddaughter")]
   )
)

root.render(nested);
