import React from "react";
import { FaPlayCircle, FaSearchPlus, FaSearchMinus, FaSearch, FaSave, FaBan, FaRegPaperPlane } from 'react-icons/fa';
import img from "./wayform.jpg";
import { AudioClip } from "../components/AudioClip";
import { ButtonIcon } from "../components/ButtonIcon";
import { TableTag } from "../components/TableTag";

class AudioCard extends React.Component {
    
    render() {
        return( 
                <div>
                    <div className="content p-3">
                        <div className="columns p-3 is-justify-content-center">
                            <AudioClip img={img} />
                        </div>
                        <div className="columns p-3 is-justify-content-center">
                            <div className="field is-grouped">
                                <ButtonIcon icon={FaPlayCircle} />
                                <ButtonIcon icon={FaSearchPlus} />
                                <ButtonIcon icon={FaSearchMinus} />
                                <ButtonIcon icon={FaSearch} />
                                <ButtonIcon icon={FaSave} />
                                <ButtonIcon icon={FaBan} />
                                <ButtonIcon icon={FaRegPaperPlane} />
                            </div>
                        </div>
                        <div className="columns p-3 is-justify-content-center">
                            <div className="table-container">
                                <TableTag class="table is-fullwidth" />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    
}

export default AudioCard;