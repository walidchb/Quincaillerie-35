import { Marhey } from "next/font/google";

import Script from "next/script"; // Import Script for Facebook Pixel
// import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] });
const marhey = Marhey({ subsets: ["arabic"] });

export const metadata = {
  title: "Quincaillerie-35",
};

import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ar" className="bg-white" suppressHydrationWarning>
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '740646168401365');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=740646168401365&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={marhey.className}>{children}</body>
    </html>
  );
}
