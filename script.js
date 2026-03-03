const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/zrz8jxvH0/';

let model, webcam;
let statusEl, detectedLetter, confidenceLabel;

// ── Smoothing buffer ──────────────────────────────────────────────────────────
const BUFFER_SIZE = 10;   // how many frames to look at
const CONFIRM_THRESHOLD = 7; // how many must agree
let predictionBuffer = [];

function getStablePrediction(className) {
  predictionBuffer.push(className);
  if (predictionBuffer.length > BUFFER_SIZE) {
    predictionBuffer.shift(); // drop oldest
  }

  // Count votes
  const counts = {};
  for (const c of predictionBuffer) {
    counts[c] = (counts[c] || 0) + 1;
  }

  // Only return a letter if it dominates the buffer
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return top[1] >= CONFIRM_THRESHOLD ? top[0] : null;
}

async function init() {
  statusEl        = document.getElementById('status');
  detectedLetter  = document.getElementById('detected-letter');
  confidenceLabel = document.getElementById('confidence-label');

  try {
    statusEl.textContent = 'Loading model...';
    model = await tmImage.load(
      MODEL_URL + 'model.json',
      MODEL_URL + 'metadata.json'
    );
    statusEl.textContent = 'Model loaded! Starting webcam...';

    webcam = new tmImage.Webcam(400, 400, true);
    await webcam.setup();
    await webcam.play();

    document.getElementById('camera-panel').appendChild(webcam.canvas);

    statusEl.textContent = 'Ready — show your hand!';
    requestAnimationFrame(loop);

  } catch (err) {
    statusEl.textContent = 'Error: ' + err.message;
    console.error(err);
  }
}

async function loop() {
  webcam.update();
  await predict();
  requestAnimationFrame(loop);
}

async function predict() {
  const predictions = await model.predict(webcam.canvas);

  let best = predictions[0];
  for (let i = 1; i < predictions.length; i++) {
    if (predictions[i].probability > best.probability) {
      best = predictions[i];
    }
  }

  if (best.probability > 0.7) {
    const stable = getStablePrediction(best.className);
    if (stable) {
      detectedLetter.textContent  = stable;
      confidenceLabel.textContent = Math.round(best.probability * 100) + '% confidence';
    }
    // if not stable yet, keep showing last confirmed letter
  } else {
    predictionBuffer = []; // reset buffer if confidence drops
    detectedLetter.textContent  = '?';
    confidenceLabel.textContent = 'No clear gesture';
  }
}

window.addEventListener('load', init);