import { Modal } from "antd";
import { useLanguage } from "../../hooks/useLanguage";

export default function StepSelectReceiver({ open, onClose, onSelect }) {
  const { t } = useLanguage();
  return (
    <Modal open={open} onCancel={() => onClose()} footer={null} centered>
      <h2 className="mb-2 text-center font-serif text-2xl text-rose-600">
        {t("send_gift")}
      </h2>

      <p className="mb-6 text-center ">{t("select_receiver")}</p>
      <div className="grid grid-cols-2 gap-6">
        {/* Cô dâu */}
        <button
          onClick={() => onSelect("bride")}
          className="rounded-xl border-2 border-pink-300 bg-pink-50 py-1 text-center hover:bg-pink-100"
        >
          <div className="mb-2 text-2xl">👰‍♀️</div>
          <div className="font-semibold">{t("bride_title")}</div>
          {/* <div className="text-sm text-gray-500">Lê Vũ Quy</div> */}
        </button>

        {/* Chú rể */}
        <button
          onClick={() => onSelect("groom")}
          className="rounded-xl border-2 border-blue-300 bg-blue-50 px-6 py-1 text-center hover:bg-blue-100"
        >
          <div className="mb-2 text-2xl">🤵</div>
          <div className="font-semibold">{t("groom_title")}</div>
          {/* <div className="text-sm text-gray-500">Lê Thành Hôn</div> */}
        </button>
      </div>
    </Modal>
  );
}
