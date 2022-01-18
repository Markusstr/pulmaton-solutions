import React, { useState, useEffect } from "react";
import "./main.css";

import Product from "./product";
import Component from "./component";


export default function Main() {

    const [productList, setProductList] = useState();
    const [componentLocationList, setComponentLocationList] = useState();


    useEffect(() => {
        //Fetch product and component information from JSON files
        const fetchProducts = async() => {
            try {
                let response = await fetch("products.json");
                if (response.status === 200) {
                    let jsonData = await response.json();
                    setProductList(jsonData);
                }
            }
            catch(err) {
                console.log(err);
            }
        }

        const fetchComponents = async() => {
            try {
                let response = await fetch("components.json");
                if (response.status === 200) {
                    let jsonData = await response.json();
                    setComponentLocationList(jsonData);
                }
            }
            catch(err) {
                console.log(err);
            }
        }

        fetchProducts();
        fetchComponents();
    },[]);


    const confirmProducts = () => {
        //Change the chosen product amounts in the componentLocationList
        let totalList = [...componentLocationList]
        totalList = totalList.map(item => ({...item, componentChosenAmount: 0}))

        productList.forEach(productItem => {
            if (productItem.productChosenAmount > 0) {
                productItem.productComponents.forEach(component => {
                    totalList = totalList.map(listItem => 
                        listItem.componentName === component.componentName ? {...listItem, componentChosenAmount: listItem.componentChosenAmount + component.componentAmount * productItem.productChosenAmount} : listItem
                    );
                });
            }
        });
        //Sort the components by location letter and then by number
        totalList.sort((a,b) => {
            let locationA = a.componentLocation.split("-");
            let locationB = b.componentLocation.split("-");

            if (locationA[0] < locationB[0]) {
                return -1;
            }
            else if (locationA[0] > locationB[0]) {
                return 1;
            }
            else {
                if (parseInt(locationA[1]) < parseInt(locationB[1])) {
                    return -1;
                }
                else if (parseInt(locationA[1]) > parseInt(locationB[1])) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        setComponentLocationList(totalList);
    }


    return (
        <div className="wrapper">
            <Product 
                productList={productList}
                setProductList={setProductList}
                confirmProducts={confirmProducts}
            />
            <Component 
                componentLocationList={componentLocationList}
            />
        </div>
    )
}