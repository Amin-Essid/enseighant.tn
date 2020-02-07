import React from 'react';
import {Link} from 'react-router-dom';

export default function FileBox({file}) {
        const {name, optionOne, optionTwo, optionThree, optionFour} = file;
    return (
        <>
        <div className="item-box">
                <h4 className="main-text">{name}</h4>
                <div className="box-btns">
                    <Link to={`/${name} ${optionOne}`}><button className="box-btn">{optionOne}</button></Link>
                    <Link to={`/${name} ${optionTwo}`}><button className="box-btn">{optionTwo}</button></Link>
                    <Link to={`/${name} ${optionThree}`}><button className="box-btn">{optionThree}</button></Link>
                    <Link to={`/${name} ${optionFour}`}><button className="box-btn">{optionFour}</button></Link>
                </div>
            </div>
        </>
    )
}