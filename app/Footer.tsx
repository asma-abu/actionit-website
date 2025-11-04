import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    Products: ['Payments', 'Billing', 'Connect', 'Payouts', 'Radar'],
    Company: ['About', 'Customers', 'Jobs', 'Blog', 'Newsroom'],
    Resources: ['Documentation', 'API Reference', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  }

  return (
    <footer className="bg-stripe-slate text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg" />
              <span className="text-xl font-bold">Stripe</span>
            </div>
            <p className="text-gray-400 text-sm">
              Financial infrastructure for the internet
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Stripe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <Link key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer