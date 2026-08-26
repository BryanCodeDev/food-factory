import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const galleryImages = [
  { id: 1, title: 'Parrilla', subtitle: 'El arte del fuego', color: 'from-gold/60 to-orange-900/60', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
  { id: 2, title: 'Cortes', subtitle: 'Selección premium', color: 'from-gold/60 to-gold-dark/60', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
  { id: 3, title: 'Hamburguesas', subtitle: 'Nuestro clásico', color: 'from-gold/50 to-yellow-900/60', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
  { id: 4, title: 'Ambiente', subtitle: 'Donde ocurre la magia', color: 'from-gold/40 to-orange-900/40', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { id: 5, title: 'Ingredientes', subtitle: 'Calidad en cada detalle', color: 'from-gold/50 to-gold-dark/40', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80' },
  { id: 6, title: 'Momentos', subtitle: 'Compartir es vivir', color: 'from-gold/60 to-gold-dark/50', image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2d2a?w=600&q=80' },
]

export default function Showcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="showcase" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Galería
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            El sabor habla por <span className="gradient-text">nosotros</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gold-light text-sm tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-gold/20 rounded-2xl group-hover:border-gold/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
