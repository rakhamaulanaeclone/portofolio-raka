'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => router.back()}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content - Slide up to Full Screen */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full bg-white overflow-y-auto shadow-2xl z-10"
      >
        <button 
          onClick={() => router.back()}
          className="sticky top-6 float-right right-6 z-50 p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors mr-6 mt-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div className="w-full h-full pb-12">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
