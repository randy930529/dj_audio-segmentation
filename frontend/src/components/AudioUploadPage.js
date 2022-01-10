import React from 'react';
import { Link } from "react-router-dom";
import { SingleTexto } from './SingleTexto';
import { ButtonUpload } from './ButtonUpload';
import { ButtonGo } from './ButtonGo';

class AudioUploadPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            files: [{
                audioClip: null,
            }],
            isDisabled: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.fileInput = React.createRef();
    }

    handleChange() {
        const files = this.state.files.slice();
        const file = files[files.length -1];
        let audio = file.audioClip;
        audio = this.fileInput.current.files[0];

        this.setState({
            files: files.concat([
                {
                    audioClip: audio
                }
            ]),
            isDisabled:true,
        });
    }

	render() {
        const files = this.state.files;
        const audio = files[files.length - 1];

        return(
        <div>
        <div className="notification is-primary m-3">
            <SingleTexto 
                value="Audio Input Clip" 
            />

            <input 
                className="input is-rounded" 
                type="file"
                name="file"
                accept="audio/wav, audio/mp3, audio/ogg" 
                ref={this.fileInput}
                onChange={this.handleChange} 
            />
            
            {console.log(audio)}
            {console.log(this.state.isDisabled)}
            {this.state.isDisabled ?
                (
                    <div>
                        <SingleTexto 
                            class="has-text-danger m-3" 
                            value={`Filename: ${audio.audioClip.name}`} 
                        />
                    </div>
                )
                : 
                (
                    <div>
                        Input audio file (wav, mp3, ogg)
                        <SingleTexto 
                            value="Select a file to show details" 
                        />
                    </div>
                )}
			<div>
                <ButtonUpload 
                    class="button is-link is-rounded m-3" 
                    onClick={this.props.onClick} 
                    value="Upload" 
                />

                <Link to={"/audio"}>
                    <ButtonGo 
                        class="button is-success is-rounded m-3" 
                        disabled={!this.state.isDisabled?"disabled":""} 
                        onClick={this.props.onClick} 
                        value="Go" 
                    />
                </Link>
			</div>
		</div>
        </div>
	)
    }
    
}

export default AudioUploadPage;