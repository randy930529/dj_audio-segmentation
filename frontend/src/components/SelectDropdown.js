export function SelectDropdown (props) {
    const options = props.values.slice();
    return (
        <div className={props.class}>
            <select>
                {
                    options.map((option) => {
                        return (
                            <option key={option.id}>{option.title}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}