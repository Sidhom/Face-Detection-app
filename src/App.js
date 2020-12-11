import React, {useEffect, useRef} from 'react';
import * as faceapi from 'face-api.js';
import logo from './logoFaceDetection.png';
import './App.css';

const MODEL_URL = '/models';
const startVideo = (videoRef) => {
  navigator.getUserMedia({
    video:{}
  }, stream => videoRef.srcObject = stream, err => console.log(err));
}
function App() {
  let timer;
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
      if(videoRef.current) {
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
        ]).then(() =>{
         startVideo(videoRef.current);
        });
      }
       
  }, [])
  const detectFaces = 
    async () => {
      const displayedSize =  { height: videoRef.current.height, width: videoRef.current.width };
      faceapi.matchDimensions(canvasRef.current, displayedSize);
      let detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      console.log('detections',detections);
      detections = faceapi.resizeResults(detections, displayedSize);
      canvasRef.current.getContext('2d').clearRect(0,0,canvasRef.current.width, canvasRef.current.height);
      faceapi.draw.drawDetections(canvasRef.current, detections);
     // faceapi.draw.drawFaceLandmarks(canvasRef.current,detections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, detections);
    }

   const startFaceReconginition = () => {
      timer = setInterval(detectFaces, 100);

  }
  const stopFaceReconginition = () => {
    clearInterval(timer);
  }
  return (
    <div className="App">
      <header className="App-header">
       <div className="headerContainer">
        <h3 className="title"> FACE DETECTION</h3>
        <img src={logo} className="App-logo" alt="logo" />
        </div> 
      </header>
      <div className="videoBody">
        <div>
        <canvas className="canvas" ref={canvasRef} />
        <video ref={videoRef} id="video" width="720" height="560" autoPlay muted />
        </div>
        <div className="container">
         <div>
        <button className='buttonStyle' onClick = {() =>  startFaceReconginition() }>Start Recognition</button>
        </div>
        <div>
        <button className='buttonStyle' onClick = {() => stopFaceReconginition() }>Stop Recognition</button>
        </div>
        </div>
     
      </div>
    </div>
  );
}

export default App;
