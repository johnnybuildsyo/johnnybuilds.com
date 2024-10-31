import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"

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
            <main className="flex flex-col grow gap-4 row-start-2 justify-center items-center font-display py-12">{children}</main>
            <footer className="w-full text-center opacity-50 text-sm italicy py-8 border-t">footer, because you need a footer</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
