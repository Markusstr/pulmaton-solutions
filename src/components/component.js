import React from "react";
import "./component.css";


export default function Component(props) {


    return (
        <div className="component-container">
            {props.componentLocationList.map(item => (
                item.componentChosenAmount > 0 ?
                <div className="component-info">
                    <p>{item.componentName}</p>
                    <p>{item.componentChosenAmount}</p>
                    <p>{item.componentLocation}</p>
                </div>
                :
                ""
            ))}
        </div>
    )
}