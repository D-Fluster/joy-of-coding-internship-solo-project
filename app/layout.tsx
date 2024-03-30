///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Top-Level Component for Rendering the Root Layout:
// // APP > LAYOUT (TSX)

// Import global CSS file for site-wide utilization of Tailwind for styling:
import "./globals.css";

// Import components for optimized header and SEO population:
import Head from "next/head";
import type { Metadata } from "next";

// Import Google font for the standard text throughout:
import { Truculenta } from "next/font/google";
const truculenta = Truculenta({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Import top navigation bar component:
import TopNav from "./components/TopNav";

// Define global metadata:
export const metadata: Metadata = {
  title: "¡Todos Tus To-Dos!",
  description: "¡Tackle Todos Tus To-Dos! A Next.js App by LAdanimo",
  icons: {
    icon: "/favicon.ico",
  },
};

// Export the default function from this component for use throughout the program:
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set the global theme to DaisyUI's "Valentine"
    // See: https://daisyui.com/docs/themes/

    <html lang="en" data-theme="valentine">
      {/* Redefine the favicon, as only doing so one way or the other didn't always render properly: */}
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="/tackle-todos.png" />
      </Head>

      {/* Set the site-wide default font: */}
      <body className={truculenta.className}>
        <div>
          {/* Render the top navbar: */}
          <TopNav />

          {/* Render children components as requested: */}
          <div className="mx-40 my-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
