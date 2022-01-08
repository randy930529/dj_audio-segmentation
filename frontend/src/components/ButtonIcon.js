export function ButtonIcon(props) {
    return (
        <p className="control">
            <button className="button" onClick={props.onClick}>
                <span className="icon">
                    <props.icon />
                </span>
            </button>
        </p>
    )
}