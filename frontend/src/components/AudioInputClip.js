export function AudioInputClip(props) {
    return (
        <input className={props.class} type={props.type} name={props.name} onChange={props.onChange} />
    )
}