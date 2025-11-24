import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/app/_styles/_globals.scss';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "SMART GOALS",
  description: "Place for my smart goals practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
