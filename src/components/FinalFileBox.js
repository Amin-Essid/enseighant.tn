import React from 'react';
import {Link} from 'react-router-dom';
import {StyledFileText} from './StyledText';

export default function FinalFileBox({file, index}) {
    return (
        <>
        <div className="item-box">
                <StyledFileText>{file}</StyledFileText>
                <div className="box-btns">
                    <button className="box-btn">قراءة</button>
                    <button className="box-btn">تحميل</button>

                </div>
            </div>
        </>
    )
}