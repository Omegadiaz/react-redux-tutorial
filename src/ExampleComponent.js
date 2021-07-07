import React, {useState} from "react";

function ExampleComponent(props){
  const[articles] = useState([
    { title: "React Redux Tutorial for Beginners", id: 1 },
    { title: "TypeScript tutorial for beginners", id: 2 }
  ])
  
return(
  
    <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>
  )
}
  


export default ExampleComponent;