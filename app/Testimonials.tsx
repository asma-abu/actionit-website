'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Stripe has been essential to scaling our payment infrastructure globally.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      rating: 5,
    },
    {
      quote: "The developer experience is unmatched. Integration was seamless.",
      author: "Michael Rodriguez",
      role: "Lead Developer at StartupXYZ",
      rating: 5,
    },
    {
      quote: "We've increased conversion rates by 25% since switching to Stripe.",
      author: "Emily Watson",
      role: "Head of Product at Commerce Inc",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stripe-slate mb-4">
            Loved by developers and businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stripe-slate mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-stripe-slate">{testimonial.author}</p>
                <p className="text-sm text-stripe-slate-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials