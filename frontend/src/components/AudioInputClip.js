export function AudioInputClip(props) {
    return (
        <input className={props.class} type={props.type} name={props.name} accept="audio/wav, audio/mp3, audio/ogg" onChange={props.onChange} />
    )
}