import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const locations = [
  {
    id: 1,
    name: '[SEDE]',
    city: '[CIUDAD]',
    address: '[DIRECCIÓN]',
    hours: '[HORARIO]',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    id: 2,
    name: '[SEDE]',
    city: '[CIUDAD]',
    address: '[DIRECCIÓN]',
    hours: '[HORARIO]',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80',
  },
  {
    id: 3,
    name: '[SEDE]',
    city: '[CIUDAD]',
    address: '[DIRECCIÓN]',
    hours: '[HORARIO]',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
  },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="locations" className="section-padding relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gold/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Encuéntranos
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Nuestras <span className="gradient-text">sedes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, i) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-gold/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-1 text-white group-hover:text-gold-light transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gold text-sm mb-4 tracking-wider uppercase">
                    {location.city}
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-6">
                    <p>{location.address}</p>
                    <p>{location.hours}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold rounded-full font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
                  >
                    <span>Cómo llegar</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
