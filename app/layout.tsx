import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: `%s  | ${APP_NAME}`,
    default: `${APP_NAME}`
    },
    description : `${APP_DESCRIPTION}`,
    metadataBase: new URL(APP_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
             <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="light"
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
