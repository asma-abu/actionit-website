'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      label: 'Products',
      dropdown: [
        { label: 'Payments', href: '/payments' },
        { label: 'Billing', href: '/billing' },
        { label: 'Connect', href: '/connect' },
        { label: 'Sigma', href: '/sigma' },
      ]
    },
    {
      label: 'Solutions',
      dropdown: [
        { label: 'E-commerce', href: '/ecommerce' },
        { label: 'SaaS', href: '/saas' },
        { label: 'Marketplaces', href: '/marketplaces' },
        { label: 'Embedded Finance', href: '/embedded' },
      ]
    },
    { label: 'Developers', href: '/developers' },
    { label: 'Company', href: '/company' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-stripe-purple to-stripe-cyan rounded-lg" />
              <span className="text-xl font-bold text-stripe-slate">Stripe</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-stripe-slate hover:text-stripe-purple transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center space-x-1 text-stripe-slate hover:text-stripe-purple transition-colors duration-200 font-medium">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-stripe-slate hover:bg-gray-50 hover:text-stripe-purple transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <Link
                href="/signin"
                className="text-stripe-slate hover:text-stripe-purple transition-colors duration-200 font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-stripe-purple hover:bg-stripe-purple-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-stripe-slate" />
            ) : (
              <Menu className="w-6 h-6 text-stripe-slate" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2 text-stripe-slate hover:text-stripe-purple transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <span className="block font-medium text-stripe-slate mb-2">
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-1 text-sm text-stripe-slate-light hover:text-stripe-purple"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t space-y-3">
                <Link
                  href="/signin"
                  className="block text-center py-2 text-stripe-slate hover:text-stripe-purple transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="block text-center bg-stripe-purple hover:bg-stripe-purple-dark text-white py-2 rounded-lg transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
