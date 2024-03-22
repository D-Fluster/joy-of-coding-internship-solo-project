import type { Metadata } from "next";
import { Special_Elite, Truculenta } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import Head from "next/head";
// import Favicon from "react-favicon";
import "./favicon.ico";

import Breadcrumbs from "./components/Breadcrumbs";
import SideNav from "./components/SideNav";

export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export const truculenta = Truculenta({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Todos Tus To-Dos",
  description: "Personal Task Manager by LAdanimo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={truculenta.className}>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="p-6 md:overflow-y-auto md:p-12">
              <Breadcrumbs />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

/*// // COPIED FROM NEXT.JS LEARN DASHBOARD APP
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
*/
