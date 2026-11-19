import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { playPluck, playToccataFlourish } from "../utils/audio";

// Frequencies for octave 4:
// - freq440: Modern 12-TET (Equal Temperament, A4 = 440 Hz)
// - freq415: Authentic Baroque 1/4-Comma Meantone (A4 = 415 Hz, pure 5:4 thirds)
const BASE_NOTES = [
  {
    name: "C4", label: "C", key: "a", freq440: 261.63, freq415: 248.23, isSharp: false,
  },
  {
    name: "C#4", label: "C♯", key: "w", freq440: 277.18, freq415: 259.38, isSharp: true,
  },
  {
    name: "D4", label: "D", key: "s", freq440: 293.66, freq415: 277.53, isSharp: false,
  },
  {
    name: "D#4", label: "D♯", key: "e", freq440: 311.13, freq415: 296.95, isSharp: true,
  },
  {
    name: "E4", label: "E", key: "d", freq440: 329.63, freq415: 310.28, isSharp: false,
  },
  {
    name: "F4", label: "F", key: "f", freq440: 349.23, freq415: 332.0, isSharp: false,
  },
  {
    name: "F#4", label: "F♯", key: "t", freq440: 369.99, freq415: 346.91, isSharp: true,
  },
  {
    name: "G4", label: "G", key: "g", freq440: 392.0, freq415: 371.19, isSharp: false,
  },
  {
    name: "G#4", label: "G♯", key: "y", freq440: 415.3, freq415: 387.86, isSharp: true,
  },
  {
    name: "A4", label: "A", key: "h", freq440: 440.0, freq415: 415.0, isSharp: false,
  },
  {
    name: "A#4", label: "A♯", key: "u", freq440: 466.16, freq415: 444.04, isSharp: true,
  },
  {
    name: "B4", label: "B", key: "j", freq440: 493.88, freq415: 463.98, isSharp: false,
  },
  {
    name: "C5", label: "C", key: "k", freq440: 523.25, freq415: 496.46, isSharp: false,
  },
];

// Mapping of natural keys to their following accidental (C5 has none)
const ACCIDENTAL_MAP = {
  C4: "C#4",
  D4: "D#4",
  F4: "F#4",
  G4: "G#4",
  A4: "A#4",
};

const Harpsichord = ({ onClose, initialPitch }) => {
  const [pitch, setPitch] = useState(initialPitch || 415);
  const [activeKey, setActiveKey] = useState(null);
  const [isPlayingFlourish, setIsPlayingFlourish] = useState(false);

  // Trigger key press with visual feedback
  const triggerKey = useCallback(
    (note) => {
      setActiveKey(note.name);
      const freq = pitch === 415 ? note.freq415 : note.freq440;
      playPluck(freq, 1.3);
      setTimeout(() => {
        setActiveKey((prev) => (prev === note.name ? null : prev));
      }, 180);
    },
    [pitch],
  );

  // Play the baroque flourish sequence
  const handleFlourish = useCallback(() => {
    if (isPlayingFlourish) return;
    setIsPlayingFlourish(true);
    playToccataFlourish(pitch);
    setTimeout(() => {
      setIsPlayingFlourish(false);
    }, 2400);
  }, [isPlayingFlourish, pitch]);

  // Physical computer keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const pressedKey = e.key.toLowerCase();
      const matchedNote = BASE_NOTES.find((n) => n.key === pressedKey);
      if (matchedNote) {
        e.preventDefault();
        triggerKey(matchedNote);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerKey]);

  // Group naturals and accidentals for inverted keyboard layout
  const naturalNotes = BASE_NOTES.filter((n) => !n.isSharp);

  return (
    <aside
      className={`harpsichord-panel ${pitch === 440 ? "harpsichord-panel--modern" : ""}`}
      aria-label="Interactive Harpsichord and Piano Keyboard"
    >
      <div className="harpsichord-header">
        <div className="harpsichord-title-wrap">
          <span className="harpsichord-badge">
            {pitch === 415 ? "THE OTHER KEYBOARD" : "THE MODERN PIANO"}
          </span>
          <span className="harpsichord-caption">
            {pitch === 415
              ? "Historically inverted keys • 1/4-comma Meantone (pure 5:4 thirds)"
              : "Standard piano keys • Modern Equal Temperament (12-TET)"}
          </span>
        </div>
        <div className="harpsichord-controls">
          <div className="pitch-toggle-group" role="group" aria-label="Pitch Standard">
            <button
              type="button"
              className={`pitch-btn ${pitch === 415 ? "pitch-btn--active" : ""}`}
              onClick={() => setPitch(415)}
              aria-pressed={pitch === 415}
              title="Baroque pitch: A = 415 Hz, 1/4-comma Meantone tuning"
            >
              415 Hz · Meantone
            </button>
            <button
              type="button"
              className={`pitch-btn ${pitch === 440 ? "pitch-btn--active" : ""}`}
              onClick={() => setPitch(440)}
              aria-pressed={pitch === 440}
              title="Modern concert pitch: A = 440 Hz, Equal Temperament"
            >
              440 Hz · Equal
            </button>
          </div>
          <button
            type="button"
            className="harpsichord-flourish-btn"
            onClick={handleFlourish}
            disabled={isPlayingFlourish}
            aria-label="Play Baroque Flourish"
          >
            {isPlayingFlourish ? "PLUCKING..." : "CADENCE"}
          </button>
          {onClose && (
            <button
              type="button"
              className="harpsichord-close-btn"
              onClick={onClose}
              aria-label="Close Harpsichord"
              title="Close"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
                focusable="false"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="harpsichord-keyboard-frame">
        <div className="harpsichord-keybed">
          {naturalNotes.map((nat) => {
            const sharpName = ACCIDENTAL_MAP[nat.name];
            const sharpAfter = sharpName
              ? BASE_NOTES.find((n) => n.name === sharpName)
              : null;

            return (
              <div key={nat.name} className="natural-key-slot">
                <button
                  type="button"
                  className={`harpsichord-key harpsichord-key--natural ${
                    activeKey === nat.name ? "harpsichord-key--active" : ""
                  }`}
                  onClick={() => triggerKey(nat)}
                  aria-label={`${nat.name} (Key: ${nat.key.toUpperCase()})`}
                >
                  <span className="key-char">{nat.key.toUpperCase()}</span>
                  <span className="key-name">{nat.label}</span>
                </button>

                {sharpAfter && (
                  <button
                    type="button"
                    className={`harpsichord-key harpsichord-key--sharp ${
                      activeKey === sharpAfter.name ? "harpsichord-key--active" : ""
                    }`}
                    onClick={() => triggerKey(sharpAfter)}
                    aria-label={`${sharpAfter.name} (Key: ${sharpAfter.key.toUpperCase()})`}
                  >
                    <span className="key-char">{sharpAfter.key.toUpperCase()}</span>
                    <span className="key-name">{sharpAfter.label}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="harpsichord-footer">
        <span className="harpsichord-hint">
          <span className="harpsichord-hint-desktop">
            Click or tap physical keys:
            {" "}
            <strong>A W S E D F T G Y H U J K</strong>
          </span>
          <span className="harpsichord-hint-mobile">
            Tap keys to play
          </span>
        </span>
        <span className="harpsichord-footnote">
          {pitch === 415
            ? "Tuned to A=415 Hz (historically authentic, one semitone lower)."
            : "Tuned to A=440 Hz (modern compromise)."}
        </span>
      </div>
    </aside>
  );
};

Harpsichord.propTypes = {
  onClose: PropTypes.func,
  initialPitch: PropTypes.number,
};

Harpsichord.defaultProps = {
  onClose: null,
  initialPitch: 415,
};

export default Harpsichord;
