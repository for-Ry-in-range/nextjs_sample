/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9CnW7nXWTU1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-400 sm:py-12">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 sm:flex-row sm:space-y-0 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              alt="Graphlan Inc"
              height={32}
              src="/favicon.png"
              width={32}
            />
            <span className="sr-only">Graphlan Inc</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              className="hover:text-gray-300"
              href="https://graphlan.com/terms-of-use"
            >
              Terms of Use
            </Link>
            <Link
              className="hover:text-gray-300"
              href="https://graphlan.com/privacy-policy"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link className="hover:text-gray-300" href="/dashboard/apps/inbox">
            Log In
          </Link>
          <Link className="hover:text-gray-300" href="/dashboard/apps/inbox">
            Get Started Free &rarr;
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <Link href="https://graphlan.com/">Graphlan</Link> Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
