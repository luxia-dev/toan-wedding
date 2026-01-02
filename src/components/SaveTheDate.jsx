import chuRe from "../assets/chuRe.jpg";

export default function SaveTheDate() {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-red-500 text-4xl great-vibes-title">
        Chúc Mừng Hạnh Phúc
      </h1>

      <div className="mt-8 flex flex-col items-center">
        <img
          className="rounded-full w-60 h-80 object-cover"
          src={chuRe}
          alt="test"
        />
        <h3 className="text-2xl great-vibes-title text-black!">Cô dâu</h3>
        <h3 className="text-2xl great-vibes-title text-black!">
          Nguyễn Kim Ngân
        </h3>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <img
          className="rounded-full w-60 h-80 object-cover"
          src={chuRe}
          alt="test"
        />
        <h3 className="text-2xl great-vibes-title text-black!">Chú rể</h3>
        <h3 className="text-2xl great-vibes-title text-black!">Vũ Tiến Toàn</h3>
      </div>
    </div>
  );
}
