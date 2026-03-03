import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title:
    "Swaranjali Sangeetha Kalaa Shaale | Carnatic & Vocal Music Classes in Mangalore",
  description:
    "Swaranjali Sangeetha Kalaa Shaale (R) offers professional Carnatic music classes in Mangalore. Vocal classes, Sastriya Sangeetha, Sugama Sangeetha, Bhajans, and Harmonium training for all age groups.",

  keywords: [
    "Swaranjali Sangeetha Kalaa Shaale",
    "Shilpa Rao",
    "Vidhushi Shilpa Rao",
    "Vidhushi Shilpa Rao Mangalore",
    "Sangeetha class in Mangalore",
    "Vocal class in Mangalore",
    "Carnatic music classes in Mangalore",
    "Sastriya Sangeetha in Mangalore",
    "Classical music academy Mangalore",
    "Bhajan classes in Mangalore",
    "Harmonium classes in Mangalore",
    "Sugama Sangeetha classes",
    "Music classes near Urva",
    "Music academy near me",
    "Carnatic vocal training Karnataka",
    "Classical singing classes Mangalore",
    "Music school in Mangalore",
    "Music teacher in Mangalore",
    "Children music classes Mangalore",
    "Devotional music classes",
    "Sangeetha teacher near Urva Marigudi",
  ],

  authors: [{ name: "Swaranjali Sangeetha Kalaa Shaale" }],
  creator: "Swaranjali Sangeetha Kalaa Shaale",
  publisher: "Swaranjali Sangeetha Kalaa Shaale",

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "https://www.yourdomain.com",
  },

  openGraph: {
    title: "Carnatic & Vocal Music Classes in Mangalore | Swaranjali Academy",
    description:
      "Join Swaranjali Sangeetha Kalaa Shaale for structured Carnatic, Vocal, Bhajan, and Harmonium classes in Mangalore.",
    url: "https://www.yourdomain.com",
    siteName: "Swaranjali Music Academy",
    images: [
      {
        url: "https://www.yourdomain.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Swaranjali Music Academy Mangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Swaranjali Music Academy | Carnatic Classes in Mangalore",
    description: "Professional Carnatic and Vocal music training in Mangalore.",
    images: ["https://www.yourdomain.com/logo.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="GOOGLE_VERIFICATION_CODE"
        />

        {/* SEO Bots */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data for Music School */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: "Swaranjali Sangeetha Kalaa Shaale",
              url: "https://www.yourdomain.com",
              logo: "https://www.yourdomain.com/logo.jpeg",
              description:
                "Carnatic and Vocal music academy in Mangalore offering Sastriya Sangeetha, Sugama Sangeetha, Bhajans and Harmonium training.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Urva Marigudi Road",
                addressLocality: "Mangalore",
                addressRegion: "Karnataka",
                postalCode: "575006",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9019101127",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Kannada"],
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.youtube.com/",
              ],
            }),
          }}
        />
      </head>

      <body className={`${playfair.className} bg-accent`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
