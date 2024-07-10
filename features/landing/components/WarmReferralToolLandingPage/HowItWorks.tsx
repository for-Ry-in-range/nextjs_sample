/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MKMjSfrVUGN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { JSX, SVGProps } from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { ClipboardPaste, LucideBicepsFlexed, LucideClock, LucideHandshake } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 xl:max-w-6xl xl:gap-12">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Once we understand your ICP, we can start looking for ideal referrals right away using the AI tools we{"'"}e built.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <ClipboardPaste className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">Give us your ICP company & buyer title</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Copy and paste company names or websites from your leads list which provides us the type of customers you{"'"}re looking for.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <LucideBicepsFlexed className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">
                Connect strength signals
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI judges the strength of your referrals based on signals in your calendar, email, and LinkedIn.  The more you connect, the better signal we provide.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <LucideHandshake className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">
                Let our AI assistant find warm referrals
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI works in the background to find the best referrals for you and your team, and notifies you when they{"'"}re found.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <LucideClock className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">We continuously find new prospects, too</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI assistant works around the clock to look for similar looking companies as well, with warm referrals included.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function KeyboardIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 8h.01" />
      <path d="M12 12h.01" />
      <path d="M14 8h.01" />
      <path d="M16 12h.01" />
      <path d="M18 8h.01" />
      <path d="M6 8h.01" />
      <path d="M7 16h10" />
      <path d="M8 12h.01" />
      <rect height="16" rx="2" width="20" x="2" y="4" />
    </svg>
  );
}

function AtSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

function ThumbsUpIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
