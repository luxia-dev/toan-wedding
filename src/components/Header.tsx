import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "motion/react";

export default function Header() {
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
          whileHover={{ scale: 1.05 }}
        >
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
                  className={`font-serif text-rose-700 transition-all whitespace-nowrap text-2xl`}
                >
                  Tiến Toàn
                </span>
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-2 animate-bounce" />
                <span
                  className={`font-serif text-rose-700 transition-all whitespace-nowrap text-2xl`}
                >
                  Kim Ngân
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
                  We Get Married
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
