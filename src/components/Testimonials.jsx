import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: '[NOMBRE]',
    role: 'Cliente',
    location: '[CIUDAD]',
    text: '[TESTIMONIO REAL — Describe tu experiencia en Food Factory Parrilla.]',
    avatar: 'FF',
  },
  {
    id: 2,
    name: '[NOMBRE]',
    role: 'Cliente',
    location: '[CIUDAD]',
    text: '[TESTIMONIO REAL — Describe tu experiencia en Food Factory Parrilla.]',
    avatar: 'FF',
  },
  {
    id: 3,
    name: '[NOMBRE]',
    role: 'Cliente',
    location: '[CIUDAD]',
    text: '[TESTIMONIO REAL — Describe tu experiencia en Food Factory Parrilla.]',
    avatar: 'FF',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gold/5 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView && i === active
                    ? { opacity: 1, y: 0 }
                    : isInView && i !== active
                    ? { opacity: 0, y: 20, position: 'absolute', top: 0, left: 0, right: 0 }
                    : {}
                }
                transition={{ duration: 0.6 }}
                className={`${i === active ? 'relative' : 'hidden'}`}
              >
                <div className="glass rounded-3xl p-8 md:p-12 text-center border border-gold/10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-dark">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-heading font-bold text-lg text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role} · {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
