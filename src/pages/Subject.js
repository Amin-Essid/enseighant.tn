import React, {Component} from 'react';
import FilesContainer from '../components/FilesContainer';

export default class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sbj: this.props.match.params.sbj
        }
    }


    render(){
        return (
            <>
                <FilesContainer sbj={this.state.sbj}/>
            </>
        )
    }
}