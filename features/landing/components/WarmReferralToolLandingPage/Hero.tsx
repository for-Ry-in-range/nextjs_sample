/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gvtKMNLZpGy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full pt-24 md:pt-24 lg:pt-32 xl:pt-48 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Find your warm referrals for sales & customer success, 100x faster.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover, close, and keep more customers with the most powerful lever on the planet: the warm referral. Powered by our AI Sales Assistant.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button asChild>
              <Link
                // className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/dashboard/apps/inbox"
              >
                Get Started Free &rarr;
              </Link>
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No credit card required
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[300px] pt-12">
          <img
            alt="Rocket"
            className="rounded-lg object-center"
            height={300}
            src="/rocket.png"
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
