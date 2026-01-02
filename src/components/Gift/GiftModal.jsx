import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import StepSelectReceiver from "./StepSelectReceiver";
import StepQRCode from "./StepQRCode";

const DATA = {
  bride: {
    name: "111111111",
    bank: "VietcomBank",
    account: "111111111",
    qr: "/qr-bride.png",
  },
  groom: {
    name: "111111111",
    bank: "VietcomBank",
    account: "111111111",
    qr: "/qr-groom.png",
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
