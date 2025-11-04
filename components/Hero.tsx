'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  const rotatingTexts = [
    'payments infrastructure',
    'global commerce',
    'online businesses',
    'financial services',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-stripe-purple/20 to-stripe-cyan/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-stripe-orange/20 to-stripe-purple/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-stripe-cyan/10 to-stripe-purple/10 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-stripe-slate">Now available globally</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-stripe-slate mb-6"
          >
            Financial infrastructure
            <br />
            for{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-stripe-purple to-stripe-cyan bg-clip-text text-transparent">
                {rotatingTexts[textIndex]}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-stripe-purple to-stripe-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-stripe-slate-light mb-10 max-w-3xl mx-auto"
          >
            Millions of businesses of all sizes—from startups to large enterprises—use Stripe's 
            software and APIs to accept payments, send payouts, and manage their businesses online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="/signup"
              className="group bg-stripe-purple hover:bg-stripe-purple-dark text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Start now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group bg-white hover:bg-gray-50 text-stripe-slate px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4" />
              <span>Watch demo</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <p className="text-sm text-stripe-slate-light mb-6">Trusted by companies of all sizes</p>
            <div className="flex items-center justify-center space-x-8 opacity-60 grayscale">
              {/* Add company logos here */}
              <div className="w-24 h-8 bg-gray-300 rounded" />
              <div className="w-24 h-8 bg-gray-300 rounded" />
              <div className="w-24 h-8 bg-gray-300 rounded hidden sm:block" />
              <div className="w-24 h-8 bg-gray-300 rounded hidden md:block" />
              <div className="w-24 h-8 bg-gray-300 rounded hidden lg:block" />
            </div>
          </motion.div>
        </div>

        {/* Interactive Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl p-1 transform perspective-1000 hover:rotate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                {/* Placeholder for product screenshot or interactive demo */}
                <div className="aspect-video bg-gradient-to-br from-stripe-purple/10 to-stripe-cyan/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-cyan rounded-full mx-auto mb-4 animate-pulse" />
                    <p className="text-stripe-slate-light">Interactive Demo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg px-3 py-2 animate-float">
              <span className="text-xs font-medium text-stripe-slate">99.99% uptime</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 animate-float animation-delay-2000">
              <span className="text-xs font-medium text-stripe-slate">135+ currencies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
