import React, { useState } from 'react'
import { MdWavingHand } from "react-icons/md";
import './Home.css';
import ProgressBar from './ProgressBar';

function WelcomeBlock() {
    return (
        <>
        <div className='welcome-block-bg'>
            <div className='welcome-block-title'><div className='hand-icon'><MdWavingHand/></div>Welcome</div>
            <div className='welcome-block-subtitle'>Your task completion for today:</div>
            <ProgressBar/>
        </div>
        </>
    );
}

export default WelcomeBlock;