import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { post } from '../utils/httpClient';
import { ButtonIcon } from './ButtonIcon';
import { useRoundToNum } from '../hooks/useRoundToNum';

class TBody extends React.Component {

handleDelete(pk){
    const path = "/v3/delete/" + pk + "/";
    const data = {pk: pk};
    post(path, data).then((data) => {
        console.log("Success", data);
    }).catch((error)=>{
        console.log("Success", error);
        this.props.getBufferSegment();
    });
}
    render(){
        const segmentations = this.props.segments.slice();
        const items = segmentations.map((item, index) =>{
            return(
                <tr key={index}>
                    <th>{index}</th>
                    <td>{useRoundToNum(item.ini * this.props.duration, 3)} - {useRoundToNum(item.end * this.props.duration, 3)}</td>
                    <td>Category01:Subcaregory02</td>
                    <td onClick={() =>this.handleDelete(item.id)}><ButtonIcon icon={FaTrashAlt} /></td>
                </tr>
            );
        });

        return (
            <tbody>
                {items}
            </tbody>
        )
    }
}

export default TBody;