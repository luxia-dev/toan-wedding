import { Heart, Sparkles, CalendarHeart, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../hooks/useLanguage";

export default function SaveTheDate() {
  const { t } = useLanguage();
  return (
    <div className="mt-10 flex items-center justify-center p-4 overflow-auto ">
      <div className="w-full max-w-md">
        {/* Bunting Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-2 mb-8"
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
              animate={{ rotate: [0, 5, -5, 0], y: [-10, -8, -10] }}
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

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 relative overflow-hidden"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-2 right-2 text-pink-200 opacity-30">
            <Sparkles className="w-16 h-16" />
          </div>
          <div className="absolute bottom-2 left-2 text-pink-200 opacity-30">
            <Sparkles className="w-16 h-16" />
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
          </div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <p
              className="text-gray-700 text-center leading-relaxed text-justify"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {t("save_the_date_paragraph")}
            </p>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center mb-6"
          >
            <p
              className="text-rose-700"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.875rem",
              }}
            >
              Tiến Toàn & Kim Ngân
            </p>
          </motion.div>

          {/* Divider with Calendar Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
            <CalendarHeart className="w-5 h-5 text-pink-200" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
          </div>
        </motion.div>
        <div className="h-8" />
      </div>
    </div>
  );
}
