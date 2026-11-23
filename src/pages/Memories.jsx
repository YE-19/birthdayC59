import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';

const Memories = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const photos = [
    {
      id: 1,
      url: photo1,
      message: "One of the best moments I've ever lived... May your smile keep lighting up my life and filling my days with joy.",
      date: "A moment to remember 🌸",
    },
    {
      id: 2,
      url: photo2,
      message: "You aren't just my love; you are the peace and safety I escape to from the noise of the world. Here's to another year with you.",
      date: "My peace & safety ✨",
    },
    {
      id: 3,
      url: photo3,
      message: "Every place we go together stays carved in my heart... Here's to many more years of exploring the world hand in hand.",
      date: "Hand in hand 💖",
    },
    {
      id: 4,
      url: photo4,
      message: "With you through it all, in joy and in sorrow, always having each other's backs... Happy birthday to the closest person to my heart.",
      date: "Through thick & thin 👑",
    },
    {
      id: 5,
      url: photo5,
      message: "Today is a special day because the person dearest to my heart was born... Happy birthday to my whole life.",
      date: "A special soul was born 🎂",
    },
    {
      id: 6,
      url: photo6,
      message: "On a day like this, happiness was born to enter my life and make it more beautiful. Happy birthday to my entire world.",
      date: "The day happiness began 💫",
    },
    {
      id: 7,
      url: photo7,
      message: "No matter how places and circumstances change, you remain the closest person to my heart. Happy birthday to my sister, my best friend, and my love.",
      date: "My sister, best friend & love 🌹",
    },
    {
      id: 8,
      url: photo8,
      message: "No words can do you justice, and no gifts can express how much I love you. Happy birthday to the greatest blessing in my life.",
      date: "The greatest blessing 🕊️",
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selected) return;
      if (e.key === 'Escape') {
        setSelected(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  const handleNext = () => {
    if (!selected) return;
    const currentIndex = photos.findIndex((p) => p.id === selected.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelected(photos[nextIndex]);
  };

  const handlePrev = () => {
    if (!selected) return;
    const currentIndex = photos.findIndex((p) => p.id === selected.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelected(photos[prevIndex]);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-start bg-zinc-950 overflow-x-hidden overflow-y-auto py-6 sm:py-8 px-3 sm:px-6">

      {/* ── Ambient Glow Orbs ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-12%] left-[-8%] w-72 h-72 md:w-96 md:h-96 bg-pink-600 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-8%] w-72 h-72 md:w-96 md:h-96 bg-fuchsia-700 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-rose-900 rounded-full blur-[80px] md:blur-[180px] opacity-10" />
      </div>

      {/* ── Grid Overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Edge Bars ── */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 z-30" />
      <div className="fixed bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 z-30" />

      {/* ── Corner Ornaments ── */}
      <div className="pointer-events-none fixed top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-pink-500/50 z-20" />
      <div className="pointer-events-none fixed top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-pink-500/50 z-20" />
      <div className="pointer-events-none fixed bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-pink-500/50 z-20" />
      <div className="pointer-events-none fixed bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-pink-500/50 z-20" />

      {/* ── Fairy Lights ── */}
      <div className="w-full max-w-4xl flex justify-around px-4 pt-1 md:pt-3 z-10 pointer-events-none mb-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-2 md:h-3 bg-zinc-600" />
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.08, 0.92] }}
              transition={{ duration: 1.8 + i * 0.15, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              className="relative flex items-center justify-center will-change-transform"
            >
              <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-pink-400 blur-md opacity-60" />
              <div className="relative w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-pink-300 shadow-[0_0_8px_#f9a8d4,0_0_20px_#ec4899]" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-1 mb-5 md:mb-6 z-10"
      >
        <p className="text-pink-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em]">
          ✦ Our Gallery of Happiness ✦
        </p>
        <h2 className="font-serif italic text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400">
          Captured Moments
        </h2>
        <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-1" />
        <p className="text-zinc-500 text-[11px] md:text-xs tracking-wider mt-1">tap a photo to reveal its story</p>
      </motion.div>

      {/* ── 8 Photos Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 z-10 px-2 w-full max-w-5xl mb-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, type: 'spring', stiffness: 90 }}
            whileHover={{ scale: 1.04, zIndex: 40 }}
            onClick={() => setSelected(photo)}
            className="relative cursor-pointer group"
          >
            <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-br from-pink-500/0 via-fuchsia-500/0 to-rose-500/0 group-hover:from-pink-500/50 group-hover:via-fuchsia-400/30 group-hover:to-rose-500/50 blur-sm transition-all duration-400" />

            <div className="relative bg-zinc-900 p-1.5 pb-5 md:p-2 md:pb-6 border border-zinc-700/80 group-hover:border-pink-500/60 transition-colors duration-300 rounded-lg shadow-xl shadow-black/60 flex flex-col justify-between">

              {/* Tape decor */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5 md:w-10 md:h-4 bg-zinc-700/60 border border-zinc-600/40 group-hover:bg-pink-500/20 group-hover:border-pink-400/30 transition-all duration-300 rounded-xs z-10" />

              <div className="w-full h-32 sm:h-36 md:h-44 overflow-hidden rounded-sm bg-zinc-800 relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-pink-500/0 to-fuchsia-500/0 group-hover:from-pink-500/10 group-hover:to-fuchsia-500/10 transition-all duration-400" />
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
              </div>

              <div className="mt-2 flex items-center justify-center gap-1.5 px-1">
                <div className="h-px flex-1 bg-zinc-700 group-hover:bg-pink-500/40 transition-colors duration-300" />
                <span className="text-zinc-500 group-hover:text-pink-400 text-[10px] md:text-xs transition-colors duration-300 font-mono">
                  #{photo.id}
                </span>
                <div className="h-px flex-1 bg-zinc-700 group-hover:bg-pink-500/40 transition-colors duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Closing Quote ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col items-center gap-1.5 md:gap-2 z-10 mb-5 px-4 text-center max-w-xl"
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-pink-500/50" />
          <span className="text-pink-500/50 text-[10px] md:text-xs">✦</span>
          <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="font-serif italic text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400">
          "One of the best memories we've ever shared..."
        </p>
      </motion.div>

      {/* ── Next Step Button ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="z-10 pb-8 flex justify-center"
      >
        <button
          onClick={() => navigate('/vid')}
          className="relative group cursor-pointer inline-flex items-center gap-2 md:gap-3 bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 md:px-10 md:py-3.5 rounded-full font-semibold text-sm md:text-base tracking-wide transition-all duration-300 shadow-lg shadow-pink-900/50 overflow-hidden"
          style={{ boxShadow: '0 0 0 0 rgba(236,72,153,0.4)' }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 28px rgba(236,72,153,0.45)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(236,72,153,0.4)')}
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <span className="relative">See your last surprise</span>
          <span className="relative text-base md:text-lg transition-transform group-hover:translate-x-1 duration-300">→</span>
        </button>
      </motion.div>

      {/* ════════════════════════════════
          LIGHTBOX MODAL
          ════════════════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 touch-auto"
          >
            <motion.div
              key={`lightbox-card-${selected.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/90"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-pink-500/40 via-fuchsia-500/20 to-rose-500/40 blur-sm pointer-events-none" />

              <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl overflow-y-auto flex flex-col">
                {/* Top colored strip */}
                <div className="w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500 shrink-0" />

                {/* Close 'X' button in top corner */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-pink-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 backdrop-blur-xs"
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Counter Pill */}
                <div className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full bg-zinc-800/80 text-pink-300 text-xs font-mono backdrop-blur-xs border border-zinc-700/50">
                  {selected.id} / {photos.length}
                </div>

                {/* Image container with navigation arrows */}
                <div className="w-full h-[45vh] sm:h-[52vh] md:h-[60vh] overflow-hidden relative shrink-0 bg-black flex items-center justify-center">
                  <img
                    src={selected.url}
                    alt={`Memory ${selected.id}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Previous Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-pink-600 text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-pink-400 backdrop-blur-xs"
                    aria-label="Previous image"
                  >
                    ❮
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-pink-600 text-white flex items-center justify-center transition-all duration-200 border border-white/20 hover:border-pink-400 backdrop-blur-xs"
                    aria-label="Next image"
                  >
                    ❯
                  </button>

                  {/* Bottom blend shadow */}
                  <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
                </div>

                {/* Message details */}
                <div className="px-5 sm:px-8 pb-6 pt-3 flex-1 flex flex-col items-center bg-zinc-900 text-center">
                  <p className="text-pink-400 text-xs sm:text-sm uppercase tracking-[0.25em] mb-3 font-semibold">
                    {selected.date}
                  </p>

                  <p className="font-serif italic text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                    "{selected.message}"
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      className="px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-5 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent shrink-0" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Memories;
