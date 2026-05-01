import { motion } from 'framer-motion'

export default function AnimatedName({ text }) {
  const words = text.split(' ')
  let charCounter = 0
  return (
    <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="block">
          {word.split('').map((char, charIndex) => {
            const delayIndex = charCounter
            charCounter += 1

            return (
              <motion.span
                key={`${char}-${wordIndex}-${charIndex}`}
                className="inline-block"
                initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.45,
                  delay: 0.03 * delayIndex,
                  ease: 'easeOut',
                }}
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
