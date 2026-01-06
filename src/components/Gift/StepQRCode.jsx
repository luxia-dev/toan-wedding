import { useLanguage } from "../../hooks/useLanguage";
export default function StepQRCode({ data, onBack, onClose }) {
  const { t } = useLanguage();
  return (
    <div className="">
      <h2 className="mb-6 text-center font-serif text-2xl text-rose-600">
        {t("send_gift")}
      </h2>

      <div className="rounded-2xl border border-pink-200 bg-pink-50 p-6">
        <div className="mx-auto mb-4 w-fit rounded-xl bg-white p-4 shadow">
          <img src={data.qr} alt="QR Code" className="h-48 w-48" />
        </div>

        <div className="space-y-2 text-center text-gray-700">
          <div>
            Tên tài khoản: <span className="font-semibold">{data.name}</span>
          </div>
          <div>
            Ngân hàng: <span className="font-semibold">{data.bank}</span>
          </div>
          <div>
            Số tài khoản: <span className="font-semibold">{data.account}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-gray-300 py-2 hover:bg-gray-100"
        >
          {t("return_btn")}
        </button>
        <button
          onClick={onClose}
          className="flex-1 rounded-lg bg-pink-500 py-2 text-white hover:bg-pink-600"
        >
          {t("close_btn")}
        </button>
      </div>
    </div>
  );
}
