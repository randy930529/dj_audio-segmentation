import React from 'react';
import { Link } from "react-router-dom";
import { SingleTexto } from './SingleTexto';
import { AudioInputClip } from './AudioInputClip';
import { ButtonUpload } from './ButtonUpload';
import { ButtonGo } from './ButtonGo';

class AudioUploadPage extends React.Component{

	render() {
        return(
        <div>
        <div className="notification is-primary m-3">
            <SingleTexto 
                value="Audio Input Clip" 
            />

            <AudioInputClip 
                class="input is-rounded" 
                type="file" name="file" 
                onChange={() => this.props.onChange()} 
            />
            
            {!"isSelected" ?
                (
                    <div>
                        <SingleTexto 
                            class="has-text-danger m-3" 
                            value={"Filename: selectedAudio.name"} 
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
                        disabled={!"isDisabled"?"disabled":""} 
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