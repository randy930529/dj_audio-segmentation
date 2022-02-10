import React from 'react';
import { Link } from "react-router-dom";
import { SingleTexto } from '../components/SingleTexto';
import { ButtonUpload } from '../components/ButtonUpload';
import { ButtonGo } from '../components/ButtonGo';
import { post } from '../utils/httpClient';
import { getAudioBuffer } from '../utils/getUtilsAudioClip';

class AudioUploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [{
                audioClip: {name:""},
            }],
            isDisabled: false,
            buttonGo: null
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

    handleOnClick = async () =>{
        const files = this.state.files.slice();
        const file = files[files.length -1];
        let audio = file.audioClip;

        getAudioBuffer(audio, this.props.context).then((buffer) =>{
            
            const formData = {
                name: audio.name,
                file_type: audio.type,
                sampleRate: buffer.sampleRate,
                length: buffer.length,
                duration: buffer.duration/60,
                numberOfChannels: buffer.numberOfChannels
            }

            const path = "/v1/post/?name=audioClip";

            post(path, formData).then((data) => {
                console.log("Success", data)
                this.props.setFile(audio)
                this.props.setAudioClip(data)

                this.setState({
                    buttonGo: (
                        <ButtonGo 
                            class="button is-success is-rounded m-3" 
                            onClick={this.props.onClick} 
                            value="Go" 
                        />
                    )
                });
            }).catch((error)=>{
                console.log("Success", error);
            });

        })
    }

	render() {
        const files = this.state.files;
        const audio = files[files.length - 1];

        return(
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
                    disabled={!this.state.isDisabled?"disabled":""} 
                    onClick={() => this.handleOnClick()} 
                    value="Upload" 
                />

                <Link to={"/audio/" + audio.audioClip.name}>
                    {this.state.buttonGo}
                </Link>
			</div>
		</div>
	)
    }
    
}

export default AudioUploadPage;