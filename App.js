import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", {
    id:"title"
}, "Namaste Javascript!");

const heading2 = React.createElement("h1", {
    id:"title2"
}, "Namaste React!");

const container = React.createElement("div", {
    id:"container"
}, [heading, heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a  react element inside the root
root.render(container);