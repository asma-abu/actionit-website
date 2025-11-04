'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-stripe-purple to-stripe-purple-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join millions of businesses that use our platform to accept payments and grow revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center bg-white text-stripe-purple px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all group"
            >
              Start now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              Contact sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection