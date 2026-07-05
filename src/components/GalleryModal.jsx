import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes } from 'react-icons/fa'

/**
 * GalleryModal
 *
 * Props:
 *   isOpen     {boolean}   – controls visibility
 *   onClose    {() => void}
 *   eventTitle {string}    – displayed as the modal heading
 *   images     {Array<{ src: string, caption?: string }>}
 *              – if empty, renders a "Photos coming soon." empty state
 */
export default function GalleryModal({
  isOpen,
  onClose,
  images = [],
  eventTitle = '',
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const hasImages = images.length > 0
  const lightboxOpen = lightboxIndex !== null

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const goNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % images.length),
    [images.length],
  )

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) closeLightbox()
        else onClose()
      }
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft')  goPrev()
        if (e.key === 'ArrowRight') goNext()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, lightboxOpen, onClose, closeLightbox, goPrev, goNext])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset lightbox index when modal closes
  useEffect(() => {
    if (!isOpen) setLightboxIndex(null)
  }, [isOpen])

  return (
    <>
      {/* ── Gallery Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="gallery-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${eventTitle} gallery`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-300">
                    Gallery
                  </p>
                  <h2 className="font-heading mt-1 text-2xl font-semibold text-white">
                    {eventTitle}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close gallery"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-slate-300 transition-colors hover:border-cyan-300 hover:text-cyan-300"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto px-6 py-6 sm:px-8">
                {hasImages ? (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {images.map((img, index) => (
                      <motion.button
                        key={img.src}
                        onClick={() => setLightboxIndex(index)}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="group relative aspect-square overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]"
                        aria-label={img.caption || `Photo ${index + 1}`}
                      >
                        <img
                          src={img.src}
                          alt={img.caption || `${eventTitle} photo ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {img.caption && (
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="text-left text-xs text-white">{img.caption}</p>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] py-20">
                    <FaImages className="text-5xl text-slate-600" />
                    <p className="text-sm font-medium text-slate-400">Photos coming soon.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="absolute inset-0 bg-black/92 backdrop-blur-lg" />

            {/* Image */}
            <motion.figure
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[90vh] max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]?.src}
                alt={images[lightboxIndex]?.caption || `${eventTitle} photo`}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
              {images[lightboxIndex]?.caption && (
                <figcaption className="mt-4 text-sm text-slate-300">
                  {images[lightboxIndex].caption}
                </figcaption>
              )}
              <p className="mt-2 text-xs text-slate-500">
                {lightboxIndex + 1} / {images.length}
              </p>
            </motion.figure>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaChevronRight />
            </button>

            {/* Close lightbox */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
