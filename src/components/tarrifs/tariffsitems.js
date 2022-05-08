import React from "react";

const Tariffsitems = ({tariff}) => {

    const {name, speed, price, current} = tariff;
    const button = () => {
        if (current) {
            return (
                <button className="btn btn-primary" type="submit">Подключить тариф</button>
            )
        } else {
            return (
                <button className="btn btn-primary" type="submit">Подключен</button>
            )
        }
    }
    return (

        <tr>
            <th scope="row"></th>
            <td>{name}</td>
            <td>{speed}</td>
            <td>{price}</td>
            <td>{button(current)}</td>
        </tr>
    );
};
export default Tariffsitems