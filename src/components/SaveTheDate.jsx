import chuRe from "../assets/1C7A0065.webp";
import firework from "../assets/flags.svg";

export default function SaveTheDate() {
  return (
    <section
      className=" px-3 "
      style={{
        // backgroundImage: "url(" + firework + ")",
        // backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* <div className="pt-10 h-full">
        <div className="flex flex-col items-center">
          <div className="w-70 h-70 rounded-full overflow-hidden">
            <img
              className="rounded-full object-cover scale-180 translate-y-15 -translate-x-8"
              src={chuRe}
              alt="test"
            />
          </div>
          <p className="my-3 font-merriweather">CÔ DÂU</p>
          <h3 className="text-center text-5xl xl:text-9xl mb-4 font-medium font-allura">
            Phạm Thị Kim Ngân
          </h3>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="w-70 h-70 rounded-full overflow-hidden">
            <img
              className="rounded-full object-cover scale-180 translate-y-15 -translate-x-8"
              src={chuRe}
              alt="test"
            />
          </div>
          <p className="my-3 font-merriweather">CHÚ RỂ</p>
          <h3 className="text-center text-5xl xl:text-9xl mb-4 font-medium font-allura">
            Vũ Tiến Toàn
          </h3>
        </div>
      </div> */}
      <div className="flex justify-center">
        <img
          src={firework}
          alt=""
          className="w-full max-w-[800px] h-auto object-contain"
        />
      </div>

      <h2
        className=" font-marmelad text-center font-bold text-3xl"
        style={{ color: "#a4dac9" }}
      >
        We are Getting Married
      </h2>
      <p className="mt-12 text-center" style={{ color: "#73777b" }}>
        Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám
        cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc
        nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn
        các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã
        dành cho chúng tôi!
      </p>

      <h3
        className="text-center mt-12 great-vibes-title text-3xl pb-12"
        style={{ color: "#535557" }}
      >
        Tiến Toàn & Kim Ngân
      </h3>
    </section>
  );
}
