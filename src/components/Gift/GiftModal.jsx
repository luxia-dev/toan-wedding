import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import StepSelectReceiver from "./StepSelectReceiver";
import StepQRCode from "./StepQRCode";

import nganQr from "../../assets/nganQR.png";
import toanQr from "../../assets/toanQR.png";

const DATA = {
  bride: {
    name: "PHAM THI KIM NGAN",
    bank: "VIETCOMBANK",
    account: "1022491251",
    qr: nganQr,
  },
  groom: {
    name: "VU TIEN TOAN",
    bank: "BIDV",
    account: "2560421313",
    qr: toanQr,
  },
};

export default function GiftModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [receiver, setReceiver] = useState(null);

  const handleSelect = (key) => {
    setReceiver(key);
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setReceiver(null);
    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={handleClose}>
      {step === 1 && (
        <StepSelectReceiver
          open={open}
          onClose={handleClose}
          onSelect={handleSelect}
        />
      )}

      {step === 2 && (
        <StepQRCode
          data={DATA[receiver]}
          onBack={() => setStep(1)}
          onClose={handleClose}
        />
      )}
    </ModalWrapper>
  );
}
