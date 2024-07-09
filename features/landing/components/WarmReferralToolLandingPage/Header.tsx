/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JFZoKncCwyc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';
import logo from '@/assets/images/logo-primary.png';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';

const ratio = 1741 / 323;
const logoHeight = 20;
const logoWidth = logoHeight * ratio;

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Graphlan"
              height={logoHeight}
              src={logo}
              width={logoWidth}
            />
          </Link>
          <span className="relative bottom-px text-xl text-zinc-400">/</span>
          <Link
            className="flex items-center gap-2 font-bold"
            href="/apps/ai-reader"
          >
            <BookIcon className="relative bottom-px h-5 w-5" />
            <span>AI Reader</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex" variant="outline">
            <Link href="/dashboard/apps/inbox">Sign In</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/dashboard/apps/inbox">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="sm:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4 sm:hidden">
                <Button asChild variant="outline">
                  <Link href="/dashboard/apps/inbox">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/dashboard/apps/inbox">
                    Get Started Free
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function ArrowRightIcon(
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
