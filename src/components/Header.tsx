import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { useLanguage } from "../hooks/useLanguage";
import { Sparkles } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglish((prev) => !prev);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg py-3"
    >
      <div className="flex justify-center">
        {/* <Heart className="w-6 h-6 text-rose-500 fill-rose-500" /> */}
        <motion.div
          className="flex items-center textgap-2 cursor-pointer"
          // whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 opacity-80 absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-sm opacity-50"></div>
              <svg
                className="w-full h-full relative z-10 top-8"
                viewBox="0 0 100 100"
              >
                {/* Flower petals */}
                <circle cx="50" cy="30" r="12" fill="#fbcfe8" opacity="0.9" />
                <circle cx="70" cy="50" r="12" fill="#fbcfe8" opacity="0.9" />
                <circle cx="50" cy="70" r="12" fill="#fbcfe8" opacity="0.9" />
                <circle cx="30" cy="50" r="12" fill="#fbcfe8" opacity="0.9" />
                <circle cx="50" cy="50" r="15" fill="#fda4af" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-transparent rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-200 to-transparent rounded-full"></div>
            </div>
            {/* </div> */}

            {/* Hearts decoration */}
            <div className="flex items-center gap-2 ml-8">
              <Heart className="w-8 h-8 text-pink-400 fill-pink-200" />
              <Heart className="w-6 h-6 text-pink-300 fill-pink-100" />
            </div>

            {/* Sparkles */}
            <div className="flex items-center gap-3 ml-4 hidden md:block">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-300 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Decorative elements - Right side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 mt-4">
            {/* Floral decoration right */}
            <div className="flex items-center gap-2 opacity-80 flex-row-reverse">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-pink-200 rounded-full blur-sm opacity-50"></div>
                <svg
                  className="w-full h-full relative z-10"
                  viewBox="0 0 100 100"
                >
                  {/* Flower petals */}
                  <circle cx="50" cy="30" r="12" fill="#fbcfe8" opacity="0.9" />
                  <circle cx="70" cy="50" r="12" fill="#fbcfe8" opacity="0.9" />
                  <circle cx="50" cy="70" r="12" fill="#fbcfe8" opacity="0.9" />
                  <circle cx="30" cy="50" r="12" fill="#fbcfe8" opacity="0.9" />
                  <circle cx="50" cy="50" r="15" fill="#fda4af" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-20 h-1 bg-gradient-to-l from-pink-300 to-transparent rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-l from-pink-200 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Hearts decoration */}
            <div className="flex items-center gap-2 mr-8 flex-row-reverse">
              <Heart className="w-8 h-8 text-pink-400 fill-pink-200" />
              <Heart className="w-6 h-6 text-pink-300 fill-pink-100" />
            </div>

            {/* Sparkles */}
            <div className="flex items-center gap-3 mr-4 flex-row-reverse hidden md:block">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-amber-300 to-transparent rounded-full"></div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {!showEnglish ? (
              <motion.div
                key="vietnamese"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center "
              >
                <span
                  className={`pinyon-script-regular text-rose-700 transition-all whitespace-nowrap text-4xl`}
                >
                  {t("groom_name")}
                </span>

                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-2 animate-bounce" />
                <span
                  className={`pinyon-script-regular text-rose-700 transition-all whitespace-nowrap text-3xl`}
                >
                  {t("bride_name")}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="english"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="items-center justify-center"
              >
                <span
                  className={`font-serif text-rose-700 transition-all italic whitespace-nowrap text-2xl`}
                >
                  {t("we_get_married")}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        {/* <Heart className="w-6 h-6 text-rose-500 fill-rose-500" /> */}
      </div>
    </motion.header>
  );
}
