import { useState } from "react";
import { Card } from "./ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";

import img1C7A0065 from "../assets/1C7A0065.webp";
import HKG03828 from "../assets/HKG03828.webp";
import HKG03839 from "../assets/HKG03839.webp";
import HKG03861 from "../assets/HKG03861.webp";
import HKG03788 from "../assets/HKG03788.webp";
import HKG03830 from "../assets/HKG03830.webp";
import HKG03849 from "../assets/HKG03849.webp";
import HKG03857 from "../assets/HKG03857.webp";
import HKG03902 from "../assets/HKG03902.jpg";
import HKG03913 from "../assets/HKG03913.webp";
import { useLanguage } from "../hooks/useLanguage";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

export default function Album() {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photos = [
    {
      id: 1,
      url: img1C7A0065,
      alt: "Photo 1",
    },
    {
      id: 2,
      url: HKG03828,
      alt: "Photo 2",
    },
    {
      id: 6,
      url: HKG03861,
      alt: "Photo 2",
    },
    {
      id: 4,
      url: HKG03839,
      alt: "Photo 2",
    },
    {
      id: 5,
      url: HKG03788,
      alt: "Photo 1",
    },
    {
      id: 3,
      url: HKG03830,
      alt: "Photo 2",
    },
    {
      id: 7,
      url: HKG03849,
      alt: "Photo 2",
    },
    {
      id: 8,
      url: HKG03857,
      alt: "Photo 2",
    },
    {
      id: 9,
      url: HKG03902,
      alt: "Photo 2",
    },
    {
      id: 10,
      url: HKG03913,
      alt: "Photo 2",
    },
    {
      id: 11,
      url: HKG03839,
      alt: "Photo 2",
    },
    {
      id: 12,
      url: HKG03788,
      alt: "Photo 1",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // hiệu ứng lần lượt từng ảnh
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100 m-4 mt-16 md:mx-32">
        <div className="text-center">
          <h2 className="text-5xl great-vibes-title text-rose-700 mb-2 font-serif pt-6">
            {t("album_title")}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-rose-300"></div>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-8 gap-4 md:gap-8 px-4 mb-10">
          {photos
            .sort((a, b) => a.id - b.id)
            .map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
                className="cursor-pointer flex justify-center"
              >
                <Card className="overflow-hidden border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-105  md:w-[360px]">
                  <div className="relative aspect-square overflow-hidden h-[260px] md:h-[560px] ">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        [1, 2, 3, 4, 6, 7, 8].includes(index)
                          ? "object-[5%_center]"
                          : photo.id === 2
                          ? "object-top"
                          : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </Card>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
