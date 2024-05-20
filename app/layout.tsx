import "./globals.css";
import {Mulish } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { METADATA, contactData } from "@/lib/data";
import { Toaster } from "@/components/ui/toaster";

const fonts = Mulish({
  weight: ['400',],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata = {
//   title: METADATA.title,
//   description: METADATA.description,
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${fonts.className} overflow-y-scroll overflow-x-hidden bg-gray-50 text-gray-950 relative   dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
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
