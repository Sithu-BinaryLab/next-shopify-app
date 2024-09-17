import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ReactQueryProvider from "../../../providers/ReactQueryProvider";
import { Toaster } from "@/components/atoms/toaster";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const translation = await getMessages();
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <title>Shopify- Your One-Stop Shop</title>
          <meta
            name="title"
            content="ecommerce, online shopping, electronics, clothing, home goods, deals"
          />
          <meta
            name="description"
            content="Shopify offers a wide range of high-quality products including electronics, clothing, and home goods. Discover the best deals and shop now!"
          />
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://y-shopify.vercel.app/" />
          <meta
            property="og:title"
            content="Shopify - ecommerce, online shopping, electronics, clothing, home goods, deals"
          />
          <meta
            property="og:description"
            content="Shopify offers a wide range of high-quality products including electronics, clothing, and home goods. Discover the best deals and shop now!"
          />
          <meta
            property="og:image"
            content="https://htmlemail.io/img/blog-shopify.jpg"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://y-shopify.vercel.app/"
          />
          <meta
            property="twitter:title"
            content="Shopify - ecommerce, online shopping, electronics, clothing, home goods, deals"
          />
          <meta
            property="twitter:description"
            content="Shopify offers a wide range of high-quality products including electronics, clothing, and home goods. Discover the best deals and shop now!"
          />
          <meta
            property="twitter:image"
            content="https://htmlemail.io/img/blog-shopify.jpg"
          />
        </head>
        <body className={inter.className}>
          <NextIntlClientProvider messages={translation}>
            <ReactQueryProvider>
              <Toaster />
              {children}
            </ReactQueryProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
