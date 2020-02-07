import React from 'react';
import {useContext} from "react";
import {FilesContext} from '../Context';
import SubjectBox from './SubjectBox'


export default function FilesContainer({sbj}) {
    const context = useContext(FilesContext);
        const {types} = context;
        
        return (
            <>
                <div className="body-box">
                    <div className="items-box">
                        {types.map((type,index) => {
                            return <SubjectBox key={index} type={type} sbj={sbj}/>
                        })}
                        
                    </div>
                </div>
            </>
            )
}