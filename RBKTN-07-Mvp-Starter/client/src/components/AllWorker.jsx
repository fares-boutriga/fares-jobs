import React from "react";

import OneWorker from "./OneWorker.jsx";
const AllWorkers= (props)=>{
   
return <div>

    {props.items.map((items, index) => (
      <div key={index}>
        <OneWorker items={items} views={props.views}/>
      
      </div>
    ))}
</div>
}
export default AllWorkers;