import { Geist, Geist_Mono, Sixtyfour_Convergence, Inter_Tight, Orbitron, Sacramento  } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "Thyme",
  description: "",
  keywords: "",
  authors: [{ name: "DevHiv3" }],
  openGraph: {
    title: "",
    description: "",
    url: "",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "logo",
      },
    ],
  },
  twitter: {
    card: "",
    title: "",
    description: "Stay connected with real-time chat and social features.",
    images: [""],
  },
  icons: {
    icon: "/splash-screen-logo.webp",
    apple: "/splash-screen-logo.webp",
  }
};

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',  
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  subsets: ["latin"], 
});

const sixtyfourConvergence = Sixtyfour_Convergence({
  subsets: ["latin"],
  variable: "--font-sixtyfour-convergence",
});

const sacramento = Sacramento({
  weight: '400', // Regular weight for Sacramento
  subsets: ['latin'],
  variable: '--font-sacramento', // Custom CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts link in the <head> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Orbitron:wght@400..900&family=Sacramento&family=Sixtyfour+Convergence&display=swap" rel="stylesheet"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/@fontsource/fredoka-one/index.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
