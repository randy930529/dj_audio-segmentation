import React from "react";
import { SingleTexto } from "./SingleTexto";
import { SelectDropdown } from "./SelectDropdown";
import { PrimaryTextArea } from "./PrimaryTextArea";

class CategoryCardModal extends React.Component{
    render() {
        return (
            <div>
                <div id="modal-js-example" className="modal">
                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <div className="box p-3">
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Level 1"
                                    />
                                </div>
                                <div className="column">
                                    <SelectDropdown 
                                        class="select is-rounded" 
                                        values={["Category01","Category02"]} 
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Level 2"
                                    />
                                </div>
                                <div className="column">
                                    <SelectDropdown 
                                        class="select is-rounded" 
                                        values={["SubCategory01","SubCategory02"]} 
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Comment"
                                    />
                                </div>
                                <div className="column">
                                    <PrimaryTextArea class="textarea is-primary" />
                                </div>
                            </div>
                            <footer className="modal-card-foot is-justify-content-right has-background-white">
                                <button className="button is-success">OK</button>
                                <button className="button">Cancel</button>
                            </footer>
                        </div>
                    </div>

                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
            </div>
        )
    }
}

export default CategoryCardModal;