import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "Ask Frank",
  description: "Chatbot for Wilder World",
  openGraph: {
    images: [
      {
        url: "/cpk-8bit.png",
        width: 500,
        height: 500,
        alt: "Frank Wilder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
