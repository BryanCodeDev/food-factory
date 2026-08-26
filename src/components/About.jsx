import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Nuestra Historia
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Una pasión que se
              <span className="gradient-text"> cocina a fuego lento</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Food Factory Parrilla nace con la idea de crear mucho más que un lugar para comer: una experiencia donde el sabor, la calidad y los buenos momentos se encuentran.
            </p>

            <div className="glass rounded-2xl p-6 border-l-4 border-gold">
              <p className="text-gray-300 leading-relaxed italic">
                [HISTORIA DE FOOD FACTORY PARRILLA]
              </p>
              <p className="text-gray-500 text-sm mt-3">
                Cuéntanos cómo comenzó todo, los inicios, la evolución y el crecimiento de la marca.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-gold-dark/10 blur-2xl" />
              <div className="relative glass rounded-3xl overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                  alt="Food Factory Parrilla"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-heading font-bold text-2xl text-white">
                    FOOD FACTORY
                  </div>
                  <div className="text-gold text-sm tracking-wider uppercase">
                    Parrilla desde [AÑO]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
