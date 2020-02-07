import React from 'react';
import {Link} from 'react-router-dom';

export default function FinalFileBox({file, index}) {
    return (
        <>
        <div className="item-box">
                <h4 className="main-text">{file}</h4>
                <div className="box-btns">
                    <button className="box-btn">قراءة</button>
                    <button className="box-btn">تحميل</button>

                </div>
            </div>
        </>
    )
}