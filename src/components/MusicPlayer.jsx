import { useState, useRef, useEffect } from "react";
import { Music } from "lucide-react";
import song from "./../assets/xung-doi-cuoi-thoi.mp3";
// TODO: Replace this URL with the actual song URL provided by the user
const SONG_URL = "./";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio instance
    audioRef.current = new Audio(song);
    audioRef.current.loop = true;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={togglePlay}
        className={`
          flex items-center justify-center w-12 h-12 
          rounded-full shadow-lg border border-rose-200 
          text-rose-500 backdrop-blur-sm transition-all duration-300
          ${
            isPlaying
              ? "bg-rose-100 animate-[spin_3s_linear_infinite]"
              : "bg-white/80 hover:bg-rose-50"
          }
        `}
        title={isPlaying ? "Pause Music" : "Play Music"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <Music size={24} />
      </button>
    </div>
  );
};

export default MusicPlayer;
