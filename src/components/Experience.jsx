import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    id: 1,
    title: 'La Parrilla',
    description: 'El corazón de Food Factory. Donde el fuego y la técnica se encuentran para crear cortes únicos.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    color: 'from-gold/40 to-gold-dark/20',
  },
  {
    id: 2,
    title: 'El Ambiente',
    description: 'Un espacio diseñado para compartir, donde cada detalle invita a disfrutar sin prisa.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    color: 'from-gold/30 to-orange-900/20',
  },
  {
    id: 3,
    title: 'Los Ingredientes',
    description: 'Seleccionamos los mejores cortes y productos frescos para garantizar calidad en cada plato.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    color: 'from-gold/40 to-yellow-900/20',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Nuestra Experiencia
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Una experiencia hecha para
            <span className="gradient-text"> disfrutar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} via-dark/50 to-transparent`} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="absolute inset-0 border border-gold/20 rounded-3xl group-hover:border-gold/40 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
