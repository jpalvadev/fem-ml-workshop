import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { startWebcam, takePicture } from './utils';

const webcamButton = document.getElementById('webcam');
const captureButton = document.getElementById('pause');

const video = document.querySelector('video');

let model;

const init = async () => {
    model = await cocoSsd.load();
};

webcamButton.addEventListener('click', () => {
    startWebcam(video);
});

captureButton.addEventListener('click', () => {
    console.log('click capture');
    takePicture(video, predict);
});

const predict = async (img) => {
    const predictions = await model.detect(img);

    console.log('predictions', predictions);

    showResult(predictions);
};

init();
