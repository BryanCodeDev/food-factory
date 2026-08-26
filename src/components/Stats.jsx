import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 0, suffix: '+', label: 'Años de experiencia', placeholder: '[XX]' },
  { value: 0, suffix: '+', label: 'Clientes felices', placeholder: '[XX]' },
  { value: 0, suffix: '+', label: 'Sedes', placeholder: '[XX]' },
  { value: 0, suffix: '+', label: 'Especialidades', placeholder: '[XX]' },
]

function AnimatedCounter({ end, suffix, placeholder, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {end === 0 ? placeholder : count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-charcoal to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_50%)]" />

        <div ref={ref} className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Nuestros Números
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Datos que <span className="gradient-text">respaldan</span> nuestra pasión
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-gold/20">
                <div className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl gradient-text mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} placeholder={stat.placeholder} />
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
