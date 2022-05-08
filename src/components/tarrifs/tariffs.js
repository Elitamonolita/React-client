import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
const Tariffs = () => {
    const tariffData = [
        { name: "My first tariff", speed: 100, price: 1000, current: false},
        { name: "My second tariff", speed: 2000, price: 2000, current: true},
        { name: "My third tariff", speed: 9000, price: 3000, current: true}
    ];
    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems tariff={item}/>
        )
    })
    return (
        <table className="table position">
            <thead className="list-head">
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">Speed</th>
                <th scope="col">Price</th>
                <th scope="col">Подключить</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>



    );
};
export default Tariffs
