'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Zap, 
  BarChart3, 
  Smartphone,
  Code,
  Users,
  Lock
} from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: CreditCard,
      title: 'Accept payments',
      description: 'Process payments from customers around the world with support for 135+ currencies and dozens of payment methods.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Manage risk',
      description: 'Protect your business with advanced fraud detection powered by billions of data points across the Stripe network.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Go global',
      description: 'Expand internationally with localized payment methods, currencies, and compliance built-in.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Instant payouts',
      description: 'Get funds to your bank account in minutes, not days, with our instant payout feature.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Revenue optimization',
      description: 'Increase conversion rates with our machine learning models that optimize every payment flow.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile ready',
      description: 'Accept payments on any device with our mobile SDKs and responsive checkout experiences.',
      color: 'from-indigo-500 to-indigo-600'
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stripe-slate mb-4">
            Everything you need to run your business
          </h2>
          <p className="text-xl text-stripe-slate-light max-w-3xl mx-auto">
            A fully integrated suite of financial and payments products to power your business
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-stripe-slate mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-stripe-slate-light leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className="mt-4 flex items-center text-stripe-purple font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-stripe-purple/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200"
        >
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '135+', label: 'Currencies' },
            { value: '45+', label: 'Countries' },
            { value: '1000+', label: 'API Endpoints' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-stripe-purple mb-2">{stat.value}</div>
              <div className="text-stripe-slate-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
