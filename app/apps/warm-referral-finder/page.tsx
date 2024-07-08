import { Metadata } from 'next';
import { WarmReferralToolLandingPage } from '../../../features/landing/WarmReferralToolLandingPage';

export default WarmReferralToolLandingPage;

const title =
  "Warm Referral Finder - Find your strongest contacts to get you in the door for sales and partnerships - built on Graphlan";

const description =
  'Automatically identify get connected with the right people in any company, using your strongest contacts.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Graphlan Apps / Warm Referral Finder',
    url: 'https://graphlan.com/apps/warm-referral-finder',
    type: 'website',
  },
  twitter: {
    site: 'https://graphlan.com/apps/warm-referral-finder',
    card: 'summary_large_image',
    creator: '@graphlaninc',
    description,
    title,
  },
};
