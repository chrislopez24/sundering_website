import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressOne = (props) => {
    return (
        // Start Single Progressbar 
        <div className="rn-progress-bar">
            <div className="single-progress">
                <h6 className="title">{props.title}</h6>
                <ProgressBar now={props.currentBosses} max={props.totalBosses} label={`${props.currentBosses}/${props.totalBosses}`}/>
                <span className="label">{props.currentBosses}/{props.totalBosses}</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressOne
