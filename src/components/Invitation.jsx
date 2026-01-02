import { Heart, MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "antd";
import { motion } from "motion/react";
export default function Invitation() {
  const brideImageUrl =
    "https://images.unsplash.com/photo-1522142033000-098287950f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc2NzI4MjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const groomImageUrl =
    "https://images.unsplash.com/photo-1766104804438-28f42f89604f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHN1aXQlMjB3ZWRkaW5nfGVufDF8fHx8MTc2NzI4MjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  return (
    <div className=" bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 pt-4 px-4">
      <h1 className="great-vibes-title  text-3xl text-emerald-700!">
        Trân Trọng Kính Mời
      </h1>
      <div className="inline-flex items-center justify-between w-full">
        <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
        <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
      </div>
      {/* <h1 className="great-vibes-title  text-3xl text-emerald-700!">
        Trân Trọng Kính Mời
      </h1> */}

      <p className="great-vibes-title text-4xl text-rose-600! italic">
        Anh Trung và người thương
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-rose-300"></div>
        <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-rose-300"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-8"
      >
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100  mb-8">
          <h1 className="great-vibes-title pt-5 text-4xl text-rose-600!">
            Đến tham dự
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bride div */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="overflow-hidden border-rose-200 hover:shadow-lg transition-shadow duration-300">
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
                      Lễ Vu Quy
                    </h3>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-rose-50 to-white">
                  <div className="space-y-3 flex flex-col">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800">08:00</p>
                        <p className="text-gray-600 text-sm">25/01/2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Tại gia đình nhà Gái
                        <br />
                        Thôn Tráng Liệt 1, xã Thanh Hà, thành phố Hải Phòng
                      </p>
                    </div>
                    <Button
                      className="w-80 self-center !border-rose-600 !text-rose-600"
                      color="pink"
                    >
                      Mở chỉ đường
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Groom div */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="overflow-hidden border-rose-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={groomImageUrl}
                    alt="Groom"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-serif">
                      Lễ Thành Hôn
                    </h3>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-rose-50 to-white">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800">08:00</p>
                        <p className="text-gray-600 text-sm">25/01/2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Tại gia đình nhà Gái
                        <br />
                        Thôn Tráng Liệt 1, xã Thanh Hà, thành phố Hải Phòng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* RSVP Button
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Xác Nhận Tham Dự
            </Button>
          </motion.div> */}
        </Card>
      </motion.div>
    </div>
  );
}
