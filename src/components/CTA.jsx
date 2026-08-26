import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heroImage = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-dark/70 md:via-dark/70 md:to-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-gold/20">
            <span className="text-xs font-medium text-gold tracking-wider uppercase">
              Vive la experiencia
            </span>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6">
            Tu próxima experiencia
            <br />
            <span className="gradient-text">comienza aquí</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Ven a descubrir el sabor, la pasión y la experiencia de Food Factory Parrilla.
            Te esperamos en nuestra mesa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="group relative px-10 py-5 bg-gold text-dark rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
            >
              <span className="relative z-10">
                Ver menú
              </span>
            </a>

            <a
              href="#locations"
              className="px-10 py-5 border border-gold/50 text-white rounded-full font-semibold text-lg hover:border-gold hover:bg-gold/10 transition-all duration-300"
            >
              Encuentra tu sede
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
