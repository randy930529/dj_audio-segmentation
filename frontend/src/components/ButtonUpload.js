export function ButtonUpload(props) {
    return(
        <button className={props.class} onClick={props.onClick}>{props.value}</button>
    )
}