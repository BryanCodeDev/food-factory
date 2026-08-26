import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const heroImage = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 150])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  const headlineWords = ['EL', 'SABOR', 'QUE', 'SE', 'VIENE', 'EN', 'CADA', 'CORTE']

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/40" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, -100]) }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium text-gold tracking-wider uppercase">
              Parrilla Premium · Colombia
            </span>
          </motion.div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
            {headlineWords.map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
                className="inline-block mx-1 md:mx-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Una experiencia de parrilla creada para quienes disfrutan la buena comida, los buenos momentos y el verdadero sabor.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            variants={itemVariants}
            href="#story"
            className="group relative px-8 py-4 bg-gold text-dark rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
          >
            <span className="relative z-10">
              Conoce nuestra experiencia
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#menu"
            className="px-8 py-4 border border-gold/50 text-white rounded-full font-semibold text-lg hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            Ver nuestro menú
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gold/70 tracking-widest uppercase font-medium">
          Food Factory Parrilla · Colombia
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/70 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
