'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('payments')

  const tabs = [
    { id: 'payments', label: 'Payments', description: 'Accept payments globally' },
    { id: 'billing', label: 'Billing', description: 'Subscription management' },
    { id: 'connect', label: 'Connect', description: 'Marketplace payments' },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stripe-slate mb-4">
            Unified platform
          </h2>
          <p className="text-xl text-stripe-slate-light">
            All your financial services in one place
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-stripe-purple text-white'
                    : 'text-stripe-slate hover:text-stripe-purple'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-2xl text-stripe-slate-light">
              {tabs.find(t => t.id === activeTab)?.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase