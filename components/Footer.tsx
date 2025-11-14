'use client';

import Link from 'next/link';
import { memo } from 'react';
import Container from './ui/Container';

const productLinks = [
  { href: '/login', label: 'Login' },
  { href: '/download', label: 'Download' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/ai-transcription', label: 'AI Transcription and Recording' },
  { href: '/ai-note-taker', label: 'AI Note Taker' },
  { href: '/integrations', label: 'Integrations' },
] as const;

const solutionsLinks = [
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/team-meetings', label: 'Team Meetings' },
  { href: '/remote-meetings', label: 'Remote Meetings' },
  { href: '/engineering', label: 'Engineering' },
  { href: '/marketing', label: 'Marketing' },
  { href: '/sales', label: 'Sales' },
  { href: '/hr', label: 'HR' },
  { href: '/it', label: 'IT' },
] as const;

const companyLinks = [
  { href: '/about', label: 'About action.it' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
] as const;

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-gray-900 dark:border-zinc-800 dark:bg-zinc-900">
      <Container>
        <div className="py-10 lg:py-14">
          {/* Top content grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
            {/* Brand + address */}
            <div>
              <div className="mb-3">
                <span className="text-xl font-semibold text-white">
                  action.it
                </span>
              </div>
              <address className="not-italic text-sm text-zinc-300 dark:text-zinc-400">
                532 Montréal Rd #275
                <br />
                Ottawa, ON K1K 4R4, Canada
              </address>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-sm font-semibold !text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded text-sm text-zinc-300 transition hover:text-white dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand/40"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter (pulled up into same row) */}
            <div className="md:col-span-1">
              <div className="max-w-md md:ml-auto">
                <h2 className="text-base font-semibold tracking-tight !text-white">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Stay updated with the latest features, tips, and insights on
                  privacy-first meeting intelligence.
                </p>
                <form className="mt-4 flex max-w-md gap-x-3">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-white/5 px-3 py-2 text-sm text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom border + copyright */}
          <div className="mt-8 border-t border-zinc-800 pt-6">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Action.IT. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default memo(Footer);
