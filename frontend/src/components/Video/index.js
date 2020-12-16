
import React from 'react';
import styles from './Video.module.css';

const Video = ({ videoRef, canvasRef }) => (
    <div className={styles.videoBody}>
    <canvas className={styles.canvas} ref={canvasRef} />
    <video ref={videoRef} id="video" width="720" height="560" autoPlay muted />
    </div>
)

export default Video;



