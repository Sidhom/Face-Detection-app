import { useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const useFaceDetection = (video, canvas) => {
    const [startDisabled, setStartDisabled] = useState(false);
    const [stopDisabled, setStopDisabled] = useState(true);
    
    let timer;
    const MODEL_URL = '/models';
    const startVideo = (videoRef) => {
        navigator.getUserMedia({
        video:{}
      }, stream => videoRef.srcObject = stream, err => console.log(err));
    }

    useEffect(() => {
        if(video.current) {
          Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
          ]).then(() =>{
           startVideo(video.current);
          });
        }
         
    })
    const detectFaces = 
      async () => {
        const displayedSize =  { height: video.current.height, width: video.current.width };
        faceapi.matchDimensions(canvas.current, displayedSize);
        let detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        detections = faceapi.resizeResults(detections, displayedSize);
        canvas.current.getContext('2d').clearRect(0,0,canvas.current.width, canvas.current.height);
        faceapi.draw.drawDetections(canvas.current, detections);
        faceapi.draw.drawFaceExpressions(canvas.current, detections);
      }
    
     const startFaceReconginition = () => {
        setStartDisabled(true);
        setStopDisabled(false);
        timer = setInterval(detectFaces, 100);
    
    }
    const stopFaceReconginition = () => {
      setStartDisabled(false);
      setStopDisabled(true);
      clearInterval(timer);
    }
    return [
      {
        startDisabled,
        stopDisabled
      },
      {
        startFaceReconginition,
        stopFaceReconginition
      }  
    ]
}

export default useFaceDetection ;