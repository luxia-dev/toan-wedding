import "./App.css";
import Slider from "./components/Slider";
import SaveTheDate from "./components/SaveTheDate";
import Invitation from "./components/Invitation";
import WishAndQr from "./components/WishAndQr";
import Album from "./components/Album";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white py-3 shadow-sm">
        <h1 className="text-4xl font-bold text-center">Toan Wedding</h1>
      </div>
      <Slider />
      <SaveTheDate />
      <Invitation />
      {/* <WishAndQr /> */}
      {/* <Album /> */}
      {/* <Countdown /> */}

      {/* save the date, chuc mung hanh phuc */}

      {/* trann trong kinh moi va don cho ngay chung doi */}

      {/* khoang khac */}
      {/* countdown */}
      {/* loi chuc + qr code */}
    </>
  );
}

export default App;
