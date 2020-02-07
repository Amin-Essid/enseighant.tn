import React from 'react';
import {Link} from 'react-router-dom';

export default function FileBox({type, sbj}) {
    return (
        <>
        <div className="item-box">
                <h4 className="main-text">{type}</h4>
                <div className="box-btns">
                    <Link to={`/${sbj}/${type}`}><button className="box-btn">دخول</button></Link>
                </div>
            </div>
        </>
    )
}