import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Learn Livmo - Your Complete Exit Readiness Academy",
  description: "Interactive learning platform for business owners preparing for exit. Whether you're exiting now or building value for later, everything you need is here.",
  keywords: ["M&A", "business exit", "SaaS metrics", "valuation", "sellability", "business readiness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-livmo-light-neutral text-livmo-body">
        {children}
      </body>
    </html>
  );
}

