import React, {Component} from 'react';
import FinalFilesContainer from '../components/FinalFilesContainer';

export default class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sbj: this.props.match.params.sbj,
            fl: this.props.match.params.fl
        }
    }

    render(){
        return (
            <>
                <FinalFilesContainer sbj={this.state.sbj} fl={this.state.fl} />
            </>
        )
    }
}