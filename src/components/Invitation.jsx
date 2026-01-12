import { Heart, MapPin, Clock, HandHeart, Gift, FileHeart } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "antd";
import { motion } from "motion/react";
import GiftModal from "./Gift/GiftModal";
import WishForm from "./WishForm";
import WishList from "./WishList";
import { useState } from "react";
import thanhHon from "../assets/thanhHon.png";
import { useLanguage } from "../hooks/useLanguage";

export default function Invitation() {
  const { t } = useLanguage();
  const [openGiftModal, setOpenGiftModal] = useState(false);

  const [openWishForm, setOpenWishForm] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") ?? t("default_name");

  const brideImageUrl =
    "https://images.unsplash.com/photo-1522142033000-098287950f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc2NzI4MjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center gap-2 mb-8 mt-8"
      >
        {[
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#F59E0B",
        ].map((color, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0, y: -10 }}
            whileInView={{ rotate: [0, 5, -5, 0], y: [-10, -8, -10] }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-8"
            style={{
              background: color,
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            }}
          />
        ))}
      </motion.div>
      <div className="bg-white/80 shadow-xl border-rose-100 border-2 mx-5 rounded-2xl md:mx-32">
        <motion.h1
          // style={ball}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="great-vibes-title pt-6 font-bold text-4xl md:text-6xl lg:text-8xl  text-rose-700!"
        >
          {t("invite_title")}
        </motion.h1>

        <div className="inline-flex items-center justify-between px-4 w-full md:px-24">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 whileInView-pulse" />
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 whileInView-pulse" />
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          className="great-vibes-title text-4xl text-rose-600! italic mx-5"
        >
          {name}
        </motion.p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-rose-300"></div>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8"
        >
          <Card className="border-0">
            <h1 className="great-vibes-title text-4xl text-rose-600!">
              {t("attend_wedding")}
            </h1>

            <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:px-26 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-2"
              >
                <Card className="border-0 shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={brideImageUrl}
                      alt="Bride"
                      className="w-full h-full object-cover rounded-lg"
                      // className=" object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-serif">
                        {t("le_vu_quy")}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 flex flex-col">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800 md:text-2xl">10:25</p>
                          <p className="text-gray-600 text-sm md:text-2xl">
                            25/01/2026
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed md:text-2xl">
                          {t("bride_family_address_title")}
                          <br />
                          {t("bride_family_address")}
                        </p>
                      </div>
                      <Button
                        className="w-70 self-center !border-rose-600 !text-rose-600"
                        color="pink"
                        onClick={() => {
                          window.open(
                            "https://maps.app.goo.gl/oHxzEinw1Pmc44KV6",
                            "_blank",
                          );
                        }}
                      >
                        {t("open_map")}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="px-2"
              >
                <Card className="border-0 shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={thanhHon}
                      alt="Bride"
                      className="w-full h-full object-cover rounded-lg"
                      // className=" object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-serif">
                        {t("le_thanh_hon")}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 flex flex-col md:text-2xl">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800 md:text-2xl">11:15</p>
                          <p className="text-gray-600 text-sm md:text-2xl">
                            25/01/2026
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed md:text-2xl">
                          {t("groom_family_address_title")}
                          <br />
                          {t("groom_family_address")}
                        </p>
                      </div>
                      <Button
                        className="w-70 self-center !border-rose-600 !text-rose-600"
                        color="pink"
                        onClick={() => {
                          window.open(
                            "https://maps.app.goo.gl/gDgK5FNvg89nyHYi9",
                            "_blank",
                          );
                        }}
                      >
                        {t("open_map")}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 mb-6">
            <Button
              size="large"
              className="w-68 md:w-86  !border-rose-600 !text-rose-600"
              color="pink"
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/gmcUbGWC8LG685HB7",
                  "_blank",
                );
              }}
            >
              {t("wedding_procession")}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <Button
              className="bg-gradient-to-r! from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white!"
              size="large"
              onClick={() => setOpenWishForm(true)}
            >
              <HandHeart className="w-5 h-5 mx-2" />
              {t("send_wishes")}
            </Button>
            <Button
              className="bg-gradient-to-r! from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white!"
              size="large"
              onClick={() => setOpenWishList(true)}
            >
              <FileHeart className="w-5 h-5 mx-2" />
              {t("see_wishes")}
            </Button>

            <Button
              className="bg-gradient-to-r! from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white!"
              size="large"
              onClick={() => setOpenGiftModal(true)}
            >
              <Gift className="w-5 h-5 mr-1" />
              {t("send_gift")}
            </Button>
          </div>
        </motion.div>

        <GiftModal
          open={openGiftModal}
          onClose={() => setOpenGiftModal(false)}
        />
        <WishForm open={openWishForm} onClose={() => setOpenWishForm(false)} />
        <WishList open={openWishList} onClose={() => setOpenWishList(false)} />
      </div>
    </div>
  );
}
