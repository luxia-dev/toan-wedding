import chuRe from "../assets/1C7A0065.webp";

export default function SaveTheDate() {
  return (
    <section>
      <div className="mt-38">
        <div className="mt-8 mb-80 flex flex-col items-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <img
              className="rounded-full object-cover scale-180 translate-y-15 -translate-x-8"
              src={chuRe}
              alt="test"
            />
          </div>
          <h3 className="text-2xl font-merriweather mb-4 mt-20">CÔ DÂU</h3>
          <h3 className="text-center text-6xl xl:text-9xl mb-4 font-medium font-allura">
            Phạm Kim Ngân
          </h3>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-96 h-96 rounded-full overflow-hidden">
            <img
              className="rounded-full object-cover scale-180 translate-y-15 -translate-x-8"
              src={chuRe}
              alt="test"
            />
          </div>
          <h3 className="text-2xl font-merriweather mt-10 mb-4">CHÚ RỂ</h3>
          <h3 className="text-center text-6xl xl:text-9xl mb-4 font-medium font-allura">
            Vũ Tiến Toàn
          </h3>
        </div>
      </div>
    </section>
  );
}
