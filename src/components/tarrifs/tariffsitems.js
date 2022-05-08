import React from "react";

const Tariffsitems = ({tariff}) => {

    const {name, speed, price} = tariff;
    return (

        <tr>
            <th scope="row"></th>
            <td>{name}</td>
            <td>{speed}</td>
            <td>{price}</td>
        </tr>
    );
};
export default Tariffsitems