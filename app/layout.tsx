import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autoescuela GMC 🚗🚘",
  description: "Escuela de manejo GMC.",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Autoescuela GMC 🚗🚘",
    url: "https://autoescuelagmc.com",
    type: "website",
    description:
      "Enseñando a conducir de manera segura y responsable desde 2021.",
    images: [
      "https://res.cloudinary.com/dg4wtx2sl/image/upload/v1743709693/logo_naqlcp.jpg",
    ],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
