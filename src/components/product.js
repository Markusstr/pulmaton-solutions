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
        props.productList !== undefined &&
        <div className="product-container">
            <div>
                <ul>
                    {props.productList.map(product => (
                    <li key={product.productName} className="product-info">
                        <h2>{product.productName}</h2>
                        <div className="product-amount">
                            <button className="product-button-change" type="button" onClick={() => onClickMinus(product)}>-</button>
                            <p id="product-chosen-amount">{product.productChosenAmount} kpl</p>
                            <button className="product-button-change" type="button" onClick={() => onClickPlus(product)}>+</button>
                        </div>
                    </li>
                    ))}
                </ul>
                <div id="product-button-confirm-container">
                    <button className="product-button-confirm" onClick={props.confirmProducts}>Vahvista tuotteet</button>
                </div>
            </div>
        </div>
    )
}