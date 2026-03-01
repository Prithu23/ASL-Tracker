// script.js

// ── Step 1: Grab elements ──────────────────────────────
const video = document.getElementById('video');

// ── Step 2: Set up MediaPipe Hands ────────────────────
const hands = new Hands({
  locateFile: (file) => {
    // This tells MediaPipe where to find its model files
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

// Configure the hand tracker
hands.setOptions({
  maxNumHands: 1,          // we only need one hand
  modelComplexity: 1,      // 0 = faster, 1 = more accurate
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.6
});

// This runs every time MediaPipe processes a frame
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const detectedLetter = document.getElementById('detected-letter');

function classifyLetter(lm) {
  
  const indexUp  = lm[8].y  < lm[6].y;
  const middleUp = lm[12].y < lm[10].y;
  const ringUp   = lm[16].y < lm[14].y;
  const pinkyUp  = lm[20].y < lm[18].y;
  const thumbOut = lm[4].x  < lm[3].x;

  // --- new bend angle calculations ---
  const indexCurl  = Math.hypot(lm[8].x - lm[5].x, lm[8].y - lm[5].y);
const middleCurl = Math.hypot(lm[12].x - lm[9].x, lm[12].y - lm[9].y);
const ringCurl   = Math.hypot(lm[16].x - lm[13].x, lm[16].y - lm[13].y);
const pinkyCurl  = Math.hypot(lm[20].x - lm[17].x, lm[20].y - lm[17].y);
const thumbIndex = Math.hypot(lm[4].x - lm[8].x, lm[4].y - lm[8].y);
const thumbCurl  = Math.hypot(lm[3].x - lm[0].x, lm[3].y - lm[0].y);

  

  // A: fist, thumb up on side
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[4].y < lm[9].y) return 'A';

// B: all fingers straight, thumb tucked
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl > 0.10 && pinkyCurl > 0.10 && !thumbOut) return 'B';

// C: all fingers half curled
if (indexCurl > 0.05 && indexCurl < 0.15 && middleCurl > 0.05 && middleCurl < 0.15 && ringCurl > 0.05 && ringCurl < 0.15 && pinkyCurl > 0.05 && pinkyCurl < 0.15) return 'C';

// D: index straight, others curled, thumb touches middle
if (indexCurl > 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbIndex < 0.06) return 'D';

// E: all fingers curled
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[4].y > lm[9].y) return 'E';

// F: index curled, others straight, thumb pinches index
if (indexCurl < 0.10 && middleCurl > 0.10 && ringCurl > 0.10 && pinkyCurl > 0.10 && thumbIndex < 0.06) return 'F';

// G: index pointing sideways, thumb out
if (indexCurl > 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbOut && Math.abs(lm[8].y - lm[5].y) < 0.04) return 'G';

// H: index and middle pointing sideways
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && Math.abs(lm[8].y - lm[5].y) < 0.04) return 'H';

// I: pinky straight, others curled
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl > 0.10 && !thumbOut) return 'I';

// J: like I with thumb out
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl > 0.10 && thumbOut) return 'J';

// K: index and middle straight, thumb out
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbOut) return 'K';

// L: index straight, thumb out
if (indexCurl > 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbOut) return 'L';

// M: three fingers over thumb
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[8].y > lm[4].y && lm[12].y > lm[4].y && lm[16].y > lm[4].y) return 'M';

// N: two fingers over thumb
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[8].y > lm[4].y && lm[12].y > lm[4].y && lm[16].y < lm[4].y) return 'N';

// O: all fingers curved, thumb meets index tip
if (indexCurl > 0.05 && indexCurl < 0.15 && middleCurl > 0.05 && middleCurl < 0.15 && thumbIndex < 0.06) return 'O';

// P: index and middle pointing down, thumb out
if (lm[8].y > lm[5].y && lm[12].y > lm[9].y && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbOut) return 'P';

// Q: index pointing down, thumb out
if (lm[8].y > lm[5].y && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && thumbOut) return 'Q';

// R: index and middle straight and crossed
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && !thumbOut && Math.abs(lm[8].x - lm[12].x) < 0.02) return 'R';

// S: fist, thumb over fingers
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[4].x > lm[8].x) return 'S';

// T: thumb between index and middle
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && lm[4].y < lm[6].y && lm[4].x > lm[5].x) return 'T';

// U: index and middle straight, close together
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && !thumbOut && Math.abs(lm[8].x - lm[12].x) < 0.04) return 'U';

// V: index and middle straight, spread apart
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && !thumbOut && Math.abs(lm[8].x - lm[12].x) >= 0.04) return 'V';

// W: index, middle, ring straight
if (indexCurl > 0.10 && middleCurl > 0.10 && ringCurl > 0.10 && pinkyCurl < 0.10) return 'W';

// X: index hooked
if (indexCurl > 0.05 && indexCurl < 0.15 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10) return 'X';

// Y: thumb and pinky out
if (indexCurl < 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl > 0.10 && thumbOut) return 'Y';

// Z: index pointing (approximated)
if (indexCurl > 0.10 && middleCurl < 0.10 && ringCurl < 0.10 && pinkyCurl < 0.10 && !thumbOut) return 'Z';

  return '?';
}

hands.onResults(async function(results) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const lm = results.multiHandLandmarks[0];
const landmarks3D = lm.map(p => [p.x, p.y, p.z]);
const gesture = await GE.estimate(landmarks3D, 8.5);

if (gesture.gestures.length > 0) {
  const letter = gesture.gestures[0].name;
  detectedLetter.textContent = letter;
} else {
  detectedLetter.textContent = '?';
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
console.log('Camera started via MediaPipe!');