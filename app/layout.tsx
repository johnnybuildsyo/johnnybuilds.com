import { GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Image from "next/image"

const displayFont = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const shareImage = "https://johnnybuilds.com/screenshot.png"

export const metadata: Metadata = {
  title: "Johnny Builds",
  description: "Johnny builds web stuff for people in public",
  openGraph: {
    images: shareImage,
  },
  twitter: {
    images: shareImage,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased font-display`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col font-display">
            <main className="flex flex-col grow gap-4 row-start-2 justify-center items-center font-display py-12 z-10 relative">{children}</main>
            <div className="w-full relative aspect-[2/1] -mt-16 -mb-16 pointer-events-none z-0">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent z-10"></div>
              <Image src="/johnnybuilds-banner.png" alt="Johnny at work at his laptop, sparks flying everywhere" fill={true} className="object-cover pointer-events-none" />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  )
}
