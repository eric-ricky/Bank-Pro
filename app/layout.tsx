import AppProviders from "@/components/providers/app-providers";
import ConvexClientProvider from "@/components/providers/convex-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bank Pro – Financial Solutions for Your Life",
  description:
    "Discover seamless banking with Bank Pro. Manage your finances effortlessly, access tailored financial products, and experience exceptional service. Secure, reliable, and always there for you.",
  metadataBase: new URL("https://bankpro.com/"),
  authors: {
    name: "Bank Pro",
  },
  openGraph: {
    title: "Bank Pro",
    description:
      "Financial solutions tailored for you. Manage your money with ease.",
    url: "https://bankpro.com/",
    siteName: "Bank Pro",
    images: "/assets/amex-logo.jpeg",
    type: "website",
  },
  keywords: ["banking", "finance", "financial solutions", "money management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#16A34A"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px rgb(46, 144, 250),0 0 5px rgb(46, 144, 250)"
          />

          <ConvexClientProvider>
            <AppProviders>{children}</AppProviders>
            <Toaster richColors />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
