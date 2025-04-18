import '@tensorflow/tfjs';
// import "@mediapipe/face_detection"
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as faceDetection from '@tensorflow-models/face-detection';
import { drawFaceBox, startWebcam, takePicture } from './utils';

const webcamButton = document.getElementById('webcam');
const captureButton = document.getElementById('pause');
const video = document.querySelector('video');

let model, detector;

const init = async () => {
    model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    detectto = await faceDetection.createDetector(model, {
        runtime: 'tfjs',
    });
};

webcamButton.addEventListener('click', () => {
    startWebcam(video);
});

captureButton.addEventListener('click', () => {
    takePicture(video, predict);
});

const predict = async (photo) => {
    const faces = await detector.estimateFaces(photo, {
        flipHorizontal: false,
    });
    console.log(faces);
    drawFaceBox(photo, faces);
};

init();
