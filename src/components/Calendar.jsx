// Import Swiper React components
import Countdown from "./Countdown";
import { CalendarHeart } from "lucide-react";
import bird from "../assets/sec-title-flower.png";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 pt-3 mx-4 md:mx-32">
      <img src={bird} alt="" style={{ width: "110px" }} />
      <h1 className="great-vibes-title capitalize text-4xl text-red-700!">
        Save the date
      </h1>

      <h2 className="flex items-center justify-center text-center text-3xl great-vibes-title text-red-700! pt-8">
        25/01/2026
      </h2>

      <Countdown targetDate={new Date("2026-01-25T12:00:00")} />
    </div>
  );
}
