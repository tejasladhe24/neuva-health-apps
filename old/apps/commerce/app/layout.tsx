import "@neuva-health/ui/globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { Navbar } from "@/components/layout/navbar";
import { WelcomeToast } from "@/components/welcome-toast";
import { geistSans } from "@neuva-health/ui/fonts";
import { ThemeProvider } from "@neuva-health/ui/components/provider/theme-provider";
import { getCart } from "@/lib/shopify";
import { Toaster } from "sonner";
import { baseUrl } from "@/lib/utils";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <ThemeProvider>
          <CartProvider cartPromise={cart}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />
              <WelcomeToast />
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
