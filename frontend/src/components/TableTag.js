import { THead } from './THead';
import { TBody } from './TBody';

export function TableTag(props) {
    return (
        <table className={props.class}>
            <THead />
            <TBody />
        </table>
    )
}