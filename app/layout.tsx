import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cathy - A Chatbot for Main Street Renewal",
  description: "Cathy is a chatbot that is trained on our MSR website data.",
  openGraph: {
    images: [
      {
        url: "/cpk-8bit.png",
        width: 500,
        height: 500,
        alt: "Cathy - A Chatbot for Main Street Renewal",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
