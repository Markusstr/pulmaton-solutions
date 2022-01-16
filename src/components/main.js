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
                    componentAmount: 2
                },
                {
                    componentName: "Vanerilevy",
                    componentAmount: 1
                },
                {
                    componentName: "Hyllylevy",
                    componentAmount: 1
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 16
                },
                {
                    componentName: "Vedin",
                    componentAmount: 2
                }
            ]
        },
        {
            productName: "Tuoli",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Kangaspala",
                    componentAmount: 1
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 8
                },
                {
                    componentName: "Koivulankku",
                    componentAmount: 3
                }
            ]
        },
        {
            productName: "Sivupöytä",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Koivulankku",
                    componentAmount: 1.4
                },
                {
                    componentName: "Pieni mäntylevy",
                    componentAmount: 1
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 4
                },
                {
                    componentName: "Vedin",
                    componentAmount: 1
                }

            ]
        },
        {
            productName: "Kaappi",
            productChosenAmount: 0,
            productComponents: [
                {
                    componentName: "Iso mäntylevy",
                    componentAmount: 1
                },
                {
                    componentName: "Vanerilevy",
                    componentAmount: 1
                },
                {
                    componentName: "Vedin",
                    componentAmount: 2
                },
                {
                    componentName: "Ruuvi",
                    componentAmount: 20
                },
                {
                    componentName: "Hyllylevy",
                    componentAmount: 2
                }
            ]
        }
    ]);

    const [componentLocationList, setComponentLocationList] = useState([
        {
            componentName: "Hyllylevy",
            componentChosenAmount: 0,
            componentLocation: "C-10",
            componentUnit: "kpl"
        },
        {
            componentName: "Pieni mäntylevy",
            componentChosenAmount: 0,
            componentLocation: "B-2",
            componentUnit: "kpl"
        },
        {
            componentName: "Iso mäntylevy",
            componentChosenAmount: 0,
            componentLocation: "B-1",
            componentUnit: "kpl"
        },
        {
            componentName: "Koivulankku",
            componentChosenAmount: 0,
            componentLocation: "D-4",
            componentUnit: "m"
        },
        {
            componentName: "Vanerilevy",
            componentChosenAmount: 0,
            componentLocation: "D-1",
            componentUnit: "kpl"
        },
        {
            componentName: "Kangaspala",
            componentChosenAmount: 0,
            componentLocation: "A-4",
            componentUnit: "kpl"
        },
        {
            componentName: "Lasiovi",
            componentChosenAmount: 0,
            componentLocation: "C-1",
            componentUnit: "kpl"
        },
        {
            componentName: "Ruuvi",
            componentChosenAmount: 0,
            componentLocation: "C-2",
            componentUnit: "kpl"
        },
        {
            componentName: "Vedin",
            componentChosenAmount: 0,
            componentLocation: "A-3",
            componentUnit: "kpl"
        },
    ]);




    useEffect(() => {
        //TODO Fetch product and component information from JSON files
    },[]);


    const confirmProducts = () => {
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