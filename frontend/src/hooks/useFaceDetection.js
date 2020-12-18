import { useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const useFaceDetection = (video, canvas) => {
    const [startDisabled, setStartDisabled] = useState(false);
    const [stopDisabled, setStopDisabled] = useState(true);
    const [timer , setTimer] = useState();
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
       const interval = setInterval(detectFaces, 100);
        setTimer(interval);
        var imageDataURL = canvas.current.toDataURL('image/png');
        const url = 'http://localhost:3000/api/uploadImage';
        const img =  { data: imageDataURL, contentType: 'image/png' } ;
        // request options
        const options = {
        method: 'POST',
        body: `userName="test"&img=${img}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
        fetch(url ,options).then(response => 
          response.json()).then(response => {
              if(response.success) {
                console.log('response', response)
              } else {
                console.log("error", response)
              }
          });
        console.log(imageDataURL)
    }
    const stopFaceReconginition = () => {
      clearInterval(timer);
      setStartDisabled(false);
      setStopDisabled(true);
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