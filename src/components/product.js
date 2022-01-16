import React from "react";
import "./product.css";


export default function Product(props) {


    const onClickMinus = (product) => {
        if (product.productChosenAmount > 0) {
            props.setProductList(
                props.productList.map(item =>
                    item.productName === product.productName ? {...item, productChosenAmount: product.productChosenAmount - 1} : item
            ));
        }
    }

    const onClickPlus = (product) => {
        props.setProductList(
            props.productList.map(item =>
                item.productName === product.productName ? {...item, productChosenAmount: product.productChosenAmount + 1} : item
        ));
    }

    return (
        <div className="product-container">
            <ul>
                {props.productList.map(product => (
                <li key={product.productName} className="product-info">
                    <div className="product-name">
                        <h2>{product.productName}</h2>
                    </div>
                    <div className="product-amount">
                        <button type="button" onClick={() => onClickMinus(product)}>-</button>
                        <p>{product.productChosenAmount} kpl</p>
                        <button type="button" onClick={() => onClickPlus(product)}>+</button>
                    </div>
                </li>
                ))}
            </ul>
            <div id="product-confirm-button">
                <button onClick={props.confirmProducts}>Vahvista tuotteet</button>
            </div>
        </div>
        
    )
}