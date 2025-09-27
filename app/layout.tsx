import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { DonateProvider } from "./components/DonateProvider";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Willka Yachay",
  description: "Willka Yachay",
};

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function RootLayout({
  children,
  props,
}: {
  children: React.ReactNode;
  props: Props;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={"w-full h-full " + garamond.className + " text-brown"}>
        <DonateProvider>
          <main className="w-full h-full">
            <Header />
            {children}
            <Footer />
          </main>
        </DonateProvider>
      </body>
    </html>
  );
}
