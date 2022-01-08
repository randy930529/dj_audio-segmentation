import { FaTrashAlt } from 'react-icons/fa';
import { ButtonIcon } from './ButtonIcon';

export function TBody(props) {
    return (
        <tbody>
            <tr>
                <th>1</th>
                <td>1.293 - 4.234</td>
                <td>Category01:Subcaregory02</td>
                <td><ButtonIcon icon={FaTrashAlt} /></td>
            </tr>
            <tr>
                <th>2</th>
                <td>1.293 - 4.234</td>
                <td>Category01:Subcaregory02</td>
                <td><ButtonIcon icon={FaTrashAlt} /></td>
            </tr>
        </tbody>
    )
}