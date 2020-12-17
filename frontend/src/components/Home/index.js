import React, { Fragment, useRef } from 'react';
import useFaceDetection from '../../hooks/useFaceDetection';
import Button from '../Button';
import Video from '../Video';
import styles from './Home.module.css';

const Home = () => {
    const videoRef = useRef();
    const canvasRef = useRef();
    const[ state, actions ] = useFaceDetection(videoRef, canvasRef);
    return (
        <Fragment>
            <Video videoRef={videoRef} canvasRef={canvasRef} />
            <div className={styles.container}>
            <Button style = {styles.startButton} disabled={state.startDisabled} action = {actions.startFaceReconginition} label ="Start Recognition"  />
            <Button style = {styles.stopButton} disabled={state.stopDisabled} action = {actions.stopFaceReconginition} label ="Stop Recognition"  />
            </div>
        </Fragment>
    )
}
export default Home;


