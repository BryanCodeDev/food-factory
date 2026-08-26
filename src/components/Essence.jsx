import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Essence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="essence" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Nuestra Esencia
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Lo que nos <span className="gradient-text">define</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:bg-white/5 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gold">
                Misión
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                [MISIÓN DE FOOD FACTORY PARRILLA]
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Brindar una experiencia gastronómica excepcional a través de la parrilla, combinando calidad, sabor auténtico y un servicio memorable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-charcoal rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:bg-charcoal-2 transition-all duration-500 border border-gold/10"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark to-gold opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gold">
                Visión
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                [VISIÓN DE FOOD FACTORY PARRILLA]
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Ser reconocidos como la referencia en parrilla premium en Colombia, expandiendo nuestra experiencia y consolidando nuestra marca.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
