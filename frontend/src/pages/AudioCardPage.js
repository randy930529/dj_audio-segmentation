import React from "react";
import { FaPlayCircle, FaSearchPlus, FaSearchMinus, FaSearch, FaSave, FaBan, FaRegPaperPlane } from 'react-icons/fa';
import { ButtonIcon } from "../components/ButtonIcon";
import TableTag from "../components/TableTag";
import CategoryCardModal from "../components/CategoryCardModal";
import { ModalTrigger } from "../components/ModalTrigger";
import Waveform from 'waveform-react';
import { getAudioBuffer } from "../utils/getUtilsAudioClip";
import { delety, get, post } from "../utils/httpClient";


class AudioCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bufferSegment: [],
            categories: this.getCategory(),
            current: null,
            stepNumber: 0,
            xIsNext: true,
            put: null,
            cModal: null,
            zoom: 1
        }

        this.getBuffer();
        this.getBufferSegment();
    }

    getCategory() {
        const path = "/v2/get/?name=category";
        get(path).then((data) => {
            console.log("Success", data);
            this.setState({
                categories: data
            })
        }).catch((error) => {
            console.log("Success", error);
        });
    }

    getBuffer = async (path = this.props.file) => {
        getAudioBuffer(path, this.props.context).then((buffer) => {
            this.props.setAudioBuffer(buffer)
        })
    }

    setValue = (val) => {
        this.props.setPosition(val);
    }

    handleClick() {
        let stepNumber = this.state.xIsNext ? this.state.stepNumber : this.state.stepNumber + 1;

        if (this.state.xIsNext) {
            this.setState({ put: this.props.position })
        } else {
            let _ini = this.state.put;
            let _end = this.props.position;
            const _color = RandomColor();

            if (_ini > _end) {
                _ini = this.props.position;
                _end = this.state.put;
            }

            let _width = _end * this.props.audioClip.length - _ini * this.props.audioClip.length;
            _width = _width / 100;
            _width = _width / 100;


            this.setState({
                current: { ini: _ini, end: _end, width: _width, color: _color }
            });
        }

        this.setState({
            stepNumber: stepNumber,
            xIsNext: !this.state.xIsNext,
        });

        this.props.setShowMarker(this.state.xIsNext)
    }

    getBufferSegment() {
        const path = "/v3/post/" + this.props.audioClip.id + "/";
        const data = { pk: this.props.audioClip.id };
        post(path, data).then((data) => {
            console.log("Success", data);
            this.setState({
                bufferSegment: data
            })
        }).catch((error) => {
            console.log("Success", error);
            this.setState({
                bufferSegment: []
            })
        });
    }

    handleModalTrigger() {
        if (!this.state.cModal) {
            this.setState({
                cModal: (
                    <CategoryCardModal
                        onClick={() => this.handleModalTrigger()}
                        id={this.props.audioClip.id}
                        categories={this.state.categories}
                        bufferSegment={this.state.bufferSegment}
                        getBufferSegment={() => this.getBufferSegment()}
                        current={this.state.current}
                    />
                )
            })
        } else {
            this.setState({
                cModal: null,
                current: null
            })
        }
    }

    handleReset() {
        const path = "/v3/delete/";
        delety(path).then((data) => {
            console.log("Success", data);
        }).catch((error) => {
            console.log("Success", error);
            this.getBufferSegment();
        });
    }

    Zoom(val) {
        this.setState((state) => {
            return { zoom: state.zoom + val }
        })
    }

    handleZoomPlus() {
        if (this.state.zoom < 2) {
            this.Zoom(0.2)
        }
    }

    handleZoomMinus() {
        if (this.state.zoom > 0.4) {
            this.Zoom(-0.2)
        }
    }

    render() {
        const segmentColor = []
        const segmentations = this.state.bufferSegment.slice(0, this.state.stepNumber + 1);
        const clon = segmentations.concat([this.state.current]);

        clon.forEach((element, index) => {
            if (element !== null) {
                segmentColor.push(
                    SegmentPrint({
                        id: index,
                        markerWidth: element.width,
                        position: element.ini,
                        markerColor: element.color
                    })
                )
            }
        });

        return (
            <React.Fragment>
                <div className="content p-3">
                    <div className="columns m-3 is-justify-content-center"
                        onClick={() => this.handleClick()}
                        style={
                            {
                                display: 'flex',
                                height: 200,
                                maxHeight: 200,
                                border: `${1}px solid black`
                            }
                        }
                    >
                        <Waveform
                            // Audio buffer
                            buffer={this.props.buffer}
                            // waveform height
                            height={100 * this.state.zoom}
                            markerStyle={{
                                // Position marker color
                                color: '#d64d4d',
                                // Position marker width (in pixels)
                                width: 2
                            }}
                            // Optionally handle user manually changing position (0 - 1)
                            onPositionChange={(pos) => this.setValue(pos)}
                            // Wave plot type (line or bar)
                            plot="bar"
                            // Marker position on waveform (0 - 1)
                            position={this.props.position}
                            // redraw waveform on window size change (default: true)
                            responsive={true}
                            // Show position marker
                            showPosition={this.props.showMarker}
                            waveStyle={{
                                // animate waveform on draw (default: true)
                                animate: true,
                                // waveform color
                                color: '#0001fc',
                                plot: "bar",
                                // width of each rendered point (min: 1, max: 10)
                                pointWidth: 1
                            }}
                            // waveform width
                            width={500}
                        />
                        {segmentColor}
                    </div>
                    <div className="columns p-3 is-justify-content-center">
                        <div className="field is-grouped">
                            <ButtonIcon icon={FaPlayCircle} />
                            <ButtonIcon icon={FaSearchPlus} onClick={() => this.handleZoomPlus()} />
                            <ButtonIcon icon={FaSearchMinus} onClick={() => this.handleZoomMinus()} />
                            <ButtonIcon icon={FaSearch} />
                            <ModalTrigger
                                icon={FaSave}
                                dataTarget="modal-js-example"
                                onClick={() => this.handleModalTrigger()}
                            />
                            <ButtonIcon icon={FaBan} onClick={() => this.handleReset()} />
                            <ButtonIcon icon={FaRegPaperPlane} />
                        </div>
                    </div>
                    <div className="columns p-3 is-justify-content-center">
                        <div className="table-container">
                            <TableTag
                                class="table is-fullwidth"
                                segments={this.state.bufferSegment}
                                getBufferSegment={() => this.getBufferSegment()}
                                duration={this.props.audioClip.duration}
                            />
                        </div>
                    </div>
                </div>

                {this.state.cModal}
            </React.Fragment>
        )
    }

}

function SegmentPrint(_ref) {
    var id = _ref.id,
        markerWidth = _ref.markerWidth,
        position = _ref.position,
        markerColor = _ref.markerColor;


    return React.createElement('div', {
        key: id,
        id: id,
        style: {
            backgroundColor: `#${markerColor}`,
            height: '200px',
            left: `${position * 100}%`,
            position: 'absolute',
            //top: `${0}px`,
            transition: 'all 20ms ease-in-out',
            width: `${markerWidth}px`,
            display: 'block',
            border: `${2}px solid black`,
            opacity: 0.8
        }
    });
}

function RandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

export default AudioCardPage;