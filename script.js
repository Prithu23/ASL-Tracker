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

function getAngle(a, b, c) {
  // Calculate angle at point b between points a and c
  const ab = { x: b.x - a.x, y: b.y - a.y };
  const cb = { x: b.x - c.x, y: b.y - c.y };
  const dot = ab.x * cb.x + ab.y * cb.y;
  const cross = ab.x * cb.y - ab.y * cb.x;
  return Math.abs(Math.atan2(cross, dot) * (180 / Math.PI));
}

function classifyLetter(lm) {
  
  const indexUp  = lm[8].y  < lm[6].y;
  const middleUp = lm[12].y < lm[10].y;
  const ringUp   = lm[16].y < lm[14].y;
  const pinkyUp  = lm[20].y < lm[18].y;
  const thumbOut = lm[4].x  < lm[3].x;

  // --- new bend angle calculations ---
  const indexBend  = getAngle(lm[5], lm[6], lm[8]);
  const middleBend = getAngle(lm[9], lm[10], lm[12]);
  const ringBend   = getAngle(lm[13], lm[14], lm[16]);
  const pinkyBend  = getAngle(lm[17], lm[18], lm[20]);
  const thumbIndex = Math.hypot(lm[4].x - lm[8].x, lm[4].y - lm[8].y);
  

  // A: fist, thumb on side
  if (!indexUp && !middleUp && !ringUp && !pinkyUp && lm[4].y < lm[9].y) return 'A';

  // B: all fingers up, thumb tucked
  if (indexUp && middleUp && ringUp && pinkyUp && !thumbOut) return 'B';

  // C: fingers curved, not fully up or down
  if (lm[8].y < lm[5].y && lm[8].y > lm[6].y &&
      lm[12].y < lm[9].y && lm[12].y > lm[10].y) return 'C';

  // D: index up, thumb touches middle
  if (indexUp && !middleUp && !ringUp && !pinkyUp &&
      Math.abs(lm[4].x - lm[12].x) < 0.05) return 'D';

  // E: all fingers curled, thumb tucked under
  if (!indexUp && !middleUp && !ringUp && !pinkyUp &&
      lm[4].y > lm[9].y) return 'E';

  // F: index+thumb pinch, middle/ring/pinky up
  if (!indexUp && middleUp && ringUp && pinkyUp &&
      Math.abs(lm[4].x - lm[8].x) < 0.05) return 'F';

  // G: index pointing sideways, thumb out
  if (Math.abs(lm[8].y - lm[5].y) < 0.04 && thumbOut &&
      !middleUp && !ringUp && !pinkyUp) return 'G';

  // H: index and middle pointing sideways
  if (Math.abs(lm[8].y - lm[5].y) < 0.04 &&
      Math.abs(lm[12].y - lm[9].y) < 0.04 &&
      !ringUp && !pinkyUp) return 'H';

  // I: pinky only up
  if (!indexUp && !middleUp && !ringUp && pinkyUp && !thumbOut) return 'I';

  // J: approximate as I (J has motion)
  if (!indexUp && !middleUp && !ringUp && pinkyUp && thumbOut) return 'J';

  // K: index and middle up, thumb out between them
  if (indexUp && middleUp && !ringUp && !pinkyUp && thumbOut) return 'K';

  // L: index up, thumb out
  if (indexUp && !middleUp && !ringUp && !pinkyUp && thumbOut) return 'L';

  // M: three fingers curled over thumb
  if (!indexUp && !middleUp && !ringUp && !pinkyUp &&
      lm[8].y > lm[4].y && lm[12].y > lm[4].y && lm[16].y > lm[4].y) return 'M';

  // N: two fingers curled over thumb
  if (!indexUp && !middleUp && !ringUp && !pinkyUp &&
      lm[8].y > lm[4].y && lm[12].y > lm[4].y) return 'N';

  // O: thumb and index tips close together, all fingers curved
  if (Math.abs(lm[4].x - lm[8].x) < 0.04 &&
      Math.abs(lm[4].y - lm[8].y) < 0.04 &&
      !indexUp && !middleUp) return 'O';

  // P: like K but fingers pointing downward
  if (lm[8].y > lm[6].y && lm[12].y > lm[10].y &&
      !ringUp && !pinkyUp && thumbOut) return 'P';

  // Q: like G but pointing downward
  if (lm[8].y > lm[5].y && thumbOut &&
      !middleUp && !ringUp && !pinkyUp) return 'Q';

  // R: index and middle up and crossed
  if (indexUp && middleUp && !ringUp && !pinkyUp &&
      Math.abs(lm[8].x - lm[12].x) < 0.02) return 'R';

  // S: fist, thumb over fingers
  if (!indexUp && !middleUp && !ringUp && !pinkyUp &&
      lm[4].y < lm[8].y && lm[4].x > lm[8].x) return 'S';

  // T: thumb between index and middle
  if (!indexUp && !middleUp && !ringUp && !pinkyUp &&
      lm[4].y < lm[6].y && lm[4].x > lm[5].x) return 'T';

  // U: index and middle up, close together
  if (indexUp && middleUp && !ringUp && !pinkyUp &&
      Math.abs(lm[8].x - lm[12].x) < 0.04) return 'U';

  // V: index and middle up, spread apart
  if (indexUp && middleUp && !ringUp && !pinkyUp &&
      Math.abs(lm[8].x - lm[12].x) >= 0.04) return 'V';

  // W: index, middle, ring up
  if (indexUp && middleUp && ringUp && !pinkyUp) return 'W';

  // X: index finger hooked
  if (lm[8].y > lm[7].y && lm[8].y < lm[5].y &&
      !middleUp && !ringUp && !pinkyUp) return 'X';

  // Y: thumb and pinky out
  if (!indexUp && !middleUp && !ringUp && pinkyUp && thumbOut) return 'Y';

  // Z: approximate as index pointing (Z has motion)
  if (indexUp && !middleUp && !ringUp && !pinkyUp && !thumbOut) return 'Z';

  return '?';
}

hands.onResults(function(results) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];
    drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#a8ff78', lineWidth: 2 });
    drawLandmarks(ctx, landmarks, { color: '#ffffff', radius: 4 });

    const lm = results.multiHandLandmarks[0];
    const letter = classifyLetter(lm);
    // Check if each finger is pointing up
    // We compare fingertip y position to the middle knuckle y position
    // Remember: smaller y = higher on screen = finger is UP
    const indexUp  = lm[8].y  < lm[6].y;
    const middleUp = lm[12].y < lm[10].y;
    const ringUp   = lm[16].y < lm[14].y;
    const pinkyUp  = lm[20].y < lm[18].y;
    const thumbOut = lm[4].x  < lm[3].x;

    console.log('Index:', indexUp, '| Middle:', middleUp, '| Ring:', ringUp, '| Pinky:', pinkyUp, '| Thumb:', thumbOut);
    console.log('Detected:', letter);
    detectedLetter.textContent = letter;
  }
});

// ── Step 3: Start the camera through MediaPipe ────────
const camera = new Camera(video, {
  onFrame: async () => {
    // Send each video frame to MediaPipe for processing
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});

camera.start();
console.log('Camera started via MediaPipe!');