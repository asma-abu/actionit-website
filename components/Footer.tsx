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
  { href: '/about', label: 'About Action.IT' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
] as const;

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-gray-900 dark:border-zinc-800 dark:bg-zinc-900">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-xl font-semibold text-white dark:text-white">
                  action.it
                </span>
              </div>
              <address className="not-italic text-sm text-zinc-600 dark:text-zinc-400">
                532 Montréal Rd #275
                <br />
                Ottawa, ON K1K 4R4, Canada
              </address>
            </div>

            <div>
              <h3 className="text-sm font-semibold !text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand/40 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Action.IT. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default memo(Footer);
