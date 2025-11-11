'use client';

import { useState, FormEvent } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Toast {
  type: 'success' | 'error';
  title: string;
  description: string;
}

export default function FinalCTASection(): JSX.Element {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!email) return;

    if (!validateEmail(email)) {
      setToast({
        type: 'error',
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
      });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setToast({
        type: 'success',
        title: "You're on the list!",
        description:
          "We'll notify you when action.it launches with your free month.",
      });
      setEmail('');
      setTimeout(() => {
        setIsSubmitted(false);
        setToast(null);
      }, 5000);
    } catch (error) {
      setToast({
        type: 'error',
        title: 'Something went wrong',
        description: 'Please try again later.',
      });
      setTimeout(() => setToast(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonText = (): string => {
    if (isSubmitted) return 'Added!';
    if (isSubmitting) return 'Adding...';
    return 'Get started';
  };

  return (
    <section className="py-24 sm:py-32" aria-labelledby="cta-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white"
          >
            Get Secure AI Meeting Notes today!
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Leaders in 100+ countries trust Action.IT to capture their meetings.
            <br />
            <span className="font-medium">Get started today. No credit card required.</span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for early access"
              required
              disabled={isSubmitting || isSubmitted}
              className="min-w-0 flex-1 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[var(--brand-cyan-primary,#00B4D8)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan-primary,#00B4D8)] disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
            />
            <Button
              type="submit"
              label={getButtonText()}
              variant="primary"
              size="md"
              disabled={isSubmitting || isSubmitted}
              ariaLabel="Submit email for early access"
            />
          </form>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div
            className={`fixed bottom-4 right-4 z-50 max-w-sm rounded-lg ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200'
            } p-4 shadow-lg ring-1 ${
              toast.type === 'success'
                ? 'ring-green-600/20 dark:ring-green-400/20'
                : 'ring-red-600/20 dark:ring-red-400/20'
            }`}
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {toast.type === 'success' ? (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{toast.title}</p>
                <p className="mt-1 text-sm opacity-90">{toast.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setToast(null)}
                className="flex-shrink-0 text-current opacity-50 hover:opacity-75"
                aria-label="Close notification"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

