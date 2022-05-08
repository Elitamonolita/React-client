import React from "react";
import './main-page.css'
const MainPage = () => {
    const clientData =
        {id: 2,
        name: "Sergey",
        surename: "Bespalov",
        middlename: "Michailovich",
        address: "Baturina",
        login: "serg",
        phone: "+79101874245",
        email: "serg-bs@yandex.ru" }
    return (
        <div>
        <div className="Par">
            <p>{ clientData.name }</p>
            <p>{ clientData.surename }</p>
            <p>{ clientData.middlename}</p>
            <p> {clientData.address}</p>
            <p> {clientData.login}</p>
            <p> {clientData.phone}</p>
            <p> {clientData.email}</p>
        </div>
    <p className="info">
        <p>Фамилия</p>
        <p>Имя</p>
        <p>Отчество</p>
        <p>Адрес</p>
        <p>Тариф</p>
        <p>Баланс</p>
        <p>Статус</p>
    </p>
        </div>

);
};
export default MainPage