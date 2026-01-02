import "./App.css";
import Slider from "./components/Slider";
import SaveTheDate from "./components/SaveTheDate";
import Invitation from "./components/Invitation";
import WishAndQr from "./components/WishAndQr";
import Album from "./components/Album";
import Calendar from "./components/Calendar";
import WishForm from "./components/WishForm";
import Header from "./components/Header";

function App() {
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Photo 1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Photo 2",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Photo 3",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50">
      {/* <div className="sticky top-0 z-50 bg-white py-3 shadow-sm">
        <h1 className="text-4xl font-bold text-center">Toan Wedding</h1>
      </div> */}
      <Header />
      <Slider />
      <SaveTheDate />
      <Invitation />
      <Calendar />
      {/* <WishAndQr /> */}
      <Album photos={photos} />
      <WishForm />

      {/* save the date, chuc mung hanh phuc */}

      {/* trann trong kinh moi va don cho ngay chung doi */}

      {/* khoang khac */}
      {/* countdown */}
      {/* loi chuc + qr code */}
    </div>
  );
}

export default App;
