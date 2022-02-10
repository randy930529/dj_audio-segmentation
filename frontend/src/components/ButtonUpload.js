export function ButtonUpload(props) {
    return(
        <button className={props.class} disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
    )
}