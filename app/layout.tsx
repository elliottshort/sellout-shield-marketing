import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "SelloutShield",
    template: "%s · SelloutShield",
  },
  description:
    "A free and open source Chrome extension that helps keep rolled-up YouTube channels from taking over your feed.",
  applicationName: "SelloutShield",
  icons: {
    icon: [{ url: "/img/icon.png", type: "image/png" }],
    apple: [{ url: "/img/icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "SelloutShield",
    description:
      "Opt out of private-equity rollups on YouTube. Hide blocked channels across YouTube surfaces and keep your feed human.",
    type: "website",
    images: [{ url: "/img/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SelloutShield",
    description:
      "A free and open source Chrome extension to hide rolled-up YouTube channels and keep your feed human.",
    images: ["/img/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
