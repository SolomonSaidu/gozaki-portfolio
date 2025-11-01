import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Gozaki Graphics | Creative Graphic Designer in Lokoja",
    template: "%s | Gozaki Graphics",
  },
  description:
    "Gozaki Graphics is a Lokoja-based creative studio specializing in flyers, logo design, visual branding, and digital graphics that help businesses stand out.",
  keywords: [
    "Gozaki Graphics",
    "graphic designer in Lokoja",
    "flyer design",
    "logo design",
    "branding",
    "visual identity",
    "poster design",
    "graphic design studio",
    "Nigeria",
  ],
  authors: [{ name: "Gozaki Graphics" }],
  openGraph: {
    title: "Gozaki Graphics | Lokoja-based Graphic Designer",
    description:
      "Professional graphic design and branding services — flyers, logos, and visuals crafted with creativity and precision.",
    url: "https://gozaki.vercel.app",
    siteName: "Gozaki Graphics",
    images: [
      {
        url: "https://gozaki.vercel.app/og-image.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Gozaki Graphics Visual Identity Designs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gozaki Graphics | Lokoja-based Graphic Designer",
    description:
      "Creative graphic designer offering branding, flyers, and visual identity solutions for brands and businesses in Lokoja, Nigeria.",
    images: ["https://gozaki.vercel.app/og-image.jpg"],
    creator: "@gozaki_graphics", // replace if you have one
  },
  icons: {
    icon: "/gg.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://gozaki.vercel.app" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gozaki Graphics",
              image: "https://gozaki.vercel.app/og-image.jpg",
              "@id": "https://gozaki.vercel.app",
              url: "https://gozaki.vercel.app",
              telephone: "+2348000000000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lokoja",
                addressLocality: "Lokoja",
                addressRegion: "Kogi State",
                addressCountry: "NG",
              },
              description:
                "Gozaki Graphics is a professional graphic design studio based in Lokoja, Nigeria. We create impactful branding, flyers, posters, and logo designs.",
              sameAs: [
                "https://www.instagram.com/gozaki_graphics",
                "https://twitter.com/gozaki_graphics",
                "https://facebook.com/gozaki_graphics",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// import "./globals.css";
// import Header from "./components/Header";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         {/* <Header /> */}
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }
