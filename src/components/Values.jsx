import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    number: '01',
    title: 'Calidad',
    description: 'Seleccionamos los mejores ingredientes y aplicamos técnicas de parrilla que resaltan el sabor auténtico en cada corte.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Sabor',
    description: 'Cada plato es una celebración del sabor, preparado con pasión y los secretos de la verdadera parrilla colombiana.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 6.621A8.001 8.001 0 0119 13" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Experiencia',
    description: 'Creamos momentos inolvidables alrededor de la mesa, donde cada visita se convierte en una celebración.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Servicio',
    description: 'Nuestro equipo está comprometido con brindar una atención cálida y profesional en cada detalle.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Pasión',
    description: 'Cada corte, cada brasa y cada momento en la mesa refleja el amor y la dedicación que ponemos en lo que hacemos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="values" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Lo Que Nos Define
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Los pilares del <span className="gradient-text">verdadero sabor</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 cursor-pointer border border-transparent hover:border-gold/20"
            >
              <div className="absolute top-0 right-0 text-7xl font-heading font-bold text-white/5 group-hover:text-gold/10 transition-colors duration-500 -translate-y-4 translate-x-2">
                {value.number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="font-heading font-bold text-xl mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold-dark/0 group-hover:from-gold/5 group-hover:to-gold-dark/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
