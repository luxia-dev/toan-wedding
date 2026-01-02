// Import Swiper React components
import Countdown from "./CountDown";

export default function Calendar() {
  return (
    <div className=" bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 pt-4 px-4 ">
      <h1 className="great-vibes-title  text-3xl text-rose-700!">
        Cùng Đón Chờ Ngày Chung Đôi
      </h1>
      {/* <h1 className="great-vibes-title  text-3xl text-rose-700!">
                Ngày Chung Đôi
            </h1> */}
      {/* <div className="inline-flex items-center justify-between w-full">
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
            </div> */}
      <Countdown targetDate={new Date("2026-01-25T12:00:00")} />
    </div>
  );
}
