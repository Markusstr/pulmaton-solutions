import React from "react";
import "./component.css";


export default function Component(props) {


    return (
        <ul className="component-container">
            {props.componentLocationList.map(item => (
                item.componentChosenAmount > 0 ?
                <li key={item.componentName} className="component-info-box">
                    <h2 id="component-name">{item.componentName}</h2>
                    <div id="component-additional-info">
                        <p>Määrä: {Number.isInteger(item.componentChosenAmount) ? item.componentChosenAmount : item.componentChosenAmount.toFixed(1)} {item.componentUnit} </p>
                        <p>Sijainti: {item.componentLocation}</p>
                    </div>
                </li>
                :
                ""
            ))}
        </ul>
    )
}