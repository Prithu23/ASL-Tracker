const { Finger, FingerCurl, FingerDirection, GestureDescription } = fp;

// A
const aSign = new GestureDescription('A');
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// B
const bSign = new GestureDescription('B');
bSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// C
const cSign = new GestureDescription('C');
cSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
cSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

// D
const dSign = new GestureDescription('D');
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// E
const eSign = new GestureDescription('E');
eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// F
const fSign = new GestureDescription('F');
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// G
const gSign = new GestureDescription('G');
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// H
const hSign = new GestureDescription('H');
hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// I
const iSign = new GestureDescription('I');
iSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// K
const kSign = new GestureDescription('K');
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// L
const lSign = new GestureDescription('L');
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// M
const mSign = new GestureDescription('M');
mSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
mSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
mSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
mSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// N
const nSign = new GestureDescription('N');
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
nSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
nSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// O
const oSign = new GestureDescription('O');
oSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
oSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
oSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

// P
const pSign = new GestureDescription('P');
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
pSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Q
const qSign = new GestureDescription('Q');
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// R
const rSign = new GestureDescription('R');
rSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// S
const sSign = new GestureDescription('S');
sSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// T
const tSign = new GestureDescription('T');
tSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// U
const uSign = new GestureDescription('U');
uSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// V
const vSign = new GestureDescription('V');
vSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// W
const wSign = new GestureDescription('W');
wSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// X
const xSign = new GestureDescription('X');
xSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Y
const ySign = new GestureDescription('Y');
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// All gestures in one array
const allGestures = [
  aSign, bSign, cSign, dSign, eSign, fSign, gSign, hSign, iSign,
  kSign, lSign, mSign, nSign, oSign, pSign, qSign, rSign, sSign,
  tSign, uSign, vSign, wSign, xSign, ySign
];