'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w9AZEZq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Cta() {
  const router = useRouter();

  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full bg-gray-800 py-12 md:py-24 lg:py-24 xl:py-24 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h2 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-5xl/none">
                Find your most relevant contacts for warm leads.
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-200 dark:text-zinc-100 md:text-xl">
                AI will analyze your target customers and your contacts 24/7 to find mutual connections.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <form className="flex space-x-2" onSubmit={handleSubmit}>
                <Input
                  className="max-w-lg flex-1 border-gray-900 bg-gray-600 text-white placeholder:text-gray-300 pl-4"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Button className="bg-white text-black" type="submit">
                  Get Started Free &rarr;
                </Button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Start free.{' '}
                <Link
                  className="text-white underline underline-offset-2"
                  href="https://graphlan.com/terms-of-use"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
