import React from 'react';
import {Link} from 'react-router-dom';
import {StyledSubjectText} from './StyledText';

export default function FileBox({type, sbj}) {
    return (
        <>
        <div className="item-box">
                <StyledSubjectText>{type}</StyledSubjectText>
                <div className="box-btns">
                    <Link to={`/${sbj}/${type}`}><button className="box-btn">دخول</button></Link>
                </div>
            </div>
        </>
    )
}