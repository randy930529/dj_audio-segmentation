import { THead } from './THead';
import TBody from './TBody';
import React from 'react';

class TableTag extends React.Component {

    render(){
        return (
            <table className={this.props.class}>
                <THead />
                <TBody segments= {this.props.segments} getBufferSegment={() =>this.props.getBufferSegment()} duration={this.props.duration} />
            </table>
        )
    }
}

export default TableTag;