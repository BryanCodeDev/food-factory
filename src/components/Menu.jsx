import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    id: '01',
    category: 'Parrilla',
    title: '[ESPECIALIDAD 01]',
    description: '[DESCRIPCIÓN DEL PLATO — Incluye detalles de preparación, acompañamientos y sello de la casa.]',
    benefits: ['Corte premium', 'A la brasa', 'Sabor auténtico'],
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    color: 'from-gold/60 to-gold-dark/40',
  },
  {
    id: '02',
    category: 'Hamburguesas',
    title: '[ESPECIALIDAD 02]',
    description: '[DESCRIPCIÓN DEL PLATO — Incluye detalles de preparación, acompañamientos y sello de la casa.]',
    benefits: ['Carne 100%', 'Pan artesanal', 'Salsa secreta'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    color: 'from-gold/60 to-orange-900/40',
  },
  {
    id: '03',
    category: 'Acompañamientos',
    title: '[ESPECIALIDAD 03]',
    description: '[DESCRIPCIÓN DEL PLATO — Incluye detalles de preparación, acompañamientos y sello de la casa.]',
    benefits: ['Hechos en casa', 'Ingredientes frescos', 'Receta original'],
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&q=80',
    color: 'from-gold/60 to-yellow-900/40',
  },
]

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Nuestras Especialidades
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Lo que <span className="gradient-text">preparamos</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-gold/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-gold font-mono text-sm mb-4 tracking-wider uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-white group-hover:text-gold-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 rounded-full text-xs bg-gold/10 text-gold-light border border-gold/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-gold font-semibold group/link"
                    >
                      <span className="group-hover/link:text-gold-light transition-colors">
                        Ver más
                      </span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${item.color} group-hover:opacity-80 transition-opacity duration-500`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent lg:from-dark/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
