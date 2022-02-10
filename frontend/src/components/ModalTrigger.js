export function ModalTrigger(props) {
    return (
        <p className="control">
            <button className="button js-modal-trigger" data-target={props.dataTarget} onClick={props.onClick}>
                <span className="icon">
                    <props.icon />
                </span>
            </button>
        </p>
    )
}