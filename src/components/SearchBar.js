import React, { Component } from 'react';
import {FilesContext} from '../Context';
import {withConsumer} from '../Context';
import {Link} from 'react-router-dom';

class SearchBar extends Component {
    static contextType = FilesContext;
    render() {
        let {levels, subjects, types, handleChange, url} = this.context;

        // fill the form
        const fillIt = (items) => {
            let result = items.map((lvl, index) => {
                return <option key={index} value={lvl}>{lvl}</option>
            })
            return result;
        }

        let Levels = fillIt(levels);

        let Subjects = fillIt(subjects);

        let Types = fillIt(types);

        return (
        <>
            <div className="search-bar">
                <div className="search-form">
                    <select className="choice-btn" name="levelName" id="level" onChange={handleChange}>
                        <option value="" disabled selected>القسم</option>
                        {Levels}
                    </select>
                    <select className="choice-btn" name="subjectName" id="subject" onChange={handleChange}>
                        <option value="" disabled selected>المجال</option>
                        {Subjects}
                    </select>
                    <select className="choice-btn" name="typeName" id="type" onChange={handleChange}>
                        <option value="" disabled selected>نوع الوثائق</option>
                        {Types}
                    </select>


                </div>
                <Link to={url}><button type="button" className="submit-btn">بحث</button></Link>
        </div>
    </>
        )
    }
}

export default withConsumer(SearchBar)
