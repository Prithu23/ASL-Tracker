// All 26 ASL gestures — converted from handsign-tensorflow by syauqy
// Removed import/export statements for plain HTML use
const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

// ── A ──────────────────────────────────────────────────
const aSign = new GestureDescription('A');
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── B ──────────────────────────────────────────────────
const bSign = new GestureDescription('B');
bSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
bSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── C ──────────────────────────────────────────────────
const cSign = new GestureDescription('C');
cSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
cSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

// ── D ──────────────────────────────────────────────────
const dSign = new GestureDescription('D');
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── E ──────────────────────────────────────────────────
const eSign = new GestureDescription('E');
eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

// ── F ──────────────────────────────────────────────────
const fSign = new GestureDescription('F');
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
fSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── G ──────────────────────────────────────────────────
const gSign = new GestureDescription('G');
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── H ──────────────────────────────────────────────────
const hSign = new GestureDescription('H');
hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
hSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
hSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── I ──────────────────────────────────────────────────
const iSign = new GestureDescription('I');
iSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// ── J (approximated as I with diagonal) ───────────────
const jSign = new GestureDescription('J');
jSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// ── K ──────────────────────────────────────────────────
const kSign = new GestureDescription('K');
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── L ──────────────────────────────────────────────────
const lSign = new GestureDescription('L');
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── M ──────────────────────────────────────────────────
const mSign = new GestureDescription('M');
mSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
mSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);
mSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);
mSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);
mSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
mSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

// ── N ──────────────────────────────────────────────────
const nSign = new GestureDescription('N');
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);
nSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
nSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);
nSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
nSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

// ── O ──────────────────────────────────────────────────
const oSign = new GestureDescription('O');
oSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);
oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
oSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
oSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── P ──────────────────────────────────────────────────
const pSign = new GestureDescription('P');
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
pSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── Q ──────────────────────────────────────────────────
const qSign = new GestureDescription('Q');
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
qSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── R ──────────────────────────────────────────────────
const rSign = new GestureDescription('R');
rSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
rSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
rSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── S ──────────────────────────────────────────────────
const sSign = new GestureDescription('S');
sSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── T ──────────────────────────────────────────────────
const tSign = new GestureDescription('T');
tSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
tSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);
tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── U ──────────────────────────────────────────────────
const uSign = new GestureDescription('U');
uSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
uSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
uSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── V ──────────────────────────────────────────────────
const vSign = new GestureDescription('V');
vSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
vSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
vSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── W ──────────────────────────────────────────────────
const wSign = new GestureDescription('W');
wSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
wSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
wSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── X ──────────────────────────────────────────────────
const xSign = new GestureDescription('X');
xSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

// ── Y ──────────────────────────────────────────────────
const ySign = new GestureDescription('Y');
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// ── Z (approximated as index pointing diagonally) ─────
const zSign = new GestureDescription('Z');
zSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
zSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
zSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
zSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
zSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
zSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// ── All gestures array ────────────────────────────────
const allGestures = [
  aSign, bSign, cSign, dSign, eSign, fSign, gSign, hSign, iSign, jSign,
  kSign, lSign, mSign, nSign, oSign, pSign, qSign, rSign, sSign, tSign,
  uSign, vSign, wSign, xSign, ySign, zSign
];