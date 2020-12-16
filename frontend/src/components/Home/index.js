import React, { Fragment, useRef } from 'react';
import useFaceDetection from '../../hooks/useFaceDetection';
import Button from '../Button';
import Video from '../Video';
import styles from './Home.module.css';

const Home = () => {
    const videoRef = useRef();
    const canvasRef = useRef();
    const { startFaceReconginition, stopFaceReconginition } = useFaceDetection(videoRef, canvasRef);
    return (
        <Fragment>
            <Video videoRef={videoRef} canvasRef={canvasRef} />
            <div className={styles.container}>
            <Button style = {styles.startButton} action = {startFaceReconginition} label ="Start Recognition"  />
            <Button style = {styles.stopButton} action = {stopFaceReconginition} label ="Stop Recognition"  />
            </div>
        </Fragment>
    )
}
export default Home;


