import React from "react";
export default function Card(props){
    console.log(props.items.location)

    return(
        <div className="card">
           <img  src="../img/Rectangle 84.png" alt=""/>
           <div className="card--text">
               <p>
                   <span>{props.items.location}</span> <span>View on Google Maps</span>
               </p>
               <h1>
              {props.items.title}
               </h1>
               <h3>{props.items.startDate}</h3>
               <p>{props.items.description}</p>

           </div>
        </div>
    )
}