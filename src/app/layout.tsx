import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dharti Patel | Cloud & DevOps",
  description:
    "Cloud & DevOps student specializing in Azure, Docker, Kubernetes, CI/CD, and cloud-native infrastructure.",
  openGraph: {
    title: "Dharti Patel | Cloud & DevOps",
    description:
      "Cloud & DevOps student specializing in Azure, Docker, Kubernetes, CI/CD, and cloud-native infrastructure.",
    url: "https://dharti-patel.space",
    siteName: "Dharti Patel Portfolio",
    images: [
      {
        url: "https://dharti-patel.space/images/og-preview.png",
        width: 1280,
        height: 832,
        alt: "Dharti Patel Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharti Patel | Cloud & DevOps",
    description:
      "Cloud & DevOps student specializing in Azure, Docker, Kubernetes, CI/CD, and cloud-native infrastructure.",
    images: ["https://dharti-patel.space/images/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
