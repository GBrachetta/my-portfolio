// Lightweight Web Audio Harpsichord Synthesis (0 KB external assets)

let sharedAudioCtx = null;

const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  if (!sharedAudioCtx) {
    sharedAudioCtx = new AudioContextClass();
  }
  if (sharedAudioCtx.state === "suspended") {
    sharedAudioCtx.resume();
  }
  return sharedAudioCtx;
};

/**
 * Synthesizes an authentic harpsichord quill pluck
 * @param {number} freq - Pitch frequency in Hz
 * @param {number} duration - Ring duration in seconds
 * @param {number} gainLevel - Velocity/volume (0.0 to 1.0)
 */
export const playPluck = (freq, duration = 1.4, gainLevel = 0.85) => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // 8' fundamental string (bright sawtooth)
  const osc8 = ctx.createOscillator();
  osc8.type = "sawtooth";
  osc8.frequency.setValueAtTime(freq, now);

  // 4' octave register for baroque shimmer
  const osc4 = ctx.createOscillator();
  osc4.type = "sawtooth";
  osc4.frequency.setValueAtTime(freq * 2, now);

  // Soundboard resonance filter
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(Math.min(freq * 7, 5400), now);
  filter.frequency.exponentialRampToValueAtTime(
    Math.max(freq * 1.5, 280),
    now + duration * 0.75,
  );

  // Quill release and dual envelope decay
  const gain8 = ctx.createGain();
  gain8.gain.setValueAtTime(0.0001, now);
  gain8.gain.linearRampToValueAtTime(0.44 * gainLevel, now + 0.0025);
  gain8.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  const gain4 = ctx.createGain();
  gain4.gain.setValueAtTime(0.0001, now);
  gain4.gain.linearRampToValueAtTime(0.18 * gainLevel, now + 0.002);
  gain4.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.55);

  const master = ctx.createGain();
  master.gain.setValueAtTime(gainLevel, now);

  osc8.connect(gain8);
  gain8.connect(filter);

  osc4.connect(gain4);
  gain4.connect(filter);

  filter.connect(master);
  master.connect(ctx.destination);

  osc8.start(now);
  osc4.start(now);
  osc8.stop(now + duration);
  osc4.stop(now + duration);
};

/**
 * Authentic French/Bach Baroque Cadence in D minor
 * Tunings supported:
 * - 440 Hz: Modern Equal Temperament (12-TET)
 * - 415 Hz: Authentic 1/4-Comma Meantone (pure 5:4 major thirds, pure beatless Picardy third!)
 *
 * Structure:
 * 1. Style brisé rolled opening
 * 2. Affective descent (pathopoeic Bb4 lament)
 * 3. Dominant harmony preparation
 * 4. Measured tremblement (trill on C# leading tone with upper auxiliary D and turn)
 * 5. Final resolution with pure Tierce de Picardie (D-F#-A)!
 */
const BAROQUE_CADENCE = [
  // 1. Style brisé rolled opening
  {
    freq440: 146.83, freq415: 138.76, time: 0.0, dur: 2.3, vol: 0.95,
  }, // D3 bass pedal
  {
    freq440: 220.0, freq415: 207.5, time: 0.07, dur: 1.9, vol: 0.8,
  }, // A3
  {
    freq440: 293.66, freq415: 277.53, time: 0.14, dur: 1.7, vol: 0.8,
  }, // D4
  {
    freq440: 349.23, freq415: 332.0, time: 0.21, dur: 1.5, vol: 0.85,
  }, // F4
  {
    freq440: 440.0, freq415: 415.0, time: 0.28, dur: 1.4, vol: 0.9,
  }, // A4
  {
    freq440: 587.33, freq415: 555.05, time: 0.38, dur: 0.7, vol: 0.95,
  }, // D5 (high peak)

  // 2. Affective descent (lament / pathopoeia)
  {
    freq440: 466.16, freq415: 444.04, time: 0.54, dur: 0.35, vol: 0.85,
  }, // Bb4 (pure 5:4 under D5)
  {
    freq440: 392.0, freq415: 371.19, time: 0.66, dur: 0.3, vol: 0.8,
  }, // G4
  {
    freq440: 349.23, freq415: 332.0, time: 0.78, dur: 0.28, vol: 0.8,
  }, // F4
  {
    freq440: 329.63, freq415: 310.28, time: 0.9, dur: 0.38, vol: 0.85,
  }, // E4 (suspension)

  // 3. Dominant harmony preparation
  {
    freq440: 220.0, freq415: 207.5, time: 1.02, dur: 1.2, vol: 0.85,
  }, // A3 bass
  {
    freq440: 392.0, freq415: 371.19, time: 1.06, dur: 0.3, vol: 0.8,
  }, // G4 (dom 7th)
  {
    freq440: 349.23, freq415: 332.0, time: 1.18, dur: 0.25, vol: 0.75,
  }, // F4

  // 4. Tremblement (Baroque Trill on C# with upper D and turn)
  {
    freq440: 293.66, freq415: 277.53, time: 1.28, dur: 0.12, vol: 0.85,
  }, // D4 (upper aux)
  {
    freq440: 277.18, freq415: 259.38, time: 1.36, dur: 0.12, vol: 0.8,
  }, // C#4
  {
    freq440: 293.66, freq415: 277.53, time: 1.44, dur: 0.12, vol: 0.85,
  }, // D4
  {
    freq440: 277.18, freq415: 259.38, time: 1.52, dur: 0.12, vol: 0.8,
  }, // C#4
  {
    freq440: 246.94, freq415: 231.99, time: 1.6, dur: 0.11, vol: 0.75,
  }, // B3 (turn)
  {
    freq440: 277.18, freq415: 259.38, time: 1.68, dur: 0.28, vol: 0.9,
  }, // C#4 (leading tone)

  // 5. Final resolution with Picardy Third (Tierce de Picardie)!
  {
    freq440: 146.83, freq415: 138.76, time: 1.84, dur: 2.4, vol: 1.0,
  }, // D3 low bass
  {
    freq440: 220.0, freq415: 207.5, time: 1.87, dur: 2.2, vol: 0.85,
  }, // A3 fifth
  {
    freq440: 293.66, freq415: 277.53, time: 1.9, dur: 2.2, vol: 0.85,
  }, // D4 octave
  {
    freq440: 369.99, freq415: 346.91, time: 1.94, dur: 2.4, vol: 0.95,
  }, // F#4 (Pure 5:4 beatless Picardy third in meantone!)
];

/**
 * Plays an authentic Baroque Harpsichord Cadence
 * @param {number} pitchRef - 415 for 1/4-Comma Meantone, 440 for Equal Temperament
 */
export const playToccataFlourish = (pitchRef = 415) => {
  const isMeantone = pitchRef === 415;
  BAROQUE_CADENCE.forEach(({
    freq440, freq415, time, dur, vol,
  }) => {
    const freq = isMeantone ? freq415 : freq440;
    setTimeout(() => {
      playPluck(freq, dur, vol);
    }, time * 1000);
  });
};
