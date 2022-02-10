import React from "react";
import { SingleTexto } from "./SingleTexto";
import styles from "./CategoryCardModal.module.css";
import { post } from "../utils/httpClient";

class CategoryCardModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            menssage: '',
            value_cat: -1,
            value_sub:-1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeSelectSub = this.handleChangeSelectSub.bind(this);
        this.textArea = React.createRef();
        this.select = React.createRef();
        this.select_sub = React.createRef();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChangeSelect(event) {
        this.setState({value_cat: event.target.value});
    }

    handleChangeSelectSub(event) {
        this.setState({value_sub: event.target.value});
    }
    
    handleSubmit(){
        
        if(this.props.current !== null){
            if(this.state.value_cat === -1 || this.state.value_sub === -1){
                this.setState({
                    menssage: (<div className="has-text-danger m-3">Select segment category.</div>)
                })
                return null;
            }
            const path = "/v3/post/?name=segment";
            const data = {
                color: this.props.current.color,
                ini: this.props.current.ini,
                end: this.props.current.end,
                width: this.props.current.width,
                comment: this.state.value,
                audio: this.props.id,
                category:this.state.value_cat,
                sub_category:this.state.value_sub
            }

            post(path, data).then((data) => {
                console.log("Success", data);
                this.props.getBufferSegment()
                
            }).catch((error)=>{
                console.log("Success", error);
            });
        }
        this.props.onClick();
    }

    render() {
        const categories = [];
        categories.push(<option key={-1} value={-1}>-----</option>);
        const subCategories = [];
        subCategories.push(<option key={-1} value={-1}>-----</option>);
        this.props.categories.forEach((cat) => {
            cat.parent?
                subCategories.push(
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                )
            :
                categories.push(
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                )
        });
        return (
            <div>
                <div className={`column is-three-fifths ${styles.cardModal}`}>

                    <div className="card-content">
                        <div className="box p-3">
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Level 1"
                                    />
                                </div>
                                <div className="column">
                                    <div className="select is-rounded">
                                        <select 
                                            key={1} 
                                            value={this.state.value_cat} 
                                            onChange={this.handleChangeSelect}
                                            ref={this.select}
                                        >
                                            {categories}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Level 2"
                                    />
                                </div>
                                <div className="column">
                                    <div className="select is-rounded">
                                        <select 
                                            key={2} 
                                            value={this.state.value_sub} 
                                            onChange={this.handleChangeSelectSub}
                                            ref={this.select_sub}
                                        >
                                            {subCategories}
                                        </select>
                                    </div>
                                </div>
                                {this.state.menssage}
                            </div>
                            <div className="columns">
                                <div className="m-3 p-3">
                                    <SingleTexto 
                                        value="Comment"
                                    />
                                </div>
                                <div className="column">
                                    <textarea 
                                        className={"textarea is-primary"} 
                                        placeholder="Primary textarea" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} 
                                        ref={this.textArea}
                                    />
                                </div>
                            </div>
                            <footer className="modal-card-foot is-justify-content-right has-background-white">
                                <button className="button is-success" onClick={() => this.handleSubmit()}>OK</button>
                                <button className="button" onClick={() => this.props.onClick()}>Cancel</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryCardModal;