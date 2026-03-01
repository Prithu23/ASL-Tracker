// script.js

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const detectedLetter = document.getElementById('detected-letter');

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.6
});

const GE = new fp.GestureEstimator(allGestures);

function isThumbOverFingers(lm) {
  const thumbToIndex = Math.hypot(lm[4].x - lm[5].x, lm[4].y - lm[5].y);
  return thumbToIndex < 0.08;
}

hands.onResults(async function(results) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];
    drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#a8ff78', lineWidth: 2 });
    drawLandmarks(ctx, landmarks, { color: '#ffffff', radius: 4 });

    const lm = results.multiHandLandmarks[0];
    const landmarks3D = lm.map(p => [p.x, p.y, p.z]);
    const gesture = await GE.estimate(landmarks3D, 5);

    console.log('gestures found:', gesture.gestures.length);

    let letter = gesture.gestures.length > 0 ? gesture.gestures[0].name : '?';

    if (letter === 'E' || letter === 'S') {
      letter = isThumbOverFingers(lm) ? 'S' : 'E';
    }

    detectedLetter.textContent = letter;
  }
});

const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});

camera.start();
console.log('Camera started!');