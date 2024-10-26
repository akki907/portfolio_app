import './globals.css';

import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import classNames from 'classnames';
import { Anek_Bangla, Inter, Work_Sans } from 'next/font/google';

import { contactData } from '@/lib/data';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anekBangla = Anek_Bangla({
  subsets: ['latin'],
  variable: '--font-anek-bangla'
});
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['200', '300']
});

export const metadata = {
  title: {
    template: 'Akash Kumar | %s',
    default: 'Akash Kumar | FullStack Developer'
  },
  description: contactData.intro,
  metadataBase: new URL('https://portfolio-app-akash.vercel.app/'),
  openGraph: {
    title: {
      template: 'Akash Kumar | %s',
      default: 'Akash Kumar | FullStack Developer'
    },
    description: contactData.intro,
    url: 'https://portfolio-app-akash.vercel.app/',
    siteName: 'Akash Kumar',
    images: [
      {
        url: contactData.imageUrl,
        width: 1000,
        height: 1200
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${classNames(
          inter.variable,
          anekBangla.variable,
          workSans.variable
        )} overflow-y-scroll overflow-x-hidden bg-gray-50 text-gray-950 relative   dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
