import React from "react";
import "./product.css";


export default function Product(props) {


    const onClickMinus = (product) => {
        props.setProductList(
            props.productList.map(item =>
                item.productName === product.productName ? {...item, productChosenAmount: product.productChosenAmount - 1} : item
        ));
    }

    const onClickPlus = (product) => {
        props.setProductList(
            props.productList.map(item =>
                item.productName === product.productName ? {...item, productChosenAmount: product.productChosenAmount + 1} : item
        ));
    }

    return (
        <div className="product-container">
            {props.productList.map(product => (
            <div className="product-info">
                <div className="product-name">
                    <h2>{product.productName}</h2>
                </div>
                <div className="product-amount">
                    <button type="button" onClick={() => onClickMinus(product)}>-</button>
                    <p>{product.productChosenAmount} kpl</p>
                    <button type="button" onClick={() => onClickPlus(product)}>+</button>
                </div>
            </div>
            ))}
            <button onClick={props.confirmProducts}>Vahvista tuotteet</button>
        </div>
        
    )
}