import { useEffect, useState } from "react";

const SpinnerButton = () => {
  const RADIUS = 140;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const DATE_KEY = "btc_mining_last_click";
  const PROGRESS_KEY = "btc_mining_progress";

  const [progress, setProgress] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // Load stored data on mount
  useEffect(() => {
    const storedProgress = Number(localStorage.getItem(PROGRESS_KEY)) || 0;
    const lastClick = localStorage.getItem(DATE_KEY);
    const today = new Date().toDateString();

    setProgress(storedProgress);

    if (lastClick === today) {
      setDisabled(true);
    }
  }, []);

  const handleClick = () => {
    const today = new Date().toDateString();

    setProgress((prev) => {
      const next = prev >= 100 ? 5 : prev + 5;
      localStorage.setItem(PROGRESS_KEY, next);
      return next;
    });

    localStorage.setItem(DATE_KEY, today);
    setDisabled(true);
  };

  const dashOffset =
    CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#12001f] to-[#020617]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          BTC Mining
        </h1>
        <p className="text-gray-400 mb-12">
          24 Hour Mining Cycle
        </p>

        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-2xl" />

          {/* Progress Ring */}
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="160"
              cy="160"
              r={RADIUS}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="160"
              cy="160"
              r={RADIUS}
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              className="transition-all duration-700 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Button */}
          <button
            disabled={disabled}
            onClick={handleClick}
            className={`absolute w-56 h-56 rounded-full flex flex-col items-center justify-center border transition
              ${
                disabled
                  ? "bg-gray-700 cursor-not-allowed opacity-60"
                  : "bg-gradient-to-br from-[#1e1b4b] to-[#020617] active:scale-95"
              }`}
          >
            <span className="text-xs text-gray-400 mb-1">
              Progress
            </span>

            <span className="text-gray-400 text-sm">BTC</span>

            <span className="text-3xl font-bold text-white mt-1">
              0.00001732
            </span>

            <span className="text-purple-400 text-sm mt-2">
              {progress}% Completed
            </span>

            {disabled && (
              <span className="text-xs text-gray-300 mt-1">
                Come back tomorrow
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinnerButton;
