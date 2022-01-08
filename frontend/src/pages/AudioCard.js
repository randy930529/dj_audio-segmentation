import React from "react";
import { FaPlayCircle, FaSearchPlus, FaSearchMinus, FaSearch, FaSave, FaBan, FaRegPaperPlane } from 'react-icons/fa';
import img from "./wayform.jpg";

class AudioCard extends React.Component {
    
    render() {
        return( 
                <div>
                    <div className="content p-3">
                        <div className="columns p-3 is-justify-content-center">
                            <img src={img} alt="" />
                        </div>
                        <div className="columns p-3 is-justify-content-center">
                            <div class="field is-grouped">
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaPlayCircle />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaSearchPlus />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaSearchMinus />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaSearch />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaSave />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaBan />
                                    </span>
                                    </button>
                                </p>
                                <p class="control">
                                    <button class="button">
                                    <span class="icon">
                                        <FaRegPaperPlane />
                                    </span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className="columns p-3 is-justify-content-center">
                            <div class="table-container">
                                <table class="table is-fullwidth">
                                    <thead>
                                        <tr>
                                        <th><abbr title="#">#</abbr></th>
                                        <th>Duration (sec)</th>
                                        <th>Label</th>
                                        <th><abbr title="Option"></abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>1.293 - 4.234</td>
                                            <td>Category01:Subcaregory02</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>1.293 - 4.234</td>
                                            <td>Category01:Subcaregory02</td>
                                            <td>*</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    
}

export default AudioCard;