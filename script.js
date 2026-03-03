const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/jm_AFYa3z/';

let model, webcam;

let statusEl, detectedLetter, confidenceLabel;

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

    webcam = new tmImage.Webcam(400, 400, true); // width, height, flip
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

  // Find highest confidence class
  let best = predictions[0];
  for (let i = 1; i < predictions.length; i++) {
    if (predictions[i].probability > best.probability) {
      best = predictions[i];
    }
  }

  if (best.probability > 0.7) {
    detectedLetter.textContent  = best.className;
    confidenceLabel.textContent = Math.round(best.probability * 100) + '% confidence';
  } else {
    detectedLetter.textContent  = '?';
    confidenceLabel.textContent = 'No clear gesture';
  }
}

// Wait for full page load before running
window.addEventListener('load', init);