import React from "react";
import Card from "./Card";
import data from "../data"

let cards = data.map(item => <Card  items={item} id={item.title} />);
export default function CardContainer(){
    return(
        <div className="card-container">
            {cards}
        </div>

    )
    
}