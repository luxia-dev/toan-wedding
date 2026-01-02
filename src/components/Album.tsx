import { useState } from "react";
import { Card } from "./ui/cart";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";

import img1C7A0065 from "../assets/1C7A0065.jpg";
// import 1C7A0066 from "../assets/1C7A0066.jpg";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

// interface PhotoGalleryProps {
//     photos: Photo[];
// }

export default function Album() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photos = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: img1C7A0065,
    alt: `Photo ${index + 1}`,
  }));
  // const photos = [
  //     {
  //         id: 1,
  //         url: img1C7A0065,
  //         alt: "Photo 1",
  //     },
  // {
  //     id: 2,
  //     url: "1C7A0066",
  //     alt: "Photo 2",
  // },
  // ];

  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-3xl text-rose-700 mb-2 font-serif">Album</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-rose-300"></div>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer"
          >
            <Card className="overflow-hidden border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

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
