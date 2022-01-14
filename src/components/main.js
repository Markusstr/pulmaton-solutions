import React, { useState, useEffect } from "react";
import "./main.css";

import Product from "./product";
import Component from "./component";


export default function Main() {

    const [productList, setProductList] = useState([
        {
            productName: "Vitriini",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Lasiovi",
                    componentAmount: 2,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Vanerilevy",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Hyllylevy",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 16,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Vedin",
                    componentAmount: 2,
                    componentUnit: "kpl"
                }
            ]
        },
        {
            productName: "Tuoli",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Kangaspala",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 8,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Koivulankku",
                    componentAmount: 3,
                    componentUnit: "m"
                }
            ]
        },
        {
            productName: "Sivupöytä",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Koivulankku",
                    componentAmount: 1.4,
                    componentUnit: "m"
                },
                {
                    componentName: "Pieni mäntylevy",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 4,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Vedin",
                    componentAmount: 1,
                    componentUnit: "kpl"
                }

            ]
        },
        {
            productName: "Kaappi",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Iso mäntylevy",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Vanerilevy",
                    componentAmount: 1,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Vedin",
                    componentAmount: 2,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 20,
                    componentUnit: "kpl"
                },
                {
                    componentName: "Hyllylevy",
                    componentAmount: 2,
                    componentUnit: "kpl"
                }
            ]
        }
    ]);

    const [componentLocationList, setComponentLocationList] = useState([
        {
            componentName: "Hyllylevy",
            componentChosenAmount: 0,
            componentLocation: "C-10"
        },
        {
            componentName: "Pieni mäntylevy",
            componentChosenAmount: 0,
            componentLocation: "B-2"
        },
        {
            componentName: "Iso mäntylevy",
            componentChosenAmount: 0,
            componentLocation: "B-1"
        },
        {
            componentName: "Koivulankku",
            componentChosenAmount: 0,
            componentLocation: "D-4"
        },
        {
            componentName: "Vanerilevy",
            componentChosenAmount: 0,
            componentLocation: "D-1"
        },
        {
            componentName: "Kangaspala",
            componentChosenAmount: 0,
            componentLocation: "A-4"
        },
        {
            componentName: "Lasiovi",
            componentChosenAmount: 0,
            componentLocation: "E-1"
        },
        {
            componentName: "Ruuvi",
            componentChosenAmount: 0,
            componentLocation: "A-2"
        },
        {
            componentName: "Vedin",
            componentChosenAmount: 0,
            componentLocation: "A-3"
        },
    ]);




    useEffect(() => {
        //TODO Fetch product and component information from JSON files
    },[]);


    const confirmProducts = () => {
        let totalList = [...componentLocationList]
        totalList = totalList.map(item => ({...item, componentChosenAmount: 0}))

        productList.forEach(item => {
            if (item.productChosenAmount > 0) {
                item.productComponents.forEach(component => {
                    totalList = totalList.map(item2 => 
                        item2.componentName === component.componentName ? {...item2, componentChosenAmount: item2.componentChosenAmount + component.componentAmount} : item2
                    );
                });
            }
        });
        totalList.sort((a,b) => a.componentLocation < b.componentLocation);
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