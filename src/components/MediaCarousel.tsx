'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export type MediaItem = {
  type: 'image' | 'video';
  url: string;
  fit?: 'cover' | 'contain';
};

export default function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];
  const isContain = currentMedia.fit === 'contain';

  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden group">
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        {currentMedia.type === 'image' ? (
          <>
            {isContain && (
              <Image
                src={currentMedia.url}
                alt="Project Media Background"
                fill
                className="object-cover opacity-50 blur-xl scale-110"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
            )}
            <Image
              src={currentMedia.url}
              alt="Project Media"
              fill
              className={`${isContain ? 'object-contain' : 'object-cover'} z-10`}
              sizes="(max-width: 768px) 100vw, 100vw"
              priority
            />
          </>
        ) : (
          <video
            src={currentMedia.url}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-20"
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-20"
            aria-label="Next Slide"
          >
            <FiChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-blue-600' : 'bg-slate-300/80 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
